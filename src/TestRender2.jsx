import React, { Component } from 'react';
import * as actions from "./store/actions";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
class App extends Component {
  render() {
        console.log(this.props.text + this.props.ta);
    return (
      <span>тест2
          {this.props.ta}
      </span>
    );
  }
}

const mapStateToProps = (state, props) => {
    return {
        ta: state.tb,
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
