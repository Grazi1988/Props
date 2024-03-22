import React from "react"
import styled from "styled-components"

const Card = styled.div`
    border: solid gainsboro;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: black;
    background-image: linear-gradient(to right, #ff0062,orange,yellow,green,blue,indigo,violet);
`

const Img = styled.img`
    width: 10%;
`

function ComponenteComProps({ nome, idade, email, imagem, children }) {
    return (
        <Card>
            <h2> Cadastro:  </h2>
            <p> Nome: {nome} </p>
            <p> Idade: {idade} </p>
            <p> Email: {email} </p>
            <Img src={imagem} alt="" />
            {children}
        </Card>
    )
}

export default ComponenteComProps