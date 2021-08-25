import React from 'react';
import { Route, Switch} from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import HatsPage from './pages/HatsPage';
  
import './App.css';

const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage}/>
      </Switch>
    </div>
  );
}

export default App;