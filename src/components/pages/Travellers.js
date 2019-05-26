import React from 'react';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import { Loader, Header, TravellersList } from '../sections';
import { getAllTravellers, deleteTravellerById } from '../../apis';
import { TITLES } from '../../utils';


// TODO: SEPARATE REUSABLE + CONFIGURABLE COMPONENT FOR MODAL TO BE USED FOR ALL SORTS OF CONFIRMATIONS
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

class Travellers extends React.Component {

    constructor(props) {
        super(props);
        this.state = { travellers: [], isLoading: false, modalIsOpen: false, toDelete: null };
    }

    componentDidMount() {
        this.setState({ isLoading: true })
        this.getTravellers();
    }

    routeChange(item) {
        let path = `/detail/${item._id}`;
        this.props.history.push(path);
    }

    openModal = (element) => {
        this.setState({ modalIsOpen: true, toDelete: element });
    }

    afterOpenModal = () => {
        this.subtitle.style.color = '#212529';
    }

    closeModal = () => {
        this.setState({ modalIsOpen: false });
    }

    getTravellers = () => {
        getAllTravellers().then(res => {
            this.setState({ travellers: res.data.travellers, isLoading: false });
        }).catch(error => {
            toast.error("Oops Something bad occured!");
            this.props.history.push("/home");
        });
    }

    deleteTraveller = () => {
        deleteTravellerById(this.state.toDelete._id)
            .then(res => {
                toast.success("Traveller Deleted Successfully!");
                this.getTravellers();
            }).catch(error => {
                toast.error("Oops Something bad occured!");
            });
        this.setState({ modalIsOpen: false, toDelete: null, isLoading: true });
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

                    {/* TODO: MODAL SHOULD BE MOVED TO A SEPARATE CONFIGURABLE COMPONENT */}
                    {/* DELETE MODAL START */}
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onAfterOpen={() => this.afterOpenModal()}
                        onRequestClose={() => this.closeModal()}
                        style={customStyles}
                        contentLabel="Example Modal"
                    >

                        <h2 ref={subtitle => this.subtitle = subtitle}>Delete Traveller</h2>
                        <div>Are you sure you want to delete this traveller?</div>
                        <form>
                            <button type="button" className="btn btn-primary custom-button" style={{ float: "right" }} onClick={() => this.deleteTraveller()}>Yes</button>
                            <button type="button" className="btn .btn-default custom-button" style={{ float: "right" }} onClick={() => this.closeModal()}>No</button>
                        </form>
                    </Modal>
                    {/* DELETE MODAL END */}

                    <Header title={TITLES.TRAVELLERS_LIST}></Header>
                    <TravellersList travellers={this.state.travellers} openModal={this.openModal}></TravellersList>
                </div>

            );
        }

    }
}

export default Travellers;