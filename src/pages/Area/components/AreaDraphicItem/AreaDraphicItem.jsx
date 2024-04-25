import React from 'react'

export const AreaDraphicItem = ({statisticData, title}) => {
    const GraphicDataDlpt1 = statisticData?.columns || [];

    const Words = GraphicDataDlpt1[0]?.value;
    const WordsSum = (GraphicDataDlpt1[0]?.value * 100) / Words;


    const AnswerSum = Words ?? GraphicDataDlpt1[0]?.correct + GraphicDataDlpt1[0]?.incorrect;
    const AnswerCorrect = GraphicDataDlpt1[0]?.correct;
    const AnswerCorrectPercent = (AnswerCorrect * 100) / AnswerSum;
    const AnswerIncorrectPercent = 100 - AnswerCorrectPercent;

    if (!statisticData?.columns?.length) {
        return <li className='graphic__item' style={{height: '100%'}}>
                <h2>
                    {title}
                </h2>
                <div className="graphic__con">
                    <h2 style={{margin: '0 auto', marginTop: '20px'}}>No data yet</h2>
                </div>
            </li>   
    }

    return (
        <li className='graphic__item'>
            <h2>
                {title}
            </h2>
            <div className="graphic__con">
                <ul className="graphic__num">
                    <li>
                        <p>
                            {AnswerSum}
                        </p>
                    </li>
                    <li>
                        <p>
                            {(AnswerSum / 4 * 3).toFixed(0)}
                        </p>
                    </li>
                    <li>
                        <p>
                            {(AnswerSum / 4 * 2).toFixed(0)}
                        </p>
                    </li>
                    <li>
                        <p>
                        {(AnswerSum / 4).toFixed(0)}
                        </p>
                    </li>
                    <li>
                        <p>
                            0
                        </p>
                    </li>
                </ul>

                <ul className='graphic__stats'>
                    {GraphicDataDlpt1?.map(item => (
                        <li key={item.date}>
                            {!item.value ? (
                                <div className="column">
                                    {item.correct === 0 ? null : 
                                        <div className="column__green" style={{maxHeight: `${AnswerCorrectPercent}%`}}></div>
                                    }
                                    {item.incorrect === 0 ? null : 
                                        <div className="column__red" style={{maxHeight: `${AnswerIncorrectPercent}%`}}></div>
                                    }
                                </div>
                                ) : (
                                    <div className="column">
                                        {/* {  */}
                                            <div className="column__green" style={{background: '#FFDFD6', maxHeight: `${WordsSum}%`}}></div>
                                        {/* } */}
                                    </div>
                                )
                            }
                            <p>
                                {item.date}
                            </p>
                        </li>
                    ))}                                
                </ul>
            </div>
        </li>   
    )
}
