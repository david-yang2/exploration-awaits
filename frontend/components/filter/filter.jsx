import React from "react"


class Filter extends React.Component{
    constructor(props){
        super(props)
        this.state={
            listingKeys: Object.keys(this.props.carlistings[0]),
            id: [],
            owner_id: [],
            year: [],
            make: [],
            model: [],
            price: [],
            cartype: [],
            drivetrain: [],
            transmission: [],
            tripcapacity: [],
            seats: [],
            sleeps: [],
            lockers: [],
            rooftoptent: [],
            shower: [],
            kitchenset: [],
            fridge: [],
            longitude: [],
            latitude: [],
            location: [],
        }

    this.iterateKey = this.iterateKey.bind(this);
    this.getUniqueValues = this.getUniqueValues.bind(this)
        
    }


    getUniqueValues(k){
        const data = this.props.carlistings
        const keyNames = this.state.listingKeys
        const unique = [...new Set(data.map(item => item[k]))]
        this.state[k].push(unique)

    }

    iterateKey(){

        this.state.listingKeys.map(key => this.getUniqueValues(key))
        
        // for (k in this.state.listingKeys){
        //     console.log(this.props.carlistings[0][this.state.listingKeys[k]])}
    }   


    render(){
        debugger
        return (
            <div>
                <button onClick={this.iterateKey}>unique</button>
                <h5>{this.state.drivetrain}</h5>
            </div>
        )
    }

}

export default Filter;