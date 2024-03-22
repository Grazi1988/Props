import React from "react"
import ComponenteComProps from "./ComponenteComProps"

import Grazi from "./assets/grazi.png"
import Dé from "./assets/debora.png"
import Dani from "./assets/dani.png"
import Carol from "./assets/carol.png"


function App() {
  return (
    <>
      <ComponenteComProps
        nome="Graziele"
        idade="35 anos"
        email="grazi_510@hotmail.com"
        imagem={Grazi}>
        <h2>Amo pizza com coca-cola</h2>
      </ComponenteComProps>

      <ComponenteComProps
        nome="Débora"
        idade="21 anos"
        email="debora@email.com"
        imagem={Dé}>
        <h2>Estou cansada</h2>
      </ComponenteComProps >

      <ComponenteComProps
        nome="Danielle"
        idade="17anos"
        email="dani@email.com"
        imagem={Dani} />
      

      <ComponenteComProps
        nome="Carol"
        idade="20 anos"
        email="carol@email.com"
        imagem={Carol} />
      

    </>
  )
}
export default App