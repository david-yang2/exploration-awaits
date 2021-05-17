import React from "react";

class CarlistingShow extends React.Component{
    constructor(props){
        super(props)
    }
    
    componentDidMount(){
        this.props.fetchCarlisting(this.props.match.params.id);
    }

    render(){
        const {carlisting} = this.props;
        if (!carlisting) return null

        return(
            <div>
                <div>
                    <h1>{carlisting.year} {carlisting.make} {carlisting.model}</h1>
                </div>
            </div>
        )
    }
}

export default CarlistingShow