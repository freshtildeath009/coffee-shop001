import React from 'react'
import styled from 'styled-components'

const Button = (props) => {
    return (
        <ButtonContainer>
            {props.text}
        </ButtonContainer>
    )
}

export default Button

const ButtonContainer = styled.button`
    font-family: var(--ff-header);
    width: 100%;
    padding: 1rem 3rem; 
    font-size: var(--fs-1-5);
    background: var(--clr-100);
    border: none;
    border-radius: var(--br-general);
    white-space: nowrap;
    font-weight: var(--fw-600);
    cursor: pointer;

    @media (max-width: 1440px) {        
        padding: 1rem 2rem;
        font-size: var(--fs-1);
    }

    @media (max-width: 1100px) {        
        padding: 0.9rem 1.5rem;
        font-size: var(--fs-1);
    }

    @media (max-width: 725px) {        
        padding: 1rem 0rem;
        font-size: var(--fs-1);
    }

    @media (max-width: 568px) {        
        padding: 0.8rem 0rem;
        font-size: var(--fs-0-8);
    }
`
