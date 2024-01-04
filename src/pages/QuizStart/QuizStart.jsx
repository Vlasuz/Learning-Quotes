import React from 'react'
import { QuizStartStyle } from './QuizStart.styled'
import { BackBtn } from '../../components/BackBtn/BackBtn'
import { QuizTitle } from '../../components/QuizTitle/QuizTitle'

import Listening from '../../assets/img/listening.png'
import Book from '../../assets/img/book.png'

export const QuizStart = () => {
  return (
    <div className='container-login'>
        <QuizStartStyle>

            <BackBtn link={'/some'}/>

            <QuizTitle quizName={'DLPT 2 +'} quizTxt={'Choose type of tasks'} />

            <div className="select">
                <a href="some">
                    <img src={Listening} alt="Listening ph" />
                    Listening <br />Comprehension
                </a>
                <a href="some">
                    <img src={Book} alt="Book ph" />
                    Reading <br />Comprehension
                </a>
            </div>

            <button>Choose</button>

        </QuizStartStyle>
    </div>
  )
}
