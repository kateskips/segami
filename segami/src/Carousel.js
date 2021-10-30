import React, {Component} from "react";
import ImageData from "./imageData.json";

class Carousel extends Component {
    render(){
        return(
            <div className='round'>
                {ImageData.map((imagePhoto, index) => {
                    return <img src={imagePhoto.image} alt='ten hundred art' />
                })}
            </div>
        )
    }
}

export default Carousel;