import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable';

export default class Slide extends React.Component {
  constructor(props) {
    super(props);
    const { title } = props;
    this.slides = title.split('/');
    this.titleColor = this.props.titleColor || '#63a35c';
    this.state = { slideIdx: 0 };
  }

  render() {
    return (
      <View style={styles.container}>

        <Animatable.Text
          animation="slideInRight"
          style={[styles.title, { color: this.titleColor }]}
          ref="title"
        >
          {this.slides[this.state.slideIdx]}
        </Animatable.Text>

        <Button onPress={this._onNext}>Next</Button>
      </View>
    );
  }

  _onNext = () => {
    this.refs.title.bounceInRight(1500);
    this.setState({
      slideIdx: (this.state.slideIdx + 1) % this.slides.length
    });
  };
}

function Button(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>
          {props.children}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 300,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#86939e'
  },
  title: {
    fontSize: 30
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
