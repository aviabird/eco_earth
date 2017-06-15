import React, { Component } from 'react';
import Searchbar from '../component/searchbar';

class Header extends Component {
	onSearched(keyword) {
    console.log(keyword);
  }

	render(){
	  return (
	   <div className = "header">
	     TAKE A PLEDGE FOR YOUR BETTER FUTURE
			 <Searchbar onSearched = { (keyword) => this.onSearched(keyword) }/>
     </div>
	  )
	}
}


export default Header;