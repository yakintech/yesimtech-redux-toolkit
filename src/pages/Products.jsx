import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../store/cartSlice'

function Products() {

    const [products, setproducts] = useState([])

    useEffect(() => {
        axios.get("https://northwind.vercel.app/api/products")
            .then(res => setproducts(res.data))
    }, [])

    let dispatch = useDispatch()
    const add = (item) => {
          //dispatch({type:'cart/addToCart', payload:item})
          dispatch(addToCart(item))
         // addToCart(item) => {type:'cart/addToCart', payload:item}
    }

    return <>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Unit Price</th>
                    <th>Add To Cart</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map(item => <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.unitPrice.toFixed(2)}</td>
                        <td><button onClick={() => add(item)}>Add to cart</button></td>
                    </tr>)
                }
            </tbody>
        </table>
    </>
}

export default Products