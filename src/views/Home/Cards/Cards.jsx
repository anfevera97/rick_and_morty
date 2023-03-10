import Card from "../Card/Card";
import style from "./Cards.module.css";



export default function Cards(props) {
	const { characters, onClose } = props;

	return (
		<div className={style.cards}>
			{characters.map(({ id, name, image, species, gender, status }) => (
				<Card
					key={id}
					detailId={id}
					name={name}
					image={image}
					species={species}
					gender={gender}
					status={status}
					onClose={()=>onClose(id)}
				/>
			))}
		</div>
	);
}

