import React, { Component } from 'react';
import UserContext, { UserConsumer } from './UserContext';

class User extends Component {

    static contextType = UserContext;
    
    render() {

        return <div>Hello, {this.context}</div>

    }
}

// User.contextType = UserContext;
export default User;