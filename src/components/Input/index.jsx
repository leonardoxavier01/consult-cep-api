import React from 'react'
import Button from '../Button/index'
import { ContainerInput } from './styles'

const Input = (props) => {
    return (
        <ContainerInput>
            <input
                type="text"
                placeholder="Digite seu cep"
                value={props.input}
                onChange={props.onChange}
            />
            <Button function={props.onClick} />
        </ContainerInput>
    )
}

export default Input