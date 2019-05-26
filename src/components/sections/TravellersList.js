import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

class TravellersList extends React.Component {

    getRows = () => {
        var travellers = this.props.travellers.map((item) => {
            return (
                <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>
                        {(new Date(item.birthDate)).toLocaleDateString('en-GB')}
                    </td>
                    <td>{item.mobileNumber}</td>
                    <td>
                        <Link to={`travellers/${item._id}`}><button className="btn btn-primary"><FaEdit /></button></Link>
                        <button className="btn btn-danger custom-button" onClick={() => this.props.openModal(item)}><FaTrash /></button>
                    </td>
                </tr>
            );
        });
        return travellers;
    }

    render() {
        return (
            // TODO: A SEPARATE CONFIGURABLE TABLE USED IN ENTIRE APPLICATION TAKING IN HEADERS AND COLS TO DISPLAY, WITH ACTIONS OPTIONS
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col" style={{ width: '30%' }}>Name</th>
                        <th scope="col" style={{ width: '20%' }}>Email</th>
                        <th scope="col" style={{ width: '15%' }}>Date of Birth</th>
                        <th scope="col" style={{ width: '20%' }}>Mobile Number</th>
                        <th scope="col" style={{ width: '15%' }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.getRows()}
                </tbody>
            </table>
        );
    }
}

export default TravellersList;