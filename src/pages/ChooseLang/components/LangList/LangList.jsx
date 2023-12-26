import React from 'react'
import { LangListStyle } from './LangListStyle.styled'

import LangList_ph_1 from '../../../../assets/img/LangList-ph-1.png'
import LangList_ph_2 from '../../../../assets/img/LangList-ph-2.png'
import LangList_ph_3 from '../../../../assets/img/LangList-ph-3.png'

export const LangList = () => {
  return (
    <LangListStyle>
        <li>
            <button className='arabic'>
                <img src={LangList_ph_1} alt="country ph" />
                <h2>
                    Arabic  
                </h2>
            </button>
        </li>
        <li>
            <button className='chinese'>
                <img src={LangList_ph_2} alt="country ph" />
                <h2>
                    Chinese  
                </h2>
            </button>
        </li>
        <li>
            <button className='russian'>
                <img src={LangList_ph_3} alt="country ph" />
                <h2>
                    Russian  
                </h2>
            </button>
        </li>
    </LangListStyle>
  )
}
