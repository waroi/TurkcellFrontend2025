import React, { Component } from 'react'

export default class DenemClass extends Component {
  constructor(props){
    super(props)
  }
    render() {
    return (
      <div>
        {this.props.isim}
      </div>
    )
  }
}   