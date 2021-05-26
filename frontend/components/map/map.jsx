import React from "react";


class Map extends React.Component{
    constructor(props){
        super(props)

    }

    componentDidMount(){

        // set the map to show SF
        const mapOptions = {
        center: { lat: 37.7758, lng: -122.435 }, // this is SF
        zoom: 13
        };

        // wrap this.mapNode in a Google Map
        this.map = new google.maps.Map(this.mapNode, mapOptions);
    }

    render() {
        return (
          // this ref gives us access to the map dom node
          <div ref={ map => this.mapNode = map } id='map-container' /> 
        )
      }
    
}

export default Map;

















// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

// // before we load GoogleMap, we need a script that loads
// // which loads different necessary libraries
// class Map extends React.Component = withScriptjs(withGoogleMap((props) => {

//   <GoogleMap
//     defaultZoom={8} // how far do you want this to be zoomed on first render
//     defaultCenter={{lat:37.75913679710228, lng:-122.44433543249572 }} //which location do you want it to render (e.g. SF)
//   >
//     {/* {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />} */}
//   </GoogleMap>

// )}

// export default Map;