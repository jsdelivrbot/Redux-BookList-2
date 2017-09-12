import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
	render(){
	
	if (!this.props.book){
		return <div>Click something</div>;
	}

		return (
			<div>
			<h4>Details for:</h4>
			<div>{this.props.book.title}</div>
			</div>
			)
	}
}


function mapStateToProps(state){
	return {
		book:state.activeBook
	};
}


export default connect(mapStateToProps)(BookDetail)