import React from 'react';
import { Layout, Typography } from 'antd';
import { Carousel, ImagesList } from './Carousel';
import './App.css';
import Data from './imageData.json';

const { Content } = Layout;
const { Title } = Typography;

function App() {
  return (
    <>
      <Layout>
        <center>
        <Title>Segami</Title>
        <Title level={4}>An image carousel of Ten Hundred's Artwork</Title>
        <Content> 
          <Carousel images={Data} />
          <Carousel images={[] as ImagesList} />
        </Content>
        </center>
      </Layout>

    </>
  )
}

export default App;
