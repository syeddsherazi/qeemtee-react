import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem
} from 'reactstrap';

class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                {/* TODO : A SEPARATE COMPONENT FOR NAVBAR USED IN MAIN MENU */}
                <Navbar color="light" light expand="md">
                    <Link className="nav-link" to="/home">QEMTEE</Link>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link className="nav-link" to="/home">Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link" to="/travellers">Travellers</Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                {/* TODO : A SEPARATE COMPONENT FOR NAVBAR USED IN MAIN MENU */}
            </div>
        );
    };
};

export default Menu;

