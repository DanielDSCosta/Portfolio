import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
  <div className="footer">
    <a href="https://github.com/DanielDSCosta" target="_blank" rel="noreferrer" className="social-icon">
      <FaGithub size={40} />
    </a>
    <a href="https://twitter.com/Arwasoff" target="_blank" rel="noreferrer" className="social-icon">
      <FaTwitter size={40} />
    </a>
    <a href="https://www.linkedin.com/in/daniel-da-silva-costa-b0b0a3171/" target="_blank" rel="noreferrer" className="social-icon">
      <FaLinkedin size={40} />
    </a>
  </div>
);

export default Footer;