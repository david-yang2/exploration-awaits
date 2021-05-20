import React from "react";


class Review extends React.Component{
    constructor(props){
        super(props)
    }

    render(){

        // Working code
        return (
            <div>
                {Object.values(this.props.reviews).map(r => 
                    Object.values(this.props.users).map(u =>
                        {if (u["id"] == r.user_id){ return(
                            <div>
                                <h3 key={r.id}>Name: {u.username} Review: {r.body}</h3>
                            </div>
                        )}
                        
                    }
                ))}
            </div>
        )


        // Piece of shit did not work
    }
}

export default Review;        














// debugger
// return(
//     <div>
//         <ul>
//         {Object.values(this.props.reviews).map(r => {   
//             Object.values(this.props.users).map(u => { 
//                 if(u["id"] == r.user_id) {
//                     debugger
//                     return (
//                         <div>
//                             <h2> 
//                                 Name: {u.username} Review: {r.body}
//                             </h2>
//                         </div>
//                     )
//         }})})}
//         </ul>
//     </div>
//     )







{/* <div>

<div>
    {Object.values(props.users).map(u => <h1 key={u.id}>{u.username}</h1>)}
</div>
</div>  */}