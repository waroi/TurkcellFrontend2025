import { Component } from "react";

export class TestClass extends Component{
    constructor(props){
        super(props);
}

render(){
    return(
        <div>
            <h1>{this.props.name}</h1>
            <h2>{this.props.age}</h2>
        </div>
    )
}
}