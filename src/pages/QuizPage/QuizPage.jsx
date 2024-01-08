import React, { useState } from 'react'

import { ListeningQuest } from '../../components/ListeningQuest/ListeningQuest'
import { BookQuest } from '../../components/BookQuest/BookQuest'

export const QuizPage = () => {
  const [showComponent, setShowComponent] = useState(true);

  const handleNextQuest = () => {
    setShowComponent(!showComponent)
  }

  return (
    <div className='container-login'>

      {showComponent ? <ListeningQuest onClickNext={handleNextQuest}/> : <BookQuest/>}
        
    </div>
  )
}
