import React from 'react'
import { Grid } from '@material-ui/core'
import { Typography } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core'
import { Button } from '@material-ui/core';
import ButtonArrow from './ButtonArrow';
import background from '../../assets/background.jpg'
import mobilleBackground from '../../assets/mobileBackground.jpg'
import { useMediaQuery } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: '0.7rem',
        height: 35,
        padding: 5,
        [theme.breakpoints.down('sm')]: {
            marginBottom: '2em'
        }
    },
    Background:{
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment:'fixed',
        backgroundSize: 'cover',
        height: '60em',
        width: '100%',
        [theme.breakpoints.down('md')]:{
            backgroundImage: `url(${mobilleBackground})`,
        }
    },
    estimateButton:{
        ...theme.typography.estimate,
        borderRadius:50,
        height: 80,
        width: 205,
        backgroundColor: theme.palette.common.orange,
        fontSize:'1.5rem',
        margin: "0 5em 0 2em",
        [theme.breakpoints.down('sm')]:{
            margin: 0
        }
    }
}))


const CallToAction = () => {
    const classes = useStyles()
    const theme = useTheme()
    const matchSM = useMediaQuery(theme.breakpoints.down('sm'))
    return (
        <Grid container  alignItems='center' justify= {matchSM ?'center':'space-between'} className={classes.Background} direction={ matchSM ? 'column':'row'}>
            <Grid item style={{marginLeft: matchSM ? 0 : '5em',textAlign: matchSM ? 'center': 'inherit'}}  >
                <Grid container direction='column' >
                    <Grid item  >
                        <Typography variant='h2'>Simple Software.<br />Revolutionary Results</Typography>
                        <Typography variant='subtitle2' style={{fontSize:'1.5rem'}} >Take Advantage of 21st Century</Typography>
                    </Grid>
                </Grid>
                <Grid container item justifyContent={matchSM ? 'center' : undefined}>
                    <Button variant='outlined' className={classes.learnButton} > <span style={{ marginRight: 5 }}> Learn More </span>
                        <ButtonArrow width={10} height={10} fill={theme.palette.common.blue} />
                    </Button>
                </Grid>
            </Grid>
            <Grid item>
                <Button variant='contained' className={classes.estimateButton}>Free Estimate</Button>
            </Grid>
            
        </Grid>
    )



}

export default CallToAction
