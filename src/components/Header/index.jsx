import React from "react";
import Image from "../Image";
import "./styles.css";

const Header = () => {
  return (
    <header className='Header'>
      <Image src="logo_Quatar.png"
             alt="header-logo"
      />
    </header>
  );
}

export default Header;
