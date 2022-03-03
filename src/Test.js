import { useState } from 'react';
import { FiSearch } from 'react-icons/fi'
import './styles.css'
import api from './services/api'
import InputCep from './components/Input';


const Test = () => {


  const [input, setInput] = useState('')
  const [cep, setCep] = useState({})

  async function handleSearch() {

    if (input === '') {
      alert("Preencha o Cep!")
      return;
    }
    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data)
      console.log(response.data)
      setInput("")
    } catch {
      alert("Ops, erro ao buscar!");
      setInput("")
    }


  }

  return (
    <div className="container">
      <h1 className="title">Consultar CEP</h1>

      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite seu cep"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color='#000' />
        </button>
      </div>

      {Object.keys(cep).length > 1 && (
        <main className='main'>
          <h2>CEP: {cep.cep}</h2>
          <span>{cep.logradouro}</span>
          <span>Complemento: {cep.complemento}</span>
          <span>Bairro: {cep.bairro}</span>
          <span>{cep.localidade} - {cep.uf}</span>
        </main>
      )}
    </div>
  );
}

export default Test;