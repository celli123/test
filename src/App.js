import './App.css';
import React, { Component, useState, useEffect } from 'react';
import EmployeeForm from './components//EmployeeForm';
import EmployeeList from './components/EmployeeList';
import { connect } from 'react-redux';
class App extends Component {
  render() {
    return (
      <div className="App">
        <EmployeeForm />
        <EmployeeList />
      </div>
    );
  }
}

function mapStateToProps(state) {
	return {
	};
}

function mapDispatchToProps(dispatch) {
	return {
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
