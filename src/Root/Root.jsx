import { createBrowserRouter } from "react-router-dom";


import Content from "../Components/Content.jsx";
import Author from "../Components/Author.jsx";
import MainLayout from "../layouts/MainLayout.jsx";
import ErrorPage from './../Pages/ErrorPage';
import Home from "../Pages/Home.jsx";
import Blogs from "../Pages/Blogs.jsx";
import Bookmarks from './../Pages/Bookmarks';
import Blog from "../Pages/Blog.jsx";



export const router= createBrowserRouter([
    {
      path:'/',
      element:<MainLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:'/',
          element:<Home/>
        }
        ,
        {
          path:'/blogs',
          element:<Blogs/>,
          loader:()=>fetch('https://dev.to/api/articles?per_page=20&top=7'),
        },
        {
          path:'/bookmarks',
          element:<Bookmarks/>
        },
        {
          path:'/blog/:id',
          element:<Blog></Blog>,
          loader:({params})=>fetch(`https://dev.to/api/articles/${params.id}`),
          children:[
            {
                index:true,
                element:<Content/>
            },
            {
                path:'author',
                element:<Author/>
            } ,
                   ]
        }
      ]
    },
    
  ])
