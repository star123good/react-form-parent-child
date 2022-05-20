import React, { createContext, useReducer } from "react";
  
const ACTIONS = {
    setName: 'ACTIONS_SET_NAME',
    setAge: 'ACTIONS_SET_AGE',
    validate: 'ACTIONS_SET_VALIDATE',
};

const initialState = {
    name: '',
    errorName: '',
    age: 0,
    errorAge: '',
};

function setName(name) {
    return {
        type: ACTIONS.setName,
        payload: name,
    };
}

function setAge(age) {
    return {
        type: ACTIONS.setAge,
        payload: age,
    };
}

function validate() {
    return {
        type: ACTIONS.validate,
    };
}

const reducer = (state, action) => {
    const { type, payload } = action;
    if (type === ACTIONS.setName) {
        return {
            ...state,
            name: payload,
        };
    }
    if (type === ACTIONS.setAge) {
        return {
            ...state,
            age: payload,
        };
    }
    if (type === ACTIONS.validate) {
        const error = {};
        if (!state.name) {
            error.errorName = 'Name is required.';
        }
        else {
            error.errorName = '';
        }
        if (state.age <= 0 || state.age > 100) {
            error.errorAge = 'Age should be 0 ~ 100.';
        }
        else {
            error.errorAge = '';
        }
        return {
            ...state,
            ...error,
        };
    }
    return state;
};

const FormContext = createContext();

export function FormProvider ({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const value = {
        name: state.name,
        errorName: state.errorName,
        age: state.age,
        errorAge: state.errorAge,
        setName: (name) => dispatch(setName(name)),
        setAge: (age) => dispatch(setAge(age)),
        validate: () => dispatch(validate()),
    };
    return (
        <FormContext.Provider value={value} >
            {children}
        </FormContext.Provider>
    )
}

export default FormContext;