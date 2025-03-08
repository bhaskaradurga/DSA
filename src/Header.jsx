import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <Link to="/UserClass" className="m-4">
        UserClass
      </Link>
      <Link to="/">UserFunction</Link>
    </>
  );
};
export default Header;
