import React, {Component} from  "react";

class DenemeClass extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div>{this.props.isim}</div>;
    }
}

export default DenemeClass;