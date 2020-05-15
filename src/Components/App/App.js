import React from 'react';

import Splash from '../Splash'
import NavBar from '../NavBar'

const App = () => {
  return (
    <div>
      <NavBar authUser={0} />
      <Splash />
    </div>
  );
}

export default App;
