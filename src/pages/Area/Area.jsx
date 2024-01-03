import React from 'react'
import { AreaStyle } from './Area.styled'
import { AreaPrize } from './components/AreaPrize/AreaPrize'
import { AreaStats } from './components/AreaStats/AreaStats'
import { AreaGraphic } from './components/AreaGraphic/AreaGraphic'
import { AreaOwner } from './components/AreaOwner/AreaOwner'

export const Area = () => {
  return (
    <div className='container-login'>
        <AreaStyle>
            <div className="area__top">
                <AreaPrize/>

                <AreaOwner/>
                
                <AreaStats/>
            </div>

            <AreaGraphic/>
        </AreaStyle>
    </div>
  )
}
