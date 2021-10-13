import React, { Component } from 'react';

class Status extends Component{

    constructor(props){
        super(props);
        this.state = {
            isLogin:true
        }
    }

    render(){
        // let message;
        // if(this.state.isLogin){
        //     message = "Hello Admin";
        // }else{
        //     message = "Hello Guest";
        // }
        // return message;
        // return !this.state.isLogin ? (<div>Hello Admin</div>) : (<div>Hello Guest</div>)
        return !this.state.isLogin && (<div>Hello Admin</div>)
    }
}

export default Status;