import React, { useEffect, useState } from 'react'
import { TavernStyle } from './Tavern.styled'
import { NavLink } from 'react-router-dom'

import BackBtn from '../../assets/img/icons/Go-back.svg'
import axios from 'axios'
import { getApiLink } from '../../api/getApiLink'
import { TavernItem } from './TavernItem/TavernItem'
import getCookie from '../../functions/getCookie'

export const Tavern = () => {
    const [dataScoreboard, setDataScoreboard] = useState([]);

    console.log(dataScoreboard);

    useEffect(() => {
        axios.defaults.headers.common["Authorization"] = `Bearer ${getCookie("token")}`;

        axios.get(getApiLink('/api/quest/scoreboard'))
            .then(({data}) => {
                console.log(data);
                setDataScoreboard(data)
            })
            .catch((err) => {
                console.error(err);
            })
    }, [])



    return (
        <div className='container-login'>
            <TavernStyle>
                <NavLink to={'/map'} className="back__btn">
                    <img src={BackBtn} alt="arrow ic" />
                    To Map
                </NavLink>
                <ul className="desk">

                    <TavernItem title={'Лучший процент правильных ответов'} dataScoreboard={dataScoreboard.correct_answers_percent}/>

                    <TavernItem title={'Лучший'} subTitle={'в уровне 1+'} dataScoreboard={dataScoreboard.one_plus}/>

                    <TavernItem title={'Лучший'} subTitle={'в уровне 2+'} dataScoreboard={dataScoreboard.two_plus}/>

                    <TavernItem title={'Лучший'} subTitle={'в уровне 3'} dataScoreboard={dataScoreboard.three}/>

                </ul>
            </TavernStyle>
        </div>
    )
}
