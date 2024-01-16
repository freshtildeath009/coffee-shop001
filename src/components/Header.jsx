import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
        <>
            <HeaderNav>
                <div className='nav-container'>
                    <div className='nav-left-container'>
                        <h3>KOPI</h3>
                    </div>
                    <div className='nav-right-container'>
                        <a href="">HOME</a>
                        <a href="">SERVICES</a>
                        <a href="">PRODUCT</a>
                        <a href="">CONTACT</a>
                    </div>
                    <div className='nav-right-menu-container'>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </div>
            </HeaderNav>
        </>
    )
}

export default Header

const HeaderNav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    background-color: var(--clr-300);
    font-family: var(--ff-header);

        .nav-container{
            display: flex;
            justify-content: space-between;
            background-color: var(--clr-300);
            align-items: center;
            width: 100%;
            height: 100px;
            position: fixed;
            z-index: 1000;
            border-radius: var(--br-bottom);
            opacity: .950;
        }

        .nav-container .nav-left-container h3{
            font-size: calc(0.8rem + 2vw);
            font-weight: var(--fw-600);
            color: var(--clr-200);
        }

        .nav-container .nav-right-container a{
            font-size: var(--fs-1);
            font-weight: var(--fw-400);
            color: var(--clr-200);
            padding: 1rem 1.2rem;
        }

        .nav-container .nav-right-container a:nth-child(1){
            color: var(--clr-100);
        }

        .nav-container .nav-right-container a:hover{
            color: var(--clr-100);
            border-bottom: 2px solid var(--clr-100);
        }

        .nav-container .nav-right-menu-container{
            display: none;
            font-size: var(--fs-1-5);
            color: var(--clr-200);
        }


        .nav-left-container,
        .nav-right-container,
        .nav-container .nav-right-menu-container{
            margin: 0 5rem;
        }

        @media(max-width: 992px){
            height: 70px;

            .nav-container{
                height: 70px;
            }

            .nav-container .nav-right-container{
                display: none;
            }

            .nav-container .nav-right-menu-container{
                display: block;
            }

            .nav-container .nav-right-menu-container i{
                font-size: calc(.7rem + 2vw);
            }
        }

        @media(max-width: 768px){
            .nav-left-container,
            .nav-right-container,
            .nav-container .nav-right-menu-container{
                margin: 0 3rem;
            }
        }

        @media(max-width: 568px){
            .nav-left-container,
            .nav-right-container,
            .nav-container .nav-right-menu-container{
                margin: 0 2rem;
            }
        }

        @media(max-width: 320px){
            .nav-left-container,
            .nav-right-container,
            .nav-container .nav-right-menu-container{
                margin: 0 1rem;
            }
        }
`
