import React, { useEffect, useState } from 'react'
import HTMLReactParser from 'html-react-parser';

import { QuestTxtStyle } from './QuestTxt.styled'
import { Vocabulary } from '../Vocabulary/Vocabulary'

import VocabularyPh from '../../assets/img/vocabulary.png'

export const QuestTxt = ({ dataItem }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenTranslate, setIsOpenTranslate] = useState(false);
    const [newTxt, setNewTxt] = useState('');
    const [blockX, setBlockX] = useState(0);
    const [blockY, setBlockY] = useState(0);

    console.log(dataItem.words);
    console.log(dataItem.quest_text);

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
            })
        })
    }

    useEffect(() => {
        dataItem?.words?.map(item => {    
            const someText = dataItem.quest_text;
            setNewTxt(someText.replaceAll(item.word.toLowerCase(), `<span className='translatWord'>${item.word}</span>`))
            console.log();      
            return console.log(item.word.toLowerCase());
        })
    }, [])


  return (
    <QuestTxtStyle>
        <h2 className='animate__animated animate__fadeIn'>
            {dataItem.name}
        </h2>
        <div className='translations__pos animate__animated animate__fadeIn'>
            <p onClick={handleOpenTranslate}>
                {HTMLReactParser(dataItem?.quest_text ?? '')}
            </p>
            {/* <p onClick={handleOpenTranslate}>
                {HTMLReactParser(newTxt ?? '')}
            </p> */}
            {isOpenTranslate ? (
                <div className="translations" style={{top: blockY + 40, left: blockX - 100}}>
                    <div className="translations__container">
                        <h2>
                            Translation: 
                        </h2>
                        <p>
                            
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

        

        {isOpen ? <Vocabulary dataItem={dataItem} onClose={() => setIsOpen(false)}/> : null }
    </QuestTxtStyle>
  )
}
