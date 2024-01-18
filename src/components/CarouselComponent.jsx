import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';
const CarouselComponent = () => {
    return (
        <>
            <CarouselSection>
                <Carousel>
                    <Carousel.Item>
                        <img src="./images/scenery 4.jpg" alt="" />
                        <Carousel.Caption>
                            <h3>Enjoy and relaxing</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="./images/scenery 5.jpg" alt="" />
                        <Carousel.Caption>
                            <h3>Visit with your friends</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="./images/scenery 6.jpg" alt="" />
                        <Carousel.Caption>
                            <h3>Family bonding</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </CarouselSection>
        </>
    )
}

export default CarouselComponent

const CarouselSection = styled.section`
    img{
        max-height: 600px;
        width: 100vw;
        object-fit: cover;
        border-radius: var(--br-general);
    }

    h3{
        font-size: calc(0.8rem + 2vw);
        font-family: var(--ff-header);
    }

    p{
        font-size: var(--fs-1);
        font-family: var(--fs-paragraph);
        font-weight: var(--fw-400);
    }

    @media (max-width: 568px) {
        img{
            min-height: 500px;
            object-fit: cover;
        }
    }
`
