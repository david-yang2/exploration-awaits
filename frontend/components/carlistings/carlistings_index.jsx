import React from "react";
import Filter from "../filter/filter"
import Map from "../map/map"

class CarlistingsIndex extends React.Component{
    constructor(props){
        super(props)
        this.state={
            mapOptions:{
              center: {lat: 37.7758, lng: -122.435 }, // San Francisco, CA
            //   center: {lat:38.57283716077039, lng:-109.55545695813444}, // Moab, UT
            //   center: {lat:37.84755373063942, lng:-119.18447474550449}, // Yosemite Ntnl Park
              zoom: 10
            },
            selectedLoc: "SF"
          }
        this.selectCenter = this.selectCenter.bind(this)
    }

    componentDidMount(){
        this.props.fetchCarlistings();
    }


    // Options for center Google Maps
    selectCenter(e){
        e.preventDefault()
        var mapOptions = {...this.state.mapOptions}
        let value = e.target.value
        // Center around SF
        if (value === "SF"){
            mapOptions.center = {lat: 37.7758, lng: -122.435 }
            this.setState({ mapOptions,
                            selectedLoc: value})}
        // Center around Moab
        else if (value === "MOAB") {
            mapOptions.center = {lat:38.57283716077039, lng:-109.55545695813444}
            this.setState({ mapOptions,
                            selectedLoc: value})}
        // Center around Yosemite
        else if (value === "Yosemite") {
            mapOptions.center = {lat:37.82803170486619, lng:-119.52641075842395}
            this.setState({ mapOptions,
                            selectedLoc: value})}
        }
     
    render(){
        const {carlistings} = this.props
        if (!carlistings || carlistings.length<1) return null;
        return(
            <div>
                <div>
                    <Filter carlistings={carlistings} />
                </div>
                <div>
                    <select value={this.selectedLoc} onChange={this.selectCenter}>
                        <option value="SF">San Francisco, CA</option>
                        <option value="MOAB">Moab, UT</option>
                        <option value="Yosemite">Yosemite National Park, CA</option>
                    </select>
                    <Map carlistings={carlistings}
                            mapOptions={this.state.mapOptions}/>
                </div>
            </div>
        )
    }

}


export default CarlistingsIndex;

