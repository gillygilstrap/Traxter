import React from 'react'
import './dashtop.scss'

function DashTop(props) {
  return (
    <div className="dash-top">
      <div className="dash-top-container">
        <h2 onClick={() => props.profileStateToTrue()} className="dash-top-user">gillygilstrap</h2>
        <i className="fas fa-running"></i>
        <h1>Tra<span className="big-x">X</span>ter</h1>
      </div>
    </div>
  )
}

export default DashTop;
