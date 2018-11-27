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
        <div>
          <Box/>
          <Box/>
          <Box/>
        </div>
        
        <div>
          <Right/>
        </div>
        <div style={{clear:"both"}}></div>
        <div>
        <Touch/>
        </div>
        
        <div>
        <Touch/>
        
        </div>
        
        <div>
        <Touch/>
        </div>
      </div>
    );
  }
}

export default App;
