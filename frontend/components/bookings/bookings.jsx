import React from "react"
import { Link } from 'react-router-dom';

class Bookings extends React.Component{
    constructor(props){
        super(props)
        this.deleteBooking = this.deleteBooking.bind(this)
        this.getCarOwnersName = this.getCarOwnersName.bind(this)
        this.propsAreEmpty = this.propsAreEmpty.bind(this)
    }

    componentDidMount(){
        this.props.fetchBookings(this.props.session.currentUser.id)
        .then(() => this.props.fetchCarlistings())
        .then(() => this.props.fetchAllUsers())


    }

    deleteBooking(booking){
        this.props.removeBooking(booking)
        
    }

    getCarOwnersName(id){
        let carBooked = this.props.carlistings[id]
        let carOwnersId = carBooked.owner_id
        let owner = this.props.user[carOwnersId]
        return owner.username
    }

    propsAreEmpty(){
        return (Object.keys(this.props.bookings).length ===0 && 
                Object.keys(this.props.carlistings).length ===0 &&
                Object.keys(this.props.user).length ===0)
    }

    render(){
        const {bookings, session, carlistings, user} = this.props
        if (this.propsAreEmpty()) return null
        return(
            <div>
                <div>
                    {bookings.length<1 ? 
                            <div>
                                <h3>Hi {session.currentUser.username}! </h3>
                                <h4>Looks like you do not have any upcoming reservations. Would you like to reserve one of our Overland Rigs?</h4>
                                <Link to="/rigs">Check our our Overland Rigs</Link>
                            </div>

                        :   <div>
                                <h3>Hi {session.currentUser.username}!</h3>
                                <h4>Here's a list of your upcoming reservations!</h4>
                            </div>}

                </div>
                <div>
                    {Object.values(bookings).map(booking=>
                        <div key={booking.id}>
                            <h3>Owner: {this.getCarOwnersName(booking.car_id)}</h3>
                            <h3 key={booking.id}>
                                {/* convert date from "yyyy-mm-dd" to "DOW mon dd yy" */}
                                Pick Up:    {new Date(booking.pickup_date).toDateString()} 
                            </h3>
                            <h3>
                                Return:     {new Date(booking.dropoff_date).toDateString()}
                            </h3>
                            <button onClick={()=>this.deleteBooking(booking)}>Cancel Booking</button>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Bookings