import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { withRouter } from "react-router-dom";
import { withStyles } from '@material-ui/core';

const styles = (theme) => ({

    container: {
        backgroundColor: "#E21200",
        height: "80vh",
        padding: "8em 10em",
        [theme.breakpoints.only("xs")]:{
        paddingLeft:50,
            padding:0,
        }

    },
    content: {
        color: "#fff",
        fontSize: 24,
        width: "43%",
        [theme.breakpoints.only("sm")]:{
            width: "80%",
        },
        [theme.breakpoints.only("md")]:{
            width: "69%",
        },
        [theme.breakpoints.only("xs")]:{
            width: "100%",
        }
    },
    link: {
        textDecoration: "underline",
        letterSpacing: "0px",
        color: "#FFFFFF",
        fontSize:13,
    }

})
class ArrowContent extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="center"
                className={classes.container}
            >
                <Grid item>
                <Typography className={classes.content}>
                    We provide digital strategies with intelligence of our proprietary data ensuring a high ROI on your ads, and the most engagement on your content.
                </Typography>
            </Grid>
                <Grid item>
                <Typography className={classes.link}>
                    Find out how we get the results
                </Typography>
                </Grid>
                
            </Grid>
        )
    }
}
export default withRouter(withStyles((styles))(ArrowContent));