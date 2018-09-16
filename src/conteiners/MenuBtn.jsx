import React, {Component} from 'react';
import {MENU_BTN_TYPE} from '../constants/const'
import {Link} from "react-router-dom";

class Btn extends Component {
    render() {
        const {id, type} = this.props;
        return (
            <div className={'menu-btn-container --' + MENU_BTN_TYPE[type]}>
                <span className={'btn menu-btn --' + MENU_BTN_TYPE[type]}>
                    <Link to={`/room/${id}`}> </Link>
                </span>
            </div>
        );
    }
}

export default Btn
