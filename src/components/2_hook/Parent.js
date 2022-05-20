import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ChildForm from "./ChildForm";

export default function Parent () {

    const { register, handleSubmit, formState: { errors }} = useForm();

    const [result, setResult] = useState('');

    const onSubmit = (data) => {
        if (Object.keys(errors).length) {
            setResult(`Error happens.`);
        }
        else {
            setResult(`Name is ${data.name}, and age is ${data.age}.`);
        }
    };

    return (
        <div className="panel">
            <div className="row">{result}</div>
            <form onSubmit={handleSubmit(onSubmit)} >
                <ChildForm
                    register={register}
                    errors={errors}
                />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}