import React, {Component} from 'react';
import RoomBtn from '../conteiners/RoomBtn';
// import {menuBtnType} from '../constants/const'
import {Link} from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import {bindActionCreators} from "redux";
import * as infoActions from "../actions/pop";

class Panel extends Component {
    render() {
        return (
            <div className={'room-panel'}>
                <RoomBtn key={'I'}
                         onClick={this.props.toggleVisibleInfo}
                >i</RoomBtn>
                <RoomBtn key={'V'}
                         onClick={this.props.toggleVisibleVerdict}
                >V</RoomBtn>
                <RoomBtn key={'M'}><Link to={`/`}>M</Link></RoomBtn>
            </div>
        );
    }
}

// const mapStateToProps = (state, props) => {
//     return {
//         infoPopVisible: state.infoPop.visible
//     }
// };
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(infoActions, dispatch)
};

export default connect(null, mapDispatchToProps)(Panel)
