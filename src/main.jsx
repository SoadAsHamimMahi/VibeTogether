import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import MainLayout from "./MainLayout/MainLayout";
import Video from "./Pages/Video";
import Group from "./Pages/Group";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,

    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/video',
        element: <Video></Video>,
      },
      {
        path: '/group',
        element: <Group/>,
      },
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);