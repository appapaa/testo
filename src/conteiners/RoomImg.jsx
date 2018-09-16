import React, {Component} from 'react';

// import {INFO_LIST} from '../constants/const'

// const _ = window._;
// const t = 1;

class Img extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            animated: false,
        };
    }

    // handleSize = () => {
    //     const {fullSize} = this.state;
    //     this.setState({
    //         fullSize: fullSize === 2 ? 1 : 2
    //     })
    // };
    // handleTouchStart = ({targetTouches}) => {
    //     const {clientX, clientY} = targetTouches[0];
    //     this.touch = {
    //         x0: clientX,
    //         y0: clientY,
    //     }
    // };
    // handleMove = ({targetTouches}) => {
    //     const {clientX, clientY} = targetTouches[0];
    //     const {fullSize} = this.state;
    //     const {x0,y0} =  this.touch;
    //     this.setState({
    //         dx: clientX-x0,
    //         dy: clientY-y0,
    //     })
    // }

    render() {
        const {roomId} = this.props;
        return <span
            onClick={this.props.onClick}
            className={'room-img --img_' + roomId}
        > </span>
    }
}

// const mapStateToProps = (state, props) => {
//     return {
//         visible: state.pop.visibleInfo
//     }
// };

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators(actions, dispatch)
// };

export default Img
