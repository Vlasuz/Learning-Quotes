import React from 'react'
import SlideBgd from '../../../../../../assets/img/img-slide.svg'
import SlidePh from '../../../../../../assets/img/img-slide.png'

export const LangSlide = () => {
  return (
    <>
        <div className="slide__photo">
            <img src={SlidePh} alt="slide ph" />
            <img className='slide__photo__bgd' src={SlideBgd} alt="slide bgd" />
        </div>

        <div className="text__container">
            <h2>
                Something About Arabic
            </h2>
            <p>
                Some Text will be here
                Some Text will be here
            </p>
            <p>
                Some Text will be here
            </p>
        </div>
    </>
  )
}
