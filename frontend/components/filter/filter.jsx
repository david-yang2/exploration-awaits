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
            // selected: {
            //     make: false,
            //     model: false,
            //     drivetrain: false
            // },
            selectedMake: [],
            selectedModel: [],
            selectedDrivetrain: [],
            selectedSleeps: []
        }

    this.getUniqueValues = this.getUniqueValues.bind(this)
    this.filterListings = this.filterListings.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.noSelectedFilters = this.noSelectedFilters.bind(this)
    this.clearFilters = this.clearFilters.bind(this)
    this.removeValue = this.removeValue.bind(this)

    this.areFiltersSelected = this.areFiltersSelected.bind(this)

    }


    removeValue(arr, value) {
        const index = arr.indexOf(value);
        if (index > -1) {
          arr.splice(index, 1);
        }
        return arr
    }

    handleSelect(key,value){
        return (e) => {
            if (e.currentTarget.checked) {
                this.setState(prevState => ({
                    [key]: [...prevState[key], value]
            }))}
            else {
                this.setState({
                    // remove value after being unchecked
                    [key]: this.removeValue(this.state[key], value)
                })

            }
        }
    }

    // get unique values for each feature
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
    
        // return True if no filters are selected/arrays are empty
        if (!this.state.selectedMake || !this.state.selectedModel || !this.state.selectedDrivetrain){
            return true
        } else if (this.state.selectedMake .length <1 && this.state.selectedModel.length < 1 && this.state.selectedDrivetrain.length < 1) {
            return true
        } else return false
    }


    clearFilters(){
        this.setState({
            selectedMake: [],
            selectedModel: [],
            selectedDrivetrain: [],
        })
    }

    areFiltersSelected(make, model, drivetrain){
        
        // var checkedMake = this.state.selectedMake.length > 0 ? this.state.selectedMake : null
        // var checkedModel = this.state.selectedModel.length > 0 ? this.state.selectedModel : null
        // var checkedDrivetrain = this.state.selectedDrivetrain.length > 0 ? this.state.selectedDrivetrain : null

        // let checkedFeatures = [checkedMake, checkedModel, checkedDrivetrain]

        // let arr = [this.state.selectedMake, this.state.selectedModel, this.state.selectedDrivetrain]
        let selection = null
        if (this.state.selectedMake.length === 1 && this.state.selectedModel.length === 0 && this.state.selectedDrivetrain.length === 0) {selection = 0}
        if (this.state.selectedMake.length === 0 && this.state.selectedModel.length === 1 && this.state.selectedDrivetrain.length === 0) {selection = 1}
        if (this.state.selectedMake.length === 0 && this.state.selectedModel.length === 0 && this.state.selectedDrivetrain.length === 1) {selection = 2}
        if (this.state.selectedMake.length === 1 && this.state.selectedModel.length === 1 && this.state.selectedDrivetrain.length === 0) {selection = 3}
        if (this.state.selectedMake.length === 1 && this.state.selectedModel.length === 0 && this.state.selectedDrivetrain.length === 1) {selection = 4}
        if (this.state.selectedMake.length === 0 && this.state.selectedModel.length === 1 && this.state.selectedDrivetrain.length === 1) {selection = 5}
        if (this.state.selectedMake.length === 1 && this.state.selectedModel.length === 1 && this.state.selectedDrivetrain.length === 1) {selection = 6}




        switch (selection){
            case 0:
                return this.state.selectedMake.includes(make);
            case 1: 
                return this.state.selectedModel.includes(model);
            case 2: 
                return this.state.selectedDrivetrain.includes(drivetrain);
            case 3:
                return this.state.selectedMake.includes(make) && this.state.selectedModel.includes(model);
            case 4: 
                return this.state.selectedMake.includes(make) && this.state.selectedDrivetrain.includes(drivetrain);
            case 5: 
                return this.state.selectedModel.includes(model) && this.state.selectedDrivetrain.includes(drivetrain);
            case 6: 
                return this.state.selectedMake.includes(make) && this.state.selectedModel.includes(model) && this.state.selectedDrivetrain.includes(drivetrain);;


        }



        // // combine all selected features
        // let combinedFeatures = this.state.selectedMake.concat(this.state.selectedModel).concat(this.state.selectedDrivetrain)

        // // check to see if either make, model, or drivetrain is in the combined features
        // return ((combinedFeatures.includes(make) || 
        //     combinedFeatures.includes(model) || 
        //     combinedFeatures.includes(drivetrain) ? 
        //  true : false))
    }


    render(){
        // const selected = ["make", "model", "drivetrain"]
        const {selectedMake, selectedModel, selectedDrivetrain} = this.state
        const carlistings = this.props.carlistings
        return (
            <div>
                <form className="show-filters">

                    {/* Make button and checkbox */}
                    <div>
                        <button onClick={() => this.filterListings("make")}>Make</button>
                        <div>
                            {Object.values(this.state.make).map((value,idx) => (
                                <div key={idx}> 
                                    <input
                                    type="checkbox"
                                    onClick={this.handleSelect("selectedMake",value)}
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
                    <div>
                        <button onClick={() => this.filterListings("model")}>Model</button>
                        <div>
                            {Object.values(this.state.model).map((value,idx) => (
                                <div key={idx}> 
                                    <input
                                    type="checkbox"
                                    onClick={this.handleSelect("selectedModel",value)}
                                    id={value}
                                    />
                                    <label for={value}>
                                        {value}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Drivetrain button and checkbox */}
                    <div>
                        <button onClick={() => this.filterListings("drivetrain")}>Drivetrain</button>
                        <div>
                            {Object.values(this.state.drivetrain).map(value => (
                                <div key={value}> 
                                    <input
                                    type="checkbox"
                                    onClick={this.handleSelect("selectedDrivetrain", value)}
                                    id={value}
                                    />
                                    <label for={value}>
                                        {value}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button onClick={()=>{this.clearFilters()}}>Clear Filters</button>
                </form> 
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
                            } else if (this.areFiltersSelected(car.make, car.model, car.drivetrain)) {
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
    