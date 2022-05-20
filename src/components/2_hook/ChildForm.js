import React from "react";

export default function ChildForm ({
    register, errors,
}) {

    return (
        <div className="form">
            <div className="row">
                <div>Name: <input {...register('name', { required: true })} /></div>
                <div className="error">{errors.name && 'Name is required.'}</div>
            </div>
            <div className="row">
                <div>Age: <input type="number" {...register('age', { pattern: /\d+/ })} /></div>
                <div className="error">{errors.age && 'Age should be 0 ~ 100.'}</div>
            </div>
        </div>
    );
}