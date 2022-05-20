import React, { useState } from "react";
import ChildForm from "./ChildForm";

export default function Parent () {

    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [result, setResult] = useState('');


    const onSubmit = () => {
        if (Object.keys(errors).length) {
            setResult(`Error happens.`);
        }
        else {
            setResult(`Name is ${values.name}, and age is ${values.age}.`);
        }
    };

    return (
        <div className="panel">
            <div className="row">{result}</div>
            <ChildForm
                values={values}
                setValues={setValues}
                errors={errors}
                setErrors={setErrors}
            />
            <button onClick={onSubmit} >Submit</button>
        </div>
    );
}