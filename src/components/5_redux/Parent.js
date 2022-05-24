import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { validate } from "@reducers/form";
import ChildForm from "./ChildForm";

export default function Parent () {

    const { name, errorName, age, errorAge } = useSelector(state => state.form);
    const dispatch = useDispatch();

    const [result, setResult] = useState('');
    const [submit, setSubmit] = useState(false);

    const onSubmit = () => {
        dispatch(validate());
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