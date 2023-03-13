function Validate(form, setErrors) {
	if (!form.username) {
		setErrors((prevErrors) => ({
			...prevErrors,
			username: "Ingrese su Username",
		}));
	} else if (
		!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(form.username)
	) {
		setErrors((prevErrors) => ({
			...prevErrors,
			username: "Username inválido",
		}));
	} else {
		setErrors((prevErrors) => ({ ...prevErrors, username: "" }));
	}

	if (!form.password) {
		setErrors((prevErrors) => ({
			...prevErrors,
			password: "Ingrese su contraseña",
		}));
	} else if (
		!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,64}$/.test(
			form.password,
		)
	) {
		setErrors((prevErrors) => ({
			...prevErrors,
			password: "Contraseña invalida",
		}));
	} else {
		setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
	}
}
export default Validate;
