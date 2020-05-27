import React from 'react';
import { Switch, Route } from 'react-router-dom'
import NavBar from '../NavBar'
import Splash from '../Splash'
import SignUp from '../Auth/SignUp'
import Login from '../Auth/Login'
import Footer from '../Footer'

const App = () => {
  return (
    <div>
      <NavBar authUser={0} />
        <Switch>
          <Route exact path="/">
            <Splash />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
