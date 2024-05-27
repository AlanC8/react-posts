import PostIdPage from "../components/PostIdPage";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from '../pages/Error'
import Login from "../pages/Login";
import { Navigate } from "react-router-dom";
export const PrivateRoutes = [
    { path: "/about", element: <About />, exact: true },
    { path: "/posts", element: <Posts />, exact: true },
    { path: "/posts/:id", element: <PostIdPage />, exact: true },
    { path: "/", element: <Error />, exact: true },
    { path: "*", element: <Navigate to='/posts' />, exact: true },
  ];

export const PublicRoutes = [
    { path: "/login", element: <Login />, exact: true },
    { path: "*", element: <Navigate to='/login' />, exact: true },
]