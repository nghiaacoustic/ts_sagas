import styled from "styled-components";
import { Col } from "react-bootstrap";

export const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;
`
export const StyledCol = styled(Col)`
    img{
        width:110%;
        max-height:200px;
        object-fit: contain;
    } 
`