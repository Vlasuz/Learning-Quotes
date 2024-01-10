import AudioFile from '../quiz/audio/file-lesson.mp3'
// import AudioFile from '../quiz/audio/audio-1.mp3'

export const questData = [
   {
      type: 'book',
      id: '1',
      titleDesc: 'Столиця України',
      description: 'Cтолиця та найбільше місто <span>України</span>. Розташований у середній течії Дніпра, у північній Наддніпрянщині. Політичний, соціально-економічний, транспортний, освітньо-науковий, історичний, культурний та духовний центр України.',
      questionNum: '1/10',
      question: 'Яка столиця України?',
      answers: ['Київ', 'Одеса', 'Львів', 'Харків'],
      correctAnswer: 'Київ',
   },
   {
      type: 'book',
      id: '2',
      titleDesc: 'Автор гімна УкраЇни',
      description: "Держа́вний гімн Украї́ни, або сла́вень, — один із головних державних символів України поряд із прапором і гербом. Державним гімном є пісня «Ще не вмерла України і слава, і воля»: слова Павла ... , музика Михайла ... . Офіційна музична редакція ухвалена Верховною Радою 15 січня 1992 року, текст гімну затверджено законом України «Про Державний гімн України» 6 березня 2003 року.",
      questionNum: '2/10',
      answers: ['Тичина', 'Вербицький', 'Чуби́нський', 'Станкович'],
      question: 'Автор гімна УкраЇни?',
      correctAnswer: 'Чуби́нський',
   },
   {
      type: 'book',
      id: '3',
      titleDesc: 'Гори УкраЇни',
      description: 'Карпати – найбільша гірська система України, що розгортається на території сучасних Івано-Франківської, Закарпатської, Львівської та Чернівецької областей. Ці гіганти мають площу 24 тис. км², а найвищою точкою Карпат вчені вважають гору ... (2061 м), розташовану на Чорногірському хребті.',
      questionNum: '3/10',
      question: 'Яка найвища гора в Україні?',
      answers: ['Ільмен', 'Говерла', 'Бребенескул', 'Шепітський Шпиц'],
      correctAnswer: 'Говерла',
   },

   {
      type: 'book-listening',
      id: '4',
      titleDesc: 'Listening Comprehension qq',
      description: 'You can listen only 2 times',
      audioUrl: AudioFile,
      questionNum: '4/10',
      question: 'Question Text will be here.  Question Text will be here. Question Text will be here. Question Text will be here.',
      answers: ['Question 1', 'Question 2', 'Question 3', 'Question 4'],
      correctAnswer: 'Question 2',
   },
   {
      type: 'book-listening',
      id: '5',
      titleDesc: 'Listening Comprehension',
      description: 'You can listen only 1 times',
      audioUrl: AudioFile,
      questionNum: '5/10',
      question: 'Question Text will be here.  Question Text will be here. Question Text will be here. Question Text will be here.',
      answers: ['Question1', 'Question2', 'Question3', 'Question4'],
      correctAnswer: 'Question3',
   },

   {
      type: 'book-keywords',
      id: '6',
      titleDesc: 'Keywords',
      words: ['Word 1', 'Word 2', 'Word 3', 'Word 4', 'Word 5', 'Word 6'],
      questions: [
         {
            questId: 'q-1',
            questionTitle: 'Question: What is this?',
            questionAnswers: ['check 1', 'check 2', 'check 3'],
            correctAnswer: 'check 1'
         },
         {
            questId: 'q-2',
            questionTitle: 'Question: What is this? x2',
            questionAnswers: ['check1', 'check2', 'check3'],
            correctAnswer: 'check2'
         },
         {
            questId: 'q-3',
            questionTitle: 'Question: What is this? x3',
            questionAnswers: ['check-1', 'check-2', 'check-3'],
            correctAnswer: 'check-3'
         },
      ]
   },

   {
      type: 'book-reading',
      id: '6',
      titleDesc: 'Гори УкраЇни',
      questionNum: '1/10',
      question: 'Яка найвища гора в Україні?',
      answers: ['Ільмен', 'Говерла', 'Бребенескул', 'Шепітський Шпиц'],
      correctAnswer: 'Говерла',
   },
   {
      type: 'book-reading',
      id: '7',
      titleDesc: 'Столиця України',
      questionNum: '2/10',
      question: 'Яка столиця України?',
      answers: ['Київ', 'Одеса', 'Львів', 'Харків'],
      correctAnswer: 'Київ',
   },
   {
      type: 'book-reading',
      id: '8',
      titleDesc: 'Автор гімна УкраЇни',
      questionNum: '3/10',
      answers: ['Тичина', 'Вербицький', 'Чуби́нський', 'Станкович'],
      question: 'Автор гімна УкраЇни?',
      correctAnswer: 'Чуби́нський',
   },
]