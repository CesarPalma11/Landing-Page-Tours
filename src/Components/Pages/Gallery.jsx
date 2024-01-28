import React from 'react'
import imagen1 from '../../assets/imagen-1.jpg'
import imagen2 from '../../assets/imagen-2.jpg'
import imagen3 from '../../assets/imagen-3.jpg'

import './Gallery.css'



const Gallery = () => {
    
    
  return (
    <> 
    

    <div className="grid-gallery">
        <div className="grid-item">
            <a href={imagen1} data-lightbox="gridImage">
                <img src={imagen1} alt='img'></img>
            </a>
        </div>
        <div className="grid-item">
            <a href={imagen2} data-lightbox="gridImage">
                <img src={imagen2} alt='img'></img>
            </a>
        </div>
        <div className="grid-item">
            <a href={imagen3} data-lightbox="gridImage">
                <img src={imagen3} alt='img'></img>
            </a>
        </div>
        <div className="grid-item">
            <a href={imagen2} data-lightbox="gridImage">
                <img src={imagen2} alt='img'></img>
            </a>
        </div>
        <div className="grid-item">
            <a href={imagen1} data-lightbox="gridImage">
                <img src={imagen1} alt='img'></img>
            </a>
        </div>
        <div className="grid-item">
            <a href={imagen2} data-lightbox="gridImage">
                <img src={imagen2} alt='img'></img>
            </a>
        </div>
    </div>



    </>
    
  )
  
}

export default Gallery

