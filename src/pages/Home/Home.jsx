import React, { useState } from 'react'
import api from "../../services/api";
import Title from '../../components/Title'
import { Container } from './styles'
import Input from '../../components/Input';
import Card from '../../components/Card';

const App = () => {
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
    <Container>
      <Title />
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onClick={handleSearch}
      />
      {Object.keys(cep).length > 1 && (
        <Card
          cep={cep.cep}
          logradouro={cep.logradouro}
          complemento={cep.complemento}
          bairro={cep.bairro}
          localidade={cep.localidade}
          uf={cep.uf}
        />
      )}

    </Container>
  )
}

export default App
