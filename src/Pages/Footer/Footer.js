import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer_Container bg-dark">
            <div className="container">
                <div className="row pt-5 pb-3">
                    <div className="col-lg-4 mt-4">
                        <div className="footer_content">
                            <img src="https://health-center.vamtam.com/wp-content/uploads/2014/03/logo_footer.png" alt="" />
                            <p>Health Insurances Australia - Quick And Easily Found At Asksly! Many Products. Easy Acces. Quick Results. Compare Products. Search and Discover. Find Easily. Types: Products Online, Instant Results, Big Variaty, 24/7 Accessible.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-4">
                        <div className="footer_content">
                            <h2>Latest news & tips</h2>
                            <p>The face you will remember <br />
                                <span>June 22, 2022</span></p>
                            <p>This is a healthy gallery <br />
                                <span>September 10, 2019</span></p>
                            <p>Armani spring collection 2015 <br />
                                <span>July 27, 2015</span></p>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-4">
                        <div className="footer_content">
                            <h2>Contact us</h2>
                            <p>Sundays @ 10:00am <br />London, UK <br /> 10, Firs Avenue, Muswell Hill,</p>
                            <p>Tel: 02 562-958 <br /> Mobile: 02 562-95</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="text-light" />
            <div className="copywrite text-center text-light">
                <p className="mb-0 pb-3">© 2021 - Health Center Created by FORID H</p>
            </div>
        </div>
    );
};

export default Footer;