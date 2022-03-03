import React from "react";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import api from "../../services/api";
import { ContainerInput, ButtonSearch } from "./styles";

const InputCep = () => {
  const [input, setInput] = useState("");
  const [cep, setCep] = useState({});
  async function handleSearch() {
    if (input === "") {
      alert("Preencha o Cep!");
      return;
    }
    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data);
      console.log(response.data);
      setInput("");
    } catch {
      alert("Ops, erro ao buscar!");
      setInput("");
    }
  }
  return (
    <>
      <ContainerInput>
        <input
          type="text"
          placeholder="Digite seu cep"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
         <ButtonSearch className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#000" />
        </ButtonSearch> 
      </ContainerInput>
      
      {Object.keys(cep).length > 1 && (
        <main className="main">
          <h2>CEP: {cep.cep}</h2>
          <span>{cep.logradouro}</span>
          <span>Complemento: {cep.complemento}</span>
          <span>Bairro: {cep.bairro}</span>
          <span>
            {cep.localidade} - {cep.uf}
          </span>
        </main>
      )}
    </>
  );
};
export default InputCep;