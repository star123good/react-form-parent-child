import React, { useState, useEffect, useContext} from "react";
import FormContext from "../../contexts/form";
import ChildForm from "./ChildForm";

export default function Parent () {

    const { name, errorName, age, errorAge, validate } = useContext(FormContext);

    const [result, setResult] = useState('');
    const [submit, setSubmit] = useState(false);

    const onSubmit = () => {
        validate();
        setSubmit(true);
    };

    useEffect(() => {
        if (submit) {
            if (!!errorName || !!errorAge) {
                setResult(`Error happens.`);
            }
            else {
                setResult(`Name is ${name}, and age is ${age}.`);
            }
            setSubmit(false);
        }
    }, [submit, name, errorName, age, errorAge]);

    return (
        <div className="panel">
            <div className="row">{result}</div>
            <ChildForm />
            <button onClick={onSubmit} >Submit</button>
        </div>
    );
}