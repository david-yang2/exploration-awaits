# Exploration Awaits
Want to get away and go on a much needed adventure and visit places many have not been before? Exploration Awaits, a full-stack web applicaiton, offers many capable and comfortable overland rigs that can take you and your family or friends off the beaten path. Users have the option to filter through our car listings and make reservations through the car's show page. Show page displays a calendar component, map of the previous trip as well as reviews for the car. 

# Technologies

Technologies used in this project include:

- React with Redux - frontend API
- Ruby on Rails - backend API
- PostgreSQL - database
- Google Maps Javascript - Directions Service
- React Dates - DatePickerRangee

# Top Application Features

## Filtering car listings

<p>Currently, the filter component provide users the ability to filter through our inventory of overland cars by their Make, Model, and/or Drivetrain. By selecting a feature, the component will then find all unique features of that specific feature (e.g. if the Make button is selected, it will return Toyota, Jeep, and Subaru). When a user selects a specific feature, the component will map through each car listing object and compare it to the user's selected feature(s). The component will only render the car listing, if the user's selected features is included in any of the car listing object's feature(s).</p>

<img src="app/assets/images/readme/filter.gif" alt="">
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>


## Goolge maps - pop up markers for each car listing

<p>Within the car listings index page is a map component containing information about each overland car. This component is generated using the Google Maps Javascript api. Once the component is mounted, it will key into each car listing object to obtain its coordinates render a marker on the map. The interactive map also allows users to click on each marker to open an info window with the overland car's Year, Make, Model as well as an image. Overland cars are offered across the nation, so users can use the drop down menu to recenter the map with coordinates of either San Francisco CA, Moab UT, or Yosemite CA.</p>

<img src="app/assets/images/readme/map.gif" alt="">
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>

## React Dates - make a reservation
<p>Users can make reservations via the DatePickerRange component from React Dates. Once the pick-up date and drop-off date has been selected, the state will be stored but will not create a new reservation until users click the "Reserve" button. Reserve button is an event handler which passes the state, this.state.startDate._d and this.state.endDate._d, to the createBooking prop. This action will be dispatched and a new bookings entry will be posted to the logged in user.</p>
</p>

<img src="app/assets/images/readme/calendar.gif" alt="">
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>

## Create and Update previous reviews

<img src="app/assets/images/readme/review.gif" alt="">
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>

## View or Cancel your current Reservations

<img src="app/assets/images/readme/reservations.gif" alt="">
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
