import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LogIn from './LogIn.js';
import SignUp from './SignUp.js';
import Today from './Today.js';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <LogIn />
        </Route>
        <Route path="/cadastro">
          <SignUp />
        </Route>
        <Route path="/habitos">
          <Today />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}