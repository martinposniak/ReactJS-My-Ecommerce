import React from "react";
import sampras from "/assets/img/sampras-serve-no-background.png";


const Welcome = () => {

  return (
    <>
        <div className="welcome">
            <h1 className="matchPointTitulo">Bienvenido/a a Match Point Palermo !</h1>
            <img className="samprasFoto" src={sampras} alt="" />
        </div>
    </>
  );
};

export default Welcome;