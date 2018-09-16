import React, {Component} from 'react';
// import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import MenuBtn from '../conteiners/MenuBtn';

const _ = window._;

class Menu extends Component {
    render() {
        const {list} = this.props;
        return <div className={'menu'}>
            {_.map(list,(l)=><MenuBtn
                key={l.id}
                {...l}
            />)}
        </div>
    }
}

const mapStateToProps = (state, props) => {
    return {
        list: state.menu.list
    }
};

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators(actions, dispatch)
// };

export default connect(mapStateToProps)(Menu)
