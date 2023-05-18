import "./index.css";
import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="box_icon">
      <div className="wrapper">
        <div className="button">
          <div className="icon">
            <a
              href="https://www.facebook.com/profile.php?id=100087185991379"
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
            <a href="http://web.whatsapp.com/send?phone=3004219801"
              target="_blank"
             >
              <i>
                <FaWhatsapp />
              </i>
              <p className="Whatsapp"> WhatsApp</p>
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
