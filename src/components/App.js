import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./HomePage.js";
import SideBar from "./Sidebar.js";
import Library from "./Library.js";
import Search from "./Search.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SideBar />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/library",
        element: <Library />,
      },
      {
        path: "/search",
        element: <Search />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
