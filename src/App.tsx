// Imports from libraries/packages
import React, { useEffect, useState } from 'react';
import { Route, Switch} from 'react-router-dom';

// Our imports
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import Header from './components/Header/Header';
import AuthPage from './pages/AuthPage/AuthPage';

// Services and utilities
import { createUser } from './services/auth-service';
import { auth } from './firebase/firebase-util';

// Types and interfaces
import type { UserInfo as User } from '@firebase/auth';

import './App.css';

const App: React.FC<{}> = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    auth.onAuthStateChanged( async user => {
      createUser(user);
      setUser(user);
    });
    return () => setUser(null);
  }, []);


  return (
    <div className="App">
      <Header isUserLoggedIn={user !== null}/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage}/>
        <Route path="/signin" component={AuthPage} />
      </Switch>
    </div>
  );
}

export default App;