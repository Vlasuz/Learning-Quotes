import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import headerMenu from '../../../../assets/img/icons/header_menu.svg'
import headerProfileArr from '../../../../assets/img/icons/arrow-down.svg'

export const LoginSuccess = () => {
    const [profileOpen, setProfileOpen] = useState(false);

    const handleProfileOpen = () => {
        setProfileOpen(!profileOpen)

        if (!profileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
    }

  return (
    <>
        <div className="header__profile">
            <div className="header__profile__img">
                <h3>
                    AS
                </h3>
            </div>
            <div className="header__profile__list">
                <div className="profile__list__head" onClick={handleProfileOpen}>
                    <h2>
                        Your Profile
                    </h2>
                    <img src={headerProfileArr} alt="arrow ic" />
                </div>
                {profileOpen && (
                    <>
                        <ul className="profile__list__body">
                            <li>
                                <NavLink to={'/area'}>
                                    Open Profile
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/login'}>
                                    Log Out
                                </NavLink>
                            </li>
                        </ul>
                        <div className="profile__list__bgd" onClick={handleProfileOpen}></div>
                    </>
                )}
            </div>
        </div>
        <img className='header__burger' src={headerMenu} alt="menu icon" />
    </>
  )
}
