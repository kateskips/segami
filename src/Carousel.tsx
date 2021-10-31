import React, { useState } from "react";
import Data from "./imageData.json";
import styled from 'styled-components'

const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
  
`;


function Carousel() {
  const [images, setImage] = useState(Data)
  
  if (images.length === 0) {
    return (
      <section className='section'>
        <h2>No images</h2>
      </section>
    )
  } else {
    return (
      <section className='section'>
        <div className="title">
          <h1>XXXXXX</h1>
        </div>
        <div className="the-carousel">
          {images.map(({ image }) => {
            return <img src={image} alt='ten hundred art' className="image" />
          })}
        </div>
        <Button className="prev-button">Prev</Button>
        <Button className="next-button">Next</Button>
      </section>
    )
  }
}






export default Carousel;
