import React, { ButtonHTMLAttributes } from 'react';

import './Button.scss';

interface ButtonProps extends ButtonHTMLAttributes<any> {
    isGoogleSignIn?: boolean;
}

const Button:React.FC<ButtonProps> = (props) => {
    const { isGoogleSignIn } = props;
    return (
        <button 
            className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
            {...props}
        >
            {props.children}
        </button>
    );
};

export default Button;