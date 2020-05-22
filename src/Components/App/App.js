import React from 'react';
import { Switch, Route } from 'react-router-dom'
import SignUp from '../SignUp'
import Splash from '../Splash'
import NavBar from '../NavBar'
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
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
