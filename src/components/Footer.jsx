import Image from "next/image";
import Link from "next/link";

import c349 from "../../public/images/c349.png";

const Footer = () => {
  return (
    <footer id="mahmood" className="footer section has-bg-image text-center">
      <div className="container">
        <div className="footer-top grid-list">
          <div className="footer-brand has-before has-after">
            <Link href="/" className="logo" alt="La Venus Restaurant Home Page">
              <Image src={c349} width="200" height="50" alt="La Venus Restaurant Logo" />
            </Link>

            <address className="body-4">
              Puerto Deportivo, Av. Duque de Ahumada, 29680 Marbella, Málaga,
              España
            </address>

            <Link className="body-4 contact-link"
              href="mailto:reserva@restaurantevenus.com"
              alt="Email La Venus Restaurant"
              >
              reserva@restaurantevenus.com
            </Link>

            <Link className="body-4 contact-link" 
              href="tel:+34952901373"
              alt="Call La Venus Restaurant"
              >
              Booking : +34 952 90 13 73
            </Link>

            <p className="body-4">Open: from 12:00 to 00:00</p>

            <div className="wrapper">
              <div className="separator"></div>
              <div className="separator"></div>
              <div className="separator"></div>
              <div className="separator"></div>
              <div className="separator"></div>
              <div className="separator"></div>
              <div className="separator"></div>
            </div>
          </div>

          <ul className="footer-list">
            <li>
              <Link className="label-2 footer-link hover-underline" 
                href="/">
                Home
              </Link>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <Link className="label-2 footer-link hover-underline" target="_blank" rel="noopener noreferrer"
                title="Follow us on Facebook"
                href="https://www.facebook.com/pages/Freiduria-La-Venus/274004352642652" >
                Facebook
              </Link>
            </li>

            <li>
              <Link className="label-2 footer-link hover-underline" target="_blank" rel="noopener noreferrer"
                title="Find us on Google Maps"
                href="https://maps.app.goo.gl/LhsVzqy39sKf83WR8" >
                Google Maps
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} La Venus. All Rights Reserved | Crafted by{" "}
            <a className="link" href="https://github.com/necirvanalpar" target="_blank" rel="noopener noreferrer">
              necirvanalpar
            </a>{" "}
            and{" "}
            <a className="link" href="https://github.com/codewithsadee" target="_blank" rel="noopener noreferrer">
              codewithsadee
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
