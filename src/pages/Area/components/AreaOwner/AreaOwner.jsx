import React, { useEffect, useState } from 'react'
import { AreaOwnerStyle } from './AreaOwner.styled'
import getCookie from '../../../../functions/getCookie'
import setCookie from '../../../../functions/setCookie'

import Owner from '../../../../assets/img/owner1.png'
import ArrowIc from '../../../../assets/img/icons/Arrow-top-desk.svg'

export const AreaOwner = () => {
  const [tutorPopUp, setTutorPopUp] = useState(false);

  const handleClickTutor = () => {
    setTutorPopUp(!tutorPopUp)
    setCookie('tutorial__owner', 'true');
  }


  useEffect(() => {
    const hasCookie = getCookie('tutorial__owner') === 'true';

    const tutorTimeout = setTimeout(() => {
      if (!hasCookie) {
        setTutorPopUp(true);
      }
    }, 2000)

    return () => clearTimeout(tutorTimeout);
  }, []);

  return (
    <AreaOwnerStyle>
      <img src={Owner} alt="owner ph" />

      {tutorPopUp && (
        <div className="tutorial__owner" onClick={() => handleClickTutor()}>
          <img className='tutorial__owner__arrow' src={ArrowIc} alt="arrow ic" />
          <h2>
            New Arrival
          </h2>
          <p>
            You've just arrived here; you're unknown, your skills and your worth are a big mystery to everyone.
          </p>
        </div>
      )}
    </AreaOwnerStyle>
  )
}
