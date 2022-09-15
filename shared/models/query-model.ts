import { Product } from "./product-model";

export class Query { 
    isLoading: boolean;
    data: Product;
    isError: boolean;
    error: {
        message: string
    };

    constructor(data: any = null) {
        this.isLoading = data?.isLoading;
        this.data = data?.data;
        this.isError = data?.isError;
        this.error = data?.error;
    }
}