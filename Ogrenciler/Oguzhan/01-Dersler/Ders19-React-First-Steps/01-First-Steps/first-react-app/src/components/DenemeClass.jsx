import React, { Component } from 'react'

export default class DenemeClass extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <div>{this.props.isim}</div>
    )
  }
}
