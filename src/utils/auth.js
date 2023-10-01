import axios from "axios";

export const authService = axios.create({ baseURL: "https://nysc.onrender.com" });

authService.interceptors.request.use(
	(config) => {
		let token
		token = localStorage.getItem("token");
		console.log("token here", token)

		if (token == null) {
			config.headers.common["Authorization"] = `Bearer ${token}`;
			return config;
		}
		return config;
	},
);

