import React from "react";
import SearchBar from "../SearchBar/SearchBar";

const Nav = (props) => {
	const { onSearch } = props
	return (
		<div>
			
				<nav>
					<SearchBar onSearch={onSearch}/>
				</nav>
		
		</div>
	);
};

export default Nav;
