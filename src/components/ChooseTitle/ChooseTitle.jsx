import React from 'react'
import { ChooseTitleStyle } from './ChooseTitle.styled'

export const ChooseTitle = ({ title, desc }) => {
  return (
    <ChooseTitleStyle>
        <h2>
            {title}
        </h2>
        <p>
            {desc}
        </p>
    </ChooseTitleStyle>
  )
}
