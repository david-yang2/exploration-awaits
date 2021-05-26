import React from "react"

class Filter extends React.Component{
    constructor(props){
        super(props)
        this.state={
            listingKeys: Object.keys(this.props.carlistings[0]),
            make: [],
            model: [],
            drivetrain: [],
        }

    this.getUniqueValues = this.getUniqueValues.bind(this)
    this.filterListings = this.filterListings.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
    }

    handleToggle(){
        return null
    }
    getUniqueValues(key){
        const data = this.props.carlistings
        const unique = [...new Set(data.map(item => item[key]))]
        return unique
    }

    filterListings(key){
        const unique = this.getUniqueValues(key)
        this.setState({[key]: unique})
        debugger
    }
    render(){
        return (
            <div>
                {/* Make button and checkbox */}
                <div>
                    <button onClick={() => this.filterListings("make")}>Make</button>
                    <div>
                        {Object.values(this.state.make).map(value => (
                            <div key={value}> 
                                <input
                                type="checkbox"
                                onChange={this.handleToggle}
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
                        {Object.values(this.state.model).map(value => (
                            <div key={value}> 
                                <input
                                type="checkbox"
                                onChange={this.handleToggle}
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
                                onChange={this.handleToggle}
                                id={value}
                                />
                                <label for={value}>
                                    {value}
                                </label>
                            </div>
                        ))}
                    </div>

                </div>


                
            </div>
        )
    }

}

export default Filter;