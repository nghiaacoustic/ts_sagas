import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    getPendingSelector,
    getErrorSelector,
    getProductsSelector
} from "../../store/products/selectors";
import { fetchProductsRequest } from "../../store/products/actions";

import { Wrapper, StyledArticle, StyledGrid } from './Products.styles'
import { Card, CardGroup, Button, Row } from "react-bootstrap";

const Products = () => {
    const dispatch = useDispatch();
    const loading = useSelector(getPendingSelector);
    const products = useSelector(getProductsSelector);
    const error = useSelector(getErrorSelector);

    useEffect(() => {
        dispatch(fetchProductsRequest());
    }, [])

    return (
        <Wrapper>
                <StyledGrid>
                    {loading
                        ? (<div>Loading...</div>)
                        : error ? (<div>Something went wrong!</div>)
                            : products.map((product, index) => {
                                return (
                                    <StyledArticle key={index}>
                                        <img src={product.image} alt={product.image} />
                                        <div>
                                            <h3>{product.title}</h3>
                                            <p>{product.description.substring(0, 150)}</p>
                                            <p>{product.price}</p>
                                            <button>Add to cart</button>
                                        </div>
                                    </StyledArticle>
                                )
                            })}
                </StyledGrid>
        </Wrapper>
    )
}
export default Products;