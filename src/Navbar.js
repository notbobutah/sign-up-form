// Navbar.js

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Bookmarks from '@material-ui/icons/Bookmarks';

const NavBar = () => {
    return(
        <div>
        <AppBar position="static">
            <Toolbar>
            <Bookmarks></Bookmarks>
                React Material UI Example
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default NavBar;