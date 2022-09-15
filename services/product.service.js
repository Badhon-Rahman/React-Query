import httpService from "../httpClient/axiosConfig";
import { ApiEndpoints } from "../constants/appEndpoints";

export const getProducts = async () => {
    const response = await httpService.get(`http://localhost:4000/Products/`);
    //const response = await httpService.get(`${ApiEndpoints.PRODUCTS_API_URL}`);
    //const productData = await response.data;

    return response;
};

export const getProductDetails = async (productId) => {
    const response = await httpService.get(`http://localhost:4000/Products/${productId}`);
    // const response = await httpService.get(`${ApiEndpoints.PRODUCTS_API_URL}/${productId}`);
    // const productData = await response.data;

    return response;
};