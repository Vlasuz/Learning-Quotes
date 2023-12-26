import React from 'react'

export const LangSlide = ({ title, txt, description, slidePh, slideBgd }) => {
  return (
    <>
        <div className="slide__photo">
            <img src={slidePh} alt="slide ph" />
            <img className='slide__photo__bgd' src={slideBgd} alt="slide bgd" />
        </div>

        <div className="text__container">
            <h2>
                {title}
            </h2>
            <p>
                {txt}
            </p>
            <p>
                {description}
            </p>
        </div>
    </>
  )
}
