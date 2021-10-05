import React from "react"



class Avatar extends React.Component{
    constructor (props){
        super(props)


        this.getInitials = this.getInitials.bind(this)
    }

    getInitials(username){
        let initials =""
        username.toUpperCase().split(" ").map(word => initials += word[0])
        
        return initials
    }

    render(){

        // set background color based on first letter of initial
        const olive = ['G', 'H', 'I']                               //"#808000"
        const emeraldgreen = ['D', "Z", 'F']                                   //"#00C957"
        const red =   ['A', 'B', 'C', 'Y']                           //"#CD0000"
        const orange = ['J', 'K', 'L', "E"]                            //"#FFA500"
        const maroon =  ['S', 'T', 'U']                                 //"#800000"
        const violet = ['P', 'Q', 'R']                                 //"#D02090"
        const royalblue = [ 'M', 'N', 'O']                            //"#4876FF"
        const coral = ['V', 'W', 'X']                                  //"#FF7F50"

        const colorHash = {
            ...Object.fromEntries(
            olive.map(key => [key, "#808000"])
            ),
            ...Object.fromEntries(
            emeraldgreen.map(key => [key, "#00C957"])
            ),
            ...Object.fromEntries(
            red.map(key => [key, "#CD0000"])
            ),
            ...Object.fromEntries(
            orange.map(key => [key, "#FFA500"])
            ),
            ...Object.fromEntries(
            maroon.map(key => [key, "#800000"])
            ),
            ...Object.fromEntries(
            violet.map(key => [key, "#D02090"])
            ),
            ...Object.fromEntries(
            royalblue.map(key => [key, "#4876FF"])
            ),
            ...Object.fromEntries(
            coral.map(key => [key, "#FF7F50"])
            )
    
          };
        
        let initials = this.getInitials(this.props.username)
        let avatarColor = colorHash[initials[0]]
        var w, h, fontsize;

        w = h ="60px"
        fontsize = "25px"

        return(
            <div    className = "avatar" 
                    style={{
                            backgroundColor: avatarColor,
                            width: w,
                            height: h,
                            borderRadius: '50%',
                            textAlign: 'center',
                            fontSize: fontsize}} >
                {initials}
            </div>
        )
    }
}


export default Avatar