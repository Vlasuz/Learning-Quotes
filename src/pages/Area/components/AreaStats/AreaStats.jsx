import React from 'react'
import { AreaStatsStyle } from './AreaStats.styled'
import { useSelector } from 'react-redux'

export const AreaStats = () => {
    const userData = useSelector(state => state.toolkit.user)

    console.log(userData);

  return (
    <AreaStatsStyle className='animate__animated animate__fadeInRight'>
        <h2>
            {userData.name}
        </h2>
        <a href={`mailto:${userData.email}`}>
            {userData.email}
        </a>
        {/* <h3>
            Status: <span>{userData.status}</span>
        </h3>
        <h3>
            Study Time: <span>Avg 2 h/day Avd 10h/week</span>
        </h3> */}
        {/* <button>
            Buy Premium
        </button> */}
    </AreaStatsStyle>
  )
}
