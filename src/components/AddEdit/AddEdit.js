import React, { Component } from 'react'
import Add from '../Add/Add'
import Edit from '../Edit/Edit'
import { connect } from 'react-redux';

class AddEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editButtonClicked: false
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props != prevProps) {
            this.setState({
                editButtonClicked: true
            })
        }
    }
  render() {
    //   console.log(this.props)
    //   console.log(this.state.editButtonClicked)

        {if (this.state.editButtonClicked) {
            return(
                
                <Edit />
            )
        }else {
            return (
                <Add/>
            )
        }}
  }
}

const mapStateToProps = (state) => {
    return {
        editClicked: state.editClicked
    }
}


export default  connect(mapStateToProps)(AddEdit);
