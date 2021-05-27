import React from "react"
import { Link } from 'react-router-dom';

class Bookings extends React.Component{
    constructor(props){
        super(props)
        this.deleteBooking = this.deleteBooking.bind(this)
    }

    componentDidMount(){
        this.props.fetchBookings(this.props.session.currentUser.id)
        .then(() => this.props.fetchCarlistings())


    }

    deleteBooking(booking){
        this.props.removeBooking(booking)
        
    }


    render(){
        const {bookings, session} = this.props
        if (!bookings) return null
        return(
            <div>
                <div>
                    {bookings.length<1 ? 
                            <div>
                                <h3>Hi {session.currentUser.username}! </h3>
                                <h4>Would you like to reserve one of our Overland Rigs?</h4>
                                <Link to="/rigs">Here's our listings</Link>
                            </div>

                        :   <div>
                                <h3>Hi {session.currentUser.username}!</h3>
                                <h4>Here's a list of your upcoming reservations!</h4>
                            </div>}

                </div>
                <div>
                    {Object.values(bookings).map(booking=>
                        <div key={booking.id}>
                            <h3 key={booking.id}>
                                Pick Up:{Date(booking.pickup_date)} 
                            </h3>
                            <h3>
                                Return:{Date(booking.dropoff_date)}
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