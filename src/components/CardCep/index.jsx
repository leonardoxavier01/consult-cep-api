import React from "react";
const CardCep = () => {
  return (
    <div>
      { Object.keys(cep).length > 1 &&  (
        <main className="main">
          <h2>CEP: {cep.cep} Ola</h2>
          <span>{cep.logradouro} test</span>
          <span>Complemento: {cep.complemento} </span>
          <span>Bairro: {cep.bairro} </span>
          <span>
            {cep.localidade} - {cep.uf}
          </span>
        </main>
      )}
    </div>
  );
};

export default CardCep;
