import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => {
    return (
        <>
            <HeaderNav>
                <div className='nav-container'>
                    <div className='scroll-watcher'></div>

                    <div className='nav-left-container'>
                        <h3>KOPI</h3>
                    </div>
                    <div className='nav-right-container'>
                        <Link to="/">HOME</Link>
                        <a href="#">PAGES <i className="fa-solid fa-angle-down"></i></a>
                        <Link to="/products">PRODUCT</Link>
                        <Link to="/contact">CONTACT</Link>
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
    // align-items: center;
    height: 50px;
    background-color: rgba(0, 0, 0, 0.9);
    font-family: var(--ff-header);

        .nav-container{
            display: flex;
            justify-content: space-between;
            background-color: var(--clr-300);
            align-items: center;
            height: 100px;
            width: 100%;
            position: fixed;
            z-index: 2;
            border-radius: var(--br-bottom);
            opacity: .9;
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

        .scroll-watcher {
            height: 3px;
            width: 100%;
            background: var(--clr-100);
            position: fixed;
            top: 0;
            scale: 0 1;
            animation: scroll-watcher linear;
            animation-timeline: scroll();
            transform-origin: left;
        } 

        @keyframes scroll-watcher {
            to { scale: 1 1; }
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
