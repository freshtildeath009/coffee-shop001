
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../components/Button'
import { ShopContext } from '../context/context'
import Item from './Item'

const Popular = () => {
    const { productData } = useContext(ShopContext)
    let limit = 3
    const popularData = productData.slice(0, limit)

    const popularDataDisplay = popularData.map((item, index) => {
        return <Item key={index} id={item.id} image={item.image} name={item.name} />
    })
    return (
        <PopularSection>
            <h3>Food</h3>
            <h1>Most Popular</h1>
            <div className='popular-items-container'>
                {popularDataDisplay}

            </div>
            <Link to="/products" className='popular-button-container'>
                <Button text="Go shop" />
            </Link>
        </PopularSection>
    )
}

export default Popular

const PopularSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    background-image: url("./images/bg-popular.avif");
    border-radius: var(--br-general);
    padding: 5rem 5rem;

        h3{
            font-size: calc(var(--fs-1) + 1.5vw);
            font-family: var(--ff-cursive);
            color: var(--clr-100);
        }

        h1{
            font-size: calc(2.3rem + 2vw);
            font-family: var(--ff-header);
            color: var(--clr-200);
        }

        .popular-items-container{
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 2rem;
            margin: 3rem 0;
            
        }

        .popular-button-container button{
            margin: 1rem 0 0 0;
            border: 1px solid red;  
            border: 2px solid var(--clr-100);
            padding: 1rem 3rem;
            background: none;
            color: var(--clr-200);
        }

        @media (max-width: 1278px) {
            .popular-items-container{
                gap: 3rem;  
            }

        }
        @media (max-width: 568px) {
            padding: 5rem 2rem;

        }

        @media (max-width: 320px) {
            padding: 5rem 1rem;

        }
    
`
