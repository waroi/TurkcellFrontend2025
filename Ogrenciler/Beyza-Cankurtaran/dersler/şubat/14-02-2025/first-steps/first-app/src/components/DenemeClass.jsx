import React ,{Component} from "react";
//çok kullanılan bir yapı değilmiş!
class DenemeClass extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div>{this.props.isim}</div>
    }
}
export default DenemeClass;