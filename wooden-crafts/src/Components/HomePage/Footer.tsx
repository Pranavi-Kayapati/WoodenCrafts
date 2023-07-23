import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (
    <div>
        <footer className="footer">
    <div className="contanier">
        <div className="row">
            <div className="footer-col">
                <h4>About</h4>
                <ul>
                    <li><a href="">Our story</a></li>
                    <li><a href="">Contact us</a></li>
                    <li><a href="">Careers</a></li>
                    <li><a href="">Privacy policy</a></li>
                </ul>
            </div>
            <div className="footer-col">
                <h4>Support</h4>
                <ul>
                    <li><a href="">Payments</a></li>
                    <li><a href="">Return/Exchange</a></li>
                    <li><a href="">Shipment</a></li>
                    <li><a href="">Terms & conditions</a></li>
                </ul>
            </div>
            <div className="footer-col">
                <h4>Customer care</h4>
                <ul>
                    <li><h5>Timings: 10AM - 6PM (Mon-Sat)</h5></li>
                    <li><h5>Call: +91 7011263423</h5></li>
                    <li><h5>E-Mail: care@shopspree.com</h5></li>
                </ul>
            </div>
            <div className="footer-col">
                <h4>Subscribe</h4>
                <ul>
                    <li>
                        <h5>
                            Enter your email below to be the first to know about new collections and product launches.
                        </h5>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div className="footer-2">
        <div className="social-links" >
            <a href=""><i className="fa-brands fa-facebook-f"></i></a>
        </div>
        <div className="social-links" >
            <a href=""><i className="fa-brands fa-instagram"></i></a>
        </div>
        <div className="copyright">
            <p>© SHOPSPREE PRIVATE LIMITED</p>
        </div>
    </div>
</footer>
    </div>
  )
}


