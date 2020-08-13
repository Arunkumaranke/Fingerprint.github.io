import React from 'react';
import { Grid, Typography,Hidden } from '@material-ui/core';
import { withRouter } from "react-router-dom";
import { withStyles } from '@material-ui/core';


const styles = (theme) => ({
    container: {
        height: "100vh",
        width: "100%",
        // marginLeft: "auto",
        // marginRight: "auto",
        backgroundColor: "black",

    },
    textCont: {
        color: "#fff",
        height:"100%",
        paddingLeft:"15%",
        paddingTop:"8%",
        paddingBottom:"5%",
        [theme.breakpoints.only("xs")]:{
        paddingLeft:"10%",

        }

    },
    title:{
        fontSize:38,
    },
    titleLine:{
        fontSize:38,
        textDecoration:"underline",
    },
    address:{
        color:"grey",
        fontSize:16,
    },
    copyrights:{
        color:"grey",
        fontSize:10,
    },
    img:{
        width:"64vw",
        height:"100%",
        paddingLeft:24,
        [theme.breakpoints.only("lg")]:{
        width:"49vw",

        },
    },
    imgCont:{
        overflow:"hidden",
    }
})
class Footer extends React.Component {


    render() {
        const { classes } = this.props;
        return (
            <Grid className={classes.container}>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                    style={{height:"100%"}}
                >
                    <Grid
                        container
                        direction="column"
                        justify="space-between"
                        alignItems="flex-start"
                        className={classes.textCont}
                        item md={7} lg={7} sm={7}>
                        <Grid item>
                            <Typography className={classes.title} >Got a project</Typography>
                            <Typography className={classes.titleLine}>Let's talk</Typography>
                        </Grid>
                        <Grid
                            item
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="flex-start"
                        ><Grid item xs={5} sm={6} md={7} lg={7}>
                            <Typography className={classes.address}>No 3,First floor ,17th Avenue,</Typography>
                            <Typography className={classes.address}>Harrington Road, Chetpet</Typography>
                            <Typography className={classes.address}>Chennai - 600031</Typography>

                            </Grid>
                            <Grid item xs={7} sm={5} md={5} lg={5}>
                            <Typography className={classes.address}>Sugin Benzer</Typography>
                            <Typography className={classes.address}>Business Head</Typography>
                            <Typography className={classes.address}>+91 - 8825821942</Typography>
                            <Typography className={classes.address}>Sugin@mamaldigital.com</Typography>

                            </Grid>
                        </Grid>
                        <Grid item
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="center"
                        >
                            <Grid item xs={6} sm={7} lg={7}md={7}>
                            <Typography className={classes.address}>Blog</Typography>
                            <Typography className={classes.address}>Careers</Typography>
                            <Typography className={classes.address}>Team</Typography>
                            <Typography className={classes.address}>Contact us</Typography>
                            </Grid>
                            <Grid item xs ={6} sm={5} lg={5} md={5}>
                            <Typography className={classes.address}>Linkedin</Typography>
                            <Typography className={classes.address}>Instagram</Typography>
                            <Typography className={classes.address}>Facebook</Typography>
                            <Typography className={classes.address}>Twitter</Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography className={classes.copyrights}>2020 copyrights Mammal Digital</Typography>
                        </Grid>
                    </Grid>
                    <Hidden smDown>
                    <Grid item md={5} lg={5} sm={5} className={classes.imgCont}>
                        <img className={classes.img} src="assets/img/path 330.svg" alt="" />
                    </Grid>
                    </Hidden>
                </Grid>
            </Grid>
        )
    }
}

export default withRouter(withStyles((styles))(Footer));