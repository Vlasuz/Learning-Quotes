import React from 'react'
import { FaqStyle } from './Faq.styled'

export const Faq = () => {
  return (
    <div className='container-login'>
        <FaqStyle>
            <h2>
                F.A.Q
            </h2>
            <div className="question">
                <h3>
                    Question 1. Some Text will be here
                </h3>
                <p>
                    Question Text will be here.  Question Text will be here. Question Text will be here. Question Text will be here.
                </p>
            </div>
            <div className="question">
                <h3>
                    Question 2. Some Text will be here
                </h3>
                <p>
                    Question Text will be here.  Question Text will be here. Question Text will be here. Question Text will be here.
                </p>
            </div>
            <div className="question">
                <h3>
                    Question 3. Some Text will be here
                </h3>
                <p>
                    Question Text will be here.  Question Text will be here. Question Text will be here. Question Text will be here.
                </p>
            </div>
        </FaqStyle>
    </div>
  )
}
