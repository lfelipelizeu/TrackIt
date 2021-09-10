import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LogIn from './LogIn.js';
import SignUp from './SignUp.js';
import MainPage from './MainPage.js';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <LogIn />
        </Route>
        <Route path="/cadastro" exact>
          <SignUp />
        </Route>
        <MainPage />
      </Switch>
    </BrowserRouter>
  );
}