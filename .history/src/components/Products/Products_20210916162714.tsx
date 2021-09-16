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

            <CardGroup style={{ padding: '50px' }}>
                <StyledGrid>
                    {loading
                        ? (<div>Loading...</div>)
                        : error ? (<div>Something went wrong!</div>)
                            : products.map((product, index) => {
                                return (
                                    <StyledArticle key={index}>
                                        <Card>
                                            <Card.Img variant="top" src={product.image} />
                                            <Card.Body>
                                                <Card.Title>{product.title.substring(0, 15)}</Card.Title>
                                                <Card.Text>
                                                    {product.description.substring(0, 100)}
                                                </Card.Text>
                                                <Card.Text>
                                                    <small className="text-muted">${product.price}</small>
                                                </Card.Text>
                                                <Button>Add to cart</Button>
                                            </Card.Body>
                                        </Card>
                                    </StyledArticle>
                                )
                            })}
                </StyledGrid>
            </CardGroup>
        </Wrapper>
    )
}
export default Products;