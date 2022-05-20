import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    errorName: '',
    age: 0,
    errorAge: '',
};

const slice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setAge: (state, action) => {
            state.age = action.payload;
        },
        validate: (state) => {
            if (!state.name) {
                state.errorName = 'Name is required.';
            }
            else {
                state.errorName = '';
            }
            if (state.age <= 0 || state.age > 100) {
                state.errorAge = 'Age should be 0 ~ 100.';
            }
            else {
                state.errorAge = '';
            }
        },
    }
});

export default slice.reducer;
export const { setName, setAge, validate } = slice.actions;