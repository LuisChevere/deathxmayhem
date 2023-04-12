import React from 'react';

import DxM from '../assets/images/DeathxMayhemLogo.png';


function Navbar() {

    return (
        <Navbar classname=''>
            <a href='/merch'>Merch</a>
            <a href='/crowley'>Crowley</a>
            <img className='dxm' alt='DeathxMayhemLogo' src={DxM} />
            <a href='/lilith'>Lilith</a>
            <a href='/calendar'>Show Dates</a>
        </Navbar>
    )
}

export default Navbar;