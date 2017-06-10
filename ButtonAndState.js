import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class HelloBigSkyDevConf extends React.Component {
  constructor(props) {
    super(props);
    this.slides = ['Hello', 'Big Sky', 'Dev Conf', '2017!'];
    this.state = { slideIdx: 0 };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {this.slides[this.state.slideIdx]}
        </Text>
        <TouchableOpacity
          onPress={() =>
            this.setState({ slideIdx: (this.state.slideIdx + 1) % 4 })}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Next</Text>
          </View>
        </TouchableOpacity>
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
