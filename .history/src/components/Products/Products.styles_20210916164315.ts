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
    padding: 20px;
`
export const StyledArticle = styled.article`
    border-radius: 20px;
    overflow: hidden;
    background-color: aliceblue;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    width: calc(calc(100% / var(--columns)) - var(--spacing));
    margin-left: var(--spacing);
    display: flex;
    flex-direction: column;
    
    &:hover{
        transform:translateY(5px);
        box-shadow:2px 2px 26px 0px rgba(0,0,0,0.3);
    }

    img{
    height: 200px;
    width: 100%;
    object-fit: cover;
    flex-shrink: 0;
    }
    h3{
        font-weight: 500;
    margin-bottom: 25px;
    /* word-break: break-all; */
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
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