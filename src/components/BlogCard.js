import React from "react";
import { useNavigate } from 'react-router-dom';

export default function BlogCard(props){
    const blog=props.blog;
    const navigate=useNavigate();
    return(
        <div onClick={() => navigate(`/blog/${blog._id}`)} style={{ border: '1px solid', margin: '10px', padding: '10px' }}>
            <h3>{blog.title}</h3>
            <h4>By {blog.author?.email} | {new Date(blog.createdAt).toLocaleDateString()}</h4>
            <h5>views:{blog.views}</h5>
        </div>
    );
};

