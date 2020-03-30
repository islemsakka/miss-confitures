import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Navigbar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<Navbar className="navBar">
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Link to="/"><i className="fas fa-home"></i></Link>
                <i className="far fa-comments"></i>
                <i className="far fa-bell"></i>



            </Navbar.Collapse>
        </Navbar>);
    }
}

export default Navigbar;


/** <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form> */