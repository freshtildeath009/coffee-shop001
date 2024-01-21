import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => {
    const [showPagesMenu, setShowPagesMenu] = useState(false)

    const [addColorHome, setAddColorHome] = useState(true)
    const [addColorProduct, setAddColorProduct] = useState(false)
    const [addColorContact, setAddColorContact] = useState(false)
    const [addColorBooking, setAddColorBooking] = useState(false)
    const [addColorAbout, setAddColorAbout] = useState(false)

    const _handleShowPagesMenu = () => {
        setShowPagesMenu(!showPagesMenu)
        const navPagesMenu = document.querySelector(".nav-pages-menu")
        navPagesMenu.style.display = showPagesMenu ? "flex" : "none"
    }

    const activeLink = "activeLink"
    const normalLink = "normalLink"
    return (
        <>
            <HeaderNav>
                <div className='nav-container' >
                    <div className='scroll-watcher'></div>

                    <div className='nav-left-container'>
                        <h3>KOPI</h3>
                    </div>
                    <div className='nav-right-container'>
                        <NavLink className={({ isActive }) => (isActive ? activeLink : normalLink)} to="/" >HOME</NavLink>
                        <a href="#" onClick={_handleShowPagesMenu}>PAGES <i className="fa-solid fa-angle-down"></i></a>
                        <NavLink className={({ isActive }) => (isActive ? activeLink : normalLink)} to="/products" >PRODUCT</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? activeLink : normalLink)} to="/contact" >CONTACT</NavLink>
                    </div>
                    <div className='nav-right-menu-container'>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                    <div className='nav-pages-menu'>
                        <NavLink className={({ isActive }) => (isActive ? activeLink : normalLink)} to="/booking" >BOOKING</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? activeLink : normalLink)} to="/about" href="" >ABOUT</NavLink>
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
    height: 50px;
    background-color: rgba(0, 0, 0, 0.9);
    font-family: var(--ff-header);

    
       .nav-container .nav-right-container a.activeLink{
        color: var(--clr-100);
        }

        .nav-container .nav-right-container a.normalLink{
            color: var(--clr-200);
            }
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


        .nav-pages-menu{
            display: none;
            border-radius: var(--br-bottom);
            flex-direction: column;
            margin-top: 6.2rem;
            position: fixed;
            background: var(--clr-300);
            top: 0;
            right: 300px;
            overflow: hidden;
        }

        .link.active {
            color: var(--clr-100);
        }
        .nav-pages-menu a{
            font-family: var(--ff-header);
            font-size: var(--fs-1);
            color: var(--clr-200);
            padding: 1rem 2rem;
            background: var(--clr-300);
            border-bottom: solid 2px var(--clr-300);
        }

        .nav-pages-menu a.activeLink{
            color: var(--clr-100);
        }

        .nav-pages-menu a.normalLink{
            color: var(--clr-200);
        }

        .nav-pages-menu a:hover{
            border-bottom: solid 2px var(--clr-100);
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

        // .nav-container .nav-right-container a.active{
        //     color: var(--clr-100);
        // }


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
