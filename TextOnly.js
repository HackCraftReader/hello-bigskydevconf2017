import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class HelloBigSkyDevConf extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Hello Big Sky Dev Conf!
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
  },
  title: {
    fontSize: 30,
    color: '#63a35c'
  },
  button: {
    width: 140,
    marginTop: 20,
    padding: 5,

    borderRadius: 3,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#2f95dc', //Blue

    flexDirection: 'row',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#2f95dc', //Blue
    fontSize: 14
  }
});
