import React from 'react'
import {millify} from 'millify';

const CryptoStats = ({coinInfo}) => {
    console.log(coinInfo)
   
    const { rank, price, marketCap, numberOfExchanges, allTimeHigh } = coinInfo?.coinInfo;
  return (
    <div className="stats-container w-64">
      <h1 className="heading"></h1>
      <h1 className="sub-heading"></h1>
      <p className="flex justify-between mb-4">
        Rank <span>{rank}</span>{" "}
      </p>
      <p className="flex justify-between mb-4">
        Price <span>{millify(price)}</span>
      </p>
      <p className="flex justify-between mb-4">
        All Time High <span>{millify(allTimeHigh.price)}</span>
      </p>
      <p className="flex justify-between mb-4">
        Number of Exchanges <span>{numberOfExchanges}</span>
      </p>
      <p className="flex justify-between mb-4">
        Market Cap <span>{millify(marketCap)}</span>
      </p>
    </div>
  );
}

export default CryptoStats
