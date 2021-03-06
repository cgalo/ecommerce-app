import React from 'react';
import { Route, Switch} from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import Header from './components/Header/Header';
  
import './App.css';

const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;