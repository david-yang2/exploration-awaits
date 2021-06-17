import React from "react";
import {Link} from 'react-router-dom';


const OverlandRig = (props) => {
    const id = props.rig.imageIdx
    return (
        <div className="rigContainer">
            {/* link to show page when image is clicked */}
            <a href={`#/carlistings/${props.rig.id}`}>
                <img className="imgidx" src={`rigs/carlisting${id}/image1.jpeg`} width="250px" height ="200px"alt='' />
            </a>
            <br/>
            <div className="rig-title">
                <div>{props.rig.year} {props.rig.make} {props.rig.model}</div>
                <h5>${props.rig.price}/day </h5>
            </div>
                
            <h5>Features:
                <body className='rig-features'>Cartype: {props.rig.cartype},
                    Drivetrain: {props.rig.drivetrain},
                    Transmission: {props.rig.transmission},
                    Lockers: {props.rig.lockers}
                </body>
            </h5>
            
            <br />
            
        </div>
    )

};

export default OverlandRig;



// <Link to={{
//     pathname:`/carlistings/${props.rig.id}`,
//     state:  { imageIdx: id}}
// } >{props.rig.year} {props.rig.make} {props.rig.model}</Link>