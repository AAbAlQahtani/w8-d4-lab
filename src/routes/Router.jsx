import React from 'react'
import Nav from "../components/Nav";
import {
    createBrowserRouter,
    RouterProvider,
    Outlet
} from "react-router-dom";

import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
// import Footer from '../components/Footer';
import AdminPage from '../pages/AdminPage';
import UserPage from '../pages/UserPage';

function Layout() {
    return (

        <>
            <Nav />
            <Outlet />
            {/* <Footer /> */}
        </>

    );


}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/admin", element: <AdminPage /> },
            { path: "/user", element: <UserPage /> },



        ],
    },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
]);


export default function Router() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

