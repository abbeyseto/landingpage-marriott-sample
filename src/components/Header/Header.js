import React, { useEffect, useState } from "react";
import BrandLogo from "../../assets/brand-logo.png";
import Menuopen from "../../assets/hambugeropen.png";
import Menuclose from "../../assets/hambugerclose.png";
import useWindowSize from "../Hooks/useWindowSize.js";

function Header() {
  const size = useWindowSize();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    size.width < 999 ? setIsMobile(true) : setIsMobile(false);
  }, [size]);

  return (
    <div className="top">
      <header className="header">
        <div className="brand-logo">
          {!isMobile && (
            <img
              src={Menuclose}
              alt="brand-logo"
              className="logo2"
              onClick={() => setIsMobile(!isMobile)}
            />
          )}
          {isMobile && (
            <img
              src={Menuopen}
              alt="brand-logo"
              className="logo2"
              onClick={() => setIsMobile(!isMobile)}
            />
          )}
          <img src={BrandLogo} alt="brand-logo" className="logo" />
        </div>
        {!isMobile && (
          <div className="header-contents">
            <div className="header-submenu header-submenu-top">
              <ul className="menu-mobile">
                <li>English</li>
                <li>Help</li>
                <li>My Trips</li>
                <li>Sign In or Join</li>
              </ul>
            </div>
            <div className="header-menu">
              <ul className="menu-mobile">
                <li>Find & Reserve</li>
                <li> Special Offers</li>
                <li>Vacations</li>
                <li>Our Brands</li>
                <li>Our Credit Cards</li>
                <li>About Marriot</li>
              </ul>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

export default Header;
