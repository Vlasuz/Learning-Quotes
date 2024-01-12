import React from 'react'
import { AreaOwnerStyle } from './AreaOwner.styled'

import Owner from '../../../../assets/img/owner1.png'

export const AreaOwner = () => {
  return (
    <AreaOwnerStyle>
      <img src={Owner} alt="owner ph" />
    </AreaOwnerStyle>
  )
}
