import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Cart from "./components/Cart";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children : [
      {
        path : "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path : '/contact',
        element : <Contact/>
      },
      {
        path : '/cart',
        element : <Cart/>
      }
    ],
    errorElement : <Error/>
  },
]);

const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(<RouterProvider router={appRouter} />);
