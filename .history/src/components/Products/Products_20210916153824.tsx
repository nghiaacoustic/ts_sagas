import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    getPendingSelector,
    getErrorSelector,
    getProductsSelector
} from "../../store/products/selectors";
import { fetchProductsRequest } from "../../store/products/actions";

import { Wrapper, StyledCol } from './Products.styles'
import { Card, CardGroup, Col, Row } from "react-bootstrap";

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

            <CardGroup style={{ padding: '50px' }}>
                <Row>
                    {loading
                        ? (<div>Loading...</div>)
                        : error ? (<div>Something went wrong!</div>)
                            : products.map((product, index) => {
                                return (
                                    <StyledCol xs={12} sm={3} key={index}>
                                        <Card>
                                            <Card.Img variant="top" src={product.image} />
                                            <Card.Body>
                                                <Card.Title>{product.title.substring(0,15)}</Card.Title>
                                                <Card.Text>
                                                    {product.description.substring(0, 100)}
                                                </Card.Text>
                                            </Card.Body>
                                            <Card.Footer>
                                                <small className="text-muted">${product.price}</small>
                                            </Card.Footer>
                                        </Card>
                                    </StyledCol>
                                )
                            })}
                </Row>
            </CardGroup>
        </Wrapper>
    )
}
export default Products;