import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../main";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import canchaDeTenis from "/assets/img/tennis-court-dimensions-2.jpg";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Muchas gracias ' + user.email + '!' + ' ya has iniciado sesión',
            showConfirmButton: false,
            timer: 2500
          })
      })
      .catch((error) => {
        const errorCode = setError("Email y/o contraseña son incorrectos");
        const errorMessage = error.message;
      });
  };

  return (
    <>
      <main id="mainLogin">
        <section id="pantalla-dividida">
            <div className="izquierda">
                <img src={canchaDeTenis} alt="" />
            </div>
          <div className="logIn">
            <form>
            <div>
            <h3> Inicio de sesión </h3>
            </div>
              <div className="input-box">
                <label htmlFor="email-address">Email</label>
                <input
                  id="email-address"
                  name="email"
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
                  name="password"
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
                <button id="ingresar" onClick={onLogin}>Ingresar</button>
              </div>
              <div className="input-box">
           <span className="mensajeLog">¿No tiene cuenta?<NavLink className={"logLink"} to="/signup"> Registrese</NavLink></span>  
            </div>
            </form>
            {error}
          </div>
        </section>
      </main>
    </>
  );
};

export default Login;