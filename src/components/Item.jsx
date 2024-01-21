import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Item = (props) => {
    const { id, name, image } = props
    return (
        <>
            <Card>
                <div className='card'>
                    <Link to={`/product/${id}`}><img src={image} alt="" /></Link>
                    <div className='card-bottom-container'>
                        <h3>{id}</h3>
                        <h3>{name}</h3>
                        <p></p>
                    </div>
                </div>
            </Card>
        </>
    )
}

export default Item

const Card = styled.div`
        .card{
            display: flex;
            justify-content: flex-end;
            align-items: center;
            border-radius: var(--br-general);
            position: relative;
            border: none;
        }

        .card img{
            border-radius: var(--br-general);
            height: 200px;
            width: 350px;
            min-width: 300px;
        }

        .card .card-bottom-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            text-align: center;
            background: var(--clr-200);
            width: 80%;
            border-radius: var(--br-general);
            overflow: hidden;
            position: absolute;
            bottom: -25px;
            border: solid 1px var(--clr-300);

        }

        .card .card-bottom-container h3:nth-child(1) {
            font-family: var(--ff-header);
            font-size: var(--fs-1-2);
            color: var(--clr-300);
            background: var(--clr-100);
            padding: 1rem;
        }

        .card .card-bottom-container h3:nth-child(2) {
            font-family: var(--ff-cursive);
            font-size: var(--fs-1-2);
            color: var(--clr-100);
        }

        @media (max-width: 468px) {
            .card img{
                min-width: 0px;
            }
        }
`
