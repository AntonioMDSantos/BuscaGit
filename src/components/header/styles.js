import styled from 'styled-components';

export const HeaderSection = styled.header`
    width: 400px;
    height: 130px;
    background: rgba(81,57,142, .8);
    display: flex;
    flex-direction: column;
    padding: 0;
    border-top: 5px solid #36BFB3;
    border-right: 5px solid #474f9a;
    border-left: 5px solid #474f9a;

    &:hover{
        background: rgb(54, 191, 179, .8); 
        transition: 2s;
    }

    @media (max-width: 430px) {
        width: 300px;
    } 
`

export const HeaderTitle = styled.h1`
    margin: 0;
    padding: 15px 0;
    color: #E5E5E5;
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    width: 100%;
`

export const HeaderInputContainer = styled.div`
    padding: 10px 16px;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
        width: 30px;
        height: 30px;
        border-radius: 15px;
        border: none;
        background: #36BFB3;
        margin-left: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #FFF;
        transition: ease .3s;

        &:hover {
            transform: scale(1.05);
            transition: ease .3s;
            cursor: pointer;
            color: #36BFB3;
            background: rgb(81 57 142 / 80%);
        }
    }
`

export const HeaderInput = styled.input`
    width: 200px;
    height: 30px;
    border-radius: 10px;
    border: none;
    padding: 0 16px;
    color: #444;
    transition: .4s ease;

    &:focus {
        outline: none;
        width: 220px;
        transition: .4s ease;
    }
`

export const HeaderSearchButton = styled.button`
    width: 30px;
    height: 30px;
    border-radius: 15px;
    border: none;
    background: #36BFB3;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFF;
    transition: ease .3s;

    &:hover {
        transform: scale(1.05);
        transition: ease .3s;
        cursor: pointer;
    }
`