import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../main";
import canchaDeTenis from "/assets/img/tennis-court-dimensions-2.jpg";

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/login");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <>
    <main id="mainRegister">
      <section id="pantalla-dividida">
          <div className="izquierda">
              <img src={canchaDeTenis} alt="" />
          </div>
        <div className="register">
          <form>
          <div>
          <h3> Registrate </h3>
          </div>
            <div className="input-box">
              <label htmlFor="email-address">Email</label>
              <input
                id="email-address"
                label="Email address"
                value={email}
                type="email"
                required
                placeholder=""
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-box">
              <label htmlFor="password">Contraseña</label>
              <input
                id="password"
                label="Create password"
                value={password}
                type="password"
                required
                placeholder=""
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="check-box">
              <input type="checkbox" name="recordar" id="recordar"/>
              Recordar
          </div>
            <div className="input-box">
              <button id="ingresar" onClick={onSubmit}>Registrar</button>
            </div>
            <div className="input-box">
         <span className="mensajeReg">¿Ya tienes cuenta? Inicie sesión<NavLink className={"signLink"} to="/login"> Aquí</NavLink></span>  
          </div>
          </form>
        </div>
      </section>
    </main>
  </>
  );
  
};

export default Signup;

    /*
    <main>
      <section>
        <div>
          <div>
            <h1> FocusApp </h1>
            <form>
              <div>
                <label htmlFor="email-address">Email address</label>
                <input
                  type="email"
                  label="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Email address"
                />
              </div>

              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  label="Create password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Password"
                />
              </div>

              <button type="submit" onClick={onSubmit}>
                Sign up
              </button>
            </form>

            <p>
              Already have an account? <NavLink to="/login">Sign in</NavLink>
            </p>
          </div>
        </div>
      </section>
    </main>
    */