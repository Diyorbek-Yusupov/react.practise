import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  inc = () => {
    this.setState({count: this.state.count + 1})
  }
  dec = () => {
    this.setState({count: this.state.count - 1})
  }
  render() {
    return (
      <>
        <h1>Count: {this.state.count}</h1>
        <button className="btn btn-info" onClick={this.inc}>INC</button>
        <button className="btn btn-danger" onClick={this.dec}>DEC</button>
      </>
    );
  }
}

export default Counter;