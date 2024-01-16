import React, { useState } from 'react'
import HTMLReactParser from 'html-react-parser';

import { QuestTxtStyle } from './QuestTxt.styled'
import { Vocabulary } from '../Vocabulary/Vocabulary'

import VocabularyPh from '../../assets/img/vocabulary.png'

export const QuestTxt = ({ questTitle, questTask }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenTranslate, setIsOpenTranslate] = useState(false);
    const [blockX, setBlockX] = useState(0);
    const [blockY, setBlockY] = useState(0);

    console.log('blockX', blockX);
    console.log('blockY', blockY);

    const handleOpenVocabulary = () => {
        setIsOpen(!isOpen);
    }

    const handleOpenTranslate = () => {
        const wordClick = document.querySelectorAll('.translatWord');

        wordClick.forEach(word => {
            word.addEventListener('click', () => {
                setIsOpenTranslate(!isOpenTranslate)

                const rect = word.getBoundingClientRect();

                setBlockY(rect.top);
                setBlockX(rect.left);

                // console.log('Top:', rect.top);
                // console.log('Left:', rect.left);
                // console.log('Width:', rect.width);
                // console.log('Height:', rect.height);
            })
        })

    }

  return (
    <QuestTxtStyle>
        <h2 className='animate__animated animate__fadeIn'>
            {questTitle}
        </h2>
        <div className='translations__pos animate__animated animate__fadeIn'>
            <p onClick={handleOpenTranslate}>
                {HTMLReactParser(questTask)}
            </p>
            {isOpenTranslate ? (
                <div className="translations" style={{top: blockY + 40, left: blockX - 100}}>
                    <div className="translations__container">
                        <h2>
                            Translation: 
                        </h2>
                        <p>
                            some word
                        </p>
                    </div>
                    <button onClose={() => setIsOpenTranslate(false)}>Add to vocablyary</button>
                </div>
            ) : (null)}
        </div>
        <button className="vocabulary__ph animate__animated animate__fadeIn" onClick={handleOpenVocabulary}>
            <img src={VocabularyPh} alt="book ph" />
                Vocabulary
        </button>

        

        {isOpen ? <Vocabulary onClose={() => setIsOpen(false)}/> : null }
    </QuestTxtStyle>
  )
}
