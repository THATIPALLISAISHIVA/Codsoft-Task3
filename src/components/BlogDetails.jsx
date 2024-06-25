import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { db, auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { FaHeart, FaRegHeart, FaShareAlt, FaReply, FaTrash, FaCopy } from 'react-icons/fa';
import './fontfamily.css'
import ReactMarkdown from 'react-markdown';

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [user, setUser] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    const fetchBlog = async () => {
      const blogRef = doc(db, 'blogs', id);
      const blogSnap = await getDoc(blogRef);
      if (blogSnap.exists()) {
        const blogData = blogSnap.data();
        setBlog({ id: blogSnap.id, ...blogData });
        setComments(blogData.comments || []);
        setLikes(blogData.likes?.length || 0);
        setIsLiked(blogData.likes?.includes(user?.uid) || false);
      } else {
        console.log('No such document!');
      }
    };

    fetchBlog();
  }, [id, user]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const formatDate = (date) => {
    return date ? new Date(date.seconds * 1000).toLocaleDateString() : 'Invalid date';
  };

  const handleLike = async () => {
    if (!user) {
      alert('Please sign up or log in to like this blog.');
      return;
    }

    const blogRef = doc(db, 'blogs', id);
    try {
      if (isLiked) {
        await updateDoc(blogRef, {
          likes: arrayRemove(user.uid)
        });
        setIsLiked(false);
        setLikes(likes - 1);
      } else {
        await updateDoc(blogRef, {
          likes: arrayUnion(user.uid)
        });
        setIsLiked(true);
        setLikes(likes + 1);
      }
    } catch (error) {
      console.error("Error updating likes: ", error);
      alert('Error updating likes. Please try again.');
    }
  };

  const handleAddComment = async (parentCommentId = null) => {
    if (!user) {
      alert('Please sign up or log in to comment.');
      return;
    }

    if (!comment) return;

    const blogRef = doc(db, 'blogs', id);
    const newComment = { id: Date.now(), text: comment, author: user.email, date: new Date(), likes: [], replies: [] };

    try {
      if (parentCommentId) {
        const updatedComments = comments.map((comment) => {
          if (comment.id === parentCommentId) {
            return {
              ...comment,
              replies: [...comment.replies, newComment],
            };
          }
          return comment;
        });
        await updateDoc(blogRef, {
          comments: updatedComments
        });
        setComments(updatedComments);
      } else {
        await updateDoc(blogRef, {
          comments: arrayUnion(newComment)
        });
        setComments([...comments, newComment]);
      }
      setComment('');
    } catch (error) {
      console.error("Error adding comment: ", error);
      alert('Error adding comment. Please try again.');
    }
  };

  const handleDeleteComment = async (commentId, parentCommentId = null) => {
    if (!user) {
      alert('Please sign up or log in to delete a comment.');
      return;
    }

    const blogRef = doc(db, 'blogs', id);
    try {
      if (parentCommentId) {
        const updatedComments = comments.map((comment) => {
          if (comment.id === parentCommentId) {
            return {
              ...comment,
              replies: comment.replies.filter(reply => reply.id !== commentId),
            };
          }
          return comment;
        });
        await updateDoc(blogRef, {
          comments: updatedComments
        });
        setComments(updatedComments);
      } else {
        const updatedComments = comments.filter(comment => comment.id !== commentId);
        await updateDoc(blogRef, {
          comments: updatedComments
        });
        setComments(updatedComments);
      }
    } catch (error) {
      console.error("Error deleting comment: ", error);
      alert('Error deleting comment. Please try again.');
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blog.title,
        text: blog.excerpt,
        url: window.location.href,
      })
      .catch((error) => console.error("Error sharing: ", error));
    } else {
      alert("Your browser does not support the share feature. Please copy the link manually.");
    }
  };

  const handleCopy = () => {
    if (!blog) {
      alert('Blog content not available.');
      return;
    }

    const blogContent = `
      Title: ${blog.title || 'No title'}\n
      Author: ${blog.author || 'No author'}\n
      Date: ${formatDate(blog.date) || 'No date'}\n\n
      ${blog.excerpt || ''}\n\n
      ${blog.content || ''}
    `;
    navigator.clipboard.writeText(blogContent)
      .then(() => {
        alert('Blog content copied to clipboard!');
      })
      .catch((error) => {
        console.error("Error copying text: ", error);
        alert('Failed to copy text.');
      });
  };

  if (!blog) {
    return <div>Loading...</div>;
  }

  const renderComments = (comments, parentCommentId = null) => {
    return comments.map((comment, index) => (
      <div key={index} className="border p-2 mb-2 ml-4">
        <p className="font-semibold heading">{comment.author}</p>
        <p>{comment.text}</p>
        <div className="flex justify-between items-center text-sm text-gray-600">
          <p>{formatDate(comment.date)}</p>
          <div className="flex items-center">
            <button onClick={() => setComment(`@${comment.author} `)} className="text-blue-500 text-xl flex items-center mr-2">
              <FaReply />
            </button>
            {comment.author === user?.email && (
              <button onClick={() => handleDeleteComment(comment.id, parentCommentId)} className="text-gray-500 text-xl flex items-center">
                <FaTrash />
              </button>
            )}
          </div>
        </div>
        {comment.replies && renderComments(comment.replies, comment.id)}
        {parentCommentId && (
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a reply..."
            className="border p-2 mb-2 w-full mt-2"
          ></textarea>
        )}
        {parentCommentId && (
          <button onClick={() => handleAddComment(comment.id)} className="bg-blue-500 text-white px-4 py-2 rounded">
            Add Reply
          </button>
        )}
      </div>
    ));
  };

  return (
    <div className="flex justify-center  min-h-screen ">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-md overflow-hidden mt-8 mx-4 p-4">
        <h2 className="text-4xl font-bold mb-4 heading">{blog.title}</h2>
        <p className="text-gray-500 mb-4 ">{`By ${blog.author} on ${formatDate(blog.date)}`}</p>
        <p className="text-gray-700 mb-4 text-xl  md:text-2xl"><ReactMarkdown>{blog.excerpt}</ReactMarkdown></p>
        <div className="flex items-center mb-4">
          <button onClick={handleLike} className="text-red-500 text-xl flex items-center">
            {isLiked ? <FaHeart /> : <FaRegHeart />}
            <span className="ml-2">{likes}</span>
          </button>
          <button onClick={handleShare} className="text-blue-500 text-xl flex items-center ml-4">
            <FaShareAlt />
            <span className="ml-2">Share</span>
          </button>
          <button onClick={handleCopy} className="text-green-500 text-xl flex items-center ml-4">
            <FaCopy />
            <span className="ml-2">Copy</span>
          </button>
        </div>
        <div className="mb-4">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment..."
            className="border p-2 mb-2 w-full"
          ></textarea>
          <button onClick={() => handleAddComment()} className="bg-blue-500 text-white px-4 py-2 rounded">
            Add Comment
          </button>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2 heading">Comments</h3>
          {comments.length > 0 ? (
            renderComments(comments)
          ) : (
            <p className='text-xl'>No comments yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
