import Expo from 'expo';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>
          Hello Big Sky Dev Conf
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

Expo.registerRootComponent(App);
