import { useQuery } from "react-query";
import { getProductDetails } from '../services/product.service';

const UseProductDetailsData = (productId: any) => {
    return useQuery(
        ['product-details', productId],
        () => getProductDetails(productId)
    );
}

export default UseProductDetailsData;