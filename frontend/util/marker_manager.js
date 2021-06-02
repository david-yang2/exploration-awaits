
export default class MarkerManager {
    constructor(map){
        this.map = map;
        this.markers=[];

        this.directionsService = new google.maps.DirectionsService();
        this.directionsRenderer = new google.maps.DirectionsRenderer();
        this.directionsRenderer.setMap(map);
       
    }

    // show pickup/dropoff location for each car
    staticMarker(location, content){
        // creates a marker on the map
        const marker = new google.maps.Marker({
            // position: {lat: latitude, lng: longitude},
            position: location,
            map: this.map
        })
        this.markers.push(marker)
        const infowindow = new google.maps.InfoWindow({
            content: content,
          });

        marker.addListener("click", () => {
            infowindow.open(this.map, marker);
        });


    }

    // display the most recent trip 
    displayRoute(trip) {
        var directionsService = new google.maps.DirectionsService();
        var directionsRenderer = new google.maps.DirectionsRenderer();
        var tripStart ={lat: trip.beg_latitude, lng: trip.beg_longitude}
        var tripEnd = {lat: trip.end_latitude, lng: trip.end_longitude}
        directionsRenderer.setMap(this.map);
        var request = {
            origin: tripStart,
            destination: tripEnd,
            travelMode: 'DRIVING'
        };

        directionsService.route(request, function(result, status) {
            if (status == 'OK') {
                directionsRenderer.setDirections(result);
            }
        });
    }


}



























    
    // undo(){
    //     this.markers[this.markers.length - 1].setMap(null)
    //     this.markers = this.markers.slice(0,-1)
    //     console.log("deleted previous marker")
    // }
    

  
    //<button onClick={()=>this.MarkerManager.undo()}>Delete</button>

    // setMapOnAll(map){
    //     for (let i= 0; i < this.markers.length; i++){

    //         //setMap is a method of google.maps
    //         this.markers[i].setMap(map)
    //     }
    // }



// // dynamic markers
//     addMarker(){
//         this.map.addListener("click", (e) => {
//             this.staticMarker(e.latLng)
//             this.calculateAndDisplayRoute(this.directionsService, this.directionsRenderer)
    
//         })
//         };   
    
//         undo(){
//             // this.markers[this.markers.length - 1].setMap(null)
//             this.markers = this.markers.slice(0,-1)
//             console.log("deleted previous marker")
//             // this.directionsRenderer.setMap(this.map)
//         }
    
//         staticMarker(location){
//             // creates a marker on the map
//             const marker = new google.maps.Marker({
//                 // position: {lat: latitude, lng: longitude},
//                 position: location,
//                 map: this.map
//             })
//             this.markers.push({location: {lat: marker.position.lat(), lng: marker.position.lng()}, stopover: true})
//         }
    
//         calculateAndDisplayRoute(directionsService, directionsRenderer) {
    
//         if(this.markers.length <2) return null
        
//         // define the waypts
//         // if this.markers has 2 elements in there, there are no "waypoints"
//         // if this.markers has more than 2 elements in there, waypoints are elements inbetween the first and last
//         let waypts = []
//         if (this.markers.length>2){
//             waypts = this.markers.slice(1,-1)
//         }
    
//         directionsService.route(
//             {
//             origin: this.markers[0].location,
//             destination: this.markers[this.markers.length-1].location,
//             waypoints: waypts,
//             optimizeWaypoints: true,
//             travelMode: google.maps.TravelMode.DRIVING,
//             },
//             (response, status) => {
//             if (status === "OK" && response) {
//                 directionsRenderer.setDirections(response);
//                 const route = response.routes[0];
//                 const summaryPanel = document.getElementById("directions-panel");
//                 summaryPanel.innerHTML = "";
    
//                 // For each route, display summary information.
//                 for (let i = 0; i < route.legs.length; i++) {
//                 const routeSegment = i + 1;
//                 summaryPanel.innerHTML +=
//                     "<b>Route Segment: " + routeSegment + "</b><br>";
//                 summaryPanel.innerHTML += route.legs[i].start_address + " to ";
//                 summaryPanel.innerHTML += route.legs[i].end_address + "<br>";
//                 summaryPanel.innerHTML += route.legs[i].distance.text + "<br><br>";
//                 }
//             } else {
//                 window.alert("Directions request failed due to " + status);
//             }
//             }
//         );