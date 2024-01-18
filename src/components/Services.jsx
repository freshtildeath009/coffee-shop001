import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const Services = () => {
    return (
        <>
            <ServicesSection>
                <div className='services-card-container'>
                    <h3><i className="fa-solid fa-truck"></i>Deliver</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quibusdam error dolorem? Quibusdam modi ab id nostrum vero?</p>
                    <div className='services-button-container'>
                        <Button text="Go" />
                    </div>
                </div>

                <div className='services-card-container'>
                    <h3><i className="fa-solid fa-wifi"></i>Wifi</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quibusdam error dolorem? Quibusdam modi ab id nostrum vero?</p>
                    <div className='services-button-container'>
                        <Button text="Go" />
                    </div>
                </div>

                <div className='services-card-container'>
                    <h3><i className="fa-solid fa-utensils"></i>Delicious</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quibusdam error dolorem? Quibusdam modi ab id nostrum vero?</p>
                    <div className='services-button-container'>
                        <Button text="Go" />
                    </div>
                </div>
            </ServicesSection>
        </>
    )
}

export default Services

const ServicesSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5rem 5rem;
    gap: 2rem 2rem;

        .services-card-container{
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: column;
            text-align: center;
            width: 600px;
            min-width: 250px;
            padding: 2rem 1rem;
            background: var(--clr-300);
            border-radius: var(--br-general);
            transition: ease .5s;
            overflow: hidden;
        }

        .services-card-container:hover{
            box-shadow: var(--bx-shadow-bottom);
            transform: scale(1.09);
        }

        .services-card-container h3{
            font-family: var(--ff-header);
            font-size: var(--fs-2);
            font-weight: var(--fw-600);
            color: var(--clr-100);
        }

        .services-card-container p{
            font-family: var(--ff-paragraph);
            font-weight: var(--fw-300);
            font-size: var(--fs-1);
            color: var(--clr-200);
        }

        .services-card-container .services-button-container button{
            margin-top: 1rem;
            padding: 0.3rem 3rem;
        }

        @media (max-width: 1210px){
            .services-card-container{
                width: 445px;
            }
        }

        @media only screen and (max-width: 1100px){
            flex-wrap: wrap;
            .services-card-container{
                padding: 3rem 2rem;
                width: 600px;
            }
        }


        @media (max-width: 898px) {
            .services-card-container{
                padding: 3rem 2rem;
                width: 590px;
            }
        }

        @media only screen and (max-width: 768px){
            margin: 5rem 3rem;
            .services-card-container{
                width: 100%;
            }
        }

        @media only screen and (max-width: 568px){
            margin: 5rem 2rem;

            .services-card-container h3{
                font-family: var(--ff-header);
                font-size: var(--fs-1-2);
                font-weight: var(--fw-600);
                color: var(--clr-100);
            }
    
            .services-card-container p{
                font-family: var(--ff-paragraph);
                font-weight: var(--fw-300);
                font-size: var(--fs-1);
                color: var(--clr-200);
            }
        }

        @media only screen and (max-width: 420px){
            .services-card-container{
                padding: 2rem 1rem;
                width: 550px;
            }        
        @media only screen and (max-width: 320px){
            margin: 5rem 1rem;
        }
`
