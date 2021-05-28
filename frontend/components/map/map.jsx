import React from "react";
import MarkerManager from "../../util/marker_manager"


class Map extends React.Component{
    constructor(props){
        super(props)
        this.state={
          mapOptions:{
            center: { lat: 37.7758, lng: -122.435 }, // this is SF
            zoom: 12
          }
        }
    }

    componentDidMount(){
      // wrap this.mapNode in a Google Map
      this.map = new google.maps.Map(this.mapNode, this.state.mapOptions);

      //connect to MarkerManager to interact with it
      // create new MarkerManager
      this.MarkerManager = new MarkerManager(this.map)

      // show the locations of each carlisting
      Object.values(this.props.carlistings).map(car => 
          this.MarkerManager.staticMarker({lat: car.latitude, lng: car.longitude}))
      

      // this.MarkerManager.displayRoute()
      
      this.MarkerManager.addMarker()

    }

    componentDidUpdate(){
      this.MarkerManager.addMarker()
    }


    render() {
        return (
          // this ref gives us access to the map dom node
          <div>
            <button onClick={()=>this.MarkerManager.undo()}>Delete Previous Marker</button>
            <div ref={ map => this.mapNode = map } id='map-container' /> 

          </div>
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