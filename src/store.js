import { configureStore } from "@reduxjs/toolkit";
import formReducer from './reducers/form';

const store = configureStore({
    reducer: {
        form: formReducer,
    }
});

export default store;