import axios from "axios";

export const getData = async (url: string) => {
	return await axios.get(url).then((data) => data);
};

export const getAllProductRequests = async (url: string) => {
	return await getData(url);
};
