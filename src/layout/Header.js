import React, {useState, useContext} from "react";
import {
    Container,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    NavItem,
    Nav,
    NavLink,
    NavbarText,
    Collapse
} from "reactstrap";

import { Link } from "react-router-dom";

import { UserContext } from "../context/UserContext";

const Header = () => {

    const context = useContext(UserContext);

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);



    return(
        <Navbar color="info" dark expand="md"className="ps-3 pe-3">
            <NavbarBrand>
                <Link to="/" className="text-white">
                    LCO gitfire app
                </Link>
            </NavbarBrand>
            <NavbarText className="text-white">{
                context.user?.email ? context.user.email : ""
            }</NavbarText>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto" navbar>
            {
                context.user ?
                 (
                 <NavItem>
                    <NavLink onClick={() => {context.setUser(null)}} className="text-white">
                        Logout
                    </NavLink>
                </NavItem>
                ) : (
                <>
                <NavItem>
                    <NavLink tag={Link} to="/signup" className="text-white">
                        Signup
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/signin" className="text-white">
                        Signin
                    </NavLink>
                </NavItem>
                </>
                )
            }
                
                

            </Nav>
            
            </Collapse>
            
        </Navbar>

    );

};

export default Header;