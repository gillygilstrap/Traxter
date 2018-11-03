import React, { Component } from 'react'
import DashTop from '../DashTop/DashTop';
import './dashboard.scss';
import axios from 'axios';
import ProductCard from '../ProductCard/ProductCard';


class Dashboard extends Component {
  constructor() {
    super() 
    this.state = {
      products: []
    }
  }


  componentDidMount() {
    axios.get('/api/workouts/getAll/1').then(res => {
      // console.log('----------BANG!!!!----------', );
      // console.log(res.data)
      this.setState({
        products: res.data
      })
    })
   
  }
  render() {
    const {products} =  this.state
    // console.log(this.state.products)
     const mappedWorkout =  products.map((workout,i) => {
       return <ProductCard key={i} workout={workout}/>
     })

    return (
      <div className="dashboard-main">
        <div className="dash-fixed-header">
          <DashTop />

          <div className="dashboard-btns-box">
            <button className="dashboard-add-btn">Add Workout</button>
            <button className="dashboard-search-btn">Search Workouts</button>
          </div>

        </div>
        <div className="clear-fix"></div>
        <h2 className="performance-feed">Performance Feed</h2>

        {mappedWorkout}

        <div className="workout-card">
        <p>Title</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>

        <div className="workout-card">
        <p>Title</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>

        <div className="workout-card">
        <p>Title</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>

        <div className="workout-card">
        <p>Title</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>

        <div className="workout-card">
        <p>Title</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>

        <div className="workout-card">
        <p>Title</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>

        <div className="workout-card">
        <p>Title</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>

        <div className="workout-card">
        <p>Title</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>

        <div className="workout-card">
        <p>Title</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>

        <div className="workout-card">
        <p>Title</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>

        <div className="workout-card">
        <p>Title</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        
        <div className="workout-card">
        <p>Title</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        
      </div>
    )
  }
}

export default Dashboard;
