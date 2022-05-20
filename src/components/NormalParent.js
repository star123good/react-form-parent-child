import React, { useState } from "react";
import NormalChildForm from "./NormalChildForm";

export default function NormalParent () {

    const [name, setName] = useState('');
    const [errorName, setErrorName] = useState('');
    const [errorAge, setErrorAge] = useState('');
    const [age, setAge] = useState(0);
    const [result, setResult] = useState('');

    const validate = () => {
        const errors = {};
        if (!name) {
            errors.name = 'Name is required.';
            setErrorName(errors.name);
        }
        else {
            setErrorName('');
        }
        if (age <= 0 || age > 100) {
            errors.age = 'Age should be 0 ~ 100.';
            setErrorAge(errors.age);
        }
        else {
            setErrorAge('');
        }
        return errors;
    };

    const onSubmit = () => {
        const err = validate();
        if (Object.keys(err).length) {
            setResult(`Error happens.`)
        }
        else {
            setResult(`Name is ${name}, and age is ${age}.`)
        }
    };

    return (
        <div className="panel">
            <div className="row">{result}</div>
            <NormalChildForm
                name={name}
                setName={setName}
                errorName={errorName}
                age={age}
                setAge={setAge}
                errorAge={errorAge}
            />
            <button onClick={onSubmit} >Submit</button>
        </div>
    );
}