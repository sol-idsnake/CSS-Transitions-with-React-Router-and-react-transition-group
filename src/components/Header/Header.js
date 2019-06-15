import React from "react";
import HeaderStyles from "./HeaderStyles";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderStyles>
      <Link to="/">
        <img src="https://via.placeholder.com/350x150" alt="Logo" />
      </Link>
    </HeaderStyles>
  );
};

export default Header;
