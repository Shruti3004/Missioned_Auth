import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import logo from '../images/logo.svg';
import styled from 'styled-components';
import {AuthContext} from '../Auth';

function Navbar() {

    const {currentUser} = useContext(AuthContext);

    return (
        <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
            <Link to='/products'>
                <img src={logo} alt="logo" className="navbar-brand"/>
            </Link>            
            <div className="ml-auto navbar-nav">                
                <div className="name-user px-3 py-2 text-center font-weight-bold align-self-center nav-item d-none d-sm-block">
                    {currentUser.displayName.slice(0,1)}
                </div>
            </div>            
        </NavWrapper>
    )
}

const NavWrapper = styled.nav`
    background: #ffffff;   
    .name-user{
        background: var(--DarkOrange);
        border-radius: 50% !important;
        color: #ffffff !important; 
        box-shadow: 1px 1px 5px 1px var(--DarkOrange);
    } 
`

export default Navbar
