import React, { useState, useRef } from "react";
import RefChildForm from "./RefChildForm";

export default function RefParent () {

    const ref = useRef(null);

    const [result, setResult] = useState('');

    const onSubmit = () => {
        const {result, error} = ref.current.handleSubmit();
        if (Object.keys(error).length) {
            setResult(`Error happens.`)
        }
        else {
            setResult(`Name is ${result.name}, and age is ${result.age}.`)
        }
    };

    return (
        <div className="panel">
            <div className="row">{result}</div>
            <RefChildForm
                ref={ref}
            />
            <button onClick={onSubmit} >Submit</button>
        </div>
    );
}