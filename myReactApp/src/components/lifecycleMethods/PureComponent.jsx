import React, { PureComponent } from 'react'

export default class Pure extends PureComponent {
    constructor(){
        super();
        // this.state = {bio:{age:1}};
        // this.state = {count:0}
        this.state = {vals:[1,2,3,4,5]}
    }

    handleChange=()=>{
        // this.setState({bio:{age:1},name:"Aadi"})
        // this.setState({count:10})
        this.setState({vals:[1,2,3,4,5]})
    }

    render() {
        console.log("Rendering component..");
    return (
      <div>
        {/* <h2>Age : {this.state.bio.age}</h2> */}
        {/* <h2>Count : {this.state.count}</h2> */}
        <h2>Vals : {this.state.vals[3]}</h2>
        <button onClick={this.handleChange}>Change</button>
      </div>
    )
  }
}
