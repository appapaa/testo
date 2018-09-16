import React, {Component} from 'react';

class Btn extends Component {
    render() {
        // const {text} = this.props;
        return (
            <div className={'room-btn-container'}>
                <span className={'btn room-btn'}
                      onClick={this.props.onClick}>
                    {this.props.children}
                </span>
            </div>
        );
    }
}

export default Btn
