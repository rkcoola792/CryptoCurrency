import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { millify } from "millify";
import { Card, Space } from "antd";
import { Link } from "react-router-dom";
const Currencies = () => {
  // const cryptoDetails = useCoinData();
  let coinsData = useSelector((store) => store?.coinData?.coinsData);
  const [topHeading, setTopHeading] = useState(true);
  const [searchText,setSearchText]=useState("");
  coinsData = coinsData?.data?.coins;
  let topCoins;
  if (coinsData) {
    topCoins = coinsData;
    topCoins = topCoins.slice(0, 10);
  }
  const [coins, setCoins] = useState(topCoins);
  const [searchCoins, setSearchCoins] = useState(topCoins);
  console.log("coinsssssssssss", coins);
  const handleClick = () => {
    setTopHeading(false);
    setCoins(coinsData);
    setSearchCoins(coinsData);
  };
useEffect(()=>{
const filteredData=coins.filter(ele=>ele.name.toLowerCase().includes(searchText))
setSearchCoins(filteredData)
},[searchText])

console.log(searchText)
  if (coins == null) return "Loading...";

  return (
    <div className="m-4 mb-10 mt-6">
      {!topHeading && (
        <div className="search border-black m-4 text-center">
          <input
            className="p-2 rounded-lg px-4"
            type="text"
            placeholder="search crypto "
            onChange={(e)=>setSearchText(e.target.value)}
            // value={searchText}
          />
         
        </div>
      )}
      <div className="flex justify-between ">
        <h1 className="text-3xl">
          {" "}
          {topHeading && "Top 10 crypto currencies in the world"}
        </h1>
        <button className="mx-8" onClick={handleClick} >
          <Link to="/currencies">{topHeading && "More..."}</Link>{" "}
        </button>
      </div>
      <div className="">
        {searchCoins.map((currency) => (
          <Space direction="vertical" size={16} key={currency?.rank}>
            <Link to={`/crypto/${currency?.uuid}`}>
              <Card
                className="mr-1"
                title={`${currency.rank}. ${currency.name}`}
                extra={
                  <img style={{ width: 50 }} src={currency?.iconUrl}></img>
                }
                style={{
                  width: 250,
                }}
                hoverable
              >
                <p>Price: {millify(currency?.price)}</p>
                <p>Market Cap: {millify(currency?.marketCap)}</p>
                <p>Change: {millify(currency?.change)}</p>
              </Card>
            </Link>
          </Space>
        ))}
      </div>
    </div>
  );
};

export default Currencies;
