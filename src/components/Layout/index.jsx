import React from "react";
import InputCep from "../InputCep";
import { ContainerCep, Title} from "./styles";
import {RiRoadMapLine} from 'react-icons/ri'

const Layout = () => (
  <ContainerCep>
    <Title>Consulte seu Cep <RiRoadMapLine/></Title>
    <InputCep />
  </ContainerCep>
);

export default Layout;
