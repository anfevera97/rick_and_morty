import "./App.css";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Nav/Nav";
import { useState } from "react";


function App() {
	const [characters, setCharacters] = useState([]);
	
	const onSearch = (character) => {
		fetch(`https://rickandmortyapi.com/api/character/${character}`)
			.then((response) => response.json())
			.then((data) => {
				if (data.name) {
				const isDuplicate = characters.some((char) => char.id === data.id);
                if (!isDuplicate) {
					setCharacters((oldChars) => [...oldChars, data]);
				}else {
					window.alert("ESE PERSONAJE YA ESTA, MORTY!!");
				}}else {
					window.alert("No hay personajes con ese ID");
				}
		});
	};

	const onClose =(id)=>{
		setCharacters(
			characters.filter(character => character.id !== id)		
		)
	}

	return (
		<div className="App">
			<nav className="navbar">
				<Nav onSearch={onSearch}></Nav>
			</nav>
			<div className="container">
				<Cards characters={characters} onClose={onClose}/>
			</div>
		</div>
	);
}

export default App;
