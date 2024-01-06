import React from 'react'
import { BookQuestStyle } from './BookQuest.styled'
import { QuestTxt } from '../QuestTxt/QuestTxt'

export const BookQuest = () => {
  return (
    <BookQuestStyle>
        <div className="book">
            <div className="book__lft">
                <QuestTxt 
                    questTitle={'Sample Passage'} 
                    questTask={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam pellentesque consequat turpis et scelerisque. Ut non enim porta neque placerat laoreet. Duis molestie pharetra imperdiet. Sed ac dolor faucibus, volutpat est sit amet, euismod lacus. Nullam tempus pulvinar viverra. Aliquam consectetur justo id mauris accumsan, feugiat pretium nisi blandit. Nunc a porttitor lacus, ac fringilla velit. Nulla varius eleifend dignissim. Sed et mauris volutpat, finibus massa nec, eleifend augue. Phasellus a nibh nec quam aliquet volutpat nec sit amet orci.'} 
                />
            </div>

            <div className="book__rht">

            </div>
        </div>
    </BookQuestStyle>
  )
}
