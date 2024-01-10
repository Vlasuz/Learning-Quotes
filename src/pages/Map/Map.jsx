import React, { useEffect, useState } from 'react'

import { MapStyle } from './Map.styled'

import BigMap from '../../assets/img/Map.png'
import ArrowDesc from '../../assets/img/icons/arrow-descrip.svg'
import { NavLink } from 'react-router-dom'

export const Map = () => {
    const [popUpId, setPopUpId] = useState(0);
    const [popUp, setPopUp] = useState(false);

    const mapTxt = [
        {
            title: 'Meadow',
            desc: "Begin your journey in the Meadow, where you'll tackle foundational language challenges suitable for beginners. Perfect for getting a taste of what's to come",
            style:{
                bottom: '60px',
                left: '50%',
                transform: 'translate(-50%)'
            },
            arrowStyle:{
                top: '60px',
                right: '-55px'
            }
        },
        {
            title: 'Village',
            desc: "Advance to the Village to enhance your language skills. Here, the tasks get tougher, testing your growing knowledge and preparing you for intermediate challenges.",
            style:{
                bottom: '84px',
                left: '84px'
            },
            arrowStyle:{
                top: '-10px',
                right: '-55px'
            }
        },
        {
            title: 'Gilded Tower',
            desc: "Ascend the Gilded Tower, where intricate language puzzles await. These tasks are designed for those who have mastered the basics and are ready to delve into more complex language constructs.",
            style:{
                top: 'calc(50% + 100px)',
                left: 'calc(50% + 10px)',
                transform: 'translate(-50%, -50%)'          
            },
            arrowStyle:{
                top: '-35px',
                right: '-45px'
            }
        },
        {
            title: 'Library',
            desc: "Wander through the Library, the realm of expert linguists. Here, the language tasks are extremely challenging, requiring top-tier proficiency and sharp wits.",
            style:{
                top: 'calc(50% + 20px)',
                left: '84px',
            },
            arrowStyle:{
                top: '-55px',
                right: '0px',
                transform: 'rotateZ(315deg)'
            }
        },
        {
            title: 'Tavern (Leaderboards)',
            desc: "Visit the Tavern to see how you stack up against other adventurers. Check out the leaderboards to find your rank and compete with friends.",
            style:{
                top: '50%',
                right: '300px',
            },
            arrowStyle:{
                top: '-50px',
                right: '-40px',
                transform: 'rotateZ(325deg)'
            }
        },
        {
            title: 'Castle (DLPT):',
            desc: "Challenge yourself with a full DLPT simulation at the Castle. Take comprehensive tests to evaluate your readiness and see if you can achieve a knightly score",
            style:{
                top: 'calc(50% + 90px)',
                left: 'calc(50% - 100px)',
                transform: 'translate(-50%, -50%)'
            },
            arrowStyle:{
                top: '-60px',
                right: '20px',
                transform: 'rotateZ(270deg)'
            }
        },
        {
            title: 'Training Swamp',
            desc: "Dive into extra practice sessions in the Training Swamp. Here you can focus on specific skills and vocabulary to strengthen your command of the language.",
            style:{
                bottom: '100px',
                right: '320px'
            },
            arrowStyle:{
                top: '-45px',
                right: '-40px',
                transform: 'rotateZ(-20deg)'
            }
        },
        {
            title: 'Castle (The Citadel of Mastery):',
            desc: "The Voyager's Skiff awaits the brave linguists seeking to navigate the vast seas of language. Future updates will unlock this journey, expanding horizons beyond the current shores of knowledge",
            style:{
                bottom: '150px',
                left: '70px'
            },
            arrowStyle:{
                top: '-50px',
                right: '80px',
                transform: 'rotateZ(220deg)'
            }
        },
        {
            title: "Boat (The Voyager's Skiff):",
            desc: "The Citadel of Mastery stands tall for those who have conquered the linguistic landscape. It will be the future bastion for the most challenging tests and the crowning achievements of language mastery.",
            style:{
                bottom: '180px',
                left: '70px'
            },
            arrowStyle:{
                top: '-50px',
                right: '80px',
                transform: 'rotateZ(220deg)'
            }
        },
    ]

    useEffect(() => {
        const timeout = setTimeout(() => {
            setPopUp(true);
        }, 1500)

        return () => clearTimeout(timeout);
    }, [])

    const nextDescription = () => {
        setPopUp(false);

        const timeout = setTimeout(() => {
            setPopUpId((prevIndex) => prevIndex + 1)
            setPopUp(true);
        }, 300)
        return () => clearTimeout(timeout);
    }

    const endDescription = (() => {
        setPopUp(false)
    })

  return (
    <div className='container-main-pages'>
        <MapStyle>
            <img src={BigMap} alt="main big map"/>
            <h2>
                Map
            </h2>

            <NavLink to={'/leader-board'} className='leader__board buttonsLink'></NavLink>
            <NavLink to={'/quiz-start'} className='training__swamp buttonsLink'></NavLink>

            {popUp && (
                <div className="description" style={mapTxt[popUpId].style}>
                    <img src={ArrowDesc} alt="arrow desc" style={mapTxt[popUpId].arrowStyle}/>
                    <h3>
                        {mapTxt[popUpId].title}
                    </h3>
                    <p>
                        {mapTxt[popUpId].desc}
                    </p>

                    {popUpId < mapTxt.length - 1 ? (
                        <button onClick={nextDescription}>Next</button>
                    ) : (
                        <button onClick={endDescription}>Lets Start</button>
                    )}
                </div>
            )}
        </MapStyle>
    </div>
  )
}
