import React, { Component } from 'react';

import { Card, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import { Link } from "react-router-dom";





class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div className="cont">

            <Card className="cardHolder">
                <Card.Body >
                    <div className="adminInfo">

                        <i class="fas fa-user-circle"></i>
                        <div className="adminDropdown">
                            <DropdownButton id="dropdown-item-button" title="Aicha Fakhfakh" >
                                <Dropdown.Item className="profile" as="button">Profile</Dropdown.Item>
                                <Dropdown.Item className="logOut" as="button">Log Out</Dropdown.Item>
                            </DropdownButton>
                        </div>

                    </div>


                    <div className="sidebarBtns">

                        <Link to="/"><Button variant="outline-secondary"><i class="fas fa-chart-pie"></i>  Dashboard </Button></Link>
                        <Link to="/analytics"><Button variant="outline-secondary"><i class="fas fa-chart-bar"></i>  Analytics</Button></Link>
                        <Link to="/calendar"> <Button variant="outline-secondary"><i class="fas fa-calendar-alt"></i>      Calendar</Button></Link>
                        <Link to="/maps"> <Button variant="outline-secondary"><i class="fas fa-map-marked-alt"></i>      Map</Button></Link>
                        <Link to="/products"><Button variant="outline-secondary"><i class="fab fa-product-hunt"></i>      Products</Button></Link>
                        <Link to="/customers"><Button variant="outline-secondary"><i class="far fa-user"></i>      Customers</Button></Link>
                        <Link to="/gallery"><Button variant="outline-secondary"><i class="far fa-images"></i>      Gallery</Button></Link>

                    </div>



                </Card.Body>
            </Card>
        </div>);
    }
}

export default Sidebar;