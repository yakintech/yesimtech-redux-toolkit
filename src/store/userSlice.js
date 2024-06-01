//write userslice with createEntityAdapter

import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

export const usersAdapter = createEntityAdapter();

const initialState = usersAdapter.getInitialState();
const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        userAdded: usersAdapter.addOne,
        userUpdated: usersAdapter.updateOne,
        userRemoved: usersAdapter.removeOne,
    },
});

export const { userAdded, userUpdated, userRemoved } = userSlice.actions;

export default userSlice.reducer;

export const {
    selectAll: selectAllUsers,
    selectById: selectUserById,
    selectIds: selectUserIds,
} = usersAdapter.getSelectors((state) => state.userState);

