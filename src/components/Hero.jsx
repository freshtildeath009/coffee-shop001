import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const Hero = () => {
    return (
        <>
            <HeroSection>
                <div className='hero-section-container'>
                    <div className='hero-left-container'>
                        <h2>I LOVE YOU</h2>
                        <h1>MORE THAN COFFEE</h1>
                        <h2>BUT NOT ALWAYS</h2>
                        <h1>BEFORE COFFEE</h1>
                        <div className='hero-left-button-container'>
                            <Button text="Book a table" />
                            <Button text="Shop now" />
                        </div>
                    </div>

                    <div class="hero-right-container">
                        <div class="image-container">
                            <img src="./images/gif1.gif" alt="" />
                        </div>
                        <div class="image-container">
                            <img src="./images/gif2.gif" alt="" />
                        </div>
                        <div class="image-container">
                            <img src="./images/gif3.gif" alt="" />
                        </div>
                        <div class="image-container">
                            <img src="./images/gif4.gif" alt="" />
                        </div>

                    </div>
                </div>
            </HeroSection>
        </>
    )
}

export default Hero

const HeroSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("./images/hero-bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;

        .hero-section-container{
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 100%;
            background: rgb(0, 0, 0, 0.5);
            margin: 5rem 5rem;
            padding: 3rem 3rem;
            border-radius: var(--br-general);
            
        }

        .hero-section-container .hero-left-container{
            font-family: var(--ff-header);
            width: 100%;
            line-height: 1.2;
        }

        .hero-section-container .hero-left-container h1,
        .hero-section-container .hero-left-container h2{
            color: var(--clr-200);
        }

        .hero-section-container .hero-left-container h2{
            font-size: calc(0.7rem + 2vw);
        }

        .hero-section-container .hero-left-container h1{
            font-size: calc(0.6rem + 3vw);
        }

        .hero-left-button-container{
            display: flex;
            gap: 1rem;
            width: 300px;
            margin-top: 1rem;
        }

        .hero-left-button-container{
            display: flex;
            gap: 1rem;
            width: 300px;
        }

        .hero-left-button-container button:nth-child(2){
            background: none;
            color: var(--clr-100);
            border: 1px solid var(--clr-100);
        }

        .hero-right-container  {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            flex-direction: column;
            position: relative;
            right: 50px; 
            height: 480px;
        }

        .hero-right-container .image-container  {
            clip-path: polygon(50% 0%, 80% 50%, 50% 100%, 20% 50%);
            position: relative;
            width: 450px;
            transition: ease-in-out .5s;
        }

        .hero-right-container .image-container:hover{
            z-index: 1;
            transform: scale(1.2);
        }

        .hero-right-container .image-container:nth-child(1){
            position: absolute;
            top: 120px;
            left: -140px;
        }    
        .hero-right-container .image-container:nth-child(2){
            position: absolute;
            top: 120px;
            right: -140px;
        }  

        .hero-right-container .image-container:nth-child(4){
            position: absolute;
            top: 240px;
        }

      
        @media (max-width: 1440px) {
            .hero-right-container  {
                right: 30px; 
                height: 480px;
            }
            
            .hero-right-container .image-container  {
                clip-path: polygon(50% 0%, 80% 50%, 50% 100%, 20% 50%);
                position: relative;
                width: 400px;
            }

            .hero-right-container .image-container:nth-child(1){
                position: absolute;
                top: 120px;
                left: -125px;
            }    
            .hero-right-container .image-container:nth-child(2){
                position: absolute;
                top: 120px;
                right: -125px;
            }  
    
            .hero-right-container .image-container:nth-child(4){
                position: absolute;
                top: 240px;
            }
    
        }

        @media (max-width: 1250px) {
            .hero-section-container{
                padding: 3rem 2rem;
            }

            .hero-right-container  {
                right: 30px; 
                height: 350px;
            }
            
            .hero-right-container .image-container  {
                clip-path: polygon(50% 0%, 80% 50%, 50% 100%, 20% 50%);
                position: relative;
                width: 300px;
            }

            .hero-right-container .image-container:nth-child(1){
                position: absolute;
                top: 90px;
                left: -95px;
            }    
            .hero-right-container .image-container:nth-child(2){
                position: absolute;
                top: 90px;
                right: -95px;
            }  
    
            .hero-right-container .image-container:nth-child(4){
                position: absolute;
                top: 180px;
            }
    
        }

        @media (max-width: 1100px) {
            .hero-right-container  {
                right: 30px; 
                height: 300px;
            }
            
            .hero-right-container .image-container  {
                clip-path: polygon(50% 0%, 80% 50%, 50% 100%, 20% 50%);
                position: relative;
                width: 250px;
            }

            .hero-right-container .image-container:nth-child(1){
                position: absolute;
                top: 75px;
                left: -80px;
            }    
            .hero-right-container .image-container:nth-child(2){
                position: absolute;
                top: 75px;
                right: -80px;
            }  
    
            .hero-right-container .image-container:nth-child(4){
                position: absolute;
                top: 150px;
            }
    
        }

        @media (max-width: 992px) {
            height: 100%;

            .hero-section-container{
                flex-direction: column;
                padding: 3rem 0rem;
                gap: 2rem;
            }
            
            .hero-section-container .hero-left-container{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }

            .hero-section-container .hero-left-container h2{
                font-size: calc(2rem + 3vw);
            }

            .hero-section-container .hero-left-container h1{
                font-size: calc(0.6rem + 3vw);
            }

            .hero-right-container  {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                flex-direction: column;
                position: relative;
                right: 0; 
                height: 500px;
            }
    
            .hero-right-container .image-container  {
                clip-path: polygon(50% 0%, 80% 50%, 50% 100%, 20% 50%);
                position: relative;
                width: 450px;
            }

            .hero-right-container .image-container img {
                border: 1px solid black;
            }
    
            .hero-right-container .image-container:nth-child(1){
                position: absolute;
                top: 120px;
                left: -140px;
            }    
            .hero-right-container .image-container:nth-child(2){
                position: absolute;
                top: 120px;
                right: -140px;
            }  
    
            .hero-right-container .image-container:nth-child(4){
                position: absolute;
                top: 240px;
            }
        }

        @media (max-width: 768px) {
            .hero-section-container{
                margin: 5rem 3rem;
                flex-direction: column;
                padding: 3rem 0rem;
                gap: 2rem;
            }
            
            .hero-section-container .hero-left-container{
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }

            .hero-section-container .hero-left-container h2{
                font-size: calc(2.3rem + 2vw);
            }

            .hero-section-container .hero-left-container h1{
                font-size: calc(0.6rem + 3vw);
            }

            .hero-right-container  {
                right: 0; 
                height: 480px;
            }

            .hero-right-container .image-container  {
                border: 1px solid green;
                clip-path: polygon(50% 0%, 80% 50%, 50% 100%, 20% 50%);
                position: relative;
                width: 400px;
            }

            .hero-right-container .image-container:nth-child(1){
                position: absolute;
                top: 120px;
                left: -125px;
            }    
            .hero-right-container .image-container:nth-child(2){
                position: absolute;
                top: 120px;
                right: -125px;
            }  

            .hero-right-container .image-container:nth-child(4){
                position: absolute;
                top: 240px;
            }
        }

        @media (max-width: 725px) {
            .hero-left-button-container{
                width: 270px;
                gap: .5rem;
            }

            .hero-right-container  {
                right: 0; 
                height: 350px;
            }
            
            .hero-right-container .image-container  {
                border: 1px solid green;
                clip-path: polygon(50% 0%, 80% 50%, 50% 100%, 20% 50%);
                position: relative;
                width: 300px;
            }

            .hero-right-container .image-container:nth-child(1){
                position: absolute;
                top: 90px;
                left: -95px;
            }    
            .hero-right-container .image-container:nth-child(2){
                position: absolute;
                top: 90px;
                right: -95px;
            }  
    
            .hero-right-container .image-container:nth-child(4){
                position: absolute;
                top: 180px;
            }
        }

        @media (max-width: 568px) {
            .hero-section-container{
                margin: 2rem 2rem;
            }

            .hero-section-container .hero-left-container h2{
                font-size: calc(1.7rem + 2vw);
            }

            .hero-section-container .hero-left-container h1{
                font-size: calc(1.2rem + 2vw);
            }

            .hero-left-button-container{
                width: 210px;
            }

            .hero-right-container  {
                right: 0; 
                height: 300px;
            }
            
            .hero-right-container .image-container  {
                border: 1px solid green;
                clip-path: polygon(50% 0%, 80% 50%, 50% 100%, 20% 50%);
                position: relative;
                width: 250px;
            }

            .hero-right-container .image-container:nth-child(1){
                position: absolute;
                top: 75px;
                left: -80px;
            }    
            .hero-right-container .image-container:nth-child(2){
                position: absolute;
                top: 75px;
                right: -80px;
            }  
    
            .hero-right-container .image-container:nth-child(4){
                position: absolute;
                top: 150px;
            }
        }

        @media (max-width: 468px) {
            .hero-section-container .hero-left-container h2{
                font-size: calc(1.5rem + 2vw);
            }

            .hero-section-container .hero-left-container h1{
                font-size: calc(1rem + 2vw);
            }

            .hero-right-container  {
                height: 280px;
            }
            
            .hero-right-container .image-container  {
                border: 1px solid green;
                clip-path: polygon(50% 0%, 80% 50%, 50% 100%, 20% 50%);
                position: relative;
                width: 230px;
            }

            .hero-right-container .image-container:nth-child(1){
                position: absolute;
                top: 70px;
                left: -75px;
            }    
            .hero-right-container .image-container:nth-child(2){
                position: absolute;
                top: 70px;
                right: -75px;
            }  
    
            .hero-right-container .image-container:nth-child(4){
                position: absolute;
                top: 140px;
            }
        }

        @media (max-width: 450px) {
            .hero-section-container .hero-left-container h2{
                font-size: calc(1.5rem + 2vw);
            }

            .hero-section-container .hero-left-container h1{
                font-size: calc(1rem + 2vw);
            }

            .hero-right-container  {
                height: 250px;
            }
            
            .hero-right-container .image-container  {
                border: 1px solid green;
                clip-path: polygon(50% 0%, 80% 50%, 50% 100%, 20% 50%);
                position: relative;
                width: 200px;
            }

            .hero-right-container .image-container:nth-child(1){
                position: absolute;
                top: 65px;
                left: -65px;
            }    
            .hero-right-container .image-container:nth-child(2){
                position: absolute;
                top: 65px;
                right: -65px;
            }  
    
            .hero-right-container .image-container:nth-child(4){
                position: absolute;
                top: 130px;
            }
        }

        @media (max-width: 430px) {
            .hero-section-container .hero-left-container h2{
                font-size: calc(1.2rem + 2vw);
            }

            .hero-section-container .hero-left-container h1{
                font-size: calc(0.8rem + 2vw);
            }
        }
        

        @media (max-width: 400px) {
            .hero-section-container .hero-left-container h2{
                font-size: calc(1rem + 2vw);
            }

            .hero-section-container .hero-left-container h1{
                font-size: calc(0.6rem + 2vw);
            }

            .hero-right-container  {
                height: 200px;
            }
            
            .hero-right-container .image-container  {
                border: 1px solid green;
                clip-path: polygon(50% 0%, 80% 50%, 50% 100%, 20% 50%);
                position: relative;
                width: 160px;
            }

            .hero-right-container .image-container:nth-child(1){
                position: absolute;
                top: 50px;
                left: -50px;
            }    
            .hero-right-container .image-container:nth-child(2){
                position: absolute;
                top: 50px;
                right: -50px;
            }  
    
            .hero-right-container .image-container:nth-child(4){
                position: absolute;
                top: 100px;
            }
        }

        
        @media (max-width: 320px) {
            .hero-section-container{
                margin: 2rem 1rem;

            }
        }
        
`
