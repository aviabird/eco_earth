import React,{ Component } from 'react';

const Searchbar = (props) => {
		return (
			<div>
				<input onKeyPress={(event) => props.onSearched(event.target.value)} className="search-bar" />
			</div>
		);
}
	
  
export default Searchbar;