import React from 'react';
import styled from 'styled-components';

const HeroAll = (props) => {
    console.log(props);
    return (
        <>
            <HeroSection>
                <div className='hero-container'>
                    <h1>{props.title}</h1>
                </div>
            </HeroSection>
        </>
    )
}

export default HeroAll

const HeroSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-size: cover;
    border-radius: var(--br-bottom);
    background-image: url("./images/bg1.jpg");

        .hero-container{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 350px;
            width: 700px;
            background: rgb(0, 0, 0, 0.5);
            margin: 5rem;
            border-radius: var(--br-general);
        }


        .hero-container h1{
            font-family: var(--ff-header);
            font-size: calc(2.3rem + 2vw);
            color: var(--clr-200);
        }

        @media (max-width: 568px) {
            background-position: 40% 60%;
            .hero-container h1{
                font-size: calc(1.5rem + 2vw);
            }
        }
`
