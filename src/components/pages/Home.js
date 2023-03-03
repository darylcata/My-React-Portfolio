import React from "react";

function Home() {
  return (
    <header style={{
      backgroundColor: "red", 
      height: "400px"
    }}>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4" style={{ margin: "0", paddingTop: "75px", textAlign: "center", color: "white", fontSize: 100 }}>Welcome</h1>
          <p className="lead">This is a simple portfolio about me, my work and skills I hope to achieve in this bootcamp. I am
            new to this industry and very interested.</p>
        </div>
      </div>
    </header>


  );
}

export default Home;
