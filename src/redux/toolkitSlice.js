import {createSlice} from "@reduxjs/toolkit";


const toolkitSlice = createSlice({
    name: "toolkit",
    initialState: {
        user: {},
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload
            console.log(action.payload);
        },

    }
})

export default toolkitSlice.reducer;
export const {

    setUser,

} = toolkitSlice.actions;