import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./compoment/Layout";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/About",
          element: <About />,
        },
        {
          path: "/Products",
          element: <Products />,
        },
        {
          path: "/Contact",
          element: <Contact />,
        },
        {
           path: "/cart",
          element: <Cart />,
        },
        {
          path: "/signin",
          element: <SignIn />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;