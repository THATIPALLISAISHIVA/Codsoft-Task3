import React, { useEffect, useState } from 'react';
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc, query, where } from 'firebase/firestore';
import { db, auth } from '../firebase';
import BlogCard from '../components/BlogCard';
import { onAuthStateChanged } from 'firebase/auth';
import './fontfamily.css'

const Profile = () => {
  const [user, setUser] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({ title: '', author: '', excerpt: '' });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        fetchUserBlogs(user.uid);
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchUserBlogs = async (userId) => {
    const q = query(collection(db, 'blogs'), where('userId', '==', userId));
    const blogSnapshot = await getDocs(q);
    const blogList = blogSnapshot.docs.map(doc => {
      const data = doc.data();
      return { id: doc.id, ...data, date: data.date ? data.date.toDate() : null };
    });
    setBlogs(blogList);
  };

  const handleAddBlog = async () => {
    if (!newBlog.title || !newBlog.author || !newBlog.excerpt) return;
    const blogData = {
      ...newBlog,
      userId: user.uid,
      date: new Date(),
    };
    await addDoc(collection(db, 'blogs'), blogData);
    fetchUserBlogs(user.uid);
    setNewBlog({ title: '', author: '', excerpt: '' });
  };

  const handleEditBlog = async (id, updatedBlog) => {
    const blogRef = doc(db, 'blogs', id);
    const blogData = {
      ...updatedBlog,
      date: new Date(),
    };
    await updateDoc(blogRef, blogData);
    fetchUserBlogs(user.uid);
  };

  const handleDeleteBlog = async (id) => {
    const blogRef = doc(db, 'blogs', id);
    await deleteDoc(blogRef);
    fetchUserBlogs(user.uid);
  };

  const getDisplayName = (email) => {
    return email ? email.split('@')[0] : 'User';
  };

  const getAuthorLevel = (blogCount) => {
    if (blogCount <= 5) return 'Beginner';
    if (blogCount <= 15) return 'Intermediate';
    return 'Expert';
  };

  if (!user) {
    return <p>Loading...</p>;
  }

  const authorLevel = getAuthorLevel(blogs.length);

  return (
    <div className="p-4">
      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <h1 className="text-4xl font-bold mb-2 heading">{`Welcome, ${getDisplayName(user.email)}!`}</h1>
        <span className='heading text-xl font-semibold'>Level:</span> <span className='text-xl'>{authorLevel}</span>
        <br />
        <span className='heading text-xl font-semibold'>Blogs Contributed: </span> <span className='text-xl'>{blogs.length}</span>
      </div>

      <div className="bg-white rounded-lg shadow-md p-4 mb-4">
        <h2 className="text-3xl font-bold mb-2 heading">Add New Blog</h2>
        <input
          type="text"
          placeholder="Title"
          value={newBlog.title}
          onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          placeholder="Author"
          value={newBlog.author}
          onChange={(e) => setNewBlog({ ...newBlog, author: e.target.value })}
          className="border p-2 mb-2 w-full"
        />
        <textarea
          placeholder="Content"
          value={newBlog.excerpt}
          onChange={(e) => setNewBlog({ ...newBlog, excerpt: e.target.value })}
          className="border p-2 mb-2 w-full"
        ></textarea>
        <button onClick={handleAddBlog} className="bg-blue-500 text-white px-4 py-2 rounded">Add Blog</button>
      </div>

      {blogs.length === 0 ? (
        <p className='text-white text-xl font-semibold'>No blogs available. Add a blog above.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              title={blog.title}
              author={blog.author}
              date={blog.date}
              excerpt={blog.excerpt.substring(0, 200)}
              isDashboard={true}
              onEdit={(updatedBlog) => handleEditBlog(blog.id, updatedBlog)}
              onDelete={() => handleDeleteBlog(blog.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Profile;
