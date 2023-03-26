import React from "react";
import sampras from "/assets/img/sampras-serve-no-background.png";

const Home = () => {

  return (
    <>
      <nav>
        <div className="welcome">
            <h1 className="matchPointTitulo">Bienvenidos a Match Point Palermo !</h1>
            <img className="samprasFoto" src={sampras} alt="" />
        </div>
      </nav>
    </>
  );
};

export default Home;