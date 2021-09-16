import styled from "styled-components";
import { Col } from "react-bootstrap";

export const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;
`
export const StyledCol = styled(Col)`
    align-self: normal;
    img{
        width:100%;
        max-height:200px;
        height: 190px;
        object-fit: contain;
    } 
`