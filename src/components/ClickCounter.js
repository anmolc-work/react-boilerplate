import React, { Component } from 'react';
import Counter from './Counter';

class ClickCounter extends Component {

    render() {
        return (
            <div>
                <button type="button" onClick={this.props.incrementCount}>{this.props.user} clicked {this.props.count} times.</button>
            </div>
        )
    }
}

export default Counter(ClickCounter,2);