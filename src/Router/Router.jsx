import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import DeepCleaning from "../Components/DetailsPages/DeepCleaning";
import EndOFLease from "../Components/DetailsPages/EndOFLease";
import CerpetCleaning from "../Components/DetailsPages/CerpetCleaning";
import Gallery from "../Components/Gallery";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/deep-cleaning",
        element: <DeepCleaning />,
      },
      {
        path: "/endOfLease-cleaning",
        element: <EndOFLease />,
      },
      {
        path: "/carpet-cleaning",
        element: <CerpetCleaning />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
    ],
  },
]);

export default Router;
