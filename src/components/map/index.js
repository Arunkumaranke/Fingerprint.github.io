import React from 'react';
import { Grid} from '@material-ui/core';

import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const container={
    height: "50vh",
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        
}

const style={
    width: '100%',
    height: '50vh'

}
class GoogleMap extends React.Component {


    render() {
        return (
            <Grid style={container} >
               <Map  google={this.props.google}
         style={style}
          initialCenter={{
            lat: [43.274258],
            lng: [-2.921894]
            
          }}
         
          onClick={this.onMapClicked} zoom={19}>

                    <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />

                
                </Map>
                
            </Grid>
        )
    }
}

export default 
GoogleApiWrapper({
    apiKey: ("AIzaSyCxV7B3BEUAFZJe9A-BdwkqKjKeuzI6t0g")
})
(GoogleMap);