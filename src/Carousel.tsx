import React, { useState } from "react";
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


function Carousel(props: { data: { image: string }[] }) {
  const [images, setImages] = useState(props.data)

  return (
    <section className='section'>
      {(images.length === 0) ?
        (
          <h2>No images</h2>
        ) : (
          <>
            <div className="the-carousel">
              {images.map(({ image }) => {
                return <img src={image} alt='ten hundred art' className="image" />
              })}
            </div>
            <Button className="next-button" onClick={e => {
              setImages(([first, ...rest]) => [...rest, first])
            }}>Next</Button>
            <Button className="prev-button" onClick={e => {
              setImages((oldImages) => [oldImages[oldImages.length - 1], ...oldImages.slice(0, -1)])
            }}>Prev</Button>
          </>
        )
      }
    </section>
  )
}

export default Carousel;
