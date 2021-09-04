import React from 'react';
import SignIn from '../../components/SignIn/SignIn';

import './AuthPage.scss';

const AuthPage:React.FC<{}> = () => {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn />
        </div>
    );
}

export default AuthPage;