import React, {Component} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import firstImg from '../assets/EnergyPlus.png';
import secondImg from '../assets/e.png';

export default class CarouselBox extends Component {
    render() {
        return(
            <Carousel>
                <Carousel.Item>
                    <img
                    width={900}
                    height={500}
                    className='d-block w-100'
                    src={firstImg}
                    alt='First slide'
                    />
                    <Carousel.Caption>
                        <h3>First slide</h3>
                        <p>The best company in this fucking world</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    width={900}
                    height={500}
                    className='d-block w-100'
                    src={secondImg}
                    alt='Second slide'
                    />
                    <Carousel.Caption>
                        <h3>First slide</h3>
                        <p>The best company in this fucking world, but shorter</p>
                    </Carousel.Caption>
                </Carousel.Item> 
            </Carousel>
        )
    }
}