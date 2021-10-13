import React, { Component } from 'react';
import Counter from './Counter';

class HoverCounter extends Component {

    render() {
        return (
            <div>
                <button type="button" onMouseOver={this.props.incrementCount}>{this.props.user} hovered {this.props.count} times.</button>
            </div>
        )
    }
}

export default Counter(HoverCounter,5);