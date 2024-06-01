import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart, emptyCart } from '../store/cartSlice'

function Cart() {

    const cart = useSelector(state => state.cartState)

    let dispatch = useDispatch()

    const remove = (id) => {
        // dispatch({type:"cart/removeFromCart", payload:id})
        dispatch(removeFromCart(id))
    }

    return <>
    <button onClick={() => dispatch(emptyCart())}>Empty</button>
        <ul>
            {
                cart.value.map(item => {
                    return <li>
                        {item.name} - {item.unitPrice.toFixed(2)} * {item.quantity}
                        = {(item.unitPrice * item.quantity).toFixed(2)}
                        <button onClick={() => remove(item.id)}>Remove From Cart</button>
                        </li>
                })
            }
        </ul>

    </>
}

export default Cart