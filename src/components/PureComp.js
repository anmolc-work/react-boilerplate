import { PureComponent } from "react";

class PureComp extends PureComponent{
    render(){
        console.log('---------------Pure Component---------------');
        return <div>Pure Component - {this.props.user}.</div>
    }
}

export default PureComp;