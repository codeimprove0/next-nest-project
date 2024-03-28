import React from 'react';
import Navigation from './Navigation'; 

const Header = () => {
    const showHeader = typeof window !== 'undefined' ? localStorage.getItem('authUserInfo') : "";
    console.log("showHeader---------",showHeader);
    return (
        showHeader ? 
        <header>
            <Navigation />
        </header> : ""
    );
}

export default Header;