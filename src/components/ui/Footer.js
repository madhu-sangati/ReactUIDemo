import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import footerAdornment from '../../assets/Footer Adornment.svg';

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.orange,
        width: "100%",
        position: "absolute",
        bottom: "0px",
        left: "0px",
        right: "0px",
        zIndex: 1302 // to do not drawer-menu overlapping by footer
    },
    adornment: {
        width: "6em",
        verticalAlign: "bottom", //to fit image vertically bottaom of page
        [theme.breakpoints.down("sm")]: {
            height: "4em",
        },
        [theme.breakpoints.down("xs")]: {
            height: "3.5em"
        }
    }
}))

export default function Footer() {
    const classes = useStyles()

    return <footer className={classes.footer}>
        <img alt="footer image" src={footerAdornment}  className={classes.adornment}/>
    </footer>
}