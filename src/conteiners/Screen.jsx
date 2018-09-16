import React, {Component} from 'react';
import Animate from './Animate';


const t = 1;

class Screen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            animated: false
        };
        this.timeout = undefined;
    }

    componentDidMount() {
        this.testAnimate();
    }

    componentDidUpdate(prevProps) {
        prevProps.pathArr[0] !== this.props.pathArr[0]
        && this.testAnimate();
    }

    testAnimate = () => {
        const visible = this.props.pathArr[0] === this.props.path;
        const v = this.state.visible;
        if (v !== visible) {
            this.timeout && clearTimeout(this.timeout);
            this.setState({
                animated: true,
                visible
            });
            this.timeout = setTimeout(() => {
                this.setState({
                    animated: false
                })
            }, t * 1000)
        }
    }

    componentWillUnmount() {
    }

    render() {
        const {visible, animated} = this.state;
        const {start, finish} = this.props;
        return (
            (visible || animated)
            && <Animate value={visible ? start : finish}>
                {this.props.component}
            </Animate>
        );
    }
}

export default Screen
