import React from 'react';

import Splash from '../Splash'
import NavBar from '../NavBar'
import Footer from '../Footer'

const App = () => {
  return (
    <div>
      <NavBar authUser={0} />
      <Splash />
      <Footer />
    </div>
  );
}

export default App;
