import React, { Component } from 'react';

import MyBox from './components/mybox/MyBox'
import Box from './components/box/Box'
import Right from './components/right/Right'
import Touch from './components/touch/Touch'
class App extends Component {
  render() {
    return (
      <div>
        <div>
          <MyBox/> 
        </div>
        <div style={{maxWidth:'50%', display:'inline-block'}}>
        <Box/>
          <Box/>
          <Box/>
          <Box/>
          <Box/>
          <Box/>
          <Box/>
          <Box/>
        </div>
        
          <Right/>

          <Touch/>
        
      </div>
    );
  }
}

export default App;
