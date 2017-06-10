import React from 'react';
import { ScrollView } from 'react-native';

import Slide from './Slide';

export default class HelloBigSkyDevConf extends React.Component {
  render() {
    return (
      <ScrollView style={{flex: 1}}>
        <Slide title={'Hello/Big Sky/Dev Conf/2017!'} />
        <Slide title={'You Can Now/Code/React Native!'} />
        <Slide title={'Expo/FTW!'} titleColor={'#05A5D1'}/>
      </ScrollView>
    );
  }
}
