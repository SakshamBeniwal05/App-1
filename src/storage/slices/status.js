import { createSlice } from "@reduxjs/toolkit";

const initial_state = {
    status: false,
    userData: null,
}
const statusSlice = createSlice({
    name: "auth",
    initialState: initial_state,
    reducer:{
        login:(state,action)=>{
            state.status = true;
            state.userData = action.payload.userData
        },
        logout:(state)=>{
            state.status = false;
            state.userData = null
        }
    }
})

export const {login,logout} = statusSlice.actions
export default statusSlice.reducer