import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import Item from '../components/Item'
import { ShopContext } from '../context/context'

const Products = () => {
    const { productData } = useContext(ShopContext)
    const [showCoffee, setShowCoffee] = useState(true)
    const [showMainDish, setShowMainDish] = useState(false)
    const [showDrink, setShowDrink] = useState(false)
    const [showDesert, setShowDesert] = useState(false)

    const coffeeProducts = productData.filter(Item => Item.category === "coffee")
    const mainDishProducts = productData.filter(Item => Item.category === "main dish")
    const drinkProducts = productData.filter(Item => Item.category === "drink")
    const desertProducts = productData.filter(Item => Item.category === "desert")

    const _handleShowCoffee = () => {
        setShowCoffee(true)
        setShowMainDish(false)
        setShowDrink(false)
        setShowDesert(false)
    }

    const _handleShowMainDish = () => {
        setShowCoffee(false)
        setShowMainDish(true)
        setShowDrink(false)
        setShowDesert(false)
    }

    const _handleShowDrinks = () => {
        setShowCoffee(false)
        setShowMainDish(false)
        setShowDrink(true)
        setShowDesert(false)
    }

    const _handleShowDeserts = () => {
        setShowCoffee(false)
        setShowMainDish(false)
        setShowDrink(false)
        setShowDesert(true)
    }
    return (
        <>
            <ProductsArticle>
                <div className='category-button-container'>
                    <button onClick={_handleShowCoffee}>Coffee</button>
                    <button onClick={_handleShowMainDish}>Main Dish</button>
                    <button onClick={_handleShowDrinks}>Drinks</button>
                    <button onClick={_handleShowDeserts}>Deserts</button>
                </div>
                <div className='product-display-container'>
                    {showCoffee && coffeeProducts.map((item, index) => {
                        return <Item key={index} id={item.id} image={item.image} name={item.name} />
                    })}
                    {showMainDish && mainDishProducts.map((item, index) => {
                        return <Item key={index} id={item.id} image={item.image} name={item.name} />
                    })}
                    {showDrink && drinkProducts.map((item, index) => {
                        return <Item key={index} id={item.id} image={item.image} name={item.name} />
                    })}
                    {showDesert && desertProducts.map((item, index) => {
                        return <Item key={index} id={item.id} image={item.image} name={item.name} />
                    })}
                </div>
            </ProductsArticle>
        </>
    )
}

export default Products

const ProductsArticle = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    margin: 5rem 5rem 3rem 5rem;

        .category-button-container{
            
        }
        .category-button-container button{ 
            border: 2px solid var(--clr-300);
            padding: 1rem 2rem;
            font-size: var(--fs-1-2);
            font-family: var(--ff-header);
            margin: 1rem .5rem;
            border-radius: var(--br-general);
        }

        .product-display-container{
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 2rem;  
        }

        @media (max-width: 1273px) {
            .product-display-container{
                gap: 3rem;  
            }
        }
        @media (max-width: 568px) {
            margin: 5rem 2rem 3rem 2rem;
        }
        @media (max-width: 320px) {
            margin: 5rem 1rem 3rem 1rem;
        }
`
