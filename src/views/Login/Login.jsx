import style from "./Login.module.css";
import { useState } from "react";

const Login = () => {
	const [form, setform] = useState({
		username: "",
		password: "",
	});

	return (
		<div className={style.container}>
			<label htmlFor="username" className={style.usernameLabel}>Username:</label>
			<input type="text" name="username" className={style.input}></input>
			<label htmlFor="password" className={style.passwordLabel}>Password:</label>
			<input type="password" name="password" className={style.input} ></input>
			<button type="submit" className={style.boton}>Login</button>
		</div>
	);
};

export default Login;
