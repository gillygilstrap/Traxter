import React, { Component } from 'react'
import './dashtop.scss';
import {connect} from 'react-redux';

class DashTop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: ''
    }
  }

  componentDidMount() {
    this.setState({
      currentUser: this.props.currentUser || ''
    })
  }
  

  componentDidUpdate(prevProps) {
      if(this.props !== prevProps) {
        this.setState({
          currentUser: this.props.currentUser
        })
      }
  }

  render() {
    return (
      <div className="dash-top">
        <div className="dash-top-container">
          <h2 onClick={() => this.props.profileStateToTrue()} className="dash-top-user">{this.state.currentUser.username}</h2>
          <i className="fas fa-running"></i>
          <h1>Tra<span className="big-x">X</span>ter</h1>
        </div>
      </div>
    )
  }

}
const mapStateToProps = (state) => {
  const { currentUser } = state 
    return {
      currentUser
    }
  
}

export default connect(mapStateToProps)(DashTop);























