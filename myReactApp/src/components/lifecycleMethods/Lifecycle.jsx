import React, { Component, PureComponent } from 'react'

export default class Lifecycle extends PureComponent {

    constructor() {
        console.log("Constructor is used to initialise the state.");
        super();
        this.state = {
            count: 0,
            bio:{name:"Ashu",age:12}
        }
    }

    handleCount = () => {
        let lastCount = this.state.count
        this.setState({ count: 5 })
    }

    static getDerivedStateFromProps() {
        console.log("getDerivedStateFromProps method verifies if the state is initialised or not.");
        return null;
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("shouldComponentUpdate determines if state should be updated or not, if values are different, we return true-state will be updated, else if values are same we return false-state will not get updated.");
    //     console.log(this.state, nextState);
    //     return true;
    //     // if (this.state == nextState) {
    //     //     console.log("Pure Component");
    //     //     return false;
    //     // } else {
    //     //     return true;
    //     // }

    //     // Pure Component: Upon shallow comparison, if values are different, we return true-state will be updated, else if values are same we return false-state will not get updated.
        
    //     // Normal Component : It will always return true 
    // }

    handleName=()=>{
        this.setState({bio:{name:"Raj"}})
    }

    render() {
        console.log("Renderring the Component");
        return (
            <>
                <h2>Lifecycle</h2>
                <p onClick={this.handleCount}>Count : {this.state.count}</p>
                <h4 onMouseOver={this.handleName}>Name : {this.state.bio.name}</h4>
            </>
        )

    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate is used to read the previous state and previous props values");
        console.log(prevState);
        return null;
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount is called..");
    }
}