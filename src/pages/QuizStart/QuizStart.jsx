import React from 'react'
import { QuizStartStyle } from './QuizStart.styled'
import { BackBtn } from '../../components/BackBtn/BackBtn'
import { QuizTitle } from '../../components/QuizTitle/QuizTitle'

import Listening from '../../assets/img/listening.png'
import Book from '../../assets/img/book.png'
import { NavLink } from 'react-router-dom'

export const QuizStart = () => {
  return (
    <div className='container-login'>
        <QuizStartStyle>

            <BackBtn link={'/map'}/>

            <QuizTitle quizName={'DLPT 2 +'} quizTxt={'Choose type of tasks'} />

            <div className="select">
                <NavLink to={'/listening-quest'} className='animate__animated animate__fadeInLeft'>
                    <img src={Listening} alt="Listening ph" />
                    Listening <br />Comprehension
                </NavLink>
                <NavLink to={'/reading-quest'} className='animate__animated animate__fadeInRight'>
                    <img src={Book} alt="Book ph" />
                    Reading <br />Comprehension
                </NavLink>
            </div>

            <button className='animate__animated animate__fadeInUp'>Choose</button>

        </QuizStartStyle>
    </div>
  )
}
