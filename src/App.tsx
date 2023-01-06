import React from 'react';
import { Layout } from 'antd';
import {Carousel, ImagesList} from './Carousel';
import './App.css';
import Data from './imageData.json';

const { Content } = Layout;

function App() {
  return (
    <>
    <Layout>
      <Content> <Carousel images={Data} />
      <Carousel images={[] as ImagesList} />
      </Content>
    </Layout>
     
    </>
  )
}

export default App;
