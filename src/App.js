import "./App.css";
import Login from "./views/Login/Login";
import Cards from "./views/Home/Cards/Cards";
import About from "./views/About/About";
import Details from "./views/Details/Detail";
import Nav from "./components/Nav/Nav";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function App() {
	const [characters, setCharacters] = useState([]);
	const URL_BASE = "https://be-a-rym.up.railway.app/api";
	const API_KEY = "34585a748421.c988241ff4bb6de9b9a6";

	const onSearch = (character) => {
		fetch(`${URL_BASE}/character/${character}?key=${API_KEY}`)
			.then((response) => response.json())
			.then((data) => {
				if (data.id) {
					const isDuplicate = characters.some((char) => char.id === data.id);
					if (!isDuplicate) {
						setCharacters((oldChars) => [...oldChars, data]);
					} else {
						window.alert("ESE PERSONAJE YA ESTA, JERRY!!");
					}
				} else {
					window.alert("No hay personajes con ese ID");
				}
			});
	};

	const onClose = (id) => {
		setCharacters(characters.filter((character) => character.id !== id));
	};

	const navigate = useNavigate();
	const [access, setAccess] = useState(false);
	const username = "anfevera97@gmail.com";
	const password = "Prueba1";

	function login(userData) {
		if (userData.password === password && userData.username === username) {
			setAccess(true);
			navigate("/home");
		}
	}

	useEffect(() => {
		!access && navigate('/');
	}, [access]);
	

	return (
		<div className="App">
			<Nav onSearch={onSearch} />
			<div className="container">
				<Routes>
					<Route path="/" element={<Login onSubmit={login}/>} />

					<Route
						path="/home"
						element={<Cards characters={characters} onClose={onClose} />}
					/>

					<Route path="/about" element={<About />} />

					<Route path="/detail/:detailId" element={<Details />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
