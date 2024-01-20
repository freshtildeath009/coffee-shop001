import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <>
            <FooterSection>
                <div className='footer-left-container'>
                    <h3>Kopi</h3>
                    <p>There cursus massa at urnaaculis estieSed aliquamellus vitae ultrs condmentum leo massamollis its estiegittis miristum.</p>
                </div>
                <div className='footer-right-container'>
                    <h3>Contact Us</h3>
                    <ul>
                        <li>123 Street, New York, USA</li>
                        <li>(+012) 3456 7890 123</li>
                        <li>info@example.com</li>
                        <li>26/7 Hours Service</li>
                    </ul>
                </div>
            </FooterSection>
        </>
    )
}

export default Footer


const FooterSection = styled.footer`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    color: var(--clr-200);
    background: var(--clr-300);
    padding: 3rem 5rem;
    gap: 2rem;

        .footer-left-container,
        .footer-right-container{
            width: 350px;
        }

        .footer-left-container h3,
        .footer-right-container h3{
            font-family: var(--ff-cursive);
            font-size: calc(var(--fs-1) + 1.5vw);
            color: var(--clr-100);
        }

        .footer-left-container p,
        .footer-right-container ul li{
            font-family: var(--ff-paragraph);
            font-size: var(--fs-1);
        }

        @media(max-width: 768px){
            padding: 3rem 3rem;
        }

        @media(max-width: 568px){
            padding: 3rem 2rem;
            flex-wrap: wrap;
        }

        @media(max-width: 320px){
            padding: 3rem 1rem;
        }
`