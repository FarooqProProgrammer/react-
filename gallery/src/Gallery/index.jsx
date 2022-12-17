import React from 'react'
import "./styles.css"
import { image } from './Image'



const Gallery = () => {
  return (
    <div>
        {image.map((item)=>{
            return (
                <img src={item.src} alt="Hello"/>
            )
        })}
    </div>
  )
}

export default Gallery