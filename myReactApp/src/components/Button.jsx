// function Button(){
//     return <button>Count</button>
// }


import React from "react";   
//react is used to create Components
// react-dom is used to render the components

class Button extends React.Component{
    render(){
        return(
            <button>Count</button>
        )
    }
}

export default Button;