import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class Header extends Component {

	render(){
	  return (
	   <div>
     </div>
	  )
	}
}

function mapStateToProps(state){
  return{
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({},dispatch);
} 

export default connect(mapStateToProps,mapDispatchToProps)(Header);