import axios from "axios";

export const DOMAIN = "http://localhost:3000";
// const API_URL = "https://fm-pfeedback-api.herokuapp.com/api/v1";
export const API_URL = "http://localhost:5000/api/v1";

export const authAxios = axios.create({
	baseURL: API_URL,
	withCredentials: true, // + app.use(cors(frontAppURL)) in app.js(back-end) to avoid cors!!
});
