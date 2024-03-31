import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Blogs from './Pages/Blogs.jsx'
import Bookmarks from './Pages/Bookmarks.jsx'
import MainLayout from './layouts/MainLayout';
import ErrorPage from './Pages/ErrorPage.jsx'


const router= createBrowserRouter([
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
      }
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
