import React from 'react'
import styled from 'styled-components'

const Banner = () => {
    return (
        <>
            <BannerSection>
                {/* <div className='bars'>
                    <div></div>
                    <div></div>
                    <div></div>
                </div> */}
                <h2><span>50%</span> off your favorite coffee</h2>
                {/* <div className='bars'>
                    <div></div>
                    <div></div>
                    <div></div>
                </div> */}
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

      
        h2{
            font-size: calc(0.7rem + 2vw);
            color: var(--clr-200);
        }

        h2 span {
            color: var(--clr-100);
        }

        @media (max-width: 992px){
            .bars div{
                clip-path: polygon(80% 0, 100% 0, 55% 100%, 35% 100%);
                width: 100px;
            }
        }
`
