import React from 'react'
import { Container } from './styles'
import { FaMapMarkerAlt } from "react-icons/fa";

const Card = ({ cep, logradouro, complemento, bairro, localidade, uf }) => {
    return (
        <Container>
            <h2>
                CEP: {cep} <FaMapMarkerAlt size={25} color="#940000" />
            </h2>
            <span>{logradouro}</span>
            <span>Complemento: {complemento}</span>
            <span>Bairro: {bairro}</span>
            <span>
                {localidade} - {uf}
            </span>
        </Container>
    )
}

export default Card