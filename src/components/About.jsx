import React from 'react';
import styled from 'styled-components';
import CarouselComponent from './CarouselComponent';

const About = () => {

    return (
        <>
            <AboutSection>
                <div className='about-top-container'>
                    <h3>About Us</h3>
                    <h1>Trusted by <span>200 +</span> satisfied clients</h1>
                    <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore eit esdioilore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullaemco laboeeiris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor iesdein reprehendeerit in voluptate velit esse cillum dolore.</p>

                    <div className='about-top-links-container'>
                        <h4><i className="fa-solid fa-arrow-right-long"></i> Fresh and Fast food Delivery</h4>
                        <h4><i className="fa-solid fa-arrow-right-long"></i> Delicious Deals for Delicious Meals</h4>
                        <h4><i className="fa-solid fa-arrow-right-long"></i> 24/7 Customer Support</h4>
                    </div>
                </div>
                <div className='about-bottom-container'>
                    <CarouselComponent />
                </div>
            </AboutSection>
        </>
    )
}

export default About

const AboutSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 5rem 3rem 5rem;

        .about-top-container{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            text-align: center;
            margin-bottom: 3rem;
        }

        .about-top-container h3{
            font-size: calc(var(--fs-1) + 1.5vw);
            font-family: var(--ff-cursive);
            color: var(--clr-100);
        }

        .about-top-container h1{
            font-size: calc(2.3rem + 2vw);
            font-family: var(--ff-header);
        }

        .about-top-container h1 span{
            color: var(--clr-100);
        }

        .about-top-container p{
            font-size: 1rem;
            font-family: var(--ff-paragraph);
        }

        .about-top-container .about-top-links-container{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            margin-top: 2rem;
            flex-wrap: wrap;
            text-align: center;
            gap: 1rem;
        }

        .about-top-container .about-top-links-container h4{
            font-size: var(--fs-1-2);
            font-family: var(--ff-header);
            padding: 0 2rem;
        }

        .about-top-container .about-top-links-container h4 i{
            color: var(--clr-100);
            font-size: var(--fs-1-2);
            color: var(--clr-200);
        }

        @media (max-width: 768px){
            margin: 0 3rem 3rem 3rem;
        }

        @media (max-width: 568px){
            margin: 0 2rem 3rem 2rem;

            .about-top-container h1{
                font-size: calc(1.5rem + 2vw);
            }
        }

        @media (max-width: 320px){
            margin: 0 1rem 3rem 1rem;
        }
`
