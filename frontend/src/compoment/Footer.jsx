import React from "react";

const Footer = () => {
  const year = new Date().getDate();
  return (
    <footer>
      <h3>My Website</h3>

      <nav id="n">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Services</a>
      </nav>

      <address>
        Email: hello@gmail.com <br />
        Phone: 1234567895
      </address>

      <p>&copy; 2026 My Website. All Rights Reserved.{year}</p>
    </footer>
  );
};

export default Footer;
