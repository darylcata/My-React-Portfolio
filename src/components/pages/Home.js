import React from "react";

function Home() {
  const bgImage = require(`../../images/bgImage.png`);
  return (
    <header className="header" style={{
      backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.4) 0%,rgba(255,255,255,0.9) 100%) , url(${bgImage})`,
      height: "500px"
    }}>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4" style={{ margin: "0", paddingTop: "100px", textAlign: "center", fontSize: 125,fontWeight: "bold"}}>Welcome</h1>
          <p className="lead" style = {{fontWeight: "bold", fontSize: 20}}>This is a simple portfolio about me, my work and skills I hope to achieve in this bootcamp. I am
            new to this industry and very interested.</p>
          <p className="lead" style = {{fontWeight: "bold", fontSize: 18}}>Have a look around my recent project through the Navbar or if you fancy, contact me through the contact page.</p>
        </div>
      </div>
    </header>


  );
}

export default Home;
