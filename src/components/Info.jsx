import React, {Component} from 'react';
import {connect} from 'react-redux';

import {INFO_LIST} from '../constants/const'

// const _ = window._;
const t = 1;

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            animated: false
        };
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.visible !== this.props.visible
            && !this.state.animated
            && this.state.visible !== this.props.visible) {
            this.setState({
                animated: true,
                visible: this.props.visible
            });
            setTimeout(() => {
                this.setState({
                    animated: false
                })
            }, t * 1000)
        }
    }

    render() {
        const {visible, animated} = this.state;
        return (visible || animated)
            && <div className={'info-pop animated ' + (visible ? 'zoom2In' : 'zoom2Out')}>
                <span className={'info-pop-text'}>
                    <span>{(INFO_LIST[this.props.roomId] || {}).text}</span>
                </span>
            </div>
    }
}

const mapStateToProps = (state, props) => {
    return {
        visible: state.pop.visibleInfo
    }
};

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators(actions, dispatch)
// };

export default connect(mapStateToProps)(Menu)
