import React, { useEffect, useState } from 'react';
import { Route, Switch} from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import Header from './components/Header/Header';
import AuthPage from './pages/AuthPage/AuthPage';

import { auth } from './firebase/firebase-util';

import type { User } from '@firebase/auth';

import './App.css';


const App: React.FC<{}> = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setUser(user);
    });
    return () => setUser(null);
  }, []);
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage}/>
        <Route path="/signin" component={AuthPage} />
      </Switch>
    </div>
  );
}

export default App;