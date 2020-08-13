import React from "react";
import { Grid } from '@material-ui/core';
import {MainCarousel,ArrowContent,Aboutus,Service,Testimonial,Partners,Blog,GoogleMap,Footer} from '../../components';

class Home extends React.Component{


    render(){

        return(
            <Grid>
                    <MainCarousel />
                    <ArrowContent />
                    <Aboutus />
                    <Service />
                    <Partners />
                    <Testimonial />
                    <Blog />
                    <GoogleMap />
                    <Footer />
            </Grid>
        )
    }
}

export default Home;