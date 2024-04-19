import React from 'react'
import { AreaPrizeStyle } from './AreaPrize.styled'

// import Cup from '../../../../assets/img/icons/cup.svg'
import Shelf1 from '../../../../assets/img/shelf1.png'
import Shelf2 from '../../../../assets/img/shelf2.png'

export const AreaPrize = () => {
  return (
    <AreaPrizeStyle className='animate__animated animate__fadeInLeft'>
        <ul className='shelf__list'>
            <li>
                {/* <img className='shelf__list__cup' src={Cup} alt="cup ph" /> */}
                <img className='shelf__list__polka' src={Shelf1} alt="shelf ph" />
            </li>
            <li>
                {/* <img className='shelf__list__cup' src={Cup} alt="cup ph" /> */}
                <img className='shelf__list__polka' src={Shelf2} alt="shelf ph" />
            </li>
        </ul>
    </AreaPrizeStyle>
  )
}
