import React from 'react';
import Carousel from './Carousel';
import './App.css';
import Data from './imageData.json';

function App() {
  return (
    <>
      <h1>Full</h1>
      <Carousel data={Data} />
      <h1>Empty</h1>
      <Carousel data={[] as { image: string }[]} />
    </>
  )
}


export default App;
