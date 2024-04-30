import React, { useEffect, useState } from 'react'
import HTMLReactParser from 'html-react-parser';
import { QuestTxtStyle } from './QuestTxt.styled'
import { Vocabulary } from '../Vocabulary/Vocabulary'
import axios from 'axios';
import { getApiLink } from '../../api/getApiLink';
import getCookie from '../../functions/getCookie';

import VocabularyPh from '../../assets/img/vocabulary.png'
import { toast } from 'react-toastify';

export const QuestTxt = ({ dataItem, questStoreItem }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenTranslate, setIsOpenTranslate] = useState(false);
    const [newTxt, setNewTxt] = useState('');
    const [blockX, setBlockX] = useState(0);
    const [blockY, setBlockY] = useState(0);
    const [selectedWordTranslation, setSelectedWordTranslation] = useState('');

    const handleOpenVocabulary = () => {
        setIsOpen(!isOpen);
    }

    const handleOpenTranslate = (e) => {

        setIsOpenTranslate(!isOpenTranslate);

        const rect = e.target.getBoundingClientRect();
        setBlockY(rect.top);
        setBlockX(rect.left);
    }

    useEffect(() => {

        function replaceWords(text, words) {
            words?.forEach((wordObj) => {
                const regex = new RegExp('\\b' + wordObj.word.toLowerCase() + '\\b', 'gi');
                text = text?.replace(regex, `<span className="add-word" data-id='${wordObj?.id}' data-translate='${wordObj?.description}'>${wordObj?.word}</span>`);
            });
            return text;
        }
    
        const replacedText = replaceWords(dataItem?.quest_text, dataItem?.words);
        setNewTxt(replacedText)
    
        setTimeout(() => {
            document.querySelectorAll(".add-word").forEach((item) => {
                item.onclick = () => {
                    const word = String(item.getAttribute("data-translate"));
                    const wordId = String(item.getAttribute("data-id"));
                    setSelectedWordTranslation({
                        word,
                        wordId,
                    });
                }
            })
        }, 500)
    
    }, [])

    const handleAddToVocabulary = (wordId) => {
        axios.defaults.headers.common["Authorization"] = `Bearer ${getCookie("token")}`;

        axios.post(getApiLink(`/api/vocabulary/add?pk=${wordId}`))
            .then(({data}) => {
                toast.success('word added to dictionary', data);
                setIsOpenTranslate(false);
            })
            .catch(err => {
                console.error(err);
                toast.warning(err.response.data.detail);
                setIsOpenTranslate(false);
            })
    };

    console.log(questStoreItem);


  return (
    <QuestTxtStyle>
        <h2 className='animate__animated animate__fadeIn'>
            {dataItem.name}
        </h2>
        <p>{questStoreItem?.text}</p>
        <div className='translations__pos animate__animated animate__fadeIn'>
            <p onClick={handleOpenTranslate}>
                {HTMLReactParser(newTxt ?? '')}
            </p>
            {isOpenTranslate ? (
                <div className="translations" style={{top: blockY + 40, left: blockX - 100}}>
                    <div className="translations__container">
                        <p>
                            {selectedWordTranslation.word}
                        </p>
                    </div>
                    <button onClick={() => handleAddToVocabulary(selectedWordTranslation.wordId)}>Add to vocablyary</button>
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
