import { useQuery } from "react-query";
import { getProducts } from '../services/product.service';

const UseProductData = (onSuccess: any, onError : any) => {
    return useQuery(
        'product-list',
        getProducts,
        {
            //cacheTime: 5000,
            //staleTime: 0,
            //refetchOnMount: true,
            //refetchOnWindowFocus: false,
            //refetchInterval: 2000,
            //enabled: false
            onSuccess,
            onError,
            // select: (data) => {
            //   const productName =   data.data.map(((product: any) => product.Name));
            //     return productName;
            // }
        }
    );
}

export default UseProductData;