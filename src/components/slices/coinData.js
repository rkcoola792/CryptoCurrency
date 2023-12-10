import { createSlice } from "@reduxjs/toolkit"

const coinSlice=createSlice({
    name:"coinSlice",
    initialState:{
        coinsData:null,
},
reducers:{
        addCoinsData:(state,action)=>{
            state.coinsData=action.payload
        }
}
})
export const{addCoinsData}=coinSlice.actions
export default coinSlice.reducer