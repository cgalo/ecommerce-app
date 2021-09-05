import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase-util';

import './Header.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg'

interface HeaderProps{
    isUserLoggedIn: boolean;
}

const Header:React.FC<HeaderProps> = (props) => {
    const { isUserLoggedIn } = props;
    return (
        <div className="header">
            <Link 
                className="logo-container"
                to="/"
            >
                <Logo className="logo"/>
            </Link>
            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/shop">CONTACT</Link>
                { isUserLoggedIn ? 
                    <div className="option"
                        onClick={() => auth.signOut()}
                    >
                        SIGN OUT
                    </div>
                    :
                    <Link className="option" to="/signin">SIGN IN</Link>
                }
            </div>
        </div>
    );
}

export default Header;