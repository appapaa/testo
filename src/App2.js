import React, {Component} from 'react';
import TestRender1 from './TestRender1';
import TestRender2 from './TestRender2';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from './store/actions';
import _ from 'underscore';
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        setInterval(()=>this.props.setState({ta: _.extend({},this.props.ta)}),1000)
    }

    render() {
        console.log('renderApp');
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <TestRender1/><br/>
                <TestRender2/>
            </div>
        );
    }
}


const mapStateToProps = (state, props) => {
    return {
        ta: state.ta,
        tb: state.tb
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
