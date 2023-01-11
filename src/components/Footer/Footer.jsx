import React from "react";
import "./Footer.css";

function Footer() {
  console.log(window.location.href)
  return (
    <footer className={window.location.href==='http://localhost:3000/' ? 'footer' : 'footer__favorites'}>
      <h4 className="words">
        Designed & Built by <br />
        Suleyman Dadashow
      </h4>
    </footer>
  );
}

export default Footer;
