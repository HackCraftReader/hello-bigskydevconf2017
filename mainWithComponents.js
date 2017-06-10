import Expo from 'expo';
import React from 'react';

import HelloBigSkyDevConf from './Button';

class App extends React.Component {
  render() {
    return (
      <HelloBigSkyDevConf />
    );
  }
}

Expo.registerRootComponent(App);
