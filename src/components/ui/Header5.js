import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import logo from '../../assets/Nafaeslogonew.png';



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
        ...theme.mixins.toolbar,
        marginBottom: "1.3em",
        [theme.breakpoints.down("sm")]: {
            marginBottom: "1.2em",
        },
        [theme.breakpoints.down("xs")]: {
            marginBottom: "1em"
        }
    },
    logoContainer: {
        padding: 0,
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    logo: {
        height: "4.5em",
        marginLeft: "1em",
        padding: "0.20em",
        [theme.breakpoints.down("sm")]: {
            height: "4em",
        },
        [theme.breakpoints.down("xs")]: {
            height: "3.5em"
        }
    },
    tabContainer: {
        marginLeft: 'auto',
        marginRight: "1em"
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 15,
        marginLeft: "25px"
    },
    estimateButton: {
        ...theme.typography.button,
        marginRight: "1em",
        borderRadius: "50px",
        height: "36px"
    },
    menu: {
        backgroundColor: theme.palette.common.orange,
        color: "inherit",
        borderRadius: "0px",
    },
    menuItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        "&:hover": {
            opacity: 1
        }
    },
    drawerIcon: {
        height: "40px",
        width: "40px"
    },
    drawerIconContainer: {
        marginLeft: "auto",
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    drawer: {
        backgroundColor: theme.palette.common.orange
    },
    drawerItem: {
        ...theme.typography.tab,
        color: "inherit",
        opacity: 0.7,
        [theme.breakpoints.down("sm")]: {
            fontSize: ".80rem"
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: ".80rem"
        }
    },
    drawerItemSelected: {
        opacity: 1
    },
    drawerItemEstimate: {
        backgroundColor: theme.palette.common.blue,
        color: "#fff"
    }
}));

export default function Header(props) {
    const classes = useStyles();
    const theme = useTheme();
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent); //for IOS only
    const matches = useMediaQuery(theme.breakpoints.down("sm"));

    const [openDrawer, setOpenDrawer] = useState(false);
    const [value, setValue] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    // const [open, setOpen] = useState(false); //before change
    const [openMenu, setOpenMenu] = useState(false); //After change
    const [selectedIndex, setSelectedIndex] = useState(0);


    const handleChange = (e, newValue) => {
        setValue(newValue)
    };

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget)
        // setOpen(true) //before change
        setOpenMenu(true) //After change
    };

    const handleMenuItemClick = (e, i) => {
        setAnchorEl(null)
        // setOpen(false) //before change
        setOpenMenu(false) //After change
        setSelectedIndex(i)
    };

    const handleClose = (e) => {
        setAnchorEl(null)
        // setOpen(false) //before change
        setOpenMenu(false) //After change
    };

    const menuOptions = [
        { name: "Services", link: "/services", activeIndex: 1, selectedIndex: 0 },
        { name: "Custom Software Development", link: "/customsoftware", activeIndex: 1, selectedIndex: 1 },
        { name: "Mobile App Development", link: "/mobileapps", activeIndex: 1, selectedIndex: 2 },
        { name: "Website Development", link: "/websites", activeIndex: 1, selectedIndex: 3 }
    ]

    const routes = [
        { name: "Home", link: "/", activeIndex: 0 },
        { name: "Services", link: "/services", activeIndex: 1 },
        { name: "The Revolution", link: "/revolution", activeIndex: 2 },
        { name: "About Us", link: "/about", activeIndex: 3 },
        { name: "Contact Us", link: "/contact", activeIndex: 4 }
    ]

    useEffect(() => {
        [...menuOptions, ...routes].forEach(route => {
            switch (window.location.pathname) {
                case `${route.link}`:
                    if (value !== route.activeIndex) {
                        setValue(route.activeIndex)
                        if (route.selectedIndex && route.selectedIndex !== selectedIndex) {
                            setSelectedIndex(route.selectedIndex)
                        }
                    }
                    break;
                default:
                    break;
            }
        })
    }, [value, menuOptions, selectedIndex, routes]);

//     useEffect(() => {
//     if (window.location.pathname === "/" && value !== 0) {
//         setValue(0);
//     } else if (window.location.pathname === "/services" && value !== 1) {
//         setValue(1);
//     } else if (window.location.pathname === "/revolution" && value !== 2) {
//         setValue(2)
//     } else if (window.location.pathname === "/about" && value !== 3) {
//         setValue(3)
//     } else if (window.location.pathname === "/contact" && value !== 4) {
//         setValue(4)
//     } else if (window.location.pathname === "/estimate" && value !== 5) {
//         setValue(5)
//     }

//     switch (window.location.pathname) {
//         case "/":
//             if (value !== 0) {
//                 setValue(0)
//             }
//         case "/services":
//             if (value !== 1) {
//                 setValue(1)
//                 setSelectedIndex(0)
//             }
//             break;
//         case "/customsoftware":
//             if (value !== 1) {
//                 setValue(1)
//                 setSelectedIndex(1)
//             }
//             break;
//         case "/mobileapps":
//             if (value !== 1) {
//                 setValue(1)
//                 setSelectedIndex(2)
//             }
//             break;
//         case "/websites":
//             if (value !== 1) {
//                 setValue(1)
//                 setSelectedIndex(3)
//             }
//             break;
//         case "/revolution":
//             if (value !== 2) {
//                 setValue(2)
//             }
//             break;
//         case "/about":
//             if (value !== 3) {
//                 setValue(3)
//             }
//             break;
//         case "/contact":
//             if (value !== 4) {
//                 setValue(4)
//             }
//             break;
//         case "/estimate":
//             if (value !== 5) {
//                 setValue(5)
//             }
//             break;
//         default:
//             break;
//     }
// }, [value]);

const tabs = (
    <React.Fragment>
        <Tabs value={value}
            onChange={handleChange}
            className={classes.tabContainer}
            indicatorColor="secondary"
        >
            <Tab className={classes.tab} component={Link} to="/" label="Home" />
            <Tab
                aria-owns={anchorEl ? "simple-menu" : undefined}
                aria-haspopup={anchorEl ? "true" : undefined}
                className={classes.tab}
                component={Link}
                onMouseOver={event => handleClick(event)}
                to="/services"
                label="Services" />
            <Tab className={classes.tab} component={Link} to="/revolution" label="The Revolution" />
            <Tab className={classes.tab} component={Link} to="/about" label="About Us" />
            <Tab className={classes.tab} component={Link} to="/contact" label="Contact Us" />
        </Tabs>
        <Button
            className={classes.estimateButton}
            variant="contained"
            color="primary"
        >
            Free Estimate
                        </Button>
        <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleClose}
            classes={{ paper: classes.menu }}
            MenuListProps={{ onMouseLeave: handleClose }}
            elevation={0}
        >
            {menuOptions.map((option, i) => (
                <MenuItem key={option}
                    component={Link}
                    to={option.link}
                    classes={{ root: classes.menuItem }}
                    onClick={(event) => {
                        handleMenuItemClick(event, i);
                        setValue(1);
                        handleClose();
                    }}
                    selected={i === selectedIndex && value === 1}
                >
                    {option.name}
                </MenuItem>
            ))}
        </Menu>
    </React.Fragment>
)

const drawer = (
    <React.Fragment>
        <SwipeableDrawer
            // iOS has a "swipe to go back" feature that interferes with the discovery feature, 
            // so discovery has to be disabled.For Optimise mobile performance.
            disableBackdropTransition={!iOS} disableDiscovery={iOS}
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
            onOpen={() => setOpenDrawer(true)}
            classes={{ paper: classes.drawer }}
        >
            <List disablePadding>
                <ListItem
                    onClick={() => { setOpenDrawer(false); setValue(0) }}
                    divider button
                    component={Link} to="/"
                    selected={value === 0}
                >
                    <ListItemText
                        className={value === 0 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem}
                        disableTypography
                    >
                        Home
                        </ListItemText>
                </ListItem>

                <ListItem onClick={() => { setOpenDrawer(false); setValue(1) }}
                    divider button
                    component={Link} to="/services"
                    selected={value === 1}
                >
                    <ListItemText
                        className={value === 1 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem}
                        disableTypography
                    >
                        Services
                        </ListItemText>
                </ListItem>

                <ListItem onClick={() => { setOpenDrawer(false); setValue(2) }}
                    divider button
                    component={Link} to="/revolution"
                    selected={value === 2}
                >
                    <ListItemText
                        className={value === 2 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem}
                        disableTypography
                    >
                        The Revolution
                        </ListItemText>
                </ListItem>

                <ListItem onClick={() => { setOpenDrawer(false); setValue(3) }}
                    divider button
                    component={Link} to="/about"
                    selected={value === 3}
                >
                    <ListItemText
                        className={value === 3 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem}
                        disableTypography
                    >
                        About Us
                        </ListItemText>
                </ListItem>

                <ListItem onClick={() => { setOpenDrawer(false); setValue(4) }}
                    divider button
                    component={Link} to="/contact"
                    selected={value === 4}
                >
                    <ListItemText
                        className={value === 4 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem}
                        disableTypography
                    >
                        Contact Us
                        </ListItemText>
                </ListItem>

                <ListItem onClick={() => { setOpenDrawer(false); setValue(5) }}
                    divider button
                    className={classes.drawerItemEstimate}
                    component={Link} to="/estimate"
                    selected={value === 5}
                >
                    <ListItemText
                        className={value === 5 ? [classes.drawerItem, classes.drawerItemSelected] : classes.drawerItem}
                        disableTypography
                    >
                        Free Estimate
                        </ListItemText>
                </ListItem>
            </List>
        </SwipeableDrawer>
        <IconButton className={classes.drawerIconContainer}
            onClick={() => setOpenDrawer(!openDrawer)}
            disableRipple
        >
            <MenuIcon className={classes.drawerIcon} />
        </IconButton>
    </React.Fragment>
)

return (
    <React.Fragment>
        <ElevationScroll>
            <AppBar position="fixed" color="secondary">
                <Toolbar disableGutters>
                    <Button component={Link} to="/"
                        onClick={() => setValue(0)}
                        className={classes.logoContainer} >
                        <img alt="company logo" className={classes.logo} src={logo} />
                    </Button>
                    {matches ? drawer : tabs}
                </Toolbar>
            </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMagin} />
    </React.Fragment>
);
}