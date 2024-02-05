import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import About from "../Pages/About";

const Router = createBrowserRouter([
    {
        path : '/',
        element : <Layout></Layout>,
        children : [
            {
                index : true,
                element : <Home></Home>
            },
            {
                path: '/about',
                element : <About/>
            },
            // {
            //     path: '/deep-cleaning',
            //     element : <About/>
            // },
            // {
            //     path: '/deep-cleaning',
            //     element : <About/>
            // },
            // {
            //     path: '/endOfLease-cleaning',
            //     element : <About/>
            // },
            // {
            //     path: '/carper-cleaning',
            //     element : <About/>
            // }
        ]
    }
])

export default Router;
