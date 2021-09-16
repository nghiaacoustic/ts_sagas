import styled from "styled-components";
import { Col } from "react-bootstrap";

export const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;
`
export const StyledCol = styled(Col)`
    display: flex;
    align-items:center;
    justify-content:center;
    flex-direction: row;

    img{
        width:200px;
        height:300px;
        object-fit: cover;
    }
`