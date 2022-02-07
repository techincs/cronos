import styled from 'styled-components';

export const Container = styled.div `
   background-color: #FFF;
   margin:0;
   padding:0;
`;

export const Body = styled.div `
   background-color: #FFF;
   box-shadow: 0px 0px 5px #CCC;
   border-radius: 10px;
   margin: auto;
   height: auto;
   max-width: 1000px;
   margin-top: 20px;
   aling-items: center;
`;
export const Header = styled.div`
   background-color: darkblue;
   box-shadow: 0px 0px 5px #CCC;
   border-radius: 10px;
   max-width: 1000px;
   margin: auto;
   height: 100px;
   text-align: center;
   aling-items: center;
`; 
export const HeaderText= styled.h1`
   margin: 0;
   padding: 0;
   color: #FFF;
   padding: 30px;
`;

export const BodyButtom = styled.div`
    background-color: #FFF;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    max-width: 1000px;
    margin: auto;
    height: auto;
    margin-top: 20px;
    display: flex;
    align-items: center;
`;

export const Button = styled.button`
    width:20%;
    height: 30px;
    padding: 0 5px;
    margin: auto;
    margin-top: 5px;
    margin-bottom: 5px;
    border: 1px solid lightblue;
    border-radius: 5px;
    background-color: lightblue;
    color: black;
    cursor: pointer;
    &:hover {
        background-color: blue;
        color: white;
    }
`;