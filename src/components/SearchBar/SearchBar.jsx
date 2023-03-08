import React from "react";
import style from "./SearchBar.module.css";
import { useState } from "react";

export default function SearchBar(props) {
	const { onSearch } = props;
	const [character, setCharacter] = useState("");

	const handleChange = (event) => {
		setCharacter(event.target.value);
	};

	const handleKeyPress = (event) => {
		if (event.key === "Enter") onSearch(character);
	};

	const [randomchar, setRandomchar] = useState([])

	const handdleButtonClick =() =>{
		const item = onSearch(Math.floor(Math.random() * 267) + 1);
		setRandomchar([...randomchar, item]);
	}

	return (
		<div className={style.cajaDeBusqueda}>
			<button className={style.random} onClick={()=>handdleButtonClick()}>¿?</button>
			<input
				className={style.input}
				type="text"
				placeholder="Busca tu personaje..."
				value={character}
				onChange={handleChange}
				onKeyDown={handleKeyPress}
			/>
			<button className={style.boton} onClick={() => onSearch(character)}>
				Agregar
			</button>
		</div>
	);
}
