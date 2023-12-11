import { createSlice } from "@reduxjs/toolkit"

const coinSlice=createSlice({
    name:"coinSlice",
    initialState:{
        coinsData:null,
        coinInfo:null
},
reducers:{
        addCoinsData:(state,action)=>{
            state.coinsData=action.payload
        },
        getCoinInfo:(state,action)=>{
            state.coinInfo=action.payload;
        }
}
})
export const{addCoinsData,getCoinInfo}=coinSlice.actions
export default coinSlice.reducer