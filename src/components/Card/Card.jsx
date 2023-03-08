import React from "react";
import style from "./Card.module.css";

function Card(props) {
	const { name, gender, species, onClose, image, status } = props;

	return (
		<div className={style.card}>
			<button onClick={onClose} className={style.boton}>
				X
			</button>

			<div className={style.especieGenero}>
				<h2 className={style.species}>{species}</h2>
				<h2 className={style.gender}>{gender}</h2>
			</div>

			<h2 className={style.status}>{status}</h2>
			<div className={style.imgNombre}>
				<img src={image} alt="wuobalubadubdub" className={style.imagen} />
				<h2 className={style.nombre}>{name}</h2>
			</div>
		</div>
	);
}



export default Card;