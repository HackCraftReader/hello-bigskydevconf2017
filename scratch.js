import React from 'react';

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <p>My first React Component!</p>
      </div>
    );
  }
}

React.DOM.div(null,
  React.DOM.p(null,
    "My first React Component!")
);

class NameComponentClass extends React.Component {
  render() {
    return <p>{this.props.name}</p>
  }
}

function NameComponent(props) {
  return <p>{this.props.name}</p>
}

class MyCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 1};
  }

  render() {
    return <p>Count: {this.state.count}</p>
  }

  onMakeItTwo() {
    this.setState({count: 2});
  }
}

class MyCounter extends React.Component {
  state = {count: 1};
 
  onMakeItTwo = () => { this.setState({count: 2}); }

  render() {
    return (
      <Button onClick={this.onMakeItTwo}>
        Increment
      </Button>
    );
  }
}

class Test extends React.Component {
increment() { ... }
render() {
return (
<button onClick={this.increment}>
Increment
</button>
);
}
}

constructor()
componentWillMount()
render()
componentDidMount()



componentWillReceiveProps()
shouldComponentUpdate()
componentWillUpdate()
render()
componentDidUpdate()

componentWillUnmount()