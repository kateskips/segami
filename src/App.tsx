import React from 'react';
import {Carousel, ImagesList} from './Carousel';
import './App.css';
import Data from './imageData.json';

function App() {
  return (
    <>
      <h2>Full</h2>
      <Carousel images={Data} />
      <h2>Empty</h2>
      <Carousel images={[] as ImagesList} />
    </>
  )
}

export default App;
