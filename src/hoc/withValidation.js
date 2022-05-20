import React from "react";

export default function withValidation (validate) {
    return function(WrappedComponent) {
        return function WithValidationComponent({setErrors, values, ...props}) {
            return (
                <WrappedComponent
                    {...props}
                    values={values}
                    validate={() => validate({values}, setErrors)} // ! Never called
                />
            );
        }
    }
}