import React from 'react';
import { FaEdit } from 'react-icons/fa';

const TravellerDetail = (props) => {
    return (
        <div className="detail-section">
            <h2>{props.traveller.name}</h2>
            <p><strong>Email</strong> {props.traveller.email}</p>
            <p><strong>Mobile Number</strong> {props.traveller.mobileNumber}</p>
            <p><strong>Date of Birth</strong> {(new Date(props.traveller.birthDate)).toLocaleDateString('en-GB')}</p>
            <button className="btn btn-primary custom-button" onClick={() => props.changeEditState()}><FaEdit /></button>
        </div>
    );
}

export default TravellerDetail;