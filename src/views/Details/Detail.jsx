import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./Details.module.css";

const Detail = () => {
	const { detailId } = useParams();
	const [character, setCharacter] = useState({});
	const URL_BASE = "https://be-a-rym.up.railway.app/api";
	const API_KEY = "34585a748421.c988241ff4bb6de9b9a6";

	useEffect(() => {
		fetch(`${URL_BASE}/character/${detailId}?key=${API_KEY}`)
			.then((response) => response.json())
			.then((char) => {
				if (char.name) {
					setCharacter(char);
				} else {
					window.alert("No hay personajes con ese ID");
				}
			})
			.catch((err) => {
				window.alert("No hay personajes con ese ID");
			});
		return setCharacter({});
	}, [detailId]);

	return (
		<div className={style.tarjeta}>
			<h1>{character.name}</h1>
			<ul>
			<li>Status: {character.status}</li>
			<li>Species: {character.species}</li>
			<li>Gender: {character.gender}</li>
			<li>Origin: {character.origin?.name}</li>
			</ul>
			

			<div className={style.foto}>
				<img src={character.image} alt={character.name}></img>
			</div>
		</div>
	);
};

export default Detail;
