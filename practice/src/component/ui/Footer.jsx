import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core'
import FooterAbdornment from "../../assets/FooterAdornment.svg"
import Grid from '@material-ui/core/Grid'
import { Hidden } from '@material-ui/core'
import facebook from '../../assets/facebook.svg';
import instagram from '../../assets/instagram.svg';
import twitter from '../../assets/twitter.svg';



const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.blue,
        width: "100%",
    },
    adornment: {
        width: '25em',
        verticalAlign: 'bottom',
        [theme.breakpoints.down('md')]: {
            width: '21em'
        },
        [theme.breakpoints.down('xs')]: {
            width: '15em'
        }
    },
    gridContainer: {
        position: 'absolute'
    },
    link: {
        color: 'white',
        fontFamily: 'Arial',
        fontSize: '0.75rem',
        fontWeight: 'bold',
       
        
    },
    GridItem: {
        margin: '3em',
        "& a ":{
            textDecoration: 'none',
        }
    },
    icon:{
        width: '4em',
        height: '4em',
        [theme.breakpoints.down('xs')]:{
            width:'2.5em',
            height: '2.5em'
        }
        
    },
    socialContainer:{
        position: "absolute",
        marginTop:'-6em',
        right: '1.5em',
        [theme.breakpoints.down('xs')]:{
           right: '0.6em'
        }
        
    }

}))

const Footer = () => {
    const classes = useStyles()
    return (
        <>

            <footer className={classes.footer} >
                <Hidden mdDown>
                    <Grid container justify='center' className={classes.gridContainer} >
                        <Grid item className={classes.GridItem}  >
                            <Grid container component={Link} to='/' direction='column' spacing={2} >
                                <Grid item className={classes.link}>
                                    Home
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item className={classes.GridItem} >
                            <Grid container component={Link} to='/services' direction='column' spacing={2} >
                                <Grid item className={classes.link}>services</Grid>
                                <Grid item className={classes.link}>Custom software development</Grid>
                                <Grid item className={classes.link}>Mobile app develomemnt</Grid>
                                <Grid item className={classes.link}>website development</Grid>
                            </Grid>
                        </Grid>
                        <Grid item className={classes.GridItem} >
                            <Grid container direction='column' spacing={2} >
                                <Grid item className={classes.link}>The Revolution</Grid>
                                <Grid item className={classes.link}>Vision</Grid>
                                <Grid item className={classes.link}>Technology</Grid>
                                <Grid item className={classes.link}>Process</Grid>
                            </Grid>
                        </Grid>
                        <Grid item className={classes.GridItem} >
                            <Grid container direction='column' spacing={2} >
                                <Grid item className={classes.link}>About Us</Grid>
                                <Grid item className={classes.link}>History</Grid>
                                <Grid item className={classes.link}>Team</Grid>

                            </Grid>
                        </Grid>
                        <Grid item className={classes.GridItem} >
                            <Grid container direction='column' spacing={2} >
                                <Grid item className={classes.link}>Contact Us</Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Hidden>
                    <img src={FooterAbdornment} alt="Footer Pic" className={classes.adornment} />
                    <Grid container justifyContent='flex-end' spacing={2} className={classes.socialContainer}>
                        <Grid item component={"a"} href="https://www.facebook.com" rel="noopener noreferrer" target="_blank" ><img src={facebook} alt="facebook"  className={classes.icon}/></Grid>
                        <Grid item component={"a"} href="https://www.instagram.com" rel="noopener noreferrer" target="_blank" ><img src={instagram} alt="instagram" className={classes.icon} /></Grid>
                        <Grid item component={"a"} href="https://www.twitter.com" rel="noopener noreferrer" target="_blank" ><img src={twitter} alt="twitter" className={classes.icon} /></Grid>
                    </Grid>
            </footer>
        </>
    )
}

export default Footer
