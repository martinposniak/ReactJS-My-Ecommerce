import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../main";
import { useNavigate } from "react-router-dom";
import { FiUser } from 'react-icons/fi';
import { useContext } from "react";
import { CartContext } from '../context/ShoppingCartContext';
import Swal from 'sweetalert2';


const Logout = () => {
  const navigate = useNavigate();
  const {setIsLogged} = useContext(CartContext);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setIsLogged(false);
        navigate("/signup");
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Has cerrado sesión correctamente',
            showConfirmButton: false,
            timer: 2500
          })
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="logout">
    <button className="logoutButton" onClick={handleLogout}><FiUser size="3rem"/><h6>Cerrar sesión</h6></button>
  </div>
  )
}


export default Logout