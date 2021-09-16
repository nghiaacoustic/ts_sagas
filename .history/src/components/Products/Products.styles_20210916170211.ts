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
    padding: 50px;

    .card-content{
        flex:1;
        display: flex;
        flex-direction: column;
    }
    .info{
        display: flex;
        flex-direction: column;
        flex:1;
        text-align:center;
        padding: 5px 15px;
        line-height: 5px;
    }

    @media screen and (max-width: 1023px) {
        --columns: 2;
}

    @media screen and (max-width: 767px) {
        --spacing: 15px;
        --columns: 1;
}
`
export const StyledArticle = styled.article`
    border-radius: 20px;
    overflow: hidden;
    background-color: #fff;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    width: calc(calc(100% / var(--columns)) - var(--spacing));
    margin-left: var(--spacing);
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
    &:hover{
        transform:translateY(5px);
        box-shadow:2px 2px 26px 0px rgba(0,0,0,0.3);
    }

    img{
    height: 200px;
    width: 100%;
    object-fit: contain;
    flex-shrink: 0;
    border-bottom:1px solid rgba(0,0,0,0.3);
    }

    h3{
    font-weight: 500;
    margin-bottom: 25px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-word;
    }
    p {
        padding: 0 20px 20px;
        margin-top:auto;
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
        margin-top:auto;
        flex-shrink: 0;
    }
     @media(max-width:500px){
           text-align: center;
        }
`