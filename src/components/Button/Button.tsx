import React, { ButtonHTMLAttributes } from 'react';

import './Button.scss';

// interface ButtonProps extends ButtonHTMLAttributes<any> {
//     children: any
// }

const Button:React.FC<ButtonHTMLAttributes<any>> = (props) => {
    return (
        <button 
            className="custom-button"
            {...props}
        >
            {props.children}
        </button>
    );
};

export default Button;