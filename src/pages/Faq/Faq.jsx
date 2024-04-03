import React, { useEffect, useState } from 'react'
import { FaqStyle } from './Faq.styled'
import axios from 'axios'
import { getApiLink } from '../../api/getApiLink'

export const Faq = () => {
    const [faqData, setFaqData] = useState([]);
    
    useEffect(() => {
        axios.get(getApiLink('/api/info/faq'))
            .then(({data}) => {
                console.log(data);
                setFaqData(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

  return (
    <div className='container-login'>
        <FaqStyle>
            <h2>
                F.A.Q
            </h2>
            {faqData.map(item => (
                <div className="question">
                    <h3>
                        {item.question}
                    </h3>
                    <p>
                        {item.answer}
                    </p>
                </div>
            ))}
        </FaqStyle>
    </div>
  )
}
