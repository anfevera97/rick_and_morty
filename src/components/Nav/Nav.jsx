import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css"
import { Link } from "react-router-dom";

const Nav = (props) => {
	const { onSearch } = props
	return (
		<div className={style.navbar}>
				<nav>
					<SearchBar onSearch={onSearch}/>
					<Link to="/">Home</Link>
					<Link to= "/about">About</Link>
				</nav>
		
		</div>
	);
};

export default Nav;
