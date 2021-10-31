import React from "react";
import Data from "./imageData";
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

    return (
        <section className='section'>
            <div className="title">
                <h1>XXXXXX</h1>
            </div>
            <div className="the-carousel">
                {Data.map((imagePhoto, index) => {
                    return <img src={imagePhoto.image} alt='ten hundred art' className="image" key={imagePhoto.id} />
                })}
            </div>
            <Button className="prev-button">Prev</Button><Button className="next-button">Next</Button>
        </section>
    )
}





export default Carousel;