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
    gap: 1rem 5.5rem;
    flex-wrap: wrap;

        .services-card-container{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            text-align: center;
            max-width: 320px;
            min-width: 320px;
            padding: 2rem 1rem;
            background: var(--clr-300);
            border-radius: var(--br-general);
            box-shadow: var(--bx-shadow-bottom);
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

        @media (max-width: 981px){
            .services-card-container{
                max-width: 500px;
            }
        }

        @media (max-width: 368px){
            .services-card-container{
                min-width: 300px;
            }
        }
        @media (max-width: 320px){
            .services-card-container{
                min-width: 280px;
            }
    
        }
`
