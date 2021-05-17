import React from "react";
import OverlandRig from "./overlandrig";

class CarlistingsIndex extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchCarlistings();
    }

    render(){

        const {carlistings} = this.props
        if (!carlistings) return null;
                
        return(
            <div>
                <div>
                    {Object.values(carlistings).map(rig => <OverlandRig rig={rig} 
                                                        key={rig.id} />
                                    )}
                </div>
            </div>
        )
    }

}


export default CarlistingsIndex;