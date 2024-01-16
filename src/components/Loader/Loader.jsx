import React from 'react'
import { LoaderStyle } from './Loader.styled'
import { Discuss } from 'react-loader-spinner'

export const Loader = ({ loading }) => {
  return (
    <LoaderStyle className={loading ? 'loaderActive' : ''}>
        <Discuss
          height='100'
          width='100'
          colors={['#F2CCB3', '#F2CCB3']}
        />
    </LoaderStyle>
  )
}
