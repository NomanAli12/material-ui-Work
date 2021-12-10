import React from 'react'
import Lottie from 'react-lottie'
import { Link } from 'react-router-dom'
import { makeStyles, useTheme } from '@material-ui/core'
import { Grid } from '@material-ui/core'
import { IconButton } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { useMediaQuery } from '@material-ui/core'
import BackArrow from '../../assets/backArrow.svg'
import forwardArrow from '../../assets/forwardArrow.svg'
import lightBulb from '../../assets/bulb.svg'
import cash from '../../assets/cash.svg'
import stopWatch from '../../assets/stopwatch.svg'
import documentAnimation from '../../animations/documentsAnimation/data'
import scaleAnimation from '../../animations/scaleAnimation/data.json'
import roots from '../../assets/root.svg'
import automatioAnimation from '../../animations/automationAnimation/data.json'
import uxAnimation from '../../animations/uxAnimation/data'
import { Hidden } from '@material-ui/core'



const useStyles = makeStyles(theme => ({
    heading: {
        maxWidth: '40em'
    },
    arrowContainer: {
        marginTop: '0.5em'
    },
    mainContainer: {
        paddingLeft: '5em',
        paddingRight: '5em',
        paddingBottom: '10em',
        paddingTop: '2em',
    },
    itemContainer: {
        maxWidth: '40em'
    }
}))

const CustomSoftware = () => {

    const classes = useStyles()

    const documentOptions = {
        loop: true,
        autoplay: true,
        animationData: documentAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
    const scaleOptions = {
        loop: true,
        autoplay: true,
        animationData: scaleAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
    const automationOptions = {
        loop: true,
        autoplay: true,
        animationData: automatioAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }
    const uxOptions = {
        loop: true,
        autoplay: true,
        animationData: uxAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }


    return (
        <Grid container direction='column' className={classes.mainContainer} >
            <Grid item container direction='row'>
                <Hidden mdDown>
                    
                </Hidden>
                <Grid item className={classes.arrowContainer} style={{ marginRight: '1em', marginLeft: '-3.5em' }} >
                    <IconButton component={Link} to='/services'>
                        <img src={BackArrow} alt="back to service page" />
                    </IconButton>
                </Grid>

                <Grid item container direction='column' className={classes.heading} >
                    <Grid item >
                        <Typography variant='h2' >Custom Software Development</Typography>
                    </Grid>
                    <Grid item >
                        <Typography variant='body1' paragraph >
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Officia eius atque doloribus cupiditate voluptas officiis aspernatur similique vel omnis ab
                        </Typography>
                        <Typography variant='body1' paragraph >
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Officia eius atque doloribus cupiditate voluptas officiis aspernatur similique vel omnis ab
                        </Typography>
                        <Typography variant='body1' paragraph >
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Officia eius atque doloribus cupiditate voluptas officiis aspernatur similique vel omnis ab
                        </Typography>
                        <Typography variant='body1' paragraph >
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Officia eius atque doloribus cupiditate voluptas officiis aspernatur similique vel omnis ab
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item className={classes.arrowContainer} >
                    <IconButton component={Link} to='/mobileapps'>
                        <img src={forwardArrow} alt="forward" />
                    </IconButton>
                </Grid>
            </Grid>
            <Grid item container direction='row' justifyContent='center' style={{ marginTop: '15em', marginBottom: '20em' }}>
                <Grid item container direction='column' md style={{ maxWidth: '40em', alignItems: 'center' }}>
                    <Grid item>
                        <Typography variant='h4'>Save Energy</Typography>
                    </Grid>
                    <Grid item >
                        <img src={lightBulb} alt="Light Bulb" />
                    </Grid>
                </Grid>
                <Grid item container direction='column' md style={{ maxWidth: '40em', alignItems: 'center' }}>
                    <Grid item>
                        <Typography variant='h4'>Save Time</Typography>
                    </Grid>
                    <Grid item >
                        <img src={stopWatch} alt="Stop watch" />
                    </Grid>
                </Grid>
                <Grid item container direction='column' md style={{ maxWidth: '40em', alignItems: 'center' }}>
                    <Grid item>
                        <Typography variant='h4'>Save Money</Typography>
                    </Grid>
                    <Grid item >
                        <img src={cash} alt="Money" />
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container direction='row' justifyContent='space-between'>
                <Grid item container className={classes.itemContainer} >
                    <Grid item container direction='column' md>
                        <Grid item>
                            <Typography variant='h4'>Digital Documents and Data</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='body1' paragraph>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae rerum iusto impedit. Harum totam,
                            </Typography>
                            <Typography variant='body1' paragraph>
                                ab fuga aut animi qui repudiandae consectetur libero sapiente quod odit voluptate, magnam, deleniti aspernatur repellat!
                            </Typography>
                            <Typography variant='body1' paragraph>
                                ab fuga aut animi qui repudiandae consectetur libero sapiente quod odit voluptate, magnam, deleniti aspernatur repellat!
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item md>
                        <Lottie options={documentOptions} style={{ maxWidth: 275, minHeight: 250, maxHeight: 275 }} />
                    </Grid>
                </Grid>
                <Grid item container className={classes.itemContainer} >
                    <Grid item md>
                        <Lottie options={scaleOptions} style={{ maxWidth: 280, maxHeight: 260 }} />
                    </Grid>
                    <Grid item container direction='column' md>
                        <Grid item>
                            <Typography variant='h4' align='right'>Scale</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='body1' paragraph align='right'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae rerum iusto impedit. Harum totam,
                                ab fuga aut animi qui repudiandae consectetur libero sapiente quod odit voluptate, magnam, deleniti aspernatur repellat!
                            </Typography>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
            <Grid item container direction='row' style={{marginTop:'20em' , marginBottom:'20em'}}>
                <Grid item container direction='column' alignItems='center'>
                    <Grid item>
                        <img src={roots} alt="tree with roots extended out" height='450em' width='450em' />
                    </Grid>
                    <Grid item className={classes.itemContainer}>
                        <Typography variant='h4' align='center' gutterBottom>Root-Cause Analysis</Typography>
                        <Typography variant='body1' align='center' paragraph > Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae rerum iusto impedit. Harum totam,</Typography>
                        <Typography variant='body1' align='center' paragraph >  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae rerum iusto impedit. Harum totam,
                            ab fuga aut animi qui repudiandae consectetur libero sapiente quod odit voluptate, magnam, deleniti aspernatur repellat!</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container direction='row' justifyContent='space-between'>
                <Grid item container className={classes.itemContainer} >
                    <Grid item container direction='column' md>
                        <Grid item>
                            <Typography variant='h4'>Automation</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='body1' paragraph>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae rerum iusto impedit. Harum totam,
                            </Typography>
                            <Typography variant='body1' paragraph>
                                ab fuga aut animi qui repudiandae consectetur libero sapiente quod odit voluptate, magnam, deleniti aspernatur repellat!
                            </Typography>
                            <Typography variant='body1' paragraph>
                                ab fuga aut animi qui repudiandae consectetur libero sapiente quod odit voluptate, magnam, deleniti aspernatur repellat!
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item md>
                        <Lottie options={automationOptions} style={{ maxWidth: 275, minHeight: 250, maxHeight: 275 }} />
                    </Grid>
                </Grid>
                <Grid item container className={classes.itemContainer} >
                    <Grid item md>
                        <Lottie options={uxOptions} style={{ maxWidth: 155, maxHeight: 310 }} />
                    </Grid>
                    <Grid item container direction='column' md>
                        <Grid item>
                            <Typography variant='h4' align='right'>User Experiance</Typography>
                        </Grid>
                        <Grid item>
                        <Typography variant='body1' paragraph>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae rerum iusto impedit. Harum totam,
                            </Typography>
                            <Typography variant='body1' paragraph>
                                ab fuga aut animi qui repudiandae consectetur libero sapiente quod odit voluptate, magnam, deleniti aspernatur repellat!
                            </Typography>
                            <Typography variant='body1' paragraph>
                                ab fuga aut animi qui repudiandae consectetur libero sapiente quod odit voluptate, magnam, deleniti aspernatur repellat!
                                ab fuga aut animi qui repudiandae consectetur libero sapiente quod odit voluptate, magnam, deleniti aspernatur repellat!
                            </Typography>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </Grid>
    )
}

export default CustomSoftware
