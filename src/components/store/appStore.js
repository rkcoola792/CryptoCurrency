import {configureStore} from "@reduxjs/toolkit"
import coinSlice from "../slices/coinData"
const store= configureStore({
reducer:{
    coinData:coinSlice
},
}
)

export default store