import React from "react";
import { useNavigate } from 'react-router-dom';

export default function BlogCard(props){
    const blog=props.blog;
    const navigate=useNavigate();
    return(
        <div onClick={() => navigate(`/blog/${blog._id}`)} style={{ border: '1px solid', margin: '10px', padding: '10px' }}>
            <h2>{blog.title}</h2>
            {/* <p>By {blog.author?.name} | {new Date(blog.createdAt).toLocaleDateString()}</p> */}
            <h3>By {blog.author?.email} | {new Date(blog.createdAt).toLocaleDateString()}</h3>
            <h4>views:{blog.views}</h4>
        </div>
    );
};

