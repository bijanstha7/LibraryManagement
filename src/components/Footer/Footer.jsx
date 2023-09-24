import React from "react";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return <footer>{`Copyright © Bijan Shrestha -- Library Management System ${year}`}</footer>;
};

export default Footer;