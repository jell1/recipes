import React, { useEffect, useState } from "react";
import _ from "lodash";
import { useNavigate } from "react-router-dom";

import { login } from "../api/userApi";
import { useAppContext } from "./AppContext";

// login screen
const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loginResponse, setLoginResponse] = useState(null);
	const navigate = useNavigate();
	const { user, setUser } = useAppContext();

	useEffect(() => {
		const userObj = JSON.parse(localStorage.getItem("user"));
		if (userObj?._id) {
			setUser(userObj);
			// navigate to home page, show user icon on navbar
			// navigate('/jjj')
		}
	}, [loginResponse]);

	const handleInputChange = (e) => {
		switch (e.target.name) {
			case "email":
				setEmail(e.target.value);
				break;
			case "password":
				setPassword(e.target.value);
				break;
			default:
				break;
		}
	};

	const handleLogin = async () => {
		console.log("email: ", email, "password: ", password);
		const res = await login(email, password);
		console.log(res);
		if (res?.data) {
			// set login reponse , this could be success or error
			setLoginResponse(_.cloneDeep(res.data));

			// route to app if success
			if (res?.data?._id) {
				setTimeout(() => {
					navigate("/recipes");
				}, 1000);
			}
		} else {
			setLoginResponse(null);
		}
	};

	// register user

	// if already registered log them in

	// if login passes login

	// if login fails show error

	return (
		<div className='login'>
			{/* <div className='container'> */}
			<input
				error={loginResponse?.message ? true : false}
				required
				id='oulinted-required'
				label='Email'
				onChange={handleInputChange}
				name='email'
			/>
			<input
				error={loginResponse?.message ? true : false}
				required
				id='oulinted-required'
				label='Password'
				onChange={handleInputChange}
				name='password'
			/>
			<button variant='outlined' onClick={handleLogin}>
				Login
			</button>
			{loginResponse?.message && (
				<div severity='error'>{loginResponse?.message}</div>
			)}
			{loginResponse?._id && (
				<div severity='success'>Login successful</div>
			)}
			{/* </div> */}
		</div>
	);
};

export default Login;
