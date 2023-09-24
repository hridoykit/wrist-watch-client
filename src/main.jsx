import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import AddWatch from "./components/AddWatch.jsx";
import UpdateWatch from "./components/UpdateWatch.jsx";
import WatchDetails from "./components/WatchDetails.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => fetch("http://localhost:5000/watches"),
  },
  { path: "addWatch", element: <AddWatch /> },
  { path: "watchDetails", element: <WatchDetails /> },
  {
    path: "updateWatch/:id",
    element: <UpdateWatch />,
    loader: ({ params }) => fetch(`http://localhost:5000/watches/${params.id}`),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
