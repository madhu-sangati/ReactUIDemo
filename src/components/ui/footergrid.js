import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import footerAdornment from '../../assets/Footer Adornment.svg';
import Grid from '@material-ui/core/Grid';

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
    },
    mainContainer: {
        position: "absolute",
        height: "100%"
    },
    footerLinks: {
        color: "#333",
        fontFamily: "Pacifico",
        fontSize: "0.75rem",
        fontWeight: "bold",
        textDecoration: "none"
    },
    gridItem: {
        margin: "3em"
    }
}))

export default function Footer() {
    const classes = useStyles()
    return (
        <footer className={classes.footer}>
            <Grid container justify="center" className={classes.mainContainer}>

                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item component={Link} to="/" className={classes.footerLinks}>
                            Home
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item component={Link} to="/services" className={classes.footerLinks}>
                            Services
                        </Grid>
                        <Grid item component={Link} to="/customsoftware" className={classes.footerLinks}>
                            Custom Software Development
                        </Grid>
                        <Grid item component={Link} to="/mobileapps" className={classes.footerLinks}>
                            Mobile App Development
                        </Grid>
                        <Grid item component={Link} to="/websites" className={classes.footerLinks}>
                            Website Development
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item component={Link} to="/revolution" className={classes.footerLinks}>
                            The Revolution
                        </Grid>
                        <Grid item component={Link} to="/revolution" className={classes.footerLinks}>
                            Vision
                        </Grid>
                        <Grid item component={Link} to="/revolution" className={classes.footerLinks}>
                            Technology
                        </Grid>
                        <Grid item component={Link} to="/revolution" className={classes.footerLinks}>
                            Process
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item component={Link} to="/about" className={classes.footerLinks}>
                            About Us
                        </Grid>
                        <Grid item component={Link} to="/about" className={classes.footerLinks}>
                            History
                        </Grid>
                        <Grid item component={Link} to="/about" className={classes.footerLinks}>
                            Team
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item className={classes.gridItem}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item component={Link} to="/contact" className={classes.footerLinks}>
                            Contact Us
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
            <img alt="footer image" src={footerAdornment} className={classes.adornment} />
        </footer>
    );
}