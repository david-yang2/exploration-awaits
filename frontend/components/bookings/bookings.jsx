import React from "react"


class Bookings extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchBookings(this.props.session.currentUser.id)

    }





    render(){
        const {bookings} = this.props
        debugger
        if (!bookings) return null
        return(
            <div>
                {Object.values(bookings).map(booking=>
                                        <h5 key={booking.id}>
                                            {booking.pickup_date} {booking.dropoff_date}
                                        </h5>
                )}
            </div>
        )
    }
}

export default Bookings