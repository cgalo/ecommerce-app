import React, { ChangeEvent } from 'react';

import './FormInput.scss';

interface FormInputProps {
    onChange: (inputValue: string) => void;
    label?: string;
    name: string;
    type: string;
    required?: boolean;
    value?: string;
}

const FormInput:React.FC<FormInputProps> = (props) => {
    return (
        <div className="group">
            <input
                className="form-input"
                onChange={(event:ChangeEvent<HTMLInputElement>) => props.onChange(event.target.value)}
                type={props.type}
                name={props.name}
                required={props.required || false}
            />
            { props.label && 
                <label 
                    className={`${props.value ? 'shrink' : ''} form-input-label`}
                >
                    {props.label}
                </label>
            }
        </div>
    );
};

export default FormInput;