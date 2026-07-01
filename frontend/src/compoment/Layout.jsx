import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = ({cart}) => {
  return (
    <div>
      <Header cart={cart} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
