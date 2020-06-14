import React, { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../Firebase'
import { Switch, Route } from 'react-router-dom'
import NavBar from '../NavBar'
import Splash from '../Splash'
import SignUp from '../Auth/SignUp'
import Login from '../Auth/Login'
import Footer from '../Footer'
import Home from '../Home'
import Account from '../Account'
import PwForget from '../Auth/PwForget';

const App = () => {
  const firebase = useContext(FirebaseContext)
  const [ authUser, setAuthUser ] = useState(null)

  const getBeaches = () => {
    fetch('https://api.coastal.ca.gov/ccd/v1/locations')
    .then(res => res.json())
    .then(data => {
      const allCounties = [...new Set(data.map(beach => beach.county_region))]
      
    })
  }

  useEffect(() => {
    getBeaches()
      firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? setAuthUser({ authUser })
        : setAuthUser(null)
    })
  }, [])


  return (
    <div>
      <NavBar authUser={authUser} />
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
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="/pwforget">
            <PwForget />
          </Route>
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
