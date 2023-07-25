import React from 'react';
import "./Footer.css";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
        <div className="footer-container">
        <div className="footer-content">
            <div className="account">
                <p className="foot-heading">Account</p>
                <p className='foot-des'><Link className='contact-link' to="/myaccount">My Account </Link></p>
                <p className='foot-des'> <Link className='contact-link' to="/wishlist">Wishlist </Link></p>
                <p className='foot-des'> <Link className='contact-link' to="/cart">My Cart </Link></p>
            </div>
            <div className="Help">
                <p className="foot-heading">Help</p>
                <p className='foot-des'>FAQ</p>
                <p className='foot-des'>Privacy Policy</p>
            </div>
            <div lassName="contact">
                <p className="foot-heading">Contact us</p>
                <p className='foot-des'><Link className='contact-link' to="https://www.linkedin.com/in/hi-akash/" target='_blank'>Linkedin</Link></p>
                <p className='foot-des'><Link className='contact-link' to="https://github.com/leader-akash" target='_blank'>Github</Link></p>
                <p className='foot-des'><Link className='contact-link' to="https://twitter.com/AkashAk50675432" target='_blank'>Twitter</Link></p>
            </div>
          </div>

              <div className="copyright">© 2023 Classy Store. All Rights Reserved
              </div>
              <div className="owner">
              Made with 💖 by Akash
              </div>
         </div>
    </>
  )
}

export default Footer