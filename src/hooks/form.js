import React, { useState, useEffect } from "react";

/**
 * ! This custom hook is not able to use.
 * @returns 
 */
export default function useForm () {

    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [submit, onSubmit] = useState(false);

    const validate = (callback) => {
        const error = callback(values);
        setErrors(error);
    }

    useEffect(() => {
        if (submit) {
            //
        }
    }, [submit]);

    return {
        values,
        errors,
        validate,
        onSubmit,
    };
}