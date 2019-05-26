import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { TravellerForm, Loader, Header } from '../sections';
import { createTraveller } from '../../apis';
import { TITLES } from '../../utils';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isLoading: false };
    }

    onCreateTraveller = (form) => {
        this.setState({ isLoading: true });
        createTraveller(form)
            .then(res => {
                this.setState({ isLoading: false });
                // TODO : TOASTERS TO BE HANDLED IN INTERCEPTOR AND A SEPARATE REUSABLE COMPONENT FOR TOASTERS
                toast.success("You've registered Successfully!");
            }).catch(error => {
                this.setState({ isLoading: false });
                // TODO : TOASTERS TO BE HANDLED IN INTERCEPTOR AND A SEPARATE REUSABLE COMPONENT FOR TOASTERS
                toast.error("Oops Something bad occured!");
            });
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
                    <Header title={TITLES.HOME}></Header>
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 col-md-6 offset-md-3 col-sm-12 offset-sm-0">
                            <TravellerForm onSubmit={this.onCreateTraveller} />
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Home;