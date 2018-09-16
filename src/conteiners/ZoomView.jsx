import React, {Component} from 'react';

// import {INFO_LIST} from '../constants/const'

const _ = window._;
const t = 1;
const MAX_SCALE = 8;

class Img extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dx: 0,
            dy: 0,
            scale: 1
        };
        this.touch = {
            moved: 0,
            x0: 0,
            y0: 0,
            delta: 0,
            cnt: 0,
            time: 0
        };
    }

    handleSize = (targetTouches, dx, dy) => {
        const {scale} = this.state;
        if (_.size(targetTouches) !== 2) {
            return scale;
        }
        const {delta} = this.touch;
        // const {clientX, clientY} = this.getPos(targetTouches);
        return Math.max(Math.min(this.getDelta(targetTouches) / delta, MAX_SCALE), 1);
        // _.extend(this.touch, {
        //     x0: clientX * (1 - scale) ,
        //     y0: clientY * (1 - scale) ,
        // });
        // return scale
    };
    getPos = (targetTouches) => {
        let {clientX, clientY} = targetTouches[0];
        if (_.size(targetTouches) === 2) {
            let {clientX: clientX2, clientY: clientY2} = targetTouches[1];
            clientX = (clientX + clientX2) / 2;
            clientY = (clientY + clientY2) / 2;
        }
        return {clientX, clientY}
    };
    getTouchCnt = ({targetTouches}) => {
        if (!this.touch.moved) {
            return;
        }
        const tT = _.map(targetTouches, ({clientX, clientY}) => {
            return {clientX, clientY}
        });
        if (!_.size(tT)) {
            this.touch.cnt = _.size(tT);
        }
        else if (_.size(tT) !== this.touch.cnt) {
            this.touch.cnt = _.size(tT);
            this.handleTouchStart(tT);
        }
        else {
            this.tickMove(tT);
        }
    };
    getDelta = (targetTouches) => {
        let {clientX, clientY} = targetTouches[0];
        let {clientX: clientX2, clientY: clientY2} = targetTouches[1];
        const sX = clientX2 - clientX;
        const sY = clientY2 - clientY;
        return Math.sqrt(sX * sX + sY * sY);
    };
    handleTouchStart = (targetTouches) => {
        const {clientX, clientY} = this.getPos(targetTouches);
        const {dx, dy, scale} = this.state;
        console.log('start');
        _.extend(this.touch, {
            x0: (clientX - dx) / scale,
            y0: (clientY - dy) / scale,
        });
        (_.size(targetTouches) === 2)
        && _.extend(this.touch, {delta: this.getDelta(targetTouches) / scale});
    };
    handleMove = (targetTouches) => {
        console.log('move');
        const {clientX, clientY} = this.getPos(targetTouches);
        const scale = this.handleSize(targetTouches, dx, dy);
        const {x0, y0} = this.touch;
        const dx = clientX - x0 * scale;
        const dy = clientY - y0 * scale;
        this.setState({
            dx,
            dy,
            scale
        });
    };
    tickMove = _.throttle((p) => {
        this.handleMove(p);

    }, 100, 1);
    onMoveEnd = () => {
        this.touch.moved = 0;
        this.touch.cnt = 0;
    };
    onMoveStart = () => {
        this.touch.moved = 1;
    };
    handleClick = (e) => {
        const time = new Date();
        if (time - this.touch.time <= 300) {
            const {clientX, clientY} = e;
            const {dx, dy, scale} = this.state;
            const {x0, y0} = this.touch;
            if (scale === 1) {
                console.log({dx, dy});
                this.setState({
                    dx: clientX - (clientX - dx) * MAX_SCALE,
                    dy: clientY - (clientY - dy) * MAX_SCALE,
                    scale: MAX_SCALE
                });
                this.touch = {
                    x0: 0,
                    y0: 0,
                    delta: 0,
                    cnt: 0
                };
            }
            else {
                this.touch = {
                    x0: 0,
                    y0: 0,
                    delta: 0,
                    cnt: 0
                };
                this.setState({
                    dx: 0,
                    dy: 0,
                    scale: 1
                })
            }
        }
        this.touch.time = time;
    };

    render() {
        const {roomId} = this.props;
        const {scale, dx, dy} = this.state;
        const style = {transform: `translate(${dx}px,${dy}px)`};
        const styleScale = {transform: `scale(${scale}`};
        return <div className={'zoom-view animated fast fadeIn'}
                    onTouchMove={this.getTouchCnt}
                    onTouchEnd={this.onMoveEnd}
                    onTouchStart={this.onMoveStart}
                    onClick={this.handleClick}
        >
            <span
                className={'zoom-img'}
                style={style}
            >
                <span className={'zoom-img-scale --img_' + roomId}
                      style={styleScale}>
                >
                 </span>
            </span>
            <span
                className={'zoom-btn btn'}
                onClick={this.props.onClose}
            > </span>
        </div>
    }
}

export default Img
