import React, { useState, useEffect } from 'react';
//import {  } from '../actions/index';
import { connect } from 'react-redux';
function StudentList(props) {
	const { StudentData}  = props;
	
	return (
		<div>
			<div className="content-list">
			{props.StudentData.length > 0  ? (
				<table className="table-list">
					<thead>
						<tr>
							<th>Name</th>
							<th>Email</th>
							<th>Roll Number</th>
							<th>Phone Number</th>
							<th>Address</th>
						</tr>
					</thead>
					<tbody>
						{props.StudentData && props.StudentData .map((std, i) => 
							<tr key={i}>
								<td>{std.Name}</td>
								<td>{std.Email}</td>
								<td>{std.RollNumber}</td>
								<td>{std.PhoneNum}</td>
								<td>{std.Address}</td>
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
		StudentData: state.registration,
	};
}

function mapDispatchToProps(dispatch) {
	return {
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentList);
