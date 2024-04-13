import React from 'react'
import { AreaGraphicStyle } from './AreaGraphic.styled'
import { AreaDraphicItem } from '../AreaDraphicItem/AreaDraphicItem'

export const AreaGraphic = ({statisticData}) => {

    console.log(statisticData);
    

    return (
        <AreaGraphicStyle className='animate__animated animate__fadeInUp'>
            <ul className='graphic'>

                <AreaDraphicItem statisticData={statisticData?.all} title={'All Stats'}/>

                <AreaDraphicItem statisticData={statisticData?.one_plus} title={'Stats DLPT 1+'}/>
                
                <AreaDraphicItem statisticData={statisticData?.two_plus} title={'Stats DLPT 2+'}/>

                <AreaDraphicItem statisticData={statisticData.three} title={'Stats DLPT 3'}/>

                <AreaDraphicItem statisticData={statisticData.words} title={'New Words'}/>









                {/* <li className='graphic__item'>
                    <h2>
                        Stats DLPT 2+
                    </h2>
                    <div className="graphic__con">
                        <ul className="graphic__num">
                            <li>
                                <p>
                                    32
                                </p>
                            </li>
                            <li>
                                <p>
                                    24
                                </p>
                            </li>
                            <li>
                                <p>
                                    16
                                </p>
                            </li>
                            <li>
                                <p>
                                    8
                                </p>
                            </li>
                            <li>
                                <p>
                                    0
                                </p>
                            </li>
                        </ul>
                        <ul className='graphic__stats'>
                            <li>
                                <div className="column">
                                    <div className="column__green"></div>
                                    <div className="column__red"></div>
                                </div>
                                <p>
                                    Apr 2023
                                </p>
                            </li>
                            <li>
                                <div className="column">
                                    <div className="column__green"></div>
                                    <div className="column__red"></div>
                                </div>
                                <p>
                                    May 2023
                                </p>
                            </li>
                            <li>
                                <div className="column">
                                    <div className="column__green"></div>
                                    <div className="column__red"></div>
                                </div>
                                <p>
                                    Jun 2023
                                </p>
                            </li>
                            <li>
                                <div className="column">
                                    <div className="column__green"></div>
                                    <div className="column__red"></div>
                                </div>
                                <p>
                                    Jul 2023
                                </p>
                            </li>
                            <li>
                                <div className="column">
                                    <div className="column__green"></div>
                                    <div className="column__red"></div>
                                </div>
                                <p>
                                    Aug 2023
                                </p>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className='graphic__item'>
                    <h2>
                        Stats DLPT 3+
                    </h2>
                    <div className="graphic__con">
                        <ul className="graphic__num">
                            <li>
                                <p>
                                    32
                                </p>
                            </li>
                            <li>
                                <p>
                                    24
                                </p>
                            </li>
                            <li>
                                <p>
                                    16
                                </p>
                            </li>
                            <li>
                                <p>
                                    8
                                </p>
                            </li>
                            <li>
                                <p>
                                    0
                                </p>
                            </li>
                        </ul>
                        <ul className='graphic__stats'>
                            <li>
                                <div className="column">
                                    <div className="column__green"></div>
                                    <div className="column__red"></div>
                                </div>
                                <p>
                                    Apr 2023
                                </p>
                            </li>
                            <li>
                                <div className="column">
                                    <div className="column__green"></div>
                                    <div className="column__red"></div>
                                </div>
                                <p>
                                    May 2023
                                </p>
                            </li>
                            <li>
                                <div className="column">
                                    <div className="column__green"></div>
                                    <div className="column__red"></div>
                                </div>
                                <p>
                                    Jun 2023
                                </p>
                            </li>
                            <li>
                                <div className="column">
                                    <div className="column__green"></div>
                                    <div className="column__red"></div>
                                </div>
                                <p>
                                    Jul 2023
                                </p>
                            </li>
                            <li>
                                <div className="column">
                                    <div className="column__green"></div>
                                    <div className="column__red"></div>
                                </div>
                                <p>
                                    Aug 2023
                                </p>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className='graphic__item'>
                    <h2>
                        New Words
                    </h2>
                    <div className="graphic__con">
                        <ul className="graphic__num">
                            <li>
                                <p>
                                    32
                                </p>
                            </li>
                            <li>
                                <p>
                                    24
                                </p>
                            </li>
                            <li>
                                <p>
                                    16
                                </p>
                            </li>
                            <li>
                                <p>
                                    8
                                </p>
                            </li>
                            <li>
                                <p>
                                    0
                                </p>
                            </li>
                        </ul>
                        <ul className='graphic__stats'>
                            <li>
                                <div className="column">
                                    <div className="column__green"></div>
                                    <div className="column__red"></div>
                                </div>
                                <p>
                                    Apr 2023
                                </p>
                            </li>
                            <li>
                                <div className="column">
                                    <div className="column__green"></div>
                                    <div className="column__red"></div>
                                </div>
                                <p>
                                    May 2023
                                </p>
                            </li>
                            <li>
                                <div className="column">
                                    <div className="column__green"></div>
                                    <div className="column__red"></div>
                                </div>
                                <p>
                                    Jun 2023
                                </p>
                            </li>
                            <li>
                                <div className="column">
                                    <div className="column__green"></div>
                                    <div className="column__red"></div>
                                </div>
                                <p>
                                    Jul 2023
                                </p>
                            </li>
                            <li>
                                <div className="column">
                                    <div className="column__green"></div>
                                    <div className="column__red"></div>
                                </div>
                                <p>
                                    Aug 2023
                                </p>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className='graphic__item'>
                    <h2>
                        All Mistakes & Right Answers
                    </h2>
                    <div className="graphic__con">
                        <ul className="graphic__num">
                            <li>
                                <p>
                                    32
                                </p>
                            </li>
                            <li>
                                <p>
                                    24
                                </p>
                            </li>
                            <li>
                                <p>
                                    16
                                </p>
                            </li>
                            <li>
                                <p>
                                    8
                                </p>
                            </li>
                            <li>
                                <p>
                                    0
                                </p>
                            </li>
                        </ul>
                        <ul className='graphic__stats'>
                            <li>
                                <div className="column">
                                    <div className="column__green"></div>
                                    <div className="column__red"></div>
                                </div>
                                <p>
                                    Apr 2023
                                </p>
                            </li>
                            <li>
                                <div className="column">
                                    <div className="column__green"></div>
                                    <div className="column__red"></div>
                                </div>
                                <p>
                                    May 2023
                                </p>
                            </li>
                            <li>
                                <div className="column">
                                    <div className="column__green"></div>
                                    <div className="column__red"></div>
                                </div>
                                <p>
                                    Jun 2023
                                </p>
                            </li>
                            <li>
                                <div className="column">
                                    <div className="column__green"></div>
                                    <div className="column__red"></div>
                                </div>
                                <p>
                                    Jul 2023
                                </p>
                            </li>
                            <li>
                                <div className="column">
                                    <div className="column__green"></div>
                                    <div className="column__red"></div>
                                </div>
                                <p>
                                    Aug 2023
                                </p>
                            </li>
                        </ul>
                    </div>
                </li> */}


                <li className='graphic__item'>
                    <h2>
                        Chance Success
                    </h2>
                    <div className="graphic__con graphic__con_center">
                        <ul className='graphic__stats'>
                            <li>
                                <div className="widget">
                                    <div id="progress" >
                                        <span className='progress__span'>
                                            {statisticData.chance_success}%
                                        </span>
                                        <style>{` #progress::before {
                                            border: 1.25em solid #CEFFA7;
                                        }`}</style>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </AreaGraphicStyle>
    )
}
