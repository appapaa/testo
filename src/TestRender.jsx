import React, { Component } from 'react';
class App extends Component {
  render() {
        console.log(this.props.text + this.props.ta);
    return (
      <span>тестооо
          {this.props.ta}
      </span>
    );
  }
}

export default App;
