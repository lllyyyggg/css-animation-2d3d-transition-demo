import React, { Component } from 'react';

import MyBox from './components/mybox/MyBox'
import Box from './components/box/Box'
import Right from './components/right/Right'
class App extends Component {
  render() {
    return (
      <div>
        <MyBox/> 
        <div>
          <Box/>
          <Box/>
          <Box/>
          <Box/>
          <Box/>
          <Box/>
          <Box/>
          <Box/>
          <Right/>
        </div>
      </div>
    );
  }
}

export default App;
