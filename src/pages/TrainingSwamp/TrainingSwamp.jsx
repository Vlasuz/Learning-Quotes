import React from 'react'
import { NavigationQuest } from '../../components/NavigationQuest/NavigationQuest';
import { QuestResult } from '../../components/QuestResult/QuestResult';
import { BookQuestStyle } from '../../components/BookQuest/BookQuest.styled';
import { QuestOptionsKey } from '../../components/QuestOptionsKey/QuestOptionsKey';
import { KeywordsQuestion } from '../../components/KeywordsQuestion/KeywordsQuestion';

export const TrainingSwamp = () => {
   
  return (
    <div className='container-login'>
      <BookQuestStyle>
        <div className="book">
          <div className="book__lft">

              <KeywordsQuestion
                questTitle={'Keywords'}
              />

          </div>

          <div className="book__rht">

              <QuestOptionsKey/>

          </div>
        </div>

        {/* {questResult && <QuestResult endedQuest={endedQuest} onClose={() => setQuestResult(false)}/>} */}

        {/* <NavigationQuest nextPage={handleNextQuestion} prevPage={handlePrevQuestion}/> */}
        {/* <NavigationQuest
            nextPage={handleNextQuestion}
            prevPage={handlePrevQuestion}
            isLastQuestion={isLastQuestion}
            handleEndQuest={handleEndQuest}
          /> */}

      </BookQuestStyle>
    </div>
  )
}
