import React, { useState, useEffect } from 'react';
import { submitForm } from '../actions/index';
import { connect } from 'react-redux';
const initialState = {
	Name: "",
	Email: "",
	EmployeeID: "",
	PhoneNum: "",
	Designation: ""
}
function EmployeeForm(props) {
	const [EmployeeData, setEmployeeData]= useState(initialState);
	const { AllData}  = props;
	// useEffect(() => {
        
	// }, []);
	const handleChange= (event) =>{
		setEmployeeData({
			...EmployeeData,
			[event.target.name] : event.target.value
		})
	}
	const handleSubmit = (event) =>{
		event.preventDefault();
		props.submitForm(EmployeeData)
		setEmployeeData(initialState)
	}

	return (
		<div className = "employee-container">
			<h4>Employee Registration Form</h4>
			<form onSubmit = {handleSubmit} className = "employee-form">
				<input
					type="text"
					value = {EmployeeData.Name}
					onChange = {handleChange}
					name="Name"
					placeholder="Name"
					maxLength ={60}
					required
				/>
				<input
					type="text"
					value = {EmployeeData.Email}
					onChange = {handleChange}
					name="Email"
					maxLength ={60}
					placeholder="Email"
					required
				/>
				<input
					type="number"
					value = {EmployeeData.EmployeeID}
					onChange = {handleChange}
					maxLength ={6}
					name="EmployeeID"
					placeholder="Employee ID"
					required
				/>
				<input
					type="number"
					value = {EmployeeData.PhoneNum}
					onChange = {handleChange}
					name="PhoneNum"
					maxLength ={10}
					placeholder="Phone Number"
					required
				/>
				<input
					type="text"
					value = {EmployeeData.Designation}
					onChange = {handleChange}
					name="Designation"
					maxLength ={25}
					placeholder="Designation"
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
		submitForm:(EmployeeData) => dispatch(submitForm(EmployeeData))
	 }
	
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeForm);