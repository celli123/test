import './App.css';
import React, { Component, useState, useEffect } from 'react';
import StudentForm from './components//StudentForm';
import StudentList from './components/StudentList';
import { connect } from 'react-redux';
class App extends Component {
  render() {
    return (
      <div className="App">
        <StudentForm />
        <StudentList />
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
