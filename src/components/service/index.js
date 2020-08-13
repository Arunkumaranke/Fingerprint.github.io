import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { withRouter } from "react-router-dom";
import { withStyles } from '@material-ui/core';
import {dummyData} from './data';
const styles = (theme) => ({

    container: {
        height: "100vh",
        width: "70%",
        marginLeft: "auto",
        marginRight: "auto",
        [theme.breakpoints.only("xs")]:{
        width: "80%",

        }
    },
    img:{
        width:"100%",
        height:210,
        [theme.breakpoints.only("sm")]:{
            height:147,
        },
        [theme.breakpoints.only("xs")]:{
            height:120,
        }
    },
    title:{
        textAlign:"center",
        color:"#333333",
        fontSize:13,
    }

})
class Service extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
                className={classes.container}
            >
                {dummyData.data.map((data,key)=>
                <Grid item lg={4} md={4} sm={4} xs={6} key={key}>
                    <img className={classes.img} src={data.img} alt="" />
                <Typography className={classes.title}>{data.title}</Typography>
                    </Grid>
                )}
            </Grid>
        )
    }
}
export default withRouter(withStyles((styles))(Service));