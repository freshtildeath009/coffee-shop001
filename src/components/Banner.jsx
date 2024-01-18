import React from 'react'
import styled from 'styled-components'

const Banner = () => {
    return (
        <>
            <BannerSection>
                <div className='bars'>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className='banner-text'>
                    <h2><span>50%</span> off your <br className='br' /> favorite coffee</h2>
                </div>

                <div className='bars'>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </BannerSection>
        </>
    )
}

export default Banner

const BannerSection = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    height: 100px;
    font-family: var(--ff-header);
    background-color: var(--clr-300);
    border-radius: var(--br-bottom);
    box-shadow: var(--bx-shadow-bottom);
    position: relative;
    overflow: hidden;
    
        
        .bars {
            display: flex;
            height: 100%;
            position: relative;
        }
        
        .bars div{
            clip-path: polygon(65% 0, 100% 0%, 55% 100%, 20% 100%);
            background: var(--clr-100);
            width: 100px;
            height: 100%;
            display: flex;
        }

        .bars div:nth-child(1){
            position: absolute;
            left: 50px; 
        }

        .banner-text{
            z-index: 1;
        }

        .br{
            display: none;
        }
        h2{
            font-size: calc(1rem + 2vw);
            color: var(--clr-200);
        }

        h2 span {
            color: var(--clr-100);
        }

        @media (max-width: 668px){
            .banner-text{
                // position: absolute;
                white-space: nowrap;
                margin: 0 2rem;
            }

            .br{
                display: block;
            }
        }
`
