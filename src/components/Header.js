import React from "react";
import "../styles/Header.css";

// By importing the Header.css file, it is added to the DOM whenever this component loads

function Header() {
  return (
    <header style={{
      backgroundColor: "red", height: "200px"
    }}>
      <h1 style={{ margin: "0", paddingTop: "75px", textAlign: "center", color: "white", fontSize: 100 }}>Welcome</h1>
    </header>
  );
}

export default Header;
