import React from "react";
import { MdAlternateEmail } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="paddingSide">
      <div className=" footerContent">
        <div className="fitems">
          <div className="heading">
            <h5>Christmas Gift</h5>
          </div>
          <p>I Sent a Gift and It gives happiness</p>
        </div>

        <div className="fitems">
          <div className="heading">
            <h5>Our Services</h5>
          </div>
          <p>Pricing</p>
          <p>Discounts</p>
          <p>Shipping Mode</p>
        </div>

        <div className="fitems">
          <div className="heading">
            <h5>Our Company</h5>
          </div>
          <p>Blog</p>
          <p>About Us</p>
          <p>Our Mission</p>
        </div>
        <div className="fitems">
          <div className="heading">
            <h5>Contact Us</h5>
          </div>
          <div className="spflex">
            <p>
              <MdAlternateEmail />
            </p>
            <p>
              <CiFacebook />
            </p>
            <p>
              <CiInstagram />
            </p>
            <p>
              <FaXTwitter />
            </p>
          </div>
        </div>
      </div>
      <p className="copyright">&copy; Abbas Gawali All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
