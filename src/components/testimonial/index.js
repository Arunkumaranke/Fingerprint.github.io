import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Grid, Typography } from '@material-ui/core';
import { withRouter } from "react-router-dom";
import { withStyles } from '@material-ui/core';
import { dummyData } from './data';
import Slider from "react-slick";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const styles = (theme) => ({

    container: {
        height: "50vh",
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
        [theme.breakpoints.only("xs")]: {
            width: "80%",

        }
    },
    img: {
        width: "100%",
        height: 40,
        [theme.breakpoints.only("sm")]: {
            height: 40,
        },
        [theme.breakpoints.only("xs")]: {
            height: 20,
        }
    },
    imgCont: {
        marginRight: 1,
        [theme.breakpoints.only("xs")]: {
            marginRight: 0,

        }
    },
    carousel: {
        height: 200,
        width: 200
    },
    center: {
        width: "75%",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        "& .slick-next": {
            right: "25px",
            background: "red",
            height: "40px",
            width: "40px",
            content:"<"
        },
        "& .slick-prev": {
            left: "27px",
            background: "red",
            height: "40px",
            width: "40px",
            zIndex: "1000",
        },

    },
    arrCont1: {
        position: "absolute",
        left: "8%",
        height: 40,
        width: 40,
        backgroundColor: "#E21200",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0px 3px 6px #00000029",
        background: `#3D4690 0% 0% no-repeat padding-box`,
        [theme.breakpoints.only("md")]: {
          left: "8%"
        },
        
      },
      arrow1: {
        position: "relative",
        left: 0,
        paddingLeft: 8,
        fill: theme.palette.common.white,
        width: 16,
        height: 30
      },
      arrCont2: {
        position: "absolute",
        right: "8%",
        height: 40,
        width: 40,
        backgroundColor: "#E21200",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0px 3px 6px #00000029",
        background: `#3D4690 0% 0% no-repeat padding-box`,
        [theme.breakpoints.only("md")]: {
          right: "8%"
        },
        
      },
      arrow2: {
        position: "relative",
        right: 0,
        paddingLeft: 3,
        fill: theme.palette.common.white,
        width: 16,
        height: 30
      },
    


})
class Testimonial extends React.Component {
    constructor() {
        super();
        this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.slider = React.createRef();

       
    }
    next = () => {
        this.slider.current.slickNext();
      };
      previous = () => {
        this.slider.current.slickPrev();
      };
    
    
    render() {
        const { classes } = this.props;
        const settings = {
            className: classes.center,
            dots: true,
            infinite: true,
            arrows: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            
        };
        return (
            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
                className={classes.container}
            >
                <Grid item onClick={this.previous} className={classes.arrCont1}>
            <ArrowBackIosIcon className={classes.arrow1} />
          </Grid>

                <Slider ref={this.slider} className={classes.carousel} {...settings}>
                    {dummyData.data.map((data, key) =>
                        <Typography key={key}>{data.text}</Typography>
                    )}

                </Slider>
                <Grid item onClick={this.next} className={classes.arrCont2}>
            <ArrowForwardIosIcon className={classes.arrow2} />
          </Grid>

            </Grid>
        )
    }
}
export default withRouter(withStyles((styles))(Testimonial));