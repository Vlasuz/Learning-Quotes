import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

import headerProfileArr from '../../../../assets/img/icons/arrow-down.svg'

export const LoginSuccess = () => {
    const [profileOpen, setProfileOpen] = useState(false);

    const handleProfileOpen = () => {
        setProfileOpen(!profileOpen);
    };

    useEffect(() => {
        const handleBodyOverflow = () => {
            const body = document.body;
            const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

            if (profileOpen) {
                body.style.overflow = 'hidden';
                body.style.marginRight = `${scrollBarWidth}px`;
            } else {
                body.style.overflow = 'visible';
                body.style.marginRight = '0';
            }
        };
    
        handleBodyOverflow(); // Встановлюємо початковий стан при рендері
    
        window.addEventListener('resize', handleBodyOverflow);
    
        // Функція для очищення
        const cleanup = () => {
            const body = document.body;
            body.style.overflow = 'visible';
            body.style.marginRight = '0';
          window.removeEventListener('resize', handleBodyOverflow);
        };
    
        return cleanup;
    }, [profileOpen]);

  return (
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
  )
}
