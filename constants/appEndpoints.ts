import  production from "./production";
import  staging from "./staging";
import { _PRODUCTION_MODE_ } from './appConfig';

export class ApiEndpoints {
    static get BASE_API_URL() {
        return _PRODUCTION_MODE_ !== false ? production.baseUrl : staging.baseUrl;
    }
    static get PRODUCTS_API_URL() {
        return _PRODUCTION_MODE_ !== false ? production.products : staging.products;
    }
    static get PRODUCT_API_URL() {
        return _PRODUCTION_MODE_ !== false ? production.product : staging.product;
    }
}
