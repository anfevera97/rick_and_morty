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
		<div>
			{character.name ? (
				<xz>
					<div className={style.presentacion}>
						<h1>{character.name}</h1>

						<img
							src={character.image}
							alt={character.name}
							className={style.foto}
						></img>
					</div>

					<div className={style.info}>
						<p>Status: {character.status}</p>
						<p>Species: {character.species}</p>
						<p>Gender: {character.gender}</p>
						<p>Origin: {character.origin?.name}</p>
					</div>
				</xz>
			) : (
				<h3>Loading...</h3>
			)}
		</div>
	);
};

export default Detail;
