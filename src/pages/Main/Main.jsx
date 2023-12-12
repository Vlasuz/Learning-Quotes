import React from 'react'
import { Banner } from './components/Banner/Banner'
import { Hero } from './components/Hero/Hero'
import { Featers } from './components/Featers/Featers'
import { Header } from '../../components/Header/Header'

export const Main = () => {
  return (
    <>
      {/* <Header /> */}
      <Banner />
      <Hero />
      <Featers />
    </>
  )
}
