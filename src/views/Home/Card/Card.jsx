import React from "react";
import style from "./Card.module.css";
import { NavLink } from "react-router-dom";

function Card(props) {
	const { name, gender, species, onClose, image, status, detailId } = props;

	return (
		<div className={style.card}>
			<button onClick={onClose} className={style.boton}>
				X
			</button>

			<div className={style.especieGenero}>
				<h2>{species}</h2>
				<h2>{gender}</h2>
			</div>

			<h2 className={style.status}>{status}</h2>
			
				<NavLink to={`/detail/${detailId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
			<div className={style.imgNombre}>
					<img src={image} alt={name} className={style.imagen} />
					<h2 className={style.nombre}>{name}</h2>
			</div> 
				</NavLink>
		</div>
	);
}

export default Card;
