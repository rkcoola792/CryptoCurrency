import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { addNews } from "../slices/newsData";

export const useNewsData=()=>{
    const dispatch =useDispatch()
    const getNews =async()=>{

    const url = "https://crypto-update-live.p.rapidapi.com/news";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "fa4402f88emsh0474d492f98faf9p1bfee7jsn867af3800031",
        "X-RapidAPI-Host": "crypto-update-live.p.rapidapi.com",
      },
    };

        try {
          const response = await fetch(url, options);
          const result = await response.json();
          console.log(result);
          dispatch(addNews(result))
        } catch (error) {
          console.error(error);
        }
    }


    useEffect(()=>{
        getNews()
    },[])
}