import styled from "styled-components";
import { Col } from "react-bootstrap";

export const Wrapper = styled.div`
    .row{
        display:grid;
        margin:80px;
        grid-template-columns: repeat(3,1fr);
        grid-gap:30px;
        align-items:center;
    }
`
export const StyledCol = styled(Col)`
    img{
        width:100%;
        max-height:200px;
        height: 190px;
        object-fit: contain;
    } 
    .card{
         align-self: normal;
    }
`
export const StyledGrid = styled.div`
        display:grid;
        margin:80px;
        grid-template-columns: repeat(3,1fr);
        grid-gap:30px;
        align-items:center;
`