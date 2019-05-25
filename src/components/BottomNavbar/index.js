// Navbar.js

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton'
import Fab from '@material-ui/core/Fab'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles';
import NextIcon from '@material-ui/icons/SkipNext'
import PrevIcon from '@material-ui/icons/SkipPrevious';
import axios from "axios/index";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// import Bookmarks from '@material-ui/icons/Bookmarks';
// import ONLogo from '../../../public/on_logo.png';


function BottomNavBar (props,step){
console.log('step' + step);
    const  { classes } = props;

    return(
        <React.Fragment>
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}
        >
        <AppBar position="fixed" color="primary" className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <IconButton color="inherit">
                    <PrevIcon/> Previous
                </IconButton>
                <Fab color="secondary" aria-label="Add" className={classes.fabButton}>
                   <b> Save </b>
                </Fab>
                <IconButton color="inherit">
                    Next <NextIcon/>
                </IconButton>
            </Toolbar>
        </AppBar>
    </div>
    </React.Fragment>
    )
}
const styles = theme => ({
    text: {
        paddingTop: theme.spacing.unit * 2,
        paddingLeft: theme.spacing.unit * 2,
        paddingRight: theme.spacing.unit * 2,
    },
    paper: {
        paddingBottom: 50,
    },
    list: {
        marginBottom: theme.spacing.unit * 2,
    },
    subHeader: {
        backgroundColor: theme.palette.background.paper,
    },
    appBar: {
        top: 'auto',
        bottom: 0,
    },
    toolbar: {
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
    },
});
BottomNavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(BottomNavBar);
