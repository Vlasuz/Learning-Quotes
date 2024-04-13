import React from 'react'

export const AreaDraphicItem = ({statisticData, title}) => {
    const GraphicDataDlpt1 = statisticData?.columns || []

    const AnswerSum = GraphicDataDlpt1[0]?.correct + GraphicDataDlpt1[0]?.incorrect
    const AnswerCorrect = GraphicDataDlpt1[0]?.correct
    const AnswerCorrectPercent = (AnswerCorrect * 100) / AnswerSum
    const AnswerIncorrectPercent = 100 - AnswerCorrectPercent

    console.log(statisticData);

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
                            <div className="column">
                                <div className="column__green" style={{maxHeight: `${AnswerCorrectPercent}%`}}></div>
                                <div className="column__red" style={{maxHeight: `${AnswerIncorrectPercent}%`}}></div>
                            </div>
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
