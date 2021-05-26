import React from "react"
import OverlandRig from "../carlistings/overlandrig"

class Filter extends React.Component{
    constructor(props){
        super(props)
        this.state={
            make: [],
            model: [],
            drivetrain: [],
            sleeps: [],
            selected: {
                make: false,
                model: false,
                drivetrain: false
            },
            selectedMake: [],
            selectedModel: [],
            selectedDrivetrain: [],
            selectedSleeps: []
        }

    this.getUniqueValues = this.getUniqueValues.bind(this)
    this.filterListings = this.filterListings.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.noSelectedFilters = this.noSelectedFilters.bind(this)
    // this.filterCheckBox = this.filterCheckBox.bind(this)
    }

    handleSelect(key,value){
        return e => {
            // this.setState({[key]: e.currentTarget.value});
            this.setState(prevState => ({
                [key]: [...prevState[key], value]
              }))

        }
        
    }
    getUniqueValues(key){
        const data = this.props.carlistings
        const unique = [...new Set(data.map(item => item[key]))]

        return unique
    }

    filterListings(key){
        const unique = this.getUniqueValues(key)
        this.setState({[key]: unique})
    }
    

    noSelectedFilters(){
        // return True if no filters are selected/ arrays are empty
        // return (this.selectedMake.length < 1 || this.selectedModel.length < 1 || this.selectedDrivetrain.length < 1)
        if (!this.state.selectedMake){
            return true
        } else if (this.state.selectedMake.length <1) {
            return true
        } else return false
        

    }
    render(){
        // const selected = ["make", "model", "drivetrain"]
        const {selectedMake, selectedModel, selectedDrivetrain} = this.state
        const carlistings = this.props.carlistings
        return (
            <div>
                <div className="show-filters">

                    {/* Make button and checkbox */}
                    <div>
                        <button onClick={() => this.filterListings("make")}>Make</button>
                        <div>
                            {Object.values(this.state.make).map(value => (
                                <div key={value}> 
                                    <input
                                    type="radio"
                                    onChange={this.handleSelect("selectedMake",value)}
                                    id={value}
                                    />
                                    <label for={value}>
                                        {value}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Model button and checkbox */}
                    {/* <div>
                        <button onClick={() => this.filterListings("model")}>Model</button>
                        <div>
                            {Object.values(this.state.model).map(value => (
                                <div key={value}> 
                                    <input
                                    type="checkbox"
                                    onChange={this.handleSelect("slectedModel", value)}
                                    id={value}
                                    />
                                    <label for={value}>
                                        {value}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div> */}

                    {/* Drivetrain button and checkbox */}
                    {/* <div>
                        <button onClick={() => this.filterListings("drivetrain")}>Drivetrain</button>
                        <div>
                            {Object.values(this.state.drivetrain).map(value => (
                                <div key={value}> 
                                    <input
                                    type="checkbox"
                                    onChange={this.handleSelect("selectedDrivetrain", value)}
                                    id={value}
                                    />
                                    <label for={value}>
                                        {value}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div> */}
                </div> 
                <div>       
                    <ul>
                        {
                        Object.values(carlistings).map((car,idx) => {
                            if (this.noSelectedFilters()) {
                    
                                return(
                                    <div key={idx}>
                                        <OverlandRig rig={car} 
                                                    key={idx}
                                        />
                                    </div>
                                )
                            } else if (selectedMake.includes(car.make)) {
                    
                                return (
                                    <div key={idx}>
                                        <OverlandRig rig={car} 
                                                    key={idx}
                                        />
                                    </div>
                                    )   
                            }
                        })}
                    
                    </ul>
                </div>
            </div>

        )
    }

}

export default Filter;





    
    // {/* Sleeps button and range selector */}
    // <div>
    //     <button onClick={() => this.filterListings("sleeps")}>Sleeps</button>
    //     <div>
    //         {Object.values(this.state.sleeps).map(value => (
    //             <div key={value}> 
    //                 <input
    //                 type="range"
    //                 onChange={this.handleSelect("selectedSleeps", value)}
    //                 id={value}
    //                 min="0"
    //                 max="5"
    //                 list="tickmarks"/>
    //                 <datalist id='tickmarks'>
    //                     <option value='0' label='0'></option>
    //                     <option value='1' label='1'></option>
    //                     <option value='2' label='2'></option>
    //                     <option value='3' label='3'></option>
    //                     <option value='4' label='4'></option>
    //                     <option value='5' label='5'></option>
    //                 </datalist>
                    
    //             </div>
    //         ))}
    //     </div>

    // </div>
    