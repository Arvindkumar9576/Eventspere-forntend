import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
    name: "favorites",
    initialState: {

        name: "arvind",
    },
    reducers: {
        toggleFavorites(state, action) {
            state.name = action.payload
        },
        removeFavorites(state) {},
        clearFavorite(state) {},
    },
});

export const {toggleFavorites, removeFavorites, clearFavorite} = favoriteSlice.actions

export default favoriteSlice.reducer; // connect with store