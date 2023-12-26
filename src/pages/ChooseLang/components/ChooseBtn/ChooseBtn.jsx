import React from 'react'
import { ChooseBtnStyle } from './ChooseBtn.styled'

export const ChooseBtn = ({choose}) => {
  return (
    <ChooseBtnStyle>
        <button>
            {choose}
        </button>
    </ChooseBtnStyle>
  )
}
