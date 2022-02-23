import axios from "axios";

export const DOMAIN = "http://localhost:3000";
// const API_URL = "https://fm-pfeedback-api.herokuapp.com/api/v1";
export const API_URL = "http://localhost:5000/api/v1";

export const authAxios = axios.create({
	baseURL: API_URL,
	withCredentials: true, // + app.use(cors(frontAppURL)) in app.js(back-end) to avoid cors!!
});

export const validateEmail = (email: string) => {
	const text = /[a-zA-Z0-9_\.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9\.]{2,5}$/;
	return text.test(String(email).toLowerCase());
};

export const setMsgFunction = (message: string, setMessageFunction: (string: string | false) => void) => {
	setMessageFunction(message);
	setTimeout(() => {
		setMessageFunction(false);
	}, 2000);
};
