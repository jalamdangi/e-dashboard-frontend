import { createReducer } from "@reduxjs/toolkit";

const initialstate = {
    value:56,
}
export const customReducer = createReducer(initialstate,{
    increment: (state) => {
        state.value = state.value+1;
    },
    decrement: (state) => {
        state.value = state.value-1;
    },
    incrementByVal: (state,action) => {
        state.value = state.value+action.payload;
    }
})
