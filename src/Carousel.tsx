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

//ImageList is itself a type
// ImagesList is a type of array of objects, in that array each object
// holds a url for an image with a data type of string.
export type ImagesList = { url: string }[];

// implicit => carousel = 'hello"  (string)
// explicit => carousel: string = 'Hello'(string)

// The parameter is props that has a field called `images`.
// Images is an ImagesList.
export function Carousel(props: { images: ImagesList }) {
  // Have a new state with an initial value of props.images
  const [images, setImages] = useState(props.images)

  return (
    // Return a section with some contents
    <section className='section'>
      { // ternary operator condition, carousel is either empty or not.
        (images.length === 0) ? (
          // In this case it's empty. It display no images and also no buttons.
          <h2>No images</h2>
        ) : (
          // If not empty, it displays an image and both buttons. 
          <>
            <div className="the-carousel">
              {/* the image is the first one in the array. */}
              <img src={images[0].url} alt='ten hundred art' className="image" />
            </div>
            <div className="buttons">
              {/* When the either button is pressed we rotate the array*/}
              <Button className="next-button" onClick={e => {
                // rotate the array, moving the first to the end.
                setImages(([first, ...rest]) => [...rest, first])
              }}>Next</Button>
              <Button className="prev-button" onClick={e => {
                // rotate the array, moving the last to the beginning.
                //
                // I want to write
                //
                //   setImages(([...rest, last]) => [last, ...rest])
                //
                // but javascript doesn't yet allow this.
                setImages((oldImages) => {
                  const last = oldImages[oldImages.length - 1];
                  const rest = oldImages.slice(0, -1)
                  return [last, ...rest]
                })
              }}>Prev</Button>
            </div>
          </>
        )
      }
    </section>
  )
}
