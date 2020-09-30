import React, { useState, useEffect } from 'react';
import { submitForm } from '../actions/index';
import { connect } from 'react-redux';
const initialState = {
	Name: "",
	Email: "",
	RollNumber: "",
	PhoneNum: "",
	Address: ""
}
function StudentForm(props) {
	const [StudentData, setStudentData]= useState(initialState);
	const { AllData}  = props;
	// useEffect(() => {
        
	// }, []);
	const handleChange= (event) =>{
		setStudentData({
			...StudentData,
			[event.target.name] : event.target.value
		})
	}
	const handleSubmit = (event) =>{
		event.preventDefault();
		props.submitForm(StudentData)
		setStudentData(initialState)
	}

	return (
		<div className = "student-container">
			<h4>Student Registration Form</h4>
			<form onSubmit = {handleSubmit} className = "student-form">
				<input
					type="text"
					value = {StudentData.Name}
					onChange = {handleChange}
					name="Name"
					placeholder="Name"
					maxLength ={60}
					required
				/>
				<input
					type="text"
					value = {StudentData.Email}
					onChange = {handleChange}
					name="Email"
					maxLength ={60}
					placeholder="Email"
					required
				/>
				<input
					type="number"
					value = {StudentData.RollNumber}
					onChange = {handleChange}
					maxLength ={6}
					name="RollNumber"
					placeholder="Roll Number"
					required
				/>
				<input
					type="number"
					value = {StudentData.PhoneNum}
					onChange = {handleChange}
					name="PhoneNum"
					maxLength ={10}
					placeholder="Phone Number"
					required
				/>
				<input
					type="text"
					value = {StudentData.Address}
					onChange = {handleChange}
					name="Address"
					maxLength ={25}
					placeholder="Address"
					required
				/> 
				<button type = "submit" className="submit-btn" >Add</button>
			</form>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		AllData: state.registration,
	};
}

 function mapDispatchToProps(dispatch) {
	 return {
		submitForm:(StudentData) => dispatch(submitForm(StudentData))
	 }
	
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentForm);