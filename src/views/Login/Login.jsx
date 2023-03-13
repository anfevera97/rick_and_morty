import style from "./Login.module.css";
import React, { useState } from "react";
import Validate from "./Validations";

const Login = (props) => {
	const [form, setform] = useState({
		username: "",
		password: "",
	});

	const [errors, setErrors] = useState({});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setform({...form, [name]: value});
		Validate({...form, [name]: value}, setErrors, errors);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
    	props.onSubmit(form);
	}


	return (
		<form onSubmit={handleSubmit}>
			<div className={style.container}>
				<label htmlFor="username" className={style.usernameLabel}>
					Username:
				</label>
				<input
					type="text"
					name="username"
					className={errors.username ? style.inputError : style.inputSuccess}
					value={form.username}
					onChange={handleChange}
					
				/>
				{errors.username && <p className={style.error}>{errors.username}</p>}
				<label htmlFor="password" className={style.passwordLabel}>
					Password:
				</label>
				<input
					type="password"
					name="password"
					className={errors.password ? style.inputError : style.inputSuccess}
					value={form.password}
					onChange={handleChange}
				/>
				{errors.pasword && <p className={style.error}>{errors.password}</p>}
				<button type="submit" className={style.boton} onClick={handleSubmit}>
					Login
				</button>
			</div>
		</form>
	);
};

export default Login;
