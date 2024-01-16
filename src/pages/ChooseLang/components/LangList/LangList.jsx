import React, { useState } from 'react'
import { LangListStyle } from './LangListStyle.styled'

import LangList_ph_1 from '../../../../assets/img/LangList-ph-1.png'
import LangList_ph_2 from '../../../../assets/img/LangList-ph-2.png'
import LangList_ph_3 from '../../../../assets/img/LangList-ph-3.png'

export const LangList = () => {
    const [isChoose, setIsChoose] = useState(null);

    const handleClickLang = (lang) => {
        console.log(`Selected language: ${lang}`);
        setIsChoose(lang)
        document.querySelector('html').scrollTo({
            top: 500,
            behavior: 'smooth'
        });
    }

  return (
    <LangListStyle>
        <li>
            <button onClick={() => handleClickLang('arabic')} className={`arabic ${isChoose === 'arabic' ? 'selected' : ''}`}>
                <img src={LangList_ph_1} alt="country ph" />
                <h2>
                    Arabic  
                </h2>
            </button>
        </li>
        <li>
            <button onClick={() => handleClickLang('chinese')} className={`chinese ${isChoose === 'chinese' ? 'selected' : ''}`}>
                <img src={LangList_ph_2} alt="country ph" />
                <h2>
                    Chinese  
                </h2>
            </button>
        </li>
        <li>
            <button onClick={() => handleClickLang('russian')} className={`russian ${isChoose === 'russian' ? 'selected' : ''}`}>
                <img src={LangList_ph_3} alt="country ph" />
                <h2>
                    Russian  
                </h2>
            </button>
        </li>
    </LangListStyle>
  )
}
