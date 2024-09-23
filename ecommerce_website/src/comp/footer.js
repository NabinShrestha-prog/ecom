import React from 'react'
import './footer.css'
import { FaHeadphonesAlt, FaPiggyBank, FaShippingFast, FaWallet } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="left-box">
                    <div className="box">
                        <div className="icon_box">
                            <FaPiggyBank />
                        </div>
                        <div className="detail">
                            <h3>Great Saving</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

                        </div>
                    </div>
                    <div className="box">
                        <div className="icon_box">
                            <FaShippingFast />
                        </div>
                        <div className="detail">
                            <h3>Shipping</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

                        </div>
                    </div>
                    <div className="box">
                        <div className="icon_box">
                            <FaHeadphonesAlt />
                        </div>
                        <div className="detail">
                            <h3>24/7 Support</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

                        </div>
                    </div>
                    <div className="box">
                        <div className="icon_box">
                            <FaWallet />
                        </div>
                        <div className="detail">
                            <h3>Money Back</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>

                        </div>
                    </div>


                </div>
                <div className="right_box">
                    <div className="header">
                        <img src="image/logo.webp" alt="" />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum tempora maxime saepe officiis beatae cum voluptate, maiores commodi facilis corrupti! Tenetur ullam vero quisquam harum recusandae id odio, expedita labore.</p>
                    </div>
                    <div className="bottom">
                        <div className="box">
                            <h3>Your Accounts</h3>
                            <ul>
                                <li>About Us</li>
                                <li>Account</li>
                                <li>Payment</li>
                                <li>Sales</li>
                            </ul>
                        </div>
                        <div className="box">
                            <h3>Products</h3>
                            <ul>
                                <li>Delivery</li>
                                <li>Track Order</li>
                                <li>New Product</li>
                                <li>Old Product</li>
                            </ul>
                        </div>
                        <div className="box">
                            <h3>Contact Us</h3>
                            <ul>
                                <li>Madhyapur Thimi-5</li>
                                <li>+977 9843350603</li>
                                <li>Nabin.sht.ns@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer