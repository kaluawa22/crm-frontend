import axios, {isCancel, AxiosError} from 'axios';

export default axios.create({
		baseURL: 'http://localhost:8000/api/',
		headers: {
	},
});