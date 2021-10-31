import React from 'react';
import Carousel from './Carousel';
import './App.css';
import Data from './imageData.json';

function App() {
  return (
    <>
      <Carousel data={Data}/>
      <Carousel data={[] as {image: string}[]}/>
    </>
  )
}


export default App;
