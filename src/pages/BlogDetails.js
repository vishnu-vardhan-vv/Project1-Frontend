import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function BlogDetails(){
    const [blog,setBlog]=useState(null);
    const {id}=useParams();

    useEffect(()=>{
        const fetch=async()=>{
            try{
                const res=await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/blogs/${id}`);
                setBlog(res.data);
            }
            catch(error){
                console.log('fetching error');
            }
            
        };
        fetch();
    },[id]);
    if (!blog) return <div>Loading...</div>;
    return (
        <div>
            <h5>{blog.title}</h5>
            {/* <p>By {blog.author.name}</p> */}
            <h5>By {blog.author.email}</h5>            
            <h3 dangerouslySetInnerHTML={{ __html: blog.content }} />
            <hr/>
            <h6>views:{blog.views}</h6>
            <h6>category:{blog.category}</h6>
            <h6>tags:{blog.tags}</h6>
        </div>
    );
}


// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const BlogDetails = () => {
//   const { id } = useParams();
//   const [blog, setBlog] = useState(null);

//   useEffect(() => {
//     axios.get(`/api/blogs/${id}`).then(res => setBlog(res.data));
//   }, [id]);

//   if (!blog) return <div>Loading...</div>;

//   return (
//     <div>
//       <h1>{blog.title}</h1>
//       <p>By {blog.author.name}</p>
//       <div dangerouslySetInnerHTML={{ __html: blog.content }} />
//     </div>
//   );
// };

// export default BlogDetails;
