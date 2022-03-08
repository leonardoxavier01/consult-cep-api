import React from "react";
import { FiSearch } from "react-icons/fi";
import {ButtonSearch} from "./styles"

const Button = (props) => (
  <ButtonSearch onClick={props.function}>
    <FiSearch size={25} color="#000" />
  </ButtonSearch>
);

export default Button;
