import React from "react";
import { Grid } from '@material-ui/core';
import { withRouter } from "react-router-dom";
import { withStyles } from '@material-ui/core';
import { FormControl, Typography, Button } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {dummyData} from './data'
const styles = (theme) => ({

    container: {
        background: "#000000 0% 0% no-repeat padding-box",
    },
    backgroundImg: {
        width: "100%",
        height: "100vh",
        opacity: 0.5,
        objectFit: "cover",
        overflow: "hidden",
        [theme.breakpoints.only("xs")]:{
            height:"100%",
    
            }
    },

    navBar: {
        position: "relative",
        color: "#fff",
        padding: "3em 7%"
    },
    img:{
        width:"100%",
        [theme.breakpoints.only("sm")]:{
        height:"100%",

        }
    },

    formControl: {
        fontSize:14,
        fontWeight:600,
        color: "#fff !important",
        '&::before': {
            borderBottom: "unset",
        },
        '&::after': {
            borderBottom: "unset",
        },
    },
    MainCont:{
        position: "absolute",
        height:"100%",
        [theme.breakpoints.only("xs")]:{
            height:"unset",
        }
    },
    text: {
        color: "#fff",
        fontSize: 51,
        width: "100%",
        fontWeight: 400,
        [theme.breakpoints.only("sm")]:{
        fontSize: 48,
        },
        [theme.breakpoints.only("xs")]:{
            fontSize: 24,
            } 
    },
    TextCont:{
        position: "relative",
         width: "75%",
         marginLeft: "auto",
         marginRight: "auto",
         padding: "7% 2%",
         [theme.breakpoints.only("sm")]:{
            padding: "3% 2%",
            width: "84%",

         }
    },
    button: {
        color: "#fff",
        borderRadius: 23,
        border: "2px solid #fff",
        padding: "7px 28px",
        fontSize: "12px",
        fontWeight:600,
        marginTop:28,
        '&:hover':{
            backgroundColor:"#fff",
            color:"black"
        }
    },
    arrowContleft:{
        backgroundColor:"#fff",
        padding:"5px 10px",
    },
    arrowContright:{
        backgroundColor:"red",
        padding:"5px 10px",
    },
    navtext:{
        fontSize:13,
        fontWeight:600,
    },
    logo:{
        fontSize:20,
        fontWeight:"bold",
    }
})
class MainCarousel extends React.Component {
    constructor() {
        super();
        this.state = {
            age: "",

        }
    }

    handleChange = (event) => {
        const name = event.target.name;
        this.setState({
            ...this.state,
            [name]: event.target.value,
        });
    };
    render() {
        const { classes } = this.props;
        const settings = {
            className: classes.center,
            dots: false,
            infinite: true,
            arrows: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay:true,
        };
        return (
            <Grid container className={classes.container} >
                <Grid className={classes.backgroundImg} >
                    <Slider {...settings}>
                        {dummyData.data.map((data,key) =>
                    <img key={key} className={classes.img} src={data.img} alt="" />
                        )}
                    </Slider>
                </Grid>
                <Grid container
                    direction="column"
                    justify="space-between"
                    alignItems="flex-start"
                    className={classes.MainCont}
                    >
                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                        className={classes.navBar}
                    >
                        <Grid item xs={5} sm={2} md={4} lg={5}>
                            <Typography className={classes.logo}>Mammal</Typography>
                    </Grid>
                        <Grid item xs={7} sm={10} md={8} lg={7}>
                            <Grid item
                                container
                                direction="row"
                                justify="space-between"
                                alignItems="center"

                            >
                                <Grid item >
                                    <FormControl >
                                        <Select value={this.state.age} onChange={this.handleChange} displayEmpty className={classes.formControl}>
                                            <MenuItem value="">
                                                Select
                                            </MenuItem>
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item>
                                    <Typography className={classes.navtext}>CASE STUDIES</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography className={classes.navtext}>FREE WEBSITE ANALYSIS</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography className={classes.navtext}>CONTACT</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography className={classes.navtext}>8825821942</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="center"
                         className={classes.TextCont}
                    >
                        <Typography className={classes.text}>Palam Silks,</Typography>
                        <Typography className={classes.text}>How we delivered 23 % ROI</Typography>
                        <Typography className={classes.text}>on selling sarees online</Typography>
                        <Button className={classes.button}>KNOW MORE</Button>
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-end"
                        style={{ bottom: 0, postion: "relative" }}
                    >
                        <Grid item className={classes.arrowContleft}>
                        <ArrowBackIosIcon />
                        </Grid>
                        <Grid item className={classes.arrowContright}>
                       <ArrowForwardIosIcon />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default withRouter(withStyles((styles))(MainCarousel));