import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import * as actionCreators from './actions';

function App(props) {
  const {
    activity, 
    fetchAct
  } = props

  useEffect(() => {
    fetchAct()
  }, [])

  const buttonClick = () => {
    fetchAct()
  }

  return (
    <div className="App">
      <h1>Random Activity Generator</h1>
      <button onClick={buttonClick} type="submit">Generate new Activity</button>
      <section>
          <div className='content'><div className='content-title'>ACTIVITY:</div> <br />{activity.activity}</div>
          <div className='content'><div className='content-title'>TYPE:</div> <br />{activity.type}</div>
          <div className='content'><div className='content-title'>PRICE:</div> <br />${activity.price}</div>
      </section>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    activity: state.activity
  }
}

export default connect(mapStateToProps, actionCreators)(App);