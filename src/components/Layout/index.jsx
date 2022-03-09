import React from "react";
import InputCep from "../InputCep";
import { ContainerCep, Title} from "./styles";

const Layout = () => (
  <ContainerCep>
    <Title>Consulte seu Cep</Title>
    <InputCep />
  </ContainerCep>
);

export default Layout;
