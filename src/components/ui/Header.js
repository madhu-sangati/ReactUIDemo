import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';

function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0
    });
    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const useStyles = makeStyles(theme => ({
    toolbarMagin: {
        ...theme.mixins.toolbar
    },
    customButton: {
        justifyContent: 'center',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',
    }
}));

export default function Header(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position="fixed" color="secondary">
                    <Toolbar>
                        <Typography variant="h5">
                            Nafaes International
                    </Typography>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMagin} />
           
            {[...new Array(12)]
                .map(
                    () => `Cras mattis consectetur purus sit amet fermentum.
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                )
                .join('\n')}
            <br /> <br /> <br />
           
            <Box display="flex" justifyContent="center">
                <Button variant='contained' className={classes.customButton}>Click me !</Button>
            </Box>
           
        </React.Fragment>
    );
}