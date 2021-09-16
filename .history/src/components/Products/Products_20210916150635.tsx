import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    getPendingSelector,
    getErrorSelector,
    getProductsSelector
} from "../../store/products/selectors";
import { fetchProductsRequest } from "../../store/products/actions";

import { Wrapper,StyledCol } from './Products.styles'
import { Col, Row } from "react-bootstrap";

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
            <Row>
                {loading
                    ? (<div>Loading...</div>)
                    : error ? (<div>Something went wrong!</div>)
                        : products.map((product, index) => {
                            return (
                                <StyledCol xs={12} sm={3} md={4} key={index}>
                                    <img src={product.image} alt={product.image} />
                                    <div>
                                        <p>{product.title}</p>
                                        <p>{product.description}</p>
                                        <p>${product.price}</p>
                                    </div>
                                </StyledCol>
                            )
                        })}
            </Row>
        </Wrapper>
    )
}
export default Products;