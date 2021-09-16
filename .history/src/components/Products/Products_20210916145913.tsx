import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    getPendingSelector,
    getErrorSelector,
    getProductsSelector
} from "../../store/products/selectors";
import { fetchProductsRequest } from "../../store/products/actions";

const Products = () => {
    const dispatch = useDispatch();
    const loading = useSelector(getPendingSelector);
    const products = useSelector(getProductsSelector);
    const error = useSelector(getErrorSelector);

    useEffect(() => {
        dispatch(fetchProductsRequest());
    }, [])

    return (
        <div>
            {loading
                ? (<div>Loading...</div>)
                : error ? (<div>Something went wrong!</div>)
                    :products.map((product,index)=>{
                        return (
                            <div key={index}>
                                <img src={product.image} alt={product.image}/>
                                <div>
                                    <p>{product.title}</p>
                                    <p>{product.description}</p>
                                    <p>{product.price}</p>
                                </div>
                            </div>
                        )
                    })}
        </div>
    )
}
export default Products;