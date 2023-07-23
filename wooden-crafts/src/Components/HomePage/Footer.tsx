import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (
    <div>
        <footer className="footer">
    <div className="contanier">
        <div className="row">
            <div className="footer-col">
                <h4>OUR COMPANY</h4>
                <ul>
                    <li><a href="">Our story</a></li>
                    <li><a href="">Contact us</a></li>
                    <li><a href="">Media</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Career</a></li>
                    <li><a href="">Costumer Stories</a></li>
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
                    <li><h5>E-Mail: furnitur@woodenCrafts.com</h5></li>
                </ul>
            </div>
            <div className="footer-col">
                <h4>Subscribe</h4>
                <ul>
                    <li>
                        <h5>
                            Enter your email below to be the first to know about new collections and product launches.
                            <input type='url' style={{width:'300px',padding:'20px 10px',backgroundColor:'white'}} placeholder='Enter Email'></input>
                        </h5>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div className="footer-2">
        <div className="copyright">
            <p>© WOODEN CRAFTS PRIVATE LIMITED</p>
        </div>
    </div>
</footer>
    </div>
  )
}


