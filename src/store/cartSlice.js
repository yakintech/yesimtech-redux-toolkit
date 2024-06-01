import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        value: []
    },
    reducers: {
        addToCart: (state, action) => {
            //sepette ürün varsa o ürünün miktarını bir arttırır. yoksa yeni ürün oluşturup ekler
            var cartItem = state.value.find(q => q.id == action.payload.id)

            if (cartItem) {
                cartItem.quantity++
            }
            else {
                let newCartItem = {
                    id: action.payload.id,
                    name: action.payload.name,
                    unitPrice: action.payload.unitPrice,
                    quantity: 1
                }
                state.value.push(newCartItem)
            }
        },
        removeFromCart: (state, action) => {
            state.value = state.value.filter(q => q.id != action.payload)
        },
        emptyCart: (state, action) => {
            state.value = []
        }
    }
})

export default cartSlice.reducer

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions