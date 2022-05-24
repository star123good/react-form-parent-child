import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setName, setAge } from "reducers/form";

export default function ChildForm () {
    
    const { name, errorName, age, errorAge } = useSelector(state => state.form);
    const dispatch = useDispatch();

    const handleChangeName = (e) => {
        dispatch(setName(e.target.value));
    };

    const handleChangeAge = (e) => {
        dispatch(setAge(e.target.value));
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