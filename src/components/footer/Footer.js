import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <>
        <div className="footer-container">
        <div className="footer-content">
            <div className="account">
                <p className="foot-heading">Account</p>
                <p className='foot-des'>My Account</p>
                <p className='foot-des'>Wishlist</p>
                <p className='foot-des'>My Cart</p>
            </div>
            <div className="Help">
                <p className="foot-heading">Help</p>
                <p className='foot-des'>FAQ</p>
                <p className='foot-des'>Privacy Policy</p>
            </div>
            <div lassName="contact">
                <p className="foot-heading">Contact us</p>
                <p className='foot-des'>Linkedin</p>
                <p className='foot-des'>Github</p>
                <p className='foot-des'>Twitter</p>
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