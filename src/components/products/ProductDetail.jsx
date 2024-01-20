import React from 'react';
import styled from 'styled-components';

const ProductDetail = (props) => {
    const { item } = props
    return (
        <>


            <ProductDetailDiv>
                <div className='product-detail-left-container'>
                    <img src={`.${item.image}`} alt="" />
                </div>
                <div className='product-detail-right-container'>
                    <h1>{item.id}</h1>
                    <h1>{item.name}</h1>
                    <h4>{item.category}</h4>
                    <p>{item.description}</p>
                </div>
            </ProductDetailDiv>


        </>
    )
}

export default ProductDetail

const ProductDetailDiv = styled.div`
    display: flex;
    justify-content: center;
    gap: 2em;
    margin: 8rem 5rem 5rem 5rem;

    .product-detail-left-container  {        
        overflow: hidden;
        border-radius: var(--br-general);
    }
    .product-detail-left-container img {
        height: 500px;
        width: 100%;
        object-fit: cover;
    }

    .product-detail-right-container h1:nth-child(1){
        font-size: calc(var(--fs-4) + 3vw);
        color: var(--clr-100);
        font-family: var(--ff-header);
    }

    .product-detail-right-container h1:nth-child(2){
        font-size: calc(2.3rem + 2vw);
        font-family: var(--ff-header);
    }

    .product-detail-right-container p{
        font-size: var(--fs-1-2);
        font-family: var(--ff-paragraph);
    }

    .product-detail-right-container h4{
        text-transform: uppercase;
        font-family: var(--ff-header);
        font-size: var(--fs-1);
    }

    @media (max-width: 992px) {
        flex-direction: column;
    }

    @media (max-width: 768px) {
        margin: 8rem 3rem 5rem 3rem;
    }

    @media (max-width: 568px) {
        margin: 8rem 2rem 5rem 2rem;
        .product-detail-left-container img {
            object-position: 50% 50%;
        }
    }

    @media (max-width: 320px) {
        margin: 8rem 1rem 5rem 1rem;
    }
`
