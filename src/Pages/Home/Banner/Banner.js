import React from 'react';
import { Button } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner_container">
            <div className="container">
                <div className="slider_box row d-flex align-items-center justify-content-between">
                    <div className="col-lg-6 col-sm-12">
                        <div className="slider_content">
                            <h3>Introducing</h3>
                            <h1>Our Dental Surgeons</h1>
                            <ul>
                                <li>Sequitur Mutationem Duis Dolore Feugait</li>
                                <li>Duis Autem Vel Eum Iriure Dolor </li>
                                <li>Quod Mazim Placerat Facer Possim Assum</li>
                            </ul>
                            <Button className="btn btn-danger">Read More....</Button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="slider_img">
                            <img
                                className="d-block w-100"
                                src="https://i.ibb.co/q0zTXZ0/h3-slider-image-5.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;