import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./compoment/Layout";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";

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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;