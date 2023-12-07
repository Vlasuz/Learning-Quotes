import React from 'react'
import { FeatersStyle } from './Featers.styled'

import featersMap from '../../../../assets/img/fet-map.png'
import Cup from '../../../../assets/img/icons/Cup-First.svg'
import Folder from '../../../../assets/img/icons/Folder.svg'
import Gamepad from '../../../../assets/img/icons/Gamepad.svg'

export const Featers = () => {
  return (
    <FeatersStyle>
        <p className='featers__sub_title'>
            Features
        </p>
        <h2>
            We have incredible <br />features.
        </h2>
        <div className="featers">
            <ul className="featers__list">
                <li>
                    <div className="featers__icons featers__icons_first">
                        <img src={Cup} alt="Cup-First" />
                    </div>
                    <div className="featers__txt">
                        <h3>
                            Specialized Preparation: 
                        </h3>
                        <p>
                            The first platform entirely dedicated to DLPT preparation.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="featers__icons featers__icons_second">
                        <img src={Folder} alt="Folder" />
                    </div>
                    <div className="featers__txt">
                        <h3>
                            Vast Amount of Content: 
                        </h3>
                        <p>
                        A large volume of content including DLPT-style passages, questions, and answers.
                        </p>
                    </div>
                </li>
                <li>
                    <div className="featers__icons featers__icons_third">
                        <img src={Gamepad} alt="Gamepad" />
                    </div>
                    <div className="featers__txt">
                        <h3>
                            Gamification
                        </h3>
                        <p>
                            Engaging game-like elements to enhance user engagement and learning effectiveness.
                        </p>
                    </div>
                </li>
            </ul>
            <img src={featersMap} alt="feathers map" />
        </div>
    </FeatersStyle>
  )
}
