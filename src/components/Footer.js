import React from 'react';
import FooterInsider from './Footer/FooterInsider';
import FooterMain from './Footer/FooterMain';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <FooterInsider />
      <FooterMain />
    </footer>
  );
}

export default Footer;