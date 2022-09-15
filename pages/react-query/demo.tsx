import React, { useState } from 'react';
import Link from "next/link";
import Button from 'react-bootstrap/Button';
import UseProductData from '../../hooks/UseProductData';


const Demo = () => {

    const onSuccess = () => {
        console.log('sc');
    }
    const onError = (error: any) => {
        console.log(error);
    }
    const { isLoading, data, error, isError, refetch } = UseProductData(onSuccess, onError);

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (isError) {
        return <h1>Not Found</h1>
    }

    return (
        <>
            <div>
                <Link href="/"><a>Back</a></Link>
                <h1>Product List :</h1>
                {data?.data.map((product: any) => {
                    return (
                        <div style={{ textAlign: 'center' }}>
                            <Link href={`/react-query/${product.id}`}>{product?.Name}</Link>
                            <br />
                        </div>
                    )
                })}
                {/* {data.map((product: any) => {
                    return (
                        <div style={{ textAlign: 'center' }} key={product}>
                            <p>{product}</p>
                            <br />
                        </div>
                    )
                })} */}
            </div>

            <Button variant="primary" onClick={()=>refetch()}>
                Launch demo modal
            </Button>
        </>
    )
}

export default Demo;