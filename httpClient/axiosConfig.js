import axios from "axios";
import { ApiEndpoints } from "../constants/appEndpoints"
import initInterceptors from './interceptors';

const httpService = axios.create({
    baseURL: ApiEndpoints.BASE_API_URL,
});

initInterceptors(httpService);
export default httpService;