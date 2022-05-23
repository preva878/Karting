import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { render } from '@testing-library/react';
import Image from "./image/beberenard.jpg";
import Image2 from "./image/renardfeu.jpg";
import image3 from "./image/beberenard.jpg";
import '../pages/essai.scss';

const DemoCarousel = () => {
    
    return (
        <a class="carousel">
            <section class="section1">
        <Carousel 
        infiniteLoop useKeyboardArrows autoPlay>
                <div id="div1">
                    <img src={Image} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={Image2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={image3} />
                    <p className="legend">Legend 3</p>
                </div>
     
            </Carousel>
            </section>
            <br />
            <br />
            <br />

            
            <section class="section2">
            <Carousel 
        infiniteLoop useKeyboardArrows autoPlay>
                <div>
                    <img src={Image} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={Image2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={image3} />
                    <p className="legend">Legend 3</p>
                </div>
     
            </Carousel>
            </section>
            <br />
            <section class="section3">
            <Carousel 
        infiniteLoop useKeyboardArrows autoPlay>
                <div>
                    <img src={Image} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={Image2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={image3} />
                    <p className="legend">Legend 3</p>
                </div>
     
            </Carousel>
            </section>
            <br />
            
            
           
            </a>
    )


    }
;
export default DemoCarousel
