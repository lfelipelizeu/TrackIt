import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LogIn from './LogIn.js';
import Register from './Register.js';
import Today from './Today.js';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <LogIn />
        </Route>
        <Route path="/cadastro">
          <Register />
        </Route>
        <Route path="/habitos">
          <Today />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}