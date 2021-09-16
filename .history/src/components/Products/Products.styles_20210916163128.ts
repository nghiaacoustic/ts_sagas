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
export const StyledArticle = styled.article`
    background: #eee5e9;
    border:none;
    box-shadow:2px 2px 6px 0px rgba(0,0,0,0.3);
    border-radius:20px;
    text-align: center;
    width:300px;
    max-width: 500px;
    transition:transform .3s;
    
    &:hover{
        transform:translateY(5px);
        box-shadow:2px 2px 26px 0px rgba(0,0,0,0.3);
    }

    img{
        width:100%;
        border-top-left-radius:20px;
        border-top-right-radius:20px;
    }
`