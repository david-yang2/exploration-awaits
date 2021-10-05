import React from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';


class Calendar extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            startDate: null,
            endDate: null,
            bookStartDate: null,
            bookEndDate: null,
            reservation: null
        }

        this.bookDates = this.bookDates.bind(this)
        this.closeModal = this.closeModal.bind(this)
        
    }

    bookDates= (pdate, ddate) => {
        if(!this.props.currentUserId){
            // notify users if they're not logged in
            this.setState({reservation: false})
        } else {
            // create booking and confirm pickup and dropoff dates with users
            this.props.createBooking({
                car_id: this.props.carlistingId,
                user_id: this.props.currentUserId,
                pickup_date: pdate,
                dropoff_date: ddate,
            })
            this.setState({reservation: true})
        }
    }

    closeModal(){
        this.setState({reservation: null})
    }

    render(){

        // reservation modal alerting users to either log in or their reservation confirmation
        let reserveModal;

        if (this.state.reservation === null){

            reserveModal = (<div></div>)

        } else if (this.state.reservation === true){

            reserveModal = (<div className="resModal">
                                <div>
                                    <button onClick={() => this.closeModal()}> x </button>
                                </div>  
                                <body>
                                You have succesfully booked this car!<br />
                                Your pickup date is {this.state.startDate._d.toLocaleDateString('zh-Hans-CN')}.<br />
                                Your dropoff date is {this.state.endDate._d.toLocaleDateString('zh-Hans-CN')}.<br />
                                Please click the Bookings tab to see your current reservations.<br />
                                </body>
                            </div>)

        } else if (this.state.reservation === false) {

            reserveModal = (<div className="resModal">
                                <div>
                                    <button onClick={() => this.closeModal()}> x </button>
                                </div>  
                                <div>
                                Please log in before making any reservations
                                </div>
                            </div>)
        }

        
        return (
            <div className="calendar">
                {/* Select a range of dates for pick up and drop off */}
                <DateRangePicker
                    startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                    startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                    endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                    onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                    startDatePlaceholderText="Pick Up"
                    endDatePlaceholderText="Drop off"
                />

                {/* onClick will push the selected dates to bookings model */}
                <button className="reserveBtn" onClick={ () => this.bookDates(
                                            this.state.startDate._d.toLocaleDateString('zh-Hans-CN'),
                                            this.state.endDate._d.toLocaleDateString('zh-Hans-CN')
                                        )}> Reserve </button>

                {reserveModal}
            </div>


        )
    }
}

export default Calendar;