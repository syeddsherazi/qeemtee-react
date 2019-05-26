import React from 'react';
import DatePicker from "react-datepicker";
import { validateEmail } from '../../utils';
import "react-datepicker/dist/react-datepicker.css";

class TravellerForm extends React.Component {

    constructor(props) {
        super(props);
            this.state = {
                name: '',
                email: '',
                birthDate: new Date(),
                mobileNumber: ''
            };
    }

    componentDidMount() {
        if (this.props.traveller) {
            this.setState({
                name: this.props.traveller.name,
                email: this.props.traveller.email,
                birthDate: new Date(this.props.traveller.birthDate),
                mobileNumber: this.props.traveller.mobileNumber
            });
        }
    }

    handleEmailChange = (event) => {
        this.setState({ email: event.target.value });
    }

    isFormValid = () => {
        const { name, email, birthDate, mobileNumber } = this.state;
        return name && email && birthDate && mobileNumber && validateEmail(email);
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
    }

    render() {
        return (
            // TODO: ALL FIELDS E.G. INPUT, BUTTONS, DATEPICKER SHOULD HAVE SEPARATE COMPONENTS WHICH SHOULD BE COMPLETELY CONFIGURABLE
            <form className="extra-padding" onSubmit={this.onFormSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email Address</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                        value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                    {!validateEmail(this.state.email) ? <small id="emailHelp" className="error-message">Email is invalid.</small> : ''}
                </div>
                <div className="form-group">
                    <label htmlFor="fullname">Full Name</label>
                    <input type="text" className="form-control" id="fullname" placeholder="e.g. John Doe"
                        value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                </div>
                <div className="form-group">
                    <label htmlFor="mobileNum">Mobile Number</label>
                    <input type="text" className="form-control" id="mobileNum" placeholder="e.g. +923376210101"
                        value={this.state.mobileNumber} onChange={(e) => this.setState({ mobileNumber: e.target.value })} />
                </div>
                <div className="form-group">
                    <label>Date of Birth</label>
                    <DatePicker
                        selected={this.state.birthDate}
                        onChange={(date) => this.setState({ birthDate: date })}
                    />
                </div>
                <button type="submit" className="btn btn-primary" disabled={!this.isFormValid()}>Submit</button>
            </form>

        );
    }
}

export default TravellerForm;