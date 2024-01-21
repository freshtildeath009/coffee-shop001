import React from 'react'
import styled from 'styled-components'
import Button from './Button'
function ContactForm() {
    return (
        <>
            <ContactSection>
                <div className='contact-left-container'>
                    <h1>Contact Information</h1>
                    <ul>
                        <li>Address: <span>123 Street, New York, USA</span></li>
                        <li>Phone: <span>(+012) 3456 7890 123</span></li>
                        <li>Email: <span>info@example.com</span></li>
                    </ul>
                </div>
                <form className='contact-right-container' action="">
                    <div>
                        <input type="text" placeholder='Your Name' />
                        <input type="text" placeholder='Your Email' />
                    </div>
                    <input type="text" placeholder='Subject' />
                    <textarea name="" id="" cols="30" rows="10" placeholder='Message me'></textarea>
                    <Button text="Send Message" />
                </form>
            </ContactSection>
        </>
    )
}

export default ContactForm

const ContactSection = styled.section`
    display: flex;
    justify-content: space-between;
    margin: 5rem 5rem;

        .contact-left-container{
            height: 100%;
            width: 100%;
        }

        .contact-left-container h1{
            font-family: var(--ff-header);
            font-size: calc(1.5rem + 2vw);
            color: var(--clr-300);
        }

        .contact-left-container ul li{
            font-family: var(--ff-paragraph);
            font-size: var(--fs-1);
            color: var(--clr-300);
            padding: 1rem 0;
        }

        .contact-left-container ul li span{
            color: var(--clr-100);
        }

        .contact-left-container{
            height: 100%;
            width: 100%;
            font-family: var(--ff-paragraph);
        }


        .contact-right-container{
            display: flex;
            justify-content: center;
            flex-direction: column;
            height: 100%;
            width: 100%;
            gap: .5rem;
        }
        input{
            padding: 1rem;
            width: 100%;
        }

        input,
        textarea { 
            border: none;
            outline: none;
            border-bottom: 2px solid rgba(0, 0, 0, 0.5);
            font-size: var(--fs-1);
            font-family: var(--ff-paragraph);
            color: var(--clr-300);
        }

        input:focus,
        textarea:focus { 
            border-bottom: 2px solid var(--clr-300);
        }

        textarea { 
            padding: 1rem;
        }

        .contact-right-container div{
            display: flex;
            justify-content: center;
            gap: .5rem;
        }

        @media (max-width: 992px){
            flex-direction: column;
        }

        @media (max-width: 768px){
            margin: 5rem 3rem;
        }

        @media (max-width: 568px){
            margin: 5rem 2rem;
            // .contact-left-container h1{
            //     font-size: calc(1.5rem + 2vw);
            // }
        }

        @media (max-width: 320px){
            margin: 5rem 1rem;
        }
`
