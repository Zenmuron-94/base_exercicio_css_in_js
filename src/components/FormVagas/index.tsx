import React, { useState, FormEvent } from 'react'
import { Form, PesquisarButton, Campo } from './styles'

interface FormVagasProps {
  aoPesquisar: (termo: string) => void
}

const Formulario: React.FC<FormVagasProps> = ({ aoPesquisar }) => {
  const [termo, setTermo] = useState('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo)
  }

  return (
    <Form backgroundColor="var(--cor-secundaria)" onSubmit={aoEnviarForm}>
      <Campo
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
      />
      <PesquisarButton type="submit">Pesquisar</PesquisarButton>
    </Form>
  )
}

export default Formulario
