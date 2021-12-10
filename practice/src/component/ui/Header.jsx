import React, { useEffect, useState } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import logo from '../../assets/logo.svg';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
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





function ElevationScroll(props) {
    const { children } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,

    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const useStyle = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "4em",
        [theme.breakpoints.down('md')]:{
            marginBottom: "2.5em",
        },
        [theme.breakpoints.down('xs')]:{
            marginBottom: "1.5em",
        }
    },
    logo: {
        height: "8em",
        [theme.breakpoints.down('md')]:{
            height: "6.5em",
        },
        [theme.breakpoints.down('xs')]:{
            height: "5em",
        }
    },
    logoContainer: {
        padding: 0,
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    tabContainer: {
        marginLeft: "auto",
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: '25px',
        
    },
    button: {
        ...theme.typography.estimate,
        borderRadius: "50px",
        margin: "0 25px 0 60px",
        height: "45px",
        color: "white",
    },
    Menu: {
        backgroundColor: theme.palette.primary.main,
        color: "white",
        borderRadius: 0,
    },
    menuItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        "&:hover": {
            opacity: 1
        }
    },
    iconContainer:{
      marginLeft:'auto',
       "&:hover":{
           backgroundColor: "transparent"
       }
    },
    drawerIcon:{
        height: "40px",
        width:"40px",
    },
    Drawer:{
        backgroundColor: theme.palette.common.blue
    },
    DrawerItem:{
        ...theme.typography.tab,
        color:"white",
    },
    ItemListEstimate:{
        backgroundColor: theme.palette.common.orange,
    },
    appbar:{

    }


}))

const Header = (props) => {


    const classes = useStyle();
    const theme = useTheme();
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    
    const [openDrawer, setOpenDrawer] = useState(false);
    
    const [value, setValue] = useState(0);
    const [anchorEl, setAncorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0)

    const handleChange = (e, value) => {
        setValue(value);
    }
    const handleClick = (e) => {
        setAncorEl(e.currentTarget)
        setOpenMenu(true)
    }
    const handleMenuItemClick = (e, i) => {
        setAncorEl(null)
        setOpenMenu(false)
        setSelectedIndex(i)
    }

    const handleClose = (e) => {
        setAncorEl(null)
        setOpenMenu(false)
    }

    const menuOption = [{ name: "Services", link: "/services" }, { name: "Custom software", link: "/customsoftware" }, { name: "Mobile App development", link: "/mobileapps" }, { name: "Website development", link: "/website" }]

    useEffect(() => {
        if (window.location.pathname === "/" && value !== 0) {
            setValue(0)
        } else if (window.location.pathname === "/services" && value !== 1) {
            setValue(1)
        } else if (window.location.pathname === "/revolution" && value !== 2) {
            setValue(2)
        } else if (window.location.pathname === "/aboutus" && value !== 3) {
            setValue(3)
        } else if (window.location.pathname === "/contactus" && value !== 4) {
            setValue(4)
        } else if (window.location.pathname === "/estimate" && value !== 5) {
            setValue(5)
        }

        switch (window.location.pathname) {
            case "/":
                if (value !== 0) {
                    setValue(0)
                }
                break;

            case "/services":
                if (value !== 1) {
                    setValue(1)
                    setSelectedIndex(0)
                }
                break;

            case "/customsoftware":
                if (value !== 1) {
                    setValue(1)
                    setSelectedIndex(1)
                }
                break;

            case "/mobileapps":
                if (value !== 1) {
                    setValue(1)
                    setSelectedIndex(2)
                }
                break;

            case "/website":
                if (value !== 1) {
                    setValue(1)
                    setSelectedIndex(3)
                }
                break;

            case "/revolution":
                if (value !== 2) {
                    setValue(2)
                }
                break;

            case "/aboutus":
                if (value !== 3) {
                    setValue(3)
                }
                break;


            case "/contactus":
                if (value !== 4) {
                    setValue(4)
                }
                break;

            case "/estimate":
                if (value !== 5) {
                    setValue(5)
                }
                break;

            default:
                break;

        }


    }, [value])

    const tabs = (
        <React.Fragment>
            <Tabs value={value} onChange={handleChange} className={classes.tabContainer}  >

                <Tab className={classes.tab} component={Link} to="/" label="Home" />

                <Tab aria-owns={anchorEl ? "simple-menu" : undefined} aria-haspopup={anchorEl ? true : undefined} onMouseOver={(e) => handleClick(e)} className={classes.tab} component={Link} to="/services" label="Services" />

                <Tab className={classes.tab} component={Link} to="/revolution" label="The Revolution" />

                <Tab className={classes.tab} component={Link} to="/aboutus" label="About" />

                <Tab className={classes.tab} component={Link} to="/contactus" label="Contact Us" />

            </Tabs>
            <Button variant="contained" color="secondary" className={classes.button} component={Link} to="/estimate"  >Free Estimate !</Button>
            <Menu id="simple-menu" anchorEl={anchorEl} open={openMenu} onClose={handleClose} MenuListProps={{ onMouseLeave: handleClose }} classes={{ paper: classes.Menu }} elevation={0} >

                {/* <MenuItem onClick={() => { handleClose(); setValue(1) }} classes={{ root: classes.menuItem }} component={Link} to="/services"   >Services</MenuItem>
                         <MenuItem onClick={() => { handleClose(); setValue(1) }} classes={{ root: classes.menuItem }} component={Link} to="/custom"   >Custom software</MenuItem>
                        <MenuItem onClick={() => { handleClose(); setValue(1) }} classes={{ root: classes.menuItem }} component={Link} to="/mobile" >Mobile App development</MenuItem>
                        <MenuItem onClick={() => { handleClose(); setValue(1) }} classes={{ root: classes.menuItem }} component={Link} to="/website" >Website development</MenuItem> */}
                {menuOption.map((option, i) => (
                    <MenuItem key={option} component={Link} to={option.link} classes={{ root: classes.menuItem }} onClick={(event) => { handleMenuItemClick(event, i); setValue(1); handleClose() }} selected={i === selectedIndex && value === 1} >{option.name}</MenuItem>
                ))}
            </Menu>
        </React.Fragment>
    )
    const drawer = (
        <React.Fragment>
            <SwipeableDrawer  disableBackdropTransition={!iOS} disableDiscovery={iOS} open={openDrawer} onClose={()=> setOpenDrawer(false)} onOpen={()=> setOpenDrawer(true)} classes={{paper:classes.Drawer}}>
              <List disablePadding >
                  <ListItem onClick={()=> {setOpenDrawer(false);setValue(0)}} divider button component={Link} to='/' selected={value === 0}  >
                      <ListItemText  className={classes.DrawerItem} disableTypography  >Home</ListItemText>
                  </ListItem>
                  <ListItem onClick={()=> {setOpenDrawer(false);setValue(1)}} divider button component={Link} to='/services' selected={value === 1} >
                      <ListItemText  className={classes.DrawerItem} disableTypography  >Services</ListItemText>
                  </ListItem>
                  <ListItem onClick={()=> {setOpenDrawer(false);setValue(2)}} divider button component={Link} to='/revolution' selected={value === 2} >
                      <ListItemText className={classes.DrawerItem} disableTypography  >The Revolution</ListItemText>
                  </ListItem>
                  <ListItem onClick={()=> {setOpenDrawer(false);setValue(3)}} divider button component={Link} to='/aboutus' selected={value === 3} >
                      <ListItemText className={classes.DrawerItem} disableTypography  >About Us</ListItemText>
                  </ListItem>
                  <ListItem onClick={()=> {setOpenDrawer(false);setValue(4)}} divider button component={Link} to='/contactus' selected={value === 4} >
                      <ListItemText className={classes.DrawerItem} disableTypography  >Contact Us</ListItemText>
                  </ListItem>
                  <ListItem className={classes.ItemListEstimate} onClick={()=> {setOpenDrawer(false);setValue(5)}} divider button component={Link} to='/estimate' selected={value === 5} >
                      <ListItemText className={classes.DrawerItem} disableTypography  >Free Estimate</ListItemText>
                  </ListItem>
              </List>
            </SwipeableDrawer>
            <IconButton  className={classes.iconContainer} onClick={()=> setOpenDrawer(!openDrawer)} disableRipple>
                <MenuIcon className={classes.drawerIcon} />
            </IconButton>
        </React.Fragment>
    )

    return (
        <>
            <ElevationScroll>
                <AppBar position="fixed" className={classes.appbar} >
                    <Toolbar disableGutters >
                        <Button component={Link} to="/" className={classes.logoContainer} disableRipple onClick={() => { handleChange(); setValue(0) }} >

                            <img alt="company logo" className={classes.logo} src={logo} />
                        </Button> 
                        {matches ? drawer : tabs}

                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </>
    )
}

export default Header

