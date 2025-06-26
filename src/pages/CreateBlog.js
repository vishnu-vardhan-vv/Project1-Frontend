import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


// src/pages/CreateBlog.js
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import BlogForm from '../components/BlogForm';
// import axios from '../axiosConfig'; // axios instance with withCredentials: true

// const CreateBlog = () => {
//   const navigate = useNavigate();

//   const handleSubmit = async (formData) => {
//     try {
//       const res = await axios.post('/blogs', formData); // No need for token headers
//       alert('Blog posted!');
//       navigate(`/blog/${res.data._id}`);
//     } catch (err) {
//       alert(err.response?.data?.message || 'Unauthorized or error while posting.');
//     }
//   };

//   return (
//     <div>
//       <h2>Create a New Blog</h2>
//       <BlogForm onSubmit={handleSubmit} />
//     </div>
//   );
// };

// export default CreateBlog;



export default function CreateBlog(){
    const [form,setForm]=useState({title:'', content: '', category: '', tags: '' });
    const navigate = useNavigate();

    const handleChange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setForm((prev)=>({...prev,[name]:value}));
    };

    const handleSubmit=async(event)=>{
        event.preventDefault();
        // const token = localStorage.getItem('token');
        try {
            const res=await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/blogs`,form,{withCredentials:true});
            alert('Blog posted!');
            navigate(`/blog/${res.data._id}`);
        } catch (error) {
            console.log(error);
            alert('Unauthorized or Error!');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder='Title' name='title' onChange={handleChange}/>
            <textarea placeholder='Content' name='content' onChange={handleChange}/>
            <input placeholder='Category' name='category' onChange={handleChange}/>
            <input placeholder='Tags(comma separated)' name='tags' onChange={handleChange}/>
            <button type="submit">Submit</button>
        </form>
    );
}



// import React, { useState } from 'react';
// import axios from 'axios';

// const CreateBlog = () => {
//   const [form, setForm] = useState({ title: '', content: '', category: '', tags: '' });

//   const handleSubmit = async () => {
    // const token = localStorage.getItem('token');
    // try {
    //   await axios.post('/api/blogs', { ...form, tags: form.tags.split(',') }, {
    //     headers: { Authorization: `Bearer ${token}` }
    //   });
    //   alert('Blog posted!');
    // } catch (err) {
    //   alert('Unauthorized or Error!');
    // }
//   };

//   return (
//     <div>
//       <input placeholder="Title" onChange={e => setForm({ ...form, title: e.target.value })} />
//       <textarea placeholder="Content" onChange={e => setForm({ ...form, content: e.target.value })} />
//       <input placeholder="Category" onChange={e => setForm({ ...form, category: e.target.value })} />
//       <input placeholder="Tags (comma separated)" onChange={e => setForm({ ...form, tags: e.target.value })} />
//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );
// };

// export default CreateBlog;
