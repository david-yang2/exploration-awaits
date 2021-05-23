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

    bookDates(){
        this.setState({
            bookStartDate: this.state.startDate._d,
            endStartDate: this.state.endDate._d
        })
        console.log(this.state)
    }

    render(){
        debugger
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
                    />
                    
                </div>
                <button onClick={ () => this.bookDates()}> Book now! </button>
            </div>


        )
    }
}

export default Calendar;