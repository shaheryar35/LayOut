import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAddressCard, faPhotoVideo, faIdBadge, faSearch  } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar dark expand="md" style={{ background: '#e74c3c'}}>
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/">
              <img
               
                height="30"
                width="41"
                alt="Reack less"
              />
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar className="justify-content-end ml-auto" >
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                <FontAwesomeIcon icon={faHome} /><span className="fa fa-home fa-lg" /> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                  <FontAwesomeIcon icon={faAddressCard}/>  <span className="fa fa-info fa-lg" /> About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/gellary">
                   <FontAwesomeIcon icon={faPhotoVideo}/> <span className="fa fa-list fa-lg" /> Gellary
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                   <FontAwesomeIcon icon={faIdBadge} /> <span className="fa fa-address-card fa-lg" /> Contact Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/search">
                   <FontAwesomeIcon icon={faSearch} /> <span className="fa fa-address-card fa-lg" /> Search
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        
      </div>
    );
  }
}

export default Header;
