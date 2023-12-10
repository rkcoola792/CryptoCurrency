import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { addCoinsData } from "../slices/coinData";
export const useCoinData=()=>{
    const dispatch=useDispatch();
    const getCoinData = async () => {
      const url =
        "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "fa4402f88emsh0474d492f98faf9p1bfee7jsn867af3800031",
          "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        dispatch(addCoinsData(result));

      } catch (error) {
        console.error(error);
      }}
      useEffect(() => {
        getCoinData();
      },[]);

    };


