import React from 'react'
import { AreaGraphicStyle } from './AreaGraphic.styled'

export const AreaGraphic = ({statisticData}) => {
    const GraphicDataDlpt1 = statisticData.one_plus?.columns

    return (
        <AreaGraphicStyle className='animate__animated animate__fadeInUp'>
            <ul className='graphic'>

                {GraphicDataDlpt1?.map(item => (
                    <li className='graphic__item' key={item.date}>
                        <h2>
                            Stats DLPT 1
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
                                        <div className="column__green" style={{maxHeight: '25%'}}></div>
                                        <div className="column__red" style={{maxHeight: '75%'}}></div>
                                    </div>
                                    <p>
                                        {item.date}
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
                ))}







                <li className='graphic__item'>
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
                </li>
                <li className='graphic__item'>
                    <h2>
                        Chance Success
                    </h2>
                    <div className="graphic__con graphic__con_center">
                        <ul className='graphic__stats'>
                            <li>
                                <div className="widget">
                                    <div id="progress">
                                        <span className='progress__span'>
                                            85%
                                        </span>
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
