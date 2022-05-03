import React from 'react'
import Card from '../Card'

const DataCep = ({ datas }) => (
    <div>
        {datas.map(data => (
            <Card
                cep={data.cep}
                logradouro={data.logradouro}
                complemento={data.complemento}
                bairro={data.bairro}
                localidade={data.localidade}
                uf={data.uf}
            />
        ))}
    </div>
)


export default DataCep