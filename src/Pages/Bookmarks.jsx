import { useEffect, useState } from "react";
import { deleteBlog, getBlogs } from "../Utils";
import BlogCard from "../Components/BlogCard";
import { Link } from "react-router-dom";


const Bookmarks = () => {
const [blogs,setBlogs]=useState([])
useEffect(()=>{
    const storedBlogs = getBlogs()
    setBlogs(storedBlogs)
},[])

const handleDelete=id=>{
	deleteBlog(id)
    const storedBlogs = getBlogs()
    setBlogs(storedBlogs)
}

 if(blogs.length<1)return<div className="min-h-[calc(100vh-146px)] flex flex-col justify-center items-center gap-y-2">
   <h3 className="text-xl font-bold text-secondary"> Nothing Added!</h3>
   <Link to='/blogs'><button className="btn btn-sm btn-primary">Blogs</button></Link>
 </div>

    return (
        <div className="grid px-4 lg:px-12 py-6 justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{blogs.map((blog)=><BlogCard
			key={blog.id}
			blog={blog}
            deletable={true}
            handleDelete={handleDelete}></BlogCard>)}
			
		</div>
    );
};

export default Bookmarks;