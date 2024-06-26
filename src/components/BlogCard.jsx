import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './fontfamily.css'

const BlogCard = ({ id, title, author, date, excerpt, onEdit, onDelete, isDashboard }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedBlog, setUpdatedBlog] = useState({ title, author, excerpt });
  const navigate = useNavigate();

  const handleEdit = () => {
    // Ensure all fields are filled before calling onEdit
    if (updatedBlog.title && updatedBlog.author && updatedBlog.excerpt) {
      onEdit(id, updatedBlog);
      setIsEditing(false);
    } else {
      console.error('All fields must be filled');
    }
  };

  const handleReadMore = () => {
    navigate(`/blogs/${id}`);
  };

  const formatDate = (date) => {
    return date ? new Date(date).toLocaleDateString() : 'Invalid date';
  };

  return (
    <div className="max-w-xs w-full bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <div className="p-4">
        {isEditing ? (
          <>
            <input
              type="text"
              value={updatedBlog.title}
              onChange={(e) => setUpdatedBlog({ ...updatedBlog, title: e.target.value })}
              className="border p-2 mb-2 w-full"
            />
            <input
              type="text"
              value={updatedBlog.author}
              onChange={(e) => setUpdatedBlog({ ...updatedBlog, author: e.target.value })}
              className="border p-2 mb-2 w-full"
            />
            <textarea
              value={updatedBlog.excerpt}
              onChange={(e) => setUpdatedBlog({ ...updatedBlog, excerpt: e.target.value })}
              className="border p-2 mb-2 w-full"
            ></textarea>
            <button onClick={handleEdit} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Save</button>
            <button onClick={() => setIsEditing(false)} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-2 heading">{title}</h2>
            <p className="text-gray-700 mb-4">{excerpt}...</p>
            <div className="flex justify-between items-center mb-4">
              <div className="text-sm text-gray-600">
                <p className="font-semibold">{author}</p>
              </div>
              <div className="text-sm text-gray-600">
                <p>{formatDate(date)}</p>
              </div>
            </div>
            <button onClick={handleReadMore} className="bg-blue-500 text-white px-4 py-2 rounded w-full">Read More</button>
            {isDashboard && (
              <div className="flex justify-end mt-4">
                <button onClick={() => setIsEditing(true)} className="text-blue-500 text-xl flex items-center mr-2">
                  <FaEdit />
                </button>
                <button onClick={() => onDelete(id)} className="text-red-500 text-xl flex items-center">
                  <FaTrash />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default BlogCard;
