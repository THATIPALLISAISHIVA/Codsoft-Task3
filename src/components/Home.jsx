
import React, { useEffect, useState } from 'react';
import BlogCard from '../components/BlogCard';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { Link } from 'react-router-dom';
import './fontfamily.css'

const HomePage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsCollection = collection(db, 'blogs');
        const blogSnapshot = await getDocs(blogsCollection);
        const blogList = blogSnapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            ...data,
            date: data.date ? data.date.toDate() : null // Handle undefined date
          };
        });
        setBlogs(blogList);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <p className='text-white'>Loading...</p>;
  }

  if (blogs.length === 0) {
    return <p className='text-white text-2xl font-semibold'>No blogs available. <Link to="/profile" className="text-blue-500">Add a blog</Link></p>;
  }

  return (
    <>
      <h1 className="text-4xl font-bold mb-8 text-white mt-4 mx-4 sm:text-center heading">
        Saishiva-Blogs
      </h1>
      <div className="grid gap-4 sm:grid-cols-1 justify-items-center md:grid-cols-3 lg:grid-cols-3 mx-4">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            id={blog.id}
            title={blog.title}
            author={blog.author}
            date={blog.date}
            excerpt={blog.excerpt.substring(0,200)}
            isDashboard={false}
          />
        ))}
      </div>
    </>
  );
};

export default HomePage;
