import styled from "styled-components";
import { Link } from "react-router-dom";

export const TableLine = styled.tr``;

export const TablesColumn = styled.td`
   padding: 10px 0;
`;

export const TRLink = styled(Link)`
   cursor: pointer;
   text-decoration: none;
   color: black;

   &:focus, &:hover, &visited, &:link, &:active {
      text-decoration: none;
   }
`;

export const Btn = styled.button<{ background: string }> `
  background: ${props => props.background};
  cursor: pointer;
  color: white;
  font-size: 0.8rem;
  border-style: outset;
  border-color: #0066A2;
  height: 20px;
  width: 60px;
  text-shadown: none;
`;