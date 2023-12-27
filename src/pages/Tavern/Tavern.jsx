import React from 'react'
import { TavernStyle } from './Tavern.styled'

import BackBtn from '../../assets/img/icons/Go-back.svg'
import { NavLink } from 'react-router-dom'

export const Tavern = () => {
  return (
    <div className='container-login'>
        <TavernStyle>
            <NavLink to={'/map'} className="back__btn">
                <img src={BackBtn} alt="arrow ic" />
                To Map
            </NavLink>
            <ul className="desk">
                <li>
                    <h2>
                        Лучший процент правильных ответов
                    </h2>
                    
                </li>
                <li>
                    <h2>
                        Лучший <br />в уровне 1+
                    </h2>

                </li>
                <li>
                    <h2>
                        Самый активный пользователь
                    </h2>

                </li>
                <li>
                    <h2>
                        Лучшие результаты (общый рейтинг)
                    </h2>

                </li>
            </ul>
        </TavernStyle>
    </div>
  )
}
