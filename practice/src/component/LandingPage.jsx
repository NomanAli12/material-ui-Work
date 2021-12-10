import React from 'react'
import Lottie from 'react-lottie';
import { makeStyles, useTheme } from '@material-ui/core'
import animationData from '../animations/landinganimation/data'
import Grid from '@material-ui/core/Grid'
import { Button } from '@material-ui/core';
import ButtonArrow from './ui/ButtonArrow';
import { Typography } from '@material-ui/core';
import CustomSoftwareIcon from '../assets/Custom Software Icon.svg'
import { useMediaQuery } from '@material-ui/core';
import mobileAppIcon from '../assets/mobileIcon.svg'
import websiteIcon from '../assets/websiteIcon.svg'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import revolutionBackground from '../assets/repeatingBackground.svg'
import infoBackground from '../assets/infoBackground.svg';
import CallToAction from './ui/CallToAction';


const useStyles = makeStyles(theme => ({
    animation: {
        maxWidth: '50em',
        minWidth: '21em',
        marginTop: '2em',
        marginLeft: '10%',
        marginBottom: '3em',
        [theme.breakpoints.down('sm')]: {
            maxWidth: '30em'
        }
    },
    estimateButton: {
        ...theme.typography.estimate,
        backgroundColor: theme.palette.common.orange,
        borderRadius: 50,
        height: 45,
        width: 145,
        marginRight: 40,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light,
        }
    },
    buttonContainer: {
        marginTop: '1em'
    },
    learnButtonHero: {
        ...theme.typography.learnButton,
        fontSize: '0.9rem',
        height: 45,
        width: 145
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: '0.7rem',
        height: 35,
        padding: 5,
        [theme.breakpoints.down('sm')]: {
            marginBottom: '2em'
        }
    },
    mainContainer: {
        marginTop: '5em',
        [theme.breakpoints.down('md')]: {
            marginTop: '3em',
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: '2em',
        }

    },
    heroTextContainer: {
        minWidth: "21.5em",
        marginLeft: '1em',
        [theme.breakpoints.down('xs')]: {
            marginLeft: 0
        }
    },
    icon: {
        marginLeft: '2em',
        [theme.breakpoints.down('xs')]: {
            marginLeft: 0
        }
    },
    serviceContainer: {
        marginTop: '12em',
    },
    revolutionBackground: {
        backgroundImage: `url(${revolutionBackground})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100%',
        width: '100%'
    },
    revolutionCard: {
        position: 'absolute',
        boxShadow: theme.shadows[10],
        borderRadius: 15,
        padding: '10em',
        [theme.breakpoints.down('sm')]: {
            paddingTop: '8em',
            paddingBottom: '8em',
            paddingLeft: 0,
            paddingRight: 0,
            borderRadius: 0,
            width: '100%'
        }
    },
    informationBackground: {
        backgroundImage: `url(${infoBackground})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100%',
        width: '100%'
    }
}))



const LandingPage = () => {
    const classes = useStyles()
    const theme = useTheme()
    const matchSM = useMediaQuery(theme.breakpoints.down('sm'))
    const matchXS = useMediaQuery(theme.breakpoints.down('xs'))
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return (
        <>
            <Grid container direction='column' className={classes.mainContainer} >
                <Grid item>{/*================ hero block =========*/}
                    <Grid container justifyContent="flex-end" alignItems='center' direction='row' >
                        <Grid sm item className={classes.heroTextContainer} >
                            <Typography align='center' variant='h2' >Bringing west Coast Technology <br />to the Midwest</Typography>
                            <Grid container justifyContent='center' className={classes.buttonContainer} >
                                <Grid item ><Button variant='contained' className={classes.estimateButton}  >Free Estimate</Button></Grid>
                                <Grid item ><Button variant='outlined' className={classes.learnButtonHero} >Learn More
                                    <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                                </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid sm item className={classes.animation}>
                            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item > {/*================ custom Software block =========*/}
                    <Grid container direction='row' className={classes.serviceContainer} justify={matchSM ? 'center' : undefined} >
                        <Grid item style={{ marginLeft: matchSM ? 0 : '5em', textAlign: matchSM ? 'center' : undefined }}>
                            <Typography variant='h4'>Custom Software Development</Typography>
                            <Typography variant='subtitle1'>Save energy Save Time Save Money</Typography>
                            <Typography variant='subtitle1'>Complete Digital Solution, from invetigation to celebration</Typography>
                            <Button variant='outlined' className={classes.learnButton} > <span style={{ marginRight: 10 }}> Learn More </span>
                                <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                            </Button>
                        </Grid>
                        <Grid item >
                            <img className={classes.icon} src={CustomSoftwareIcon} alt="custom software icon" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item > {/*================ mobile app block =========*/}
                    <Grid container direction='row' className={classes.serviceContainer} justify={matchSM ? 'center' : 'flex-end'} >
                        <Grid item style={{ textAlign: matchSM ? 'center' : undefined }}>
                            <Typography variant='h4'>Mobile App Development</Typography>
                            <Typography variant='subtitle1'>Extend Functonality Extend Access Extend Engagement </Typography>
                            <Typography variant='subtitle1'>Integrate your Web experiance or Create a stand alone app {matchSM ? null : <br />}with either mobile platform</Typography>
                            <Button variant='outlined' className={classes.learnButton} > <span style={{ marginRight: 10 }}> Learn More </span>
                                <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                            </Button>
                        </Grid>
                        <Grid item style={{ marginRight: matchSM ? 0 : '5em' }} >
                            <img className={classes.icon} src={mobileAppIcon} alt="mobile app icon" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item > {/*================ website development block =========*/}
                    <Grid container direction='row' className={classes.serviceContainer} justify={matchSM ? 'center' : undefined} >
                        <Grid item style={{ marginLeft: matchSM ? 0 : '5em', textAlign: matchSM ? 'center' : undefined }}>
                            <Typography variant='h4'>Website Development</Typography>
                            <Typography variant='subtitle1'>Reach more. Discover more. Sell more </Typography>
                            <Typography variant='subtitle1'>Optimize for search Engine Built for Speed</Typography>
                            <Button variant='outlined' className={classes.learnButton} > <span style={{ marginRight: 10 }}> Learn More </span>
                                <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                            </Button>
                        </Grid>
                        <Grid item style={{ marginRight: matchSM ? 0 : '5em' }} >
                            <img className={classes.icon} src={websiteIcon} alt="mobile app icon" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item> {/*================ Revolution card block =========*/}
                    <Grid container style={{ height: '100em', marginTop: '10em' }} alignItems='center' justifyContent='center' >
                        <Card className={classes.revolutionCard} >
                            <CardContent>
                                <Grid container direction='column' style={{ textAlign: 'center' }}  >
                                    <Grid item>
                                        <Typography variant='h3' gutterBottom >
                                            The Revolution
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant='subtitle1'>
                                            Visionary insight coupled with cuttinf-edge technology is recipe for resolution
                                        </Typography>
                                        <Button variant='outlined' className={classes.learnButtonHero} >Learn More
                                            <ButtonArrow width={15} height={15} fill={theme.palette.common.blue} />
                                        </Button>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                        <div className={classes.revolutionBackground} />
                    </Grid>
                </Grid>
                <Grid item > {/*================ information block =========*/}
                    <Grid container direction='row' style={{ height: '80em' }} alignItems='center'>
                        <Grid container style={{position:'absolute', textAlign: matchXS ? 'center' : 'inherit'}} direction={matchXS ? "column":'row'} spacing={matchXS ? 10 : 0} >
                            <Grid item sm style={{  marginLeft: matchXS ? 0 : matchSM ? "2em" : '5em' }} >
                                <Grid container direction='column'>
                                    <Typography variant='h2' style={{ color: 'white' }}>About Us</Typography>
                                    <Typography variant='subtitle2' >Let's Get Personal</Typography>
                                    <Grid item>
                                    <Button variant='outlined' className={classes.learnButton} > <span style={{ marginRight: 10 }}> Learn More </span>
                                        <ButtonArrow width={10} height={10} fill='white' />
                                    </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item sm style={{  marginRight: matchXS ? 0 :  matchSM ? "2em" : '5em' ,textAlign: matchSM ? "center":'right'}} >
                                <Grid container direction='column'>
                                    <Typography variant='h2' style={{ color: 'white' }}>Contact us</Typography>
                                    <Typography variant='subtitle2' >Say Hello!</Typography>
                                    <Grid item>
                                    <Button variant='outlined' className={classes.learnButton} > <span style={{ marginRight: 10 }}> Learn More </span>
                                        <ButtonArrow width={10} height={10} fill='white' />
                                    </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <div className={classes.informationBackground} />
                    </Grid>
                </Grid>
                <Grid item> {/*================ Call to Action block =========*/}
                    <CallToAction/>
                </Grid>
            </Grid>
        </>
    )
}



export default LandingPage
