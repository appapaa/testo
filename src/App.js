import React, {Component} from 'react';
import Menu from './components/Menu';
import Room from './components/Room';
import ZoomView from './conteiners/ZoomView';
import Screen from './conteiners/Screen';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import * as infoActions from "./actions/pop";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const pathArr = this.props.location.pathname.split('/').slice(1);
        console.log(pathArr);
        const {visibleZoomView} = this.props;
        return (
            <div className="App">
                <Screen pathArr={pathArr} key={1} path='' start={'fadeIn'} finish={'fadeOut'} component={<Menu pathArr={pathArr}/>}/>
                <Screen pathArr={pathArr} key={2} path='room' start={'fadeIn'} finish={'fadeOut'} component={<Room pathArr={pathArr}/>}/>
                {visibleZoomView && <ZoomView
                    roomId={1}
                    onClose={this.props.hideZoomView}
                />}
            </div>
        );
    }
}


const mapStateToProps = (state, props) => {
    return{
        visibleZoomView: state.pop.visibleZoomView
    }
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(infoActions, dispatch)
};

export default connect(mapStateToProps,mapDispatchToProps)(App)
