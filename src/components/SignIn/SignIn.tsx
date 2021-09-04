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
                <FormInput 
                    name="email" 
                    type="email" 
                    value={email} 
                    onChange={(value: string) => setEmail(value)}
                    label="email"
                    required
                />

                <FormInput 
                    name="password" 
                    type="password" 
                    value={password}
                    onChange={(value: string) => setPassword(value)}
                    label="password"
                    required
                />

                <Button type="submit"> Sign in </Button>
                <Button onClick={signInWithGoogle}> 
                    {' '} Sign in with Google{' '} 
                </Button>
            </form>
        </div>
    );
}

export default SignIn;