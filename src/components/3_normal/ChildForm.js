import React from "react";

export default function ChildForm ({
    name, setName, errorName, age, setAge, errorAge, 
}) {
    
    const handleChangeName = (e) => {
        setName(e.target.value);
    };

    const handleChangeAge = (e) => {
        setAge(e.target.value);
    };

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
}