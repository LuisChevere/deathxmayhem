import React from 'react';
import Nav from 'react-bootstrap/Nav';
import DxM from '../assets/images/DxM.png';


function Navbar() {

    return (
        <Nav classname=''>
            <a href='/merch'>Merch</a>
            <a href='/crowley'>Crowley</a>
            <img className='dxm' alt='DeathxMayhemLogo' src={DxM} />
            <a href='/lilith'>Lilith</a>
            <a href='/calendar'>Show Dates</a>
        </Nav>
    )
}

export default Navbar;