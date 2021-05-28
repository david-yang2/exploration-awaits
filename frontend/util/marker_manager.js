
export default class MarkerManager {
    constructor(map){
        this.map = map;
        this.markers=[];
    }

    addMarker() {
        this.map.addListener("click", (e) =>{
            this.staticMarker(e.latLng)
        })
    }


    staticMarker(location){
        // creates a marker on the map
        const marker = new google.maps.Marker({
            // position: {lat: latitude, lng: longitude},
            position: location,
            map: this.map
        })
        this.markers.push(marker)
    }
    //<button onClick={()=>this.MarkerManager.undo()}>Delete</button>

    // setMapOnAll(map){
    //     for (let i= 0; i < this.markers.length; i++){

    //         //setMap is a method of google.maps
    //         this.markers[i].setMap(map)
    //     }
    // }
    
    undo(){
        debugger
        console.log("asdf")
        this.markers[this.markers.length - 1].setMap(null)
        this.markers = this.markers.slice(0,-1)
    }


    displayRoute() {
        var directionsService = new google.maps.DirectionsService();
        var directionsRenderer = new google.maps.DirectionsRenderer();
        var sanFranCoord ={lat: 37.76638193811843, lng: -122.4011369891004}
        var zionNtnlPrkCoord = {lat: 37.30890288922195, lng:-113.02951048510528}
        directionsRenderer.setMap(this.map);
        var request = {
            origin: sanFranCoord,
            destination: zionNtnlPrkCoord,
            travelMode: 'DRIVING'
        };

        directionsService.route(request, function(result, status) {
            if (status == 'OK') {
                directionsRenderer.setDirections(result);
            }
        });
    }
    
}

  
