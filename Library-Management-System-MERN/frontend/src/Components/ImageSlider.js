import React from 'react'
import './ImageSlider.css'
import { Carousel } from 'react-bootstrap'

function ImageSlider() {
    return (
        <div className='slider'>
            <Carousel>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="https://camo.githubusercontent.com/216998137fdf328b836a1c4e14d23298885bdf9097ece52444bd77fcbc866a44/68747470733a2f2f7777772e706978656c2d73747564696f732e636f6d2f626c6f672f77702d636f6e74656e742f75706c6f6164732f323031382f31322f3031322e6a7067"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Library-Quote</h3>
                        <p>"The library is not a luxury but one of the necessities of life." – Henry Ward Beecher</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1677024344965-7639f5651c72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE5fHxsaWJyYXJ5JTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Library-Quote</h3>
                        <p>"A library is a hospital for the mind." – Anonymous</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://plus.unsplash.com/premium_photo-1698084059435-a50ddfd69303?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA1fHxsaWJyYXJ5JTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Library-Quote</h3>
                        <p>"When in doubt, go to the library." – J.K. Rowling</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default ImageSlider
