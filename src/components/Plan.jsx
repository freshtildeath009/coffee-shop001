import React from 'react'
import styled from 'styled-components'

const Plan = () => {
    return (
        <>
            <PlanSection>
                <div className='plan-top-container'>
                    <h3>Plan</h3>
                    <h1>What's your plan?</h1>
                </div>
                <div className='plan-bottom-container'>
                    <div className='plan-b-top-container'>
                        <div>
                            <h3>Regular <br /> <span>-$0</span></h3>
                        </div>
                        <ul>
                            <li>30 mins free internet</li>
                            <li>-$0 for every coffee and food</li>
                        </ul>
                    </div>
                    <div className='plan-b-top-container'>
                        <div>
                            <h3>Regular <br /> -$8<span>/ 1 year</span></h3>
                        </div>
                        <ul>
                            <li>30 mins free internet</li>
                            <li>-$0 for every coffee and food</li>
                        </ul>
                    </div>
                </div>
            </PlanSection>
        </>
    )
}

export default Plan

const PlanSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 5rem 5rem;

        .plan-top-container{
            text-align: center;
        }

        .plan-top-container h3{
            font-size: calc(var(--fs-1) + 1.5vw);
            font-family: var(--ff-cursive);
            color: var(--clr-100);
        }

        .plan-top-container h1{
            font-size: calc(2.3rem + 2vw);
            font-family: var(--ff-header);
            color: var(--clr-300);
        }

        .plan-bottom-container{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            border-radius: var(--br-general);
            margin-top: 3rem;
            gap: 2rem;
        }

        .plan-bottom-container .plan-b-top-container{
            background-color: var(--clr-300);
            border-radius: var(--br-general);
        }

        .plan-bottom-container .plan-b-top-container div{
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            border-radius: 10px 10px 50% 50% ;
            padding: 3rem 0;
            background: rgba(255, 255, 255,1);  
        }

        .plan-bottom-container .plan-b-top-container div h3{
            font-size: var(--fs-2);
            font-family: var(--ff-header);
            color: var(--clr-100);
        }

        .plan-bottom-container .plan-b-top-container ul{
            margin: 3rem 3rem;
            flex-direction: column;
        }

        .plan-bottom-container .plan-b-top-container ul li{
            font-size: var(--fs-1);
            font-family: var(--ff-paragraph);
            color: var(--clr-200);
        }
        

        @media (max-width: 668px) {
            margin: 5rem 2rem;

            .plan-bottom-container .plan-b-top-container {
                width: 100%; 
            }
        }

        @media (max-width: 568px) {

            .plan-top-container h3{
                font-size: calc(var(--fs-1) + 1.5vw);
            }

            .plan-top-container h1 {
                font-size: calc(1.5rem + 2vw);
            }

            .plan-bottom-container .plan-b-top-container div h3{
                font-size: var(--fs-1-2);
            }
        }

        @media (max-width: 320px) {
            margin: 5rem 1rem;
        }
`
