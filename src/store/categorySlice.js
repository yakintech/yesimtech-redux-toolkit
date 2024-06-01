import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'



export const fetchAllCategories = createAsyncThunk(
    "categories/fetchAllCategories",
    () => axios.get("https://northwind.vercel.app/api/categories")
        .then(res => res.data)
)


export const deleteCategoryById = createAsyncThunk(
    "categories/deleteCategoryById",
    (id) => {
        return axios.delete("https://northwind.vercel.app/api/categories/" + id)
            .then(res => {
                return id
            })
    }
)


const categorySlice = createSlice({
    name: "categories",
    initialState: {
        categories: [],
        loading: false,
        error: ""
    },
    reducers: {

    },
    extraReducers: builder => {

        //pending, fulFilled, reject
        //getallCategories fetch cases
        builder.addCase(fetchAllCategories.pending, (state, action) => {
            state.loading = true;
            state.categories = [];
            state.error = ""
        })

        builder.addCase(fetchAllCategories.fulfilled, (state, action) => {
            state.loading = false;
            state.categories = action.payload;
            state.error = ""
        })

        builder.addCase(fetchAllCategories.rejected, (state, action) => {
            state.loading = false;
            state.categories = [];
            state.error = action.error.message
        })

        builder.addCase(deleteCategoryById.fulfilled, (state, action) => {
            state.categories = state.categories.filter(q => q.id != action.payload)
        })

    }
})


export default categorySlice.reducer