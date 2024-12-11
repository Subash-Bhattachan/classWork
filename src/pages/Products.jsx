import { useParams, useSearchParams } from 'react-router-dom';
import { productData } from "../data/productData";
import { useEffect } from 'react';

export const Products = function () {
    const { productId } = useParams();

    const product = productData.find((element) => {
        return element.id === Number(productId);
    });

    // useEffect(() => {
    //     const helperFn = async () => {
    //         try {
    //             const response = await axios({
    //                 url: "/products/:id",
    //                 method: "GET",
    //             });
    //             const data = await response.data;

    //         } catch (error) {
    //             setError(response.error.message)
    //         }
    //     }

    //     helperFn();
    // })

    console.log(productId);
    return (
        <>
            <h1>Products</h1>
            <p>{product.name}</p>
            <p>{product.price}</p>
        </>
    )
}