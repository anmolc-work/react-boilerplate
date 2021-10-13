import React, { Component } from 'react';

const Counter = (WrappedComponent,incrementValue) => {
    class withCounter extends Component{

        constructor(props) {
            super(props);
            this.state = {
                count: 0
            }
        }
        incrementCount = () => {
            // this.setState((prevState) => {
            //     return {
            //         count: prevState.count + 1
            //     }
            // });
            this.setState({ count: this.state.count + incrementValue });
        }
        render(){
            return (<WrappedComponent incrementCount={this.incrementCount} count={this.state.count} {...this.props}/>)
        } 
    }
    return withCounter;
}

export default Counter;