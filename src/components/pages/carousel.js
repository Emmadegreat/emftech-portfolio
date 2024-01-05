import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import React, { Component } from 'react';

import { Carousel } from 'react-responsive-carousel';
import ReactDOM from 'react-dom';

const Carous=()=> {

        return (
            <div className="" style={{ width: "50%", margin: "auto", }}>
                <Carousel autoPlay infiniteLoop interval={5000} showIndicators={false} showStatus={false} showThumbs={false}>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQib0qEXu0xxBZlWTF8LUhZZkLOtIYvdm8GUg&usqp=CAU" alt="wordpress-logo"/>
                        <div>
                            <p style={{color:"#fff",paddingTop:"1.3rem"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus sit minima sunt qui accusantium magnam. Consequatur iure nam nesciunt quisquam, doloribus obcaecati sapiente vero adipisci cumque sint accusamus, iste soluta.</p>
                            <a href="">E-shop</a>
                        </div>
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQib0qEXu0xxBZlWTF8LUhZZkLOtIYvdm8GUg&usqp=CAU" alt="wordpress-logo"/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQib0qEXu0xxBZlWTF8LUhZZkLOtIYvdm8GUg&usqp=CAU" alt="wordpress-logo"/>
                    <a href="https://www.facebook.com" className="legend">e-shop</a>
                </div>
            </Carousel>
            </div>
        );
}
export default Carous