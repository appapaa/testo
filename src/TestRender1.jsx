import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from "./store/actions";
class App extends Component {
  render() {
        console.log(this.props.x);
    return (
      <span>тест1
          {this.props.x}
      </span>
    );
  }
}

const mapStateToProps = (state, props) => {
    return {
        x: state.ta.x,
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
