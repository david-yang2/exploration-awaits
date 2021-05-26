import React from "react"

class Filter extends React.Component{
    constructor(props){
        super(props)
        this.state={
            make: [],
            model: [],
            drivetrain: [],
            sleeps: [],
            selectedMake: [],
            selectedModel: [],
            selectedDrivetrain: [],
            selectedSleeps: []
        }

    this.getUniqueValues = this.getUniqueValues.bind(this)
    this.filterListings = this.filterListings.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    // this.filterCheckBox = this.filterCheckBox.bind(this)
    }

    handleSelect(key, value){
        debugger
        return e => {
            // this.setState({[key]: e.currentTarget.value});
            this.setState(prevState => ({
                [key]: [...prevState[key], value]
              }))
            debugger
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

    render(){
        const selected = ["make", "model", "drivetrain"]
        const {selectedMake, selectedModel, selectedDrivetrain} = this.state
        return (
            <div>
                <form className="show-filters">
                    {/* Make button and checkbox */}
                    <div>
                        <button onClick={() => this.filterListings("make")}>Make</button>
                        <div>
                            {Object.values(this.state.make).map(value => (
                                <div key={value}> 
                                    <input
                                    type="checkbox"
                                    onChange={this.handleSelect("selectedMake", value)}
                                    id={value}
                                    />
                                    <label for={value}>
                                        {value}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
            
                    <input type="submit" value="Filter" />
                </form>
                <h2>{selectedMake}</h2>
            </div>
        )
    }

}

export default Filter;





    //     {/* Model button and checkbox */}
    //     <div>
    //     <button onClick={() => this.filterListings("model")}>Model</button>
    //     <div>
    //         {Object.values(this.state.model).map(value => (
    //             <div key={value}> 
    //                 <input
    //                 type="checkbox"
    //                 onChange={this.handleSelect("slectedModel", value)}
    //                 id={value}
    //                 />
    //                 <label for={value}>
    //                     {value}
    //                 </label>
    //             </div>
    //         ))}
    //     </div>

    // </div>
    // {/* Drivetrain button and checkbox */}
    // <div>
    //     <button onClick={() => this.filterListings("drivetrain")}>Drivetrain</button>
    //     <div>
    //         {Object.values(this.state.drivetrain).map(value => (
    //             <div key={value}> 
    //                 <input
    //                 type="checkbox"
    //                 onChange={this.handleSelect("selectedDrivetrain", value)}
    //                 id={value}
    //                 />
    //                 <label for={value}>
    //                     {value}
    //                 </label>
    //             </div>
    //         ))}
    //     </div>

    // </div>
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
    