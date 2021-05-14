import React from "react";

class CarlistingsIndex extends React.Component{
    constructor(props){
        super(props)
    };

    componentDidMount(){
        this.props.fetchCarlistings()
    }

    render(){
        debugger
        return(
            <div>
                <h1>Here's a list of our rigs</h1>
            </div>
        )
    }

}


export default CarlistingsIndex;