import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { withRouter } from "react-router-dom";
import { withStyles } from '@material-ui/core';

const styles = (theme) => ({

    container: {
        height: "100vh",
        padding: "7em 10em 2em 10em",
        [theme.breakpoints.only("xs")]:{
            padding:"35px 45px",
        }
    },
    content: {
        fontSize: 24,
        width:"100%",
        marginBottom:"4%",
        [theme.breakpoints.only("sm")]:{
            marginBottom:"8%",
        
        },
        [theme.breakpoints.only("xs")]:{
            width:"100%",
            marginBottom:"10%",

            },
    },
    content2:{
        width:"46%",
        marginBottom:"5%",
        [theme.breakpoints.only("sm")]:{
            marginBottom:"9%",
        },
        [theme.breakpoints.only("xs")]:{
        width:"100%",
        marginBottom:"11%",

        },
    },
    text1:{
        fontSize:23,
    },
    text2:{
        fontSize:64,
        lineHeight:1.1,
    },
    text3:{
        fontSize:12,
    },
    content3:{
        width:"48%",
        lineHeight:1.5,
        marginBottom:"2%",
        [theme.breakpoints.only("sm")]:{
            width:"90%",
        marginBottom:"4%",
            
        },
        [theme.breakpoints.only("xs")]:{
            width:"100%",
        marginBottom:"5%",

            },
        [theme.breakpoints.only("md")]:{
            width:"65%",
        
        }

    }

})
class Aboutus extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="flex-start"
                className={classes.container}
            >
                <Grid item className={classes.content}>
                <Typography className={classes.text1}>
                - what we do
                </Typography>
            </Grid>
                <Grid item className={classes.content2}>
                <Typography className={classes.text2}>
                Intelligent Marketing Services
                </Typography>
                </Grid>
                <Grid item className={classes.content3}>
                <Typography className={classes.text3}>
                At Mammal Digital, our intuition is backed by the intelligence we drive from the data we collect. Every campaign that we run, we run with the assurity of what time to run, what cost to run it at and who to target it to, which comes from analysis tons of data that we collect on your industry 
                
                </Typography>
                </Grid>
                <Grid item className={classes.content3}>
                <Typography className={classes.text3}>
                Our services are wide, click below to see how we can serve you the best. We don’t run on fixed packages, because every client and every campaign is different and we like tailoring our services to your objective.
                </Typography>
                </Grid>
                
            </Grid>
        )
    }
}
export default withRouter(withStyles((styles))(Aboutus));