import {createSlice} from "@reduxjs/toolkit";


const toolkitSlice = createSlice({
    name: "toolkit",
    initialState: {
        user: {},
        quest: {},
        language: {},
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
        }
    }
})

export default toolkitSlice.reducer;
export const {

    setUser,
    setQuest,
    setLanguage,

} = toolkitSlice.actions;