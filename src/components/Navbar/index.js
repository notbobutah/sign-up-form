// Navbar.js

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// import Bookmarks from '@material-ui/icons/Bookmarks';
// import ONLogo from '../../../public/on_logo.png';
const NavBar = () => {
    return(
        <div>
        <AppBar position="static">
            <Toolbar>
                <Grid
                    justify="space-between" // Add it here :)
                    container
                    spacing={24}
                >
                    <Grid item>
                        <Typography variant="title" color="inherit">Sign up for the Omadi Network</Typography>
                    </Grid>
                    <Grid item>
                        <div>
                            <img src="on_logo.png" align="right" alt="Omadi" height="30" width="100" />
                        </div>
                    </Grid>
                    </Grid>
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default NavBar;
