import React, { useEffect, useState } from 'react'
import { AreaStyle } from './Area.styled'
import { AreaPrize } from './components/AreaPrize/AreaPrize'
import { AreaStats } from './components/AreaStats/AreaStats'
import { AreaGraphic } from './components/AreaGraphic/AreaGraphic'
import { AreaOwner } from './components/AreaOwner/AreaOwner'
import axios from 'axios'
import { getApiLink } from '../../api/getApiLink'

export const Area = () => {
  const [statisticData, setStatisticData] = useState([]);

  useEffect(() => {
    axios.get(getApiLink('/api/user/statistics'))
      .then(({data}) => {
        console.log(data);
        setStatisticData(data)
      })
  }, [])

  return (
    <div className='container-login'>
      <AreaStyle>
      
        <div className="area__top">
          <AreaPrize/>

          <AreaOwner/>
          
          <AreaStats/>
        </div>

        <AreaGraphic statisticData={statisticData}/>

      </AreaStyle>
    </div>
  )
}
