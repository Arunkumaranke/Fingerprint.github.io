import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { withRouter } from "react-router-dom";
import { withStyles } from '@material-ui/core';
import { dummyData } from './data';

const styles = (theme) => ({

    container: {
        height: "100vh",
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 20,
        [theme.breakpoints.only("xs")]: {
            width: "80%",

        }
    },
    img: {
        width: "100%",
        height: "100%",
        [theme.breakpoints.only("sm")]: {
            height: 170,
        },
        [theme.breakpoints.only("xs")]: {
            height: 100,
        }
    },
    imgCont: {
        padding: 25,
        [theme.breakpoints.up("lg")]: {
        padding:35,
        },
        [theme.breakpoints.only("xs")]: {
        padding: 12,

        }

    },
    button: {
        color: "black",
        borderRadius: 23,
        border: "2px solid black",
        padding: "7px 28px",
        fontSize: "12px",
        fontWeight: 600,
        marginTop: 28,
        '&:hover': {
            backgroundColor: "black",
            color: "#fff"
        }
    },
    title:{
        fontSize:18,
    },
    link:{
        fontSize:12,
        textDecoration:"underline",
        fontWeight:"bold",
    },
    titleCont:{
        marginTop:15,
        [theme.breakpoints.up("md")]: {
        height:80,

        }
    },
    linkCont:{
        marginTop:15
    },
    blog:{
        fontSize:24,
    }



})
class Blog extends React.Component {


    render() {
        const { classes } = this.props;

        return (
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="flex-start"
                className={classes.container}
            >
                <Grid item
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    xs={12} md={12} lg={12} sm={12}>
                    <Typography className={classes.blog}>Blog</Typography>
                </Grid>
                {dummyData.data.map((data, key) =>

                    <Grid item lg={4} md={4} sm={4} xs={4}
                        key={key}
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="flex-start"
                        className={classes.imgCont}
                    >
                        <Grid item
                            container
                            direction="column"
                            justify="space-between"
                            alignItems="flex-start"
                            key={key}>
                            <Grid item>
                                <img className={classes.img} src={data.img} alt="" />

                            </Grid>
                            <Grid item className={classes.titleCont}>
                                <Typography className={classes.title}>{data.title}</Typography>

                            </Grid>
                            <Grid item className={classes.linkCont}>
                                <Typography className={classes.link}>{data.link}</Typography>

                            </Grid>
                        </Grid>

                    </Grid>
                )}
                <Grid item
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    >
                    <Button className={classes.button}>VIEW ALL</Button>

                </Grid>
            </Grid>
        )
    }
}
export default withRouter(withStyles((styles))(Blog));