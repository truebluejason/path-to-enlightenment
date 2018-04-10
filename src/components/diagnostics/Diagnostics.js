import React from 'react';
import bootstrapClasses, { Col, Grid, Jumbotron, Row,} from '../../assets/bootstrap';
import withAuthorization from '../higherorder/withAuthorization';
import withLevel from '../higherorder/withLevel';

// Should have a router that enables each question to be in the page by itself
class DiagnosticsPage extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		// Not adaptive to changing screen sizes for now
		const rowStyle = window.innerWidth > 768
		? {
	  		backgroundColor: 'rgb(248,248,248)', 
	  		display: 'flex',
			border: '3px solid rgb(225,225,225)', 
  			borderRadius: 4, 
  			margin: 16,
	  	} 
	  	: {
	  		backgroundColor: 'rgb(248,248,248)', 
			border: '3px solid rgb(225,225,225)', 
  			borderRadius: 4, 
  			margin: 16,
	  	} 
		const colStyle = {
			padding: 16,
		};
		const divStyle = {
			backgroundColor: 'rgb(225,225,225)', 
	  		borderRadius: 4, 
	  		boxSizing: 'border-box',
	  		height: '100%',
			padding: 16,
		};
		const pStyle = { margin: 0, textIndent: 12 };
		const h3Style = { margin: 0, marginBottom: 20, textAlign: 'center' };
		return (
			<Row style={rowStyle}>
				<Col style={colStyle} xs={12} sm={6}>
					<div style={divStyle}>
						<h3 style={h3Style}>Take Diagnostics</h3>
						<p style={pStyle}>
							Honestly answer the questions once per week to 
							gain insight on your progress and areas to pay 
							additional attention to.
						</p>
					</div>
				</Col>
				<Col style={colStyle} xs={12} sm={6}>
					<div style={divStyle}>
						<h3 style={h3Style}>View Past Results</h3>
						<p style={pStyle}>
							View your past diagnostics stats to further gain 
							insight about yourself.
						</p>
					</div>
				</Col>
			</Row>
		)
	}
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(DiagnosticsPage);