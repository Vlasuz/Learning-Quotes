import React from 'react'
import { LangListStyle } from './LangListStyle.styled'

import LangList_ph_1 from '../../../../assets/img/LangList-ph-1.png'
import LangList_ph_2 from '../../../../assets/img/LangList-ph-2.png'
import LangList_ph_3 from '../../../../assets/img/LangList-ph-3.png'

export const LangList = () => {

    const handleClickLang = () => {
        console.log('hello');
        document.querySelector('html').scrollTo({
            top: 500,
            behavior: 'smooth'
        });
    }

  return (
    <LangListStyle>
        <li>
            <button onClick={handleClickLang} className='arabic'>
                <img src={LangList_ph_1} alt="country ph" />
                <h2>
                    Arabic  
                </h2>
            </button>
        </li>
        <li>
            <button onClick={handleClickLang} className='chinese'>
                <img src={LangList_ph_2} alt="country ph" />
                <h2>
                    Chinese  
                </h2>
            </button>
        </li>
        <li>
            <button onClick={handleClickLang} className='russian'>
                <img src={LangList_ph_3} alt="country ph" />
                <h2>
                    Russian  
                </h2>
            </button>
        </li>
    </LangListStyle>
  )
}
