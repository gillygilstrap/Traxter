import React, { Component } from 'react'
import Add from '../Add/Add'

class AddEdit extends Component {
    constructor() {
        super()
        this.state = {
            editButtonClicked: false
        }
    }
  render() {
        {if (this.state.editButtonClicked) {
            return(
                <div></div>
                // <Edit />
            )
        }else {
            return (
                <Add/>
            )
        }}
  }
}


export default AddEdit;
