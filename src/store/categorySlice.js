const { createSlice } = require("@reduxjs/toolkit");



const categorySlice = createSlice({
    name: "categories",
    initialState: {
        categories: [],
        loading: false,
        error: ""

    }
})