import React from 'react';
import { useState } from 'react';
import {FaArrowAltCircleRight,FaArrowAltCircleLeft } from 'react-icons/fa'



const mauritiusImages = [
  {
    imageSrc: 'Mauritius-Images/Mauritius-Lux-1.jpg',
    imageAlt: 'Mauritius, Lux Le Morne',
  },
  {
    imageSrc: 'Mauritius-Images/Mauritius-Lux-2.jpg',
    imageAlt: 'Mauritius, Lux Le Morne',
  },

]





const MauritiusGallery = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const length = mauritiusImages.length

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? length -1 : currentIndex -1)
  }

  const nextSlide = () => {
    setCurrentIndex(currentIndex === length -1 ? 0 : currentIndex +1)
  }




  

console.log(currentIndex);

  return(
    <div className='relative h-full w-full flex flex-col justify-evenly items-center my-8'>
      <div>
        <h1 className='text-xxl text-slate-200'>
          Mauritius
        </h1>
      </div>
      <div className='relative h-full w-full flex flex-row justify-center items-center mt-8'>
      <FaArrowAltCircleLeft className='cursor-pointer text-slate-200 text-xxl ' onClick={prevSlide} />

      {/* Previus Image */}
      {/* {mauritiusImages.map((prevImage, prevIndex) => {
        return(
          <div className='' key={prevIndex-1}>
          {prevIndex === currentIndex -1 && (<img width='800px' src={prevImage.imageSrc} alt={prevImage.imageAlt} className='rounded-lg'/>)}
        </div>
        )
      })} */}

      {/* Current Image */}
      {mauritiusImages.map((image, index) => {
          return(
              <div className='w-auto flex justify-center' key={index}>
                {index === currentIndex && (<img width='1000px' src={image.imageSrc} alt={image.imageAlt} className='w-2/6 rounded-lg'/>)}
              </div>
          )
          })}

      {/* Next Image */}
      {/* {mauritiusImages.map((nextImage, nextIndex) => {
              return(
                <div className='' key={nextIndex+1}>
                {nextIndex === currentIndex +1 && (<img width='800px' src={nextImage.imageSrc} alt={nextImage.imageAlt} className='rounded-lg'/>)}
              </div>
              )
            })}    */}

      <FaArrowAltCircleRight className=' cursor-pointer text-slate-200 text-xxl ' onClick={nextSlide} />
      </div>
      
    </div>
    
  )
}

export default MauritiusGallery;