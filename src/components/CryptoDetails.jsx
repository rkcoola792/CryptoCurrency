import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGetCoinData } from './hooks/useGetCoinData'
import CryptoStats from './CryptoStats'
import { useSelector } from 'react-redux'
import { getCoinInfo } from './slices/coinData'

const CryptoDetails = () => {
const uuid = useParams()
useGetCoinData(uuid.coinId)
let coinInfo=useSelector(store=>store.coinData.coinInfo)
coinInfo=coinInfo?.data?.coin;
console.log("coinnnnnnnnnnn info select",coinInfo)

// useEffect(()=>{  
//   return () => {
//   dispatch(getCoinInfo(""));
// };},[])

  return (
    <div className="crypto-details-container">
      <div className="justify-center m-8  flex flex-col">
        <h1 className="text-4xl mb-4">{coinInfo?.name}</h1>
        <h1 className="text-slate-600 w-3/4 ">
          {coinInfo?.description}
        </h1>
      </div>
      <div className='m-8 flex justify-between'>
        <CryptoStats coinInfo={{coinInfo}}></CryptoStats> 
      </div>
    </div>
  );
}

export default CryptoDetails
