import React from 'react';
import { Grid } from '@material-ui/core';
import { withRouter } from "react-router-dom";
import { withStyles } from '@material-ui/core';
import {dummyData} from './data';
const styles = (theme) => ({

    container: {
        height: "50vh",
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
        [theme.breakpoints.only("xs")]:{
        width: "80%",

        }
    },
    img:{
        width:"100%",
        height:40,
        [theme.breakpoints.only("sm")]:{
            height:40,
        },
        [theme.breakpoints.only("xs")]:{
            height:20,
        }
    },
    imgCont:{
        marginRight:1,
        [theme.breakpoints.only("xs")]:{
        marginRight:0,

        }
    }
    

})
class Partners extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
                className={classes.container}
            >
                {dummyData.data.map((data,key)=>
                <Grid className={classes.imgCont} item lg={2} md={2} sm={2} xs={3} key={key}>
                    <img className={classes.img} src={data.img} alt="" />
                    </Grid>
                )}
            </Grid>
        )
    }
}
export default withRouter(withStyles((styles))(Partners));