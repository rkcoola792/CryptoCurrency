import React, { useState } from 'react'
import { useNewsData } from './hooks/useNewsData'
import { useSelector } from 'react-redux';
import { Card, Space } from "antd";
import { Link } from 'react-router-dom';

const News = () => {
  useNewsData();
  const news = useSelector(store=>store.newsSlice.news)
  console.log("newsss",news)
  // if (!news)
  // return "Loading..."
  const [upperLength,setUpperLength]=useState(10)
  return (
    <div className="news-container ">
      <p
        className="absolute right-4 top-[58rem] cursor-pointer"
        onClick={() =>
          (upperLength == 10 ? setUpperLength(50) : setUpperLength(10))
        }
      >
        {upperLength==10?"Show More...":"Show Less"}
      </p>
      {news?.slice(0, upperLength)?.map((news, index) => (
        <Link to={news.URL}>
          <Space
            className="mx-2 my-4 "
            direction="vertical"
            size={24}
            key={index}
          >
            <Card
              className="mr-1 h-auto"
              style={{
                width: 320,
              }}
              hoverable
            >
              <p className="font-bold">{news.Title}</p>
            </Card>
          </Space>
        </Link>
      ))}
    </div>
  );
}

export default News
