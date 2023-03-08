import { Link } from 'react-router-dom';
import whatsapp from '/assets/img/whatsapp.png'
import email from '/assets/img/email2-blanco.png'
import instagram2 from '/assets/img/instagram2-blanco.png'
import facebook2 from '/assets/img/facebook2-blanco.png'
import twitter2 from '/assets/img/twitter.png'

const Footer = () => {
  const instagram = () => {
    window.location.href = "https://www.instagram.com";
  };

  const facebook = () => {
    window.location.href = "https://www.facebook.com";
  };

  const twitter = () => {
    window.location.href = "https://www.twitter.com";
  };
  return (
    <div>
      <footer>
        <section className='whatsapp'>
          <ul>
            <li>
              <Link target="_blank"  to={"https://wa.link/o8rjp0"}>
              <img src={whatsapp} alt="whatsapp icono"/> + 54 9 11 5339-2228
              </Link>
            </li>
          </ul>
        </section>
        <section className='email'>
          <ul>
            <li>
              <img src={email} alt="email icono" /> martin.posniak@hotmail.com
            <button className='emailBoton'
            onClick={() => (window.location = "mailto:martin.posniak@hotmail.com")}>
          </button>
            </li>
          </ul>
        </section>
        <section className='redesSociales'>
          <ul>
            <li>
              <Link target="_blank" to={"https://www.instagram.com"}>
                <img src={instagram2} alt="instagram icono" />
              </Link>
              <Link target="_blank" to={"https://www.facebook.com"}>
              <img src={facebook2} alt="facebook icono" />
              </Link>
              <Link target="_blank" to={"https://www.twitter.com"}>
              <img src={twitter2} alt="twitter icono" />
              </Link>
            </li>
          </ul>
        </section>
      </footer>
    </div>
  )
}

export default Footer