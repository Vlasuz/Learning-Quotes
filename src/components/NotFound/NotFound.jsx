import React from 'react'
import { NotFoundStyle } from './NotFound.styled'

export const NotFound = () => {
  return (
    <div className='container-login'>
        <NotFoundStyle>
            <h2>
                404
            </h2>
            <p>
                Not found
            </p>
        </NotFoundStyle>
    </div>
  )
}
