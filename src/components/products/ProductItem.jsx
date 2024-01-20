import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../../context/context'
import ProductDetail from './productDetail'

const ProductItem = () => {
    const { productData } = useContext(ShopContext)
    const { id } = useParams()
    const product = productData?.find(item => item.id === Number(id))

    return (
        <>
            <ProductDetail item={product} />
        </>
    )
}

export default ProductItem
