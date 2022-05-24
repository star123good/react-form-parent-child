import React from "react";
import withValidation from "@hoc/withValidation";

const ChildForm = ({
    values={}, setValues, errors={}, 
}) => {

    const handleChangeName = (e) => {
        setValues({
            ...values,
            name: e.target.value
        });
    };

    const handleChangeAge = (e) => {
        setValues({
            ...values,
            age: e.target.value
        });
    };

    return (
        <div className="form">
            <div className="row">
                <div>Name: <input value={values.name || ''} onChange={handleChangeName} /></div>
                <div className="error">{errors.name}</div>
            </div>
            <div className="row">
                <div>Age: <input type="number" value={values.age || 0} onChange={handleChangeAge} /></div>
                <div className="error">{errors.age}</div>
            </div>
        </div>
    );
}

const validate = ({name, age}, setErrors) => {
    console.log("[validate]", name, age);
    const errors = {
        name: '',
        age: '',
    };
    if (!name) {
        errors.name = 'Name is required.';
    }
    if (age <= 0 || age > 100) {
        errors.age = 'Age should be 0 ~ 100.';
    }
    if (typeof setErrors === 'function') setErrors(errors);
    return errors;
};

export default withValidation(validate)(ChildForm);