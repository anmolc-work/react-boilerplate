import React, { Component } from 'react';
import PureComp from './PureComp';
import MemoComp from './MemoComp';

class FavColor extends Component{
    constructor(props){
        super(props);
        this.state = {
            color:'red'
        }
    }

    // static getDerivedStateFromProps(props,state){
    //     return {
    //         color:props.color
    //     }
    // }

    shouldComponentUpdate(){
        return true;
    }

    changeColor = () => {
        this.setState({color:'blue'});
    }

    render(){
        console.log('---------------Fav Component---------------');
        return (<>
        <div>This Color is {this.state.color}</div>
        <button type="button" onClick={this.changeColor}>Change Color</button>
        <div id="text1"></div>
        <div id="text2"></div>
        <MemoComp user="anmol" />
        </>)
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({color:"red"});
        },2000)
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        document.getElementById('text1').innerHTML = `Before update, Color was ${prevState.color}`;
        return null;
    }

    componentDidUpdate(){
        document.getElementById('text2').innerHTML = `After update, Color is ${this.state.color}`;
    }
}

export default FavColor;