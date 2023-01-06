import React from 'react';
import { Layout } from 'antd';
import { Carousel, ImagesList } from './Carousel';
import './App.css';
import Data from './imageData.json';

const { Content } = Layout;

function App() {
  return (
    <>
      <Layout>
        <center>
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
