import React, { useEffect } from 'react'
import { AreaGraphicStyle } from './AreaGraphic.styled'
import { AreaDraphicItem } from '../AreaDraphicItem/AreaDraphicItem'

export const AreaGraphic = ({statisticData}) => {

    console.log(statisticData);

    const GraphicPercent = `${statisticData.chance_success}%`
    

    return (
        <AreaGraphicStyle className='animate__animated animate__fadeInUp'>
            <ul className='graphic'>

                <AreaDraphicItem statisticData={statisticData?.all} title={'All Stats'}/>

                <AreaDraphicItem statisticData={statisticData?.one_plus} title={'Stats DLPT 1+'}/>
                
                <AreaDraphicItem statisticData={statisticData?.two_plus} title={'Stats DLPT 2+'}/>

                <AreaDraphicItem statisticData={statisticData.three} title={'Stats DLPT 3'}/>

                <AreaDraphicItem statisticData={statisticData.words} title={'New Words'}/>


                <li className='graphic__item'>
                    <h2>
                        Chance Success
                    </h2>

                    <div class="semicircle">
                        <div className="graph" style={{
                            backgroundImage: `conic-gradient(#CEFFA7, #CEFFA7 calc(${GraphicPercent} / 2), #ddd 0)`
                        }}></div>
                        <span class="label">{statisticData.chance_success} %</span>
                    </div>
                </li>
            </ul>
        </AreaGraphicStyle>
    )
}
