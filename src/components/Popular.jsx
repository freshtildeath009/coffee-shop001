import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'

const Popular = () => {
    return (
        <>
            <PopularSection>
                <div className='popular-section'>
                    <div className='popular-top-container'>
                        <h3>Food Menu</h3>
                        <h1>Most Popular</h1>
                    </div>
                    <div className='popular-bottom-container'>
                        {/* Single product start*/}
                        <div className='card-container'>
                            <div></div>
                            <img src="./images/item1.jpg" alt="" />
                            <div className='card-info-container'>
                                <div>01</div>
                                <h4>Cookies</h4>
                                <p></p>
                            </div>
                        </div>
                        {/* Single product end */}
                        {/* Single product start*/}
                        <div className='card-container'>
                            <div></div>
                            <img src="./images/item2.jpg" alt="" />
                            <div className='card-info-container'>
                                <div>08</div>
                                <h4>Cookies</h4>
                                <p></p>
                            </div>
                        </div>
                        {/* Single product end */}
                        {/* Single product start*/}
                        <div className='card-container'>
                            <div></div>
                            <img src="./images/item3.jpg" alt="" />
                            <div className='card-info-container'>
                                <div>05</div>
                                <h4>Cookies</h4>
                                <p></p>
                            </div>
                        </div>
                        {/* Single product end */}
                        {/* Single product start*/}
                        <div className='card-container'>
                            <div></div>
                            <img src="./images/item4.jpg" alt="" />
                            <div className='card-info-container'>
                                <div>10</div>
                                <h4>Cookies</h4>
                                <p></p>
                            </div>
                        </div>
                        {/* Single product end */}
                        {/* Single product start*/}
                        <div className='card-container'>
                            <div></div>
                            <img src="./images/item5.jpg" alt="" />
                            <div className='card-info-container'>
                                <div>18</div>
                                <h4>Cookies</h4>
                                <p></p>
                            </div>
                        </div>
                        {/* Single product end */}
                        {/* Single product start*/}
                        <div className='card-container'>
                            <div></div>
                            <img src="./images/item6.jpg" alt="" />
                            <div className='card-info-container'>
                                <div>28</div>
                                <h4>Cookies</h4>
                                <p></p>
                            </div>
                        </div>
                        {/* Single product end */}
                    </div>
                    <div className='btn-shop-container'>
                        <Button text="Shop" />
                    </div>
                </div>

            </PopularSection>
        </>
    )
}

export default Popular

const PopularSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("./images/bg-popular.avif");
    background-repeat: no-repeat;
    background-size: cover;
    flex-direction: column;
    box-shadow: var(--bx-shadow-top);
    border-radius: var(--br-top);

        .popular-section{
            margin: 5rem 5rem;
        }
        .popular-top-container{
            text-align: center;
        }

        .popular-top-container h3{
            font-family: var(--ff-cursive);
            font-size: calc(var(--fs-1) + 1.5vw);
            color: var(--clr-100);
        }

        .popular-top-container h1{
            font-family: var(--ff-header);
            font-size: calc(2.3rem + 2vw);
            color: var(--clr-200);
        }

        .popular-bottom-container{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
            gap: 3.7rem 2rem;
            margin: 2rem 0 0 0;
            width: 100%;
        }

        .popular-bottom-container .card-container{
            display: flex;
            justify-content: center;
            align-items: flex-end;
            position: relative;
            font-family: var(--ff-header);
            box-shadow: var(--bx-shadow-bottom);
        }

        .popular-bottom-container .card-container img{
            width: 350px;
            min-width: 240px;
            border-radius: var(--br-general);
            overflow: hidden;
            transition: ease 0.5s;
        }

        

        .popular-bottom-container img:hover{
            transform: scale(1.09);
        }

        .card-container .card-info-container{
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: absolute;
            background: var(--clr-200);
            bottom: -30px;
            margin: 0 1rem;
            width: 80%;
            border-radius: var(--br-general);
            text-align: center;
            box-shadow: var(--bx-shadow-bottom);
            border: 2px solid black;
            overflow: hidden;
        }

        .card-container .card-info-container div{
            background: var(--clr-100);
            padding: 1rem;
            font-size: var(--fs-1-2);
            
        }

        .card-container .card-info-container h4{
            font-size: var(--fs-1-2);
            font-family: var(--ff-cursive);
        }

        .popular-bottom-container img{
            height: 220px;
            min-height: 250px;
            width: 300px;
        }

        .popular-section .btn-shop-container{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            margin-top: 5rem;
        }
        .popular-section .btn-shop-container button{
            width: 280px;
            font-size: var(--fs-1-2);
            // height: 70px;
        }

        @media (max-width: 898px) {
            .popular-section{
                margin: 5rem 3rem;
            }

            .popular-bottom-container{
                gap: 3.7rem 0rem;
                width: 100%;
            }

            .popular-bottom-container .card-container{
                width: 80%;
            }
            
            .popular-bottom-container .card-container img{
                height: 350px;
                width: 100%;
            }

            .popular-bottom-container img:hover{
                transform: scale(1.1);
            }
        }

        @media (max-width: 668px) {
            .popular-section{
                margin: 5rem 3rem;
            }

            .popular-bottom-container{
                gap: 3.7rem 0rem;
                width: 100%;
            }

            .popular-bottom-container .card-container{
                width: 100%;
            }
     

            .popular-bottom-container .card-container img{
                height: 100px;
                width: 100%;
            }

    
        }

        @media (max-width: 568px){
            .popular-section{
                margin: 5rem 2rem;
            }

            .popular-top-container h1{
                font-size: calc(1.5rem + 2vw);
            }
        }

        @media (max-width: 320px){
            .popular-section{
                margin: 5rem 1rem;
            }
        }
`
