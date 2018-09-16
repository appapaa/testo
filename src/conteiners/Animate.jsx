import React, {Component} from 'react';

const t = 1;

class Animate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animated: false
        };
        this.timeout = undefined;
    }

    componentDidMount(prevProps) {
        this.setState({animated: true});
        this.timeout = setTimeout(() => this.setState({animated: false}), t * 1000);
    }

    componentDidUpdate(prevProps) {
        if (this.props.value !== prevProps.value) {
            this.setState({animated: true});
            this.timeout = setTimeout(() => this.setState({animated: false}), t * 1000);
        }
    }

    componentWillUnmount() {
        this.timeout && clearTimeout(this.timeout);
    }

    render() {
        const {animated} = this.state;
        return (
            <span className={'abs-pos animated ' + this.props.value + (animated ? ' touch-none' : '')}>
          {this.props.children}
      </span>
        );
    }
}

export default Animate
