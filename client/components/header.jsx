import React from 'react';

function Header() {
  return (
    <div className="row justify-content-between header-item">
      <div className="p">
        <a href="/">
          <img className="header-img" src="./images/leafImg.png" href="/" />
        </a>
      </div>
      <div className="links-container mobile-header" id="menuToggle">
        <input type="checkbox" />
        <span></span>
        <span></span>
        <span></span>
        <ul id="menu">
          <li className="column text-center">
            <a className="mobile-menu-link" href="/about" > About Us</a>
            <a className="mobile-menu-link" href="/sign-petition" > Sign the Petition!</a>
          </li>
        </ul>
      </div>

      <div className="links-container full-screen-header">
        <a className="header-link" href="/about">About</a>
        <a className="header-link" href="/sign-petition">Petition</a>
      </div>
    </div>
  );
}

export default Header;
