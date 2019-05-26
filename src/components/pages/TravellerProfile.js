import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { FaRegWindowClose } from 'react-icons/fa';
import { TravellerForm, TravellerDetail, Loader, Header } from '../sections';
import { editTraveller, getTravellerById } from '../../apis';
import { TITLES } from '../../utils';

class TravellerProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = { traveller: null, isInEdit: false, isLoading: true };
    }

    componentDidMount() {
        this.getTraveller();
    }

    onEditTraveller = (form) => {
        this.setState({ isLoading: true });
        editTraveller(this.state.traveller._id, form).then(res => {
            this.setState({ isLoading: false, isInEdit: false, traveller: res.data });
            toast.success("Traveller Edited Successfully!");
        }).catch(error => {
            this.setState({ isLoading: false, isInEdit: false });
            toast.error("Oops Something bad occured!");
        });
    }

    getTraveller = () => {
        getTravellerById(this.props.match.params.id).then(res => {
            this.setState({ traveller: res.data, isLoading: false });
        }).catch(error => {
            this.props.history.push("/travellers");
        });
    }

    changeEditState = () => {
        this.editState = this.state.isInEdit;
        this.setState({ isInEdit: !this.editState });
    }

    getReadVeiw() {
        return (
            <TravellerDetail traveller={this.state.traveller} changeEditState={this.changeEditState}></TravellerDetail>
        );
    }

    editTravellerView() {
        // TODO : SEPARATE COMPONENT FOR EDIT TRAVELLER
        return (
            <div className="detail-section">
                <i onClick={() => this.changeEditState()} className="back-icon"><FaRegWindowClose size={32} /></i>
                <TravellerForm onSubmit={this.onEditTraveller} traveller={this.state.traveller} />
            </div>
        );
    }

    render() {
        if (this.state.isLoading) {
            return (
                <Loader></Loader>
            );
        } else {
            return (
                <div className="container">
                    <ToastContainer />
                    <Header title={TITLES.TRAVELLER_PROFILE} />
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 col-md-6 offset-md-3 col-sm-12 offset-sm-0">
                            {this.state.isInEdit ? this.editTravellerView() : this.getReadVeiw()}
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default TravellerProfile;