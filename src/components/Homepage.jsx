import React, { useEffect } from "react";
import { Typography, Row, Col, Statistic } from "antd";
import { useSelector } from "react-redux";
import { useCoinData } from "./hooks/useCoinData";
import { millify } from "millify";
import Currencies from "./Currencies";
import News from "./News";

const { Title } = Typography;
const Homepage = () => {
  useCoinData();
  const coinsData = useSelector((store) => store.coinData.coinsData);
  // console.log("coinnss data in selector", coinsData);
  if (coinsData == null) return "Loading...";
  return (
    <div className="homepage">
      <h1 className="text-3xl m-4 ">Global Crypto Currencies</h1>
      <Row className="m-4">
        <Col span={12}>
          <Statistic
            title="Total crypto currencies"
            value={coinsData?.data?.stats?.total}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Exchanges"
            value={millify(coinsData?.data?.stats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Market Cap"
            value={millify(coinsData?.data?.stats?.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24hr value"
            value={millify(coinsData?.data?.stats?.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(coinsData?.data?.stats?.totalMarkets)}
          />
        </Col>
      </Row>
      <Currencies></Currencies>
      <div className="m-4 mb-10">
        <h1 className="text-3xl">Latest Crypto News</h1>
        <p className="opacity-50">
          <News></News>
        </p>
      </div>
    </div>
  );
};

export default Homepage;
