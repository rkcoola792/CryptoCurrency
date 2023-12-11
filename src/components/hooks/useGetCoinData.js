import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {  getCoinInfo } from "../slices/coinData";
export const useGetCoinData = (coinId) => {
    console.log("uuuuuuuuuuuuuuuiidddd",coinId)
  const dispatch = useDispatch();
  const useGetCoinData = async () => {
   const url = `https://coinranking1.p.rapidapi.com/coin/${coinId}`;
   const options = {
     method: "GET",
     headers: {
       "X-RapidAPI-Key": "fa4402f88emsh0474d492f98faf9p1bfee7jsn867af3800031",
       "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
     },
   };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log("fetched coin info",result);
      dispatch(getCoinInfo(result));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    useGetCoinData();
  
  }, []);
};
