import React from 'react'
import { AreaStatsStyle } from './AreaStats.styled'

export const AreaStats = () => {
  return (
    <AreaStatsStyle className='animate__animated animate__fadeInRight'>
        <h2>
            Anna
        </h2>
        <a href="mailto:your.email@gmail.com">
            your.email@gmail.com
        </a>
        <h3>
            Status: <span>StatusName</span>
        </h3>
        <h3>
            Study Time: <span>Avg 2 h/day Avd 10h/week</span>
        </h3>
        <button>
            Buy Premium
        </button>
    </AreaStatsStyle>
  )
}
