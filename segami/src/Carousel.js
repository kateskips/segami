import React  from "react";
import ImageData from "./imageData.json";
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


const Carousel = () => {
    return(
        <div className='image-round'>
            {ImageData.map((imagePhoto, index) => {
                return <img src={imagePhoto.image} alt='ten hundred art' className="image" />
            })}
            <Button>Next</Button><Button>Prev</Button>
        </div>
    )
}
    
       
    


export default Carousel;