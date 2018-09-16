import React, {Component} from 'react';
import RoomBtnPanel from '../conteiners/RoomBtnPanel';
import {connect} from 'react-redux';
import * as infoActions from "../actions/pop";

import Info from "./Info";
import RoomImg from "../conteiners/RoomImg";
import Verdict from "./Verdict";
import {bindActionCreators} from "redux";

// const _ = window._;

class Room extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pathArr: [],
        };
    }
    componentDidMount() {
        this.setState({pathArr: this.props.pathArr});
        this.props.hideInfo();
    }

    render() {
        // const {infoPopVisible} = this.props;
        const {pathArr} = this.state;
        const roomId = parseInt(pathArr[1]);
        return <div className={'room'}>
            <RoomImg
                onClick={this.props.showZoomView}
                roomId={roomId}/>
            <RoomBtnPanel/>
            <Info roomId={roomId}/>
            <Verdict/>
        </div>
    }
}

const mapStateToProps = (state, props) => {
    return {
    }
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(infoActions, dispatch)
};


// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators(actions, dispatch)
// };

export default connect(mapStateToProps, mapDispatchToProps)(Room)
