import {createSlice} from "@reduxjs/toolkit";


const toolkitSlice = createSlice({
    name: "toolkit",
    initialState: {
        user: {},
        quest: {},
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload
            console.log(action.payload);
        },
        setQuest(state, action) {
            state.quest = action.payload
        }
    }
})

export default toolkitSlice.reducer;
export const {

    setUser,
    setQuest,

} = toolkitSlice.actions;