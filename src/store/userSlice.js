import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'


export const usersAdapter = createEntityAdapter();

const initalState = usersAdapter.getInitialState()


export const userSlice = createSlice({
    name: "users",
    initialState:  usersAdapter.getInitialState({
        status: 'idle',
      }),
    reducers: {
        userAdded: usersAdapter.addOne,
        userRemoved: usersAdapter.removeOne,
        userUpdated: usersAdapter.updateOne
    }
})



export const { userAdded, userRemoved, userUpdated } = userSlice.actions

export default userSlice.reducer