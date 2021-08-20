import React from 'react';
import { Route, Switch} from 'react-router-dom';

import HomePage from './pages/HomePage';



const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <Switch>
        <Route path='/' component={ HomePage } />
      </Switch>
    </div>
  );
}

export default App;