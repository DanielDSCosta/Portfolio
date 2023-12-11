import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
  <div className="footer">
    <a href="https://www.github.com/yourusername" target="_blank" rel="noreferrer" className="social-icon">
      <FaGithub size={40} />
    </a>
    <a href="https://www.twitter.com/yourusername" target="_blank" rel="noreferrer" className="social-icon">
      <FaTwitter size={40} />
    </a>
    <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="social-icon">
      <FaLinkedin size={40} />
    </a>
  </div>
);

export default Footer;