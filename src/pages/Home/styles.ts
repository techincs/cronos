import styled from 'styled-components';

import png_post from '../../img/post.png';

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
   aling-items: center;
`;


export const Bunner = styled.div `
   box-shadow: 0px 0px 5px #CCC;
   border-radius: 10px;
   margin: auto;
   height: 200px;
   max-width: 1000px;
   margin-top: 20px;
   aling-items: center;
   background-image: url(${png_post});
   background-position: center;
   background-size: contain;
   background-repeat: no-repeat;
`;
export const Titulo = styled.div`
   background-color: darkblue;
   box-shadow: 0px 0px 5px #CCC;
   border-radius: 10px;
   max-width: 1000px;
   margin: auto;
   height: 30px;
   text-align: center;
   aling-items: center;
   margin-top: 20px;
`; 
export const TituloText= styled.h4`
   margin: 0;
   padding: 0;
   color: #FFF;
   padding: 5px;
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
    width: 100%;
    height: 30px;
    padding: 0 5px;
    margin: 5px;
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