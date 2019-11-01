import React, { Component } from 'react';
import './App.css';
import Body from './Containers/Body';
import { Route, Link } from 'react-router-dom';
import AboutUs from './Components/AboutUs'

class App extends Component {

  // aboutUsHandler = () => {
  //   this.props.history.push('/about-us')
  // }

  render() {
    return (
      <div>
        <div className={'navigation'} >
          <Link className='link' to="/" >PLAYLIST </Link>
          <Link className='link' to="/about-us" > ABOUT US</Link>
        </div>
        <div>
          <Route path='/' exact component={Body} />
          <Route path='/about-us' component={AboutUs} />
        </div>
      </div>
    )
  }
}

export default App; 
