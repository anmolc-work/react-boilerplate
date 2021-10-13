import { Component } from "react";

class MyForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fname: '',
            lname: '',
            formValid:false,
            errors: {
                fname: '',
                lname: ''
            }
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.fname === '' || this.state.lname === '') {
            window.alert('Fill all inputs.');
        } else {
            window.alert(JSON.stringify(this.state));
        }
    }

    validateForm = (errors) => {
        let valid = true;
        Object.values(errors).forEach(val => val.length > 0 && (valid = false));
        return valid;
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        const { errors } = this.state;
        switch (name) {
            case 'fname':
                errors.fname = value.length === 0 ? "First Name Required." : value.length < 5 ? "Fname be atleast 5 char" : '';
                break;
            case 'lname':
                errors.lname = value.length === 0 ? "Last Name Required." : value.length < 5 ? "lname be atleast 5 char" : '';
                break;
            default:
                break;
        }
        this.setState({  errors, [name]: value });
        this.setState({formValid: this.validateForm(this.state.errors)})
    }

    render() {
        return (<div>
            <form onSubmit={this.handleSubmit}>
                <div>
                    <input type="text" name="fname" onChange={this.handleChange} placeholder="First Name" />
                    {this.state.errors.fname && (<h4>{this.state.errors.fname}</h4>)}
                </div>
                <div>
                    <input type="text" name="lname" onChange={this.handleChange} placeholder="Last Name" />
                    {this.state.errors.lname && (<h4>{this.state.errors.lname}</h4>)}
                </div>
                <input type="submit" value="Add" disabled={!this.state.formValid } /><br /><br />
            </form>
        </div>)
    }
}

export default MyForm;