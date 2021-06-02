import React from "react";
import {Link} from 'react-router-dom';


const OverlandRig = (props) => {
    const id = props.photoidx
    return (
        <div>
            <img src={`rigs/carlisting${id}/image1.jpeg`} width="250px" height ="200px"alt='' />
            <br/>
            <Link to={{
                pathname:`/carlistings/${props.rig.id}`,
                state:  { photoidx: props.photoidx}}
            } > {props.rig.year} {props.rig.make} {props.rig.model}</Link>
                
                
            <h4>Features:
                <body>Cartype: {props.rig.cartype},
                    Drivetrain: {props.rig.drivetrain},
                    Transmission: {props.rig.transmission},
                    Lockers: {props.rig.lockers}
                </body>
            </h4>
            <h5>$ {props.rig.price} / day</h5>
            <br />
            
        </div>
    )

};

export default OverlandRig;