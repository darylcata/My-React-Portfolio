import React from "react";
import "../styles/Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

function Navbar() {
  return (
    <nav style={{ backgroundColor: "green", height: "60px", display: "flex", justifyContent: "flex-end"}}>
      <a style= {{
        color: "white", fontSize: "1.3rem", margin: "5px", lineHeight: "3"
      }}href="/">Welcome</a>
    </nav>
  );
}

export default Navbar;
