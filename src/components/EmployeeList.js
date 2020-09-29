import React, { useState, useEffect } from 'react';
//import {  } from '../actions/index';
import { connect } from 'react-redux';
function EmployeeList(props) {
	const { EmployeeData}  = props;
	
	return (
		<div>
			<div className="content-list">
			{props.EmployeeData.length > 0  ? (
				<table className="table-list">
					<thead>
						<tr>
							<th>Name</th>
							<th>Email</th>
							<th>Employee ID</th>
							<th>Phone Number</th>
							<th>Designation</th>
						</tr>
					</thead>
					<tbody>
						{props.EmployeeData && props.EmployeeData .map((emp, i) => 
							<tr key={i}>
								<td>{emp.Name}</td>
								<td>{emp.Email}</td>
								<td>{emp.EmployeeID}</td>
								<td>{emp.PhoneNum}</td>
								<td>{emp.Designation}</td>
							</tr>
						)}
					</tbody>
				</table>
				) : ''
			}
			</div>
		
		</div>
		
	);
}

function mapStateToProps(state) {
	return {
		EmployeeData: state.registration,
	};
}

function mapDispatchToProps(dispatch) {
	return {
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);
