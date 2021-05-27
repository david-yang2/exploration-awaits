import React from "react"


class Bookings extends React.Component{
    constructor(props){
        super(props)
        this.deleteBooking = this.deleteBooking.bind(this)
    }

    componentDidMount(){
        this.props.fetchBookings(this.props.session.currentUser.id)

    }

    deleteBooking(booking){
        this.props.removeBooking(booking)
    }



    render(){
        const {bookings} = this.props
        debugger
        if (!bookings) return null
        return(
            <div>
                {Object.values(bookings).map(booking=>
                    <div>
                        <h5 key={booking.id}>
                            {booking.pickup_date} {booking.dropoff_date}
                        </h5>
                        <button onClick={()=>this.deleteBooking(booking)}>Cancel Booking</button>
                    </div>
                )}
            </div>
        )
    }
}

export default Bookings