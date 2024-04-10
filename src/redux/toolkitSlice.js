import {createSlice} from "@reduxjs/toolkit";


const toolkitSlice = createSlice({
    name: "toolkit",
    initialState: {
        user: {},
        quest: {},
        language: {},
        answerQuest: [],
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload
            console.log(action.payload);
        },
        setQuest(state, action) {
            state.quest = action.payload
        },
        setLanguage(state, action) {
            state.language = action.payload
        },
        addAnswer(state, action) {
            state.answerQuest = [...state.answerQuest, action.payload]
            // state.answerQuest = {
            //     'id': quest.id
            // }
        }
    }
})

export default toolkitSlice.reducer;
export const {

    setUser,
    setQuest,
    setLanguage,
    addAnswer,

} = toolkitSlice.actions;