import axios from "axios";

export async function login(email, password) {
	let postData = {
		headers: {
			"Content-Type": "application/json",
			// "Access-Control-Allow-Origin": "*",
			// "Content-Type": "application/x-www-form-urlencoded",
		},
		url: "https://crypto-j-21.herokuapp.com/api/users/login",
		method: "post",
	};
	postData.data = {
		email,
		password,
	};

	return axios(postData)
		.then((res) => {
			res.data?._id
				? localStorage.setItem("user", JSON.stringify(res.data))
				: localStorage.removeItem("user");
			return res;
		})
		.catch((err) => {
			localStorage.removeItem("user");
			return err;
		});
}
