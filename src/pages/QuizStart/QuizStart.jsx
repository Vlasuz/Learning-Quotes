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

            <BackBtn link={'/some'}/>

            <QuizTitle quizName={'DLPT 2 +'} quizTxt={'Choose type of tasks'} />

            <div className="select">
                <NavLink to={'/listening-quest'}>
                    <img src={Listening} alt="Listening ph" />
                    Listening <br />Comprehension
                </NavLink>
                <NavLink to={'/reading-quest'}>
                    <img src={Book} alt="Book ph" />
                    Reading <br />Comprehension
                </NavLink>
            </div>

            <button>Choose</button>

        </QuizStartStyle>
    </div>
  )
}
