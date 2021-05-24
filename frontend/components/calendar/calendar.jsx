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
        }
        this.bookDates = this.bookDates.bind(this)
        
    }

    bookDates= (pdate, ddate) => {
        this.props.createBooking({
            car_id: this.props.carlistingId,
            user_id: this.props.currentUserId,
            pickup_date: pdate,
            dropoff_date: ddate,
        })
    }

    render(){
        return (
            <div>
                <div>
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
                    
                </div>
                <button onClick={ () => this.bookDates(
                                            this.state.startDate._d.toLocaleDateString('zh-Hans-CN'),
                                            this.state.endDate._d.toLocaleDateString('zh-Hans-CN')
                                        )}> Book now! </button>
            </div>


        )
    }
}

export default Calendar;