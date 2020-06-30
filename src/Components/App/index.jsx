import React, { useState, useEffect, useContext } from 'react'
import { FirebaseContext } from '../Firebase'
import { AuthUserContext } from '../Session'
import { CleanUpsContext } from '../CleanUps/context'
import { Switch, Route } from 'react-router-dom'
import NavBar from '../NavBar'
import Splash from '../Splash'
import SignUp from '../Auth/SignUp'
import Login from '../Auth/Login'
import Footer from '../Footer'
import Home from '../Home'
import Account from '../Account'
import PwForget from '../Auth/PwForget'
import CleanUps from '../CleanUps/CleanUpsList'
import NewCleanUp from '../CleanUps/NewCleanUp'
import CleanUpDetail from '../CleanUps/CleanUpDetail'
import Loader from '../Loader'

const App = () => {
  const firebase = useContext(FirebaseContext)
  const [ authUser, setAuthUser ] = useState(null)
  const [ currentUser, setCurrentUser ] = useState(null)
  const [ users, setUsers ] = useState([])
  const [ cleanUps, setCleanups ] = useState([])
  const [ beachData, setBeachData ] = useState({})
  const [ isLoading, setIsLoading ] = useState(true)

  useEffect(() => {
    fetch('https://api.coastal.ca.gov/access/v1/locations')
    .then(res => res.json())
    .then(data => {
      const allCounties = [...new Set(data.map(beach => beach.COUNTY))]
      setBeachData({
        counties: allCounties,
        beaches: data
      })
    })

    firebase.users().on('value', snapshot => {
      const usersObject = snapshot.val()
      if(usersObject) {
        const users = Object.keys(usersObject).map(key => ({
          ...usersObject[key],
          uid: key
        }))
        setUsers(users)
      }
    })

    firebase.cleanUps().on('value', snapshot => {
      const cleanUpsObject = snapshot.val()
      if(cleanUpsObject) {
        const cleanUps = Object.keys(cleanUpsObject).map(key => ({
          ...cleanUpsObject[key],
          cid: key
        }))
        setCleanups(cleanUps)
      }
    })

    firebase.auth.onAuthStateChanged(authUser => {
      if(authUser) {
        setAuthUser(authUser)
        firebase.user(authUser.uid).once('value', snapshot => {
          setCurrentUser(snapshot.val())
        })
      } else {
        setAuthUser(null)
        setCurrentUser(null)
      }
    })

    setIsLoading(false)
  }, [])


  return (
    <AuthUserContext.Provider value={currentUser}>
      <CleanUpsContext.Provider value={cleanUps}>
        <NavBar />
        {
          isLoading ? <Loader />
          :
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
            <Route exact path="/cleanups">
              <CleanUps />
            </Route>
            <Route path="/newcleanup">
              <NewCleanUp beachData={beachData} />
            </Route>
            <Route path="/cleanups/:cid">
              <CleanUpDetail />
            </Route>
            <Route path="/account">
              <Account />
            </Route>
            <Route path="/pwforget">
              <PwForget />
            </Route>
          </Switch>
        }
        <Footer />
      </CleanUpsContext.Provider>
    </AuthUserContext.Provider>
  );
}

export default App;
