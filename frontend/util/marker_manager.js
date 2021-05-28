
export default class MarkerManager {
    constructor(map){
        this.map = map;
        this.markers = [];
    }

    updateMarkers() {
        this.map.addListener("click", (e) =>{
            this.createNewMarker(e.latLng)
        })
      }


    createNewMarker(location){
        debugger
        const marker = new google.maps.Marker({
            position: location,
            map: this.map
        })
        this.markers.push({location: {lat: marker.position.lat(), lng: marker.position.lng()}})
        debugger
    }
    setMapOnAll(map){
        for (let i= 0; i < this.markers.length; i++){
            this.markers[i].setMap(map)
        }
    }

    calcRoute() {
        var directionsService = new google.maps.DirectionsService();
        var directionsRenderer = new google.maps.DirectionsRenderer();
        directionsRenderer.setMap(this.map);
        var request = {
        origin: {lat:37.77230427803655, lng:-122.44334222788287},
        destination: {lat: 37.76638193811843, lng: -122.4011369891004},
        travelMode: 'DRIVING'
        };
        directionsService.route(request, function(result, status) {
        if (status == 'OK') {
            directionsRenderer.setDirections(result);
        }
        });
    }

    

}

  
