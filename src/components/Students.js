import React, { Component } from 'react';

class Students extends Component{

    constructor(props){
        super(props);
        this.state = {
            students:['Anmol','Rupesh','Suhas']
        };
    }

    render(){
        return (<div>
            {
                this.state.students.map((std,index) => {
                    return (<div key={index}>{std}</div>)
                })
            }
        </div>)
    }
}

export default Students;