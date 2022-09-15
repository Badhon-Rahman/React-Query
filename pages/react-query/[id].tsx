import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import UseProductDetailsData from "../../hooks/UseProductDetailsData";


function useQuery() {
    const router = useRouter();
    return React.useMemo(() => router.query, [router]);
}

const ProductDetails = () => {
    const routePath: any = useQuery();
    console.log(routePath?.id);
    const { isLoading, data, error, isError, refetch } = UseProductDetailsData(routePath?.id);
    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (isError) {
        return <h1>Not Found</h1>
    }

    console.log(data);

    return (
        <>
            <div>
                <Link href="/react-query/demo"><a>Back</a></Link>
                <h2>Product details :</h2>
                <div style={{ textAlign: 'center' }}>
                    <h4>{data?.data.Name}</h4>
                    <br />
                </div>
            </div>

        </>
    )
}

export default ProductDetails;