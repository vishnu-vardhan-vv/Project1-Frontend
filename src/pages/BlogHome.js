import React, { useState, useEffect } from 'react';
import BlogCard from '../components/BlogCard';
import axios from 'axios';
import  '../components/styles/BlogHome.css';

export default function BlogHome(){
    const [blogs, setBlogs] = useState([]);
    const [page, setPage] = useState(1);
    const [sort, setSort] = useState('latest');
    const [fetched, setFetched] = useState(false);
    const [cnt,setCnt]=useState(0);

    const handleChange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        if(name==sort){
            setSort(name);
            setPage(1);
        }
        else{
            const newName=(sort=='latest'?'trending':'latest');
            setSort(newName);
            setPage(1);
            setBlogs([]);

        }
    }

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/blogs?page=${page}&sort=${sort}`);
                setBlogs((prev) => {
                    // return [...prev, ...res.data];
                    return res.data;
                });
                // const count = await Blog.countDocuments();
                // setCnt(count);
                // setFetched(true);
            } 
            catch (error) {
                console.log('error fetching blogs');
                // console.error("Error fetching blogs:", error);
            }
        };
        // if (!fetched || page > 1) {
        //     fetchBlogs();
        // }
        fetchBlogs();
    }, [page, sort]);



    return(
        <div >
            {/* <button  name='latest'onClick={()=>{setSort('latest');setPage(1);setBlogs([]);}}>Latest</button>
            <button  name='trending'onClick={()=>{setSort('trending');setPage(1);setBlogs([]);}}>Trending</button> */}
            <a href='/blog/create' className='button'>Add Blog</a>
            <div className='BlogHome'>
                <button  name='latest' className='button' onClick={handleChange}>Latest</button>
                <button  name='trending' className='button' onClick={handleChange}>Trending</button>
                <button  className='button' onClick={() => setPage((p)=>{
                    if(p>1){
                        return p-1;
                    }
                    return p;
                })}>Prev Page</button>
            </div>
            
            {blogs.map((blog)=> <BlogCard key={blog._id} blog={blog}/>)}            
            {/* <button  onClick={() => setPage(p => p + 1)}>Load More</button> */}
            <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <button  className='button' onClick={() => setPage((p)=>{return p+1;})}>Next Page</button>
            </div>
            
        </div>
    );
}




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import BlogCard from '../components/BlogCard';

// const HomePage = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [page, setPage] = useState(1);
//   const [sort, setSort] = useState('latest');

//   useEffect(() => {
//     axios.get(`/api/blogs?page=${page}&sort=${sort}`).then(res => {
//       setBlogs(prev => [...prev, ...res.data]);
//     });
//   }, [page, sort]);

//   return (
//     <div>
//       <button onClick={() => { setSort('latest'); setPage(1); setBlogs([]); }}>Latest</button>
//       <button onClick={() => { setSort('trending'); setPage(1); setBlogs([]); }}>Trending</button>

//       {blogs.map(blog => <BlogCard key={blog._id} blog={blog} />)}
//       <button onClick={() => setPage(p => p + 1)}>Load More</button>
//     </div>
//   );
// };

// export default HomePage;
