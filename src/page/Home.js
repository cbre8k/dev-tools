import "./Home.css";
import React from "react";
import { Space, Image } from 'antd';

const Home = () => {
  return (
    <Space className="container home" direction="horizontal" style={{width: '100%', justifyContent: 'center'}}>
      <Image src={process.env.PUBLIC_URL + "/home.jpg"} alt="..." />
    </Space>
  )
}

export default Home;