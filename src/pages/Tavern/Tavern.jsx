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
                <li className='desk__item'>
                    <h2>
                        Лучший процент правильных ответов
                    </h2>
                    <ul className='users'>
                        <li className='users__item'>
                            <div className="users__user">
                                <div className="users__user_ic">
                                    <p>
                                        AS
                                    </p>
                                </div>
                                <h3>
                                    Anna S
                                </h3>
                            </div>
                            <h3 className='users__percent'>
                                99%
                            </h3>
                        </li>
                        <li className='users__item'>
                            <div className="users__user">
                                <div className="users__user_ic">
                                    <p>
                                        AS
                                    </p>
                                </div>
                                <h3>
                                    Anna S
                                </h3>
                            </div>
                            <h3 className='users__percent'>
                                99%
                            </h3>
                        </li>
                        <li className='users__item'>
                            <div className="users__user">
                                <div className="users__user_ic">
                                    <p>
                                        AS
                                    </p>
                                </div>
                                <h3>
                                    Anna S
                                </h3>
                            </div>
                            <h3 className='users__percent'>
                                99%
                            </h3>
                        </li>
                        <li className='users__item'>
                            <div className="users__user">
                                <div className="users__user_ic">
                                    <p>
                                        AS
                                    </p>
                                </div>
                                <h3>
                                    Anna S
                                </h3>
                            </div>
                            <h3 className='users__percent'>
                                99%
                            </h3>
                        </li>
                        <li className='users__item'>
                            <div className="users__user">
                                <div className="users__user_ic">
                                    <p>
                                        AS
                                    </p>
                                </div>
                                <h3>
                                    Anna S
                                </h3>
                            </div>
                            <h3 className='users__percent'>
                                99%
                            </h3>
                        </li>
                        <li className='users__item'>
                            <div className="users__user">
                                <div className="users__user_ic">
                                    <p>
                                        AS
                                    </p>
                                </div>
                                <h3>
                                    Anna S
                                </h3>
                            </div>
                            <h3 className='users__percent'>
                                99%
                            </h3>
                        </li>
                    </ul>
                </li>
                <li className='desk__item'>
                    <h2>
                        Лучший <br />в уровне 1+
                    </h2>
                    <ul className='users'>
                        <li className='users__item'>
                            <div className="users__user">
                                <div className="users__user_ic">
                                    <p>
                                        AS
                                    </p>
                                </div>
                                <h3>
                                    Anna S
                                </h3>
                            </div>
                            <h3 className='users__percent'>
                                99%
                            </h3>
                        </li>
                        <li className='users__item'>
                            <div className="users__user">
                                <div className="users__user_ic">
                                    <p>
                                        AS
                                    </p>
                                </div>
                                <h3>
                                    Anna S
                                </h3>
                            </div>
                            <h3 className='users__percent'>
                                99%
                            </h3>
                        </li>
                        <li className='users__item'>
                            <div className="users__user">
                                <div className="users__user_ic">
                                    <p>
                                        AS
                                    </p>
                                </div>
                                <h3>
                                    Anna S
                                </h3>
                            </div>
                            <h3 className='users__percent'>
                                99%
                            </h3>
                        </li>
                        <li className='users__item'>
                            <div className="users__user">
                                <div className="users__user_ic">
                                    <p>
                                        AS
                                    </p>
                                </div>
                                <h3>
                                    Anna S
                                </h3>
                            </div>
                            <h3 className='users__percent'>
                                99%
                            </h3>
                        </li>
                        <li className='users__item'>
                            <div className="users__user">
                                <div className="users__user_ic">
                                    <p>
                                        AS
                                    </p>
                                </div>
                                <h3>
                                    Anna S
                                </h3>
                            </div>
                            <h3 className='users__percent'>
                                99%
                            </h3>
                        </li>
                        <li className='users__item'>
                            <div className="users__user">
                                <div className="users__user_ic">
                                    <p>
                                        AS
                                    </p>
                                </div>
                                <h3>
                                    Anna S
                                </h3>
                            </div>
                            <h3 className='users__percent'>
                                99%
                            </h3>
                        </li>
                    </ul>
                </li>
                <li className='desk__item'>
                    <h2>
                        Самый активный пользователь
                    </h2>
                    <ul className='users'>
                        <li className='users__item'>
                            <div className="users__user">
                                <div className="users__user_ic">
                                    <p>
                                        AS
                                    </p>
                                </div>
                                <h3>
                                    Anna S
                                </h3>
                            </div>
                            <h3 className='users__percent'>
                                99%
                            </h3>
                        </li>
                        <li className='users__item'>
                            <div className="users__user">
                                <div className="users__user_ic">
                                    <p>
                                        AS
                                    </p>
                                </div>
                                <h3>
                                    Anna S
                                </h3>
                            </div>
                            <h3 className='users__percent'>
                                99%
                            </h3>
                        </li>
                        <li className='users__item'>
                            <div className="users__user">
                                <div className="users__user_ic">
                                    <p>
                                        AS
                                    </p>
                                </div>
                                <h3>
                                    Anna S
                                </h3>
                            </div>
                            <h3 className='users__percent'>
                                99%
                            </h3>
                        </li>
                        <li className='users__item'>
                            <div className="users__user">
                                <div className="users__user_ic">
                                    <p>
                                        AS
                                    </p>
                                </div>
                                <h3>
                                    Anna S
                                </h3>
                            </div>
                            <h3 className='users__percent'>
                                99%
                            </h3>
                        </li>
                        <li className='users__item'>
                            <div className="users__user">
                                <div className="users__user_ic">
                                    <p>
                                        AS
                                    </p>
                                </div>
                                <h3>
                                    Anna S
                                </h3>
                            </div>
                            <h3 className='users__percent'>
                                99%
                            </h3>
                        </li>
                        <li className='users__item'>
                            <div className="users__user">
                                <div className="users__user_ic">
                                    <p>
                                        AS
                                    </p>
                                </div>
                                <h3>
                                    Anna S
                                </h3>
                            </div>
                            <h3 className='users__percent'>
                                99%
                            </h3>
                        </li>
                    </ul>
                </li>
                <li className='desk__item'>
                    <h2>
                        Лучшие результаты (общый рейтинг)
                    </h2>
                    <ul className='users'>
                        <li className='users__item'>
                            <div className="users__user">
                                <div className="users__user_ic">
                                    <p>
                                        AS
                                    </p>
                                </div>
                                <h3>
                                    Anna S
                                </h3>
                            </div>
                            <h3 className='users__percent'>
                                99%
                            </h3>
                        </li>
                        <li className='users__item'>
                            <div className="users__user">
                                <div className="users__user_ic">
                                    <p>
                                        AS
                                    </p>
                                </div>
                                <h3>
                                    Anna S
                                </h3>
                            </div>
                            <h3 className='users__percent'>
                                99%
                            </h3>
                        </li>
                        <li className='users__item'>
                            <div className="users__user">
                                <div className="users__user_ic">
                                    <p>
                                        AS
                                    </p>
                                </div>
                                <h3>
                                    Anna S
                                </h3>
                            </div>
                            <h3 className='users__percent'>
                                99%
                            </h3>
                        </li>
                        <li className='users__item'>
                            <div className="users__user">
                                <div className="users__user_ic">
                                    <p>
                                        AS
                                    </p>
                                </div>
                                <h3>
                                    Anna S
                                </h3>
                            </div>
                            <h3 className='users__percent'>
                                99%
                            </h3>
                        </li>
                        <li className='users__item'>
                            <div className="users__user">
                                <div className="users__user_ic">
                                    <p>
                                        AS
                                    </p>
                                </div>
                                <h3>
                                    Anna S
                                </h3>
                            </div>
                            <h3 className='users__percent'>
                                99%
                            </h3>
                        </li>
                        <li className='users__item'>
                            <div className="users__user">
                                <div className="users__user_ic">
                                    <p>
                                        AS
                                    </p>
                                </div>
                                <h3>
                                    Anna S
                                </h3>
                            </div>
                            <h3 className='users__percent'>
                                99%
                            </h3>
                        </li>
                    </ul>
                </li>
            </ul>
        </TavernStyle>
    </div>
  )
}
