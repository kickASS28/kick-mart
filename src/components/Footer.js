/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import { NavLink } from "react-router-dom";

import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGooglePlus,
  FaInstagram,
  FaBalanceScaleLeft,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-left col-md-4 col-sm-6">
        <p className="about">
          <span> About us</span> We are customer-centric, highly collaborative,
          and the best in class. We provide high-quality products and services
          at your doorstep. We believe in mutual growth and trust.
        </p>
        <div className="icons">
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaLinkedin />
          </a>
          <a href="#">
            <FaGooglePlus />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="footer-center col-md-4 col-sm-6">
        <div>
          <FaMapMarkerAlt size={22} color="#ffffff" />
          <p>
            <span> 1074/3A/1, Devane Colony</span> Kolhapur, India
          </p>
        </div>
        <div>
          <FaPhone size={22} color="#ffffff" />
          <p> (+91) 9156 123 997</p>
        </div>
        <div>
          <FaEnvelope size={22} color="#ffffff" />
          <p>
            <a
              href="mailto:kick.development.noreply@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              kick.development.noreply@gmail.com
            </a>
          </p>
        </div>
      </div>
      <div className="footer-right col-md-4 col-sm-6">
        <h2 className="brand">
          {" "}
          Kick-Mart Corp.
          <span>
            {" "}
            <FaBalanceScaleLeft size={45} />
          </span>
        </h2>
        <p className="menu">
          <NavLink to="/products">{" Home "}</NavLink> |
          <NavLink to="/abut">{" About "}</NavLink> |
          <NavLink to="/search">{" Explore "}</NavLink>
        </p>
        <p className="name"> Kick-Mart Corp. &copy; {year}</p>
      </div>
    </footer>
  );
};

export default Footer;
