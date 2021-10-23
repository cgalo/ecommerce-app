import React, { useState } from 'react';

import { signInWithGoogle } from '../../firebase/firebase-util';

import Button from '../Button/Button';
import FormInput from '../FormInput/FormInput';

import './SignIn.scss';

const SignIn:React.FC<{}> = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    }

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <div className="buttons">
                    <Button type="submit"> Sign in </Button>
                    <Button onClick={signInWithGoogle} isGoogleSignIn> 
                        Google Sign in
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default SignIn;