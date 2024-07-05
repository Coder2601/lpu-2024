// function Button(){
//     return <button>Count</button>
// }


import React from "react";   
//react is used to create Components
// react-dom is used to render the components

class Button extends React.Component{

    constructor(){
        super();
        this.state = {      //define a variable using this.state
            count : 1
        }
    }

    handleIncrease=() =>{
        this.setState({        //update a variable using this.setState
            count : this.state.count+1
        })
    }

    render(){
        return(
            <button onClick={this.handleIncrease}>Count : {this.state.count}</button>
        )
    }
}

export default Button;


// we use arrow functions as event handlers in class based comnponents because it defines the instance of its child attributes/variables. such as in this.setState => this will have instance same as of function. 
// Example : {this.function}   //if function is arrow function

// when a normal function is used as event handler then we have to BIND the instance of the parent function to its child attributes/variables. such as in this.setState => this will have instance same as of function when it is bind with the function. 
// Example : {this.function.bind(this)}  //if function is named function
