import React, { useState, forwardRef, useImperativeHandle } from "react";

const ChildForm = forwardRef((props, ref) => {
    
    const [name, setName] = useState('');
    const [errorName, setErrorName] = useState('');
    const [age, setAge] = useState(0);
    const [errorAge, setErrorAge] = useState('');

    const handleChangeName = (e) => {
        setName(e.target.value);
    };

    const handleChangeAge = (e) => {
        setAge(e.target.value);
    };

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

    const handleSubmit = () => {
        const err = validate();
        return {
            error: err,
            result: {
                name, age,
            },
        };
    };

    useImperativeHandle(ref, () => ({
        handleSubmit: handleSubmit,
    }));

    return (
        <div className="form">
            <div className="row">
                <div>Name: <input value={name} onChange={handleChangeName} /></div>
                <div className="error">{errorName}</div>
            </div>
            <div className="row">
                <div>Age: <input type="number" value={age} onChange={handleChangeAge} /></div>
                <div className="error">{errorAge}</div>
            </div>
        </div>
    );
});

export default ChildForm;