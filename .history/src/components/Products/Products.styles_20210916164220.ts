import styled from "styled-components";
import { Col } from "react-bootstrap";

export const Wrapper = styled.div`
`
export const StyledGrid = styled.div`
    --spacing: 30px;
    --columns: 4;
    display: flex;
    flex-wrap: wrap;
    margin-left: calc(-1*var(--spacing));
    padding: 20px
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
    h3{
        text-transform: uppercase;
    }
    p {
        padding: 0 20px 20px;
    }
    button{
        border-radius: 20px;
        border: none;
        color:#fff;
        padding:10px;
        width:100%;
        font-weight: 600;
        text-transform: uppercase;
        cursor: pointer;
    }
     @media(max-width:500px){
           text-align: center;
        }
`