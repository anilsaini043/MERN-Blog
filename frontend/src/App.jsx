import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import YourBlog from './pages/YourBlog';
import Comments from './pages/Comments';
import CreateBlog from './pages/CreateBlog';

const router = createBrowserRouter([
  {
    path: "/",
    element: <><Navbar /><Home /></>
  },
  {
    path: "/about",
    element: <><Navbar /><About /></>
  },
  {
    path: "/blogs",
    element: <><Navbar /><Blogs /></>
  },
  {
    path: "/login",
    element: <><Navbar /><Login /></>
  },
  {
    path: "/signup",
    element: <><Navbar /><Signup /></>
  },
  {
    path: "/dashboard",
    element: <><Navbar /><Dashboard /></>,
    children:[
      {
        path:"profile",
        element: <Profile />
      },
      {
        path:"your-blog",
        element: <YourBlog />
      },
      {
        path:"comments",
        element: <Comments />
      },
      {
        path:"write-blog",
        element: <CreateBlog />
      }
    ]
  }
])

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App