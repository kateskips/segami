import React from 'react';
import Carousel from './Carousel';
import './App.css';
import Data from './imageData.json';

function App() {
  return (
    <>
      <h2>Full</h2>
      <Carousel data={Data} />
      <h2>Empty</h2>
      <Carousel data={[] as { image: string }[]} />
    </>
  )
}

export default App;
