import "./index.css";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="box_icon">
      <div className="wrapper">
        <div className="button">
          <div className="icon">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i>
                <FaFacebook />
              </i>
              <p className="Facebook">Facebook</p>
            </a>
          </div>
        </div>
        <div className="button">
          <div className="icon">
            <a href="https://instagram.com/familialondonosilleteros?igshid=MmJiY2I4NDBkZg=="
              target="_blank"
              rel="noopener noreferrer">
              <i>
                <FaInstagram />
              </i>
              <p className="Instagram">Instagram</p>
            </a>
          </div>
        </div>
        <div className="button">
          <div className="icon">
            <a href="https://www.facebook.com"
              target="_blank"
              rel="https://instagram.com/familialondonosilleteros?igshid=MmJiY2I4NDBkZg== ">
              <i>
                <FaTwitter />
              </i>
              <p className="Twitter"> Twitter</p>
            </a>
          </div>
        </div>
        <div className="button">
          <div className="icon">
            <a href="https://www.tiktok.com/es/"
              target="_blank"
              rel="noopener noreferrer">
              <i>
                <FaTiktok />
              </i>
            </a>
            <p className="Tiktok">Tiktok</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
