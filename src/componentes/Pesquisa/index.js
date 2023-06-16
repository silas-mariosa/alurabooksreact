import Input from "../Input";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import { getLivros } from "servicos/livros";
import { postFavoritos } from "servicos/favoritos";

const PesquisaContainer = styled.section`
  background-image: linear-gradient(90deg, #002f52 35%, #326589);
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 370px;
  width: 100%;
`;
const Titulo = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;
const SubTitulo = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;
const Resultado = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin-bottom: 20px;
   cursor: pointer;
   p {
       width: 200px;
   }
   img {
       width: 100px;
   }
   &:hover {
       border: 1px solid white;
   }
`

export default function Pesquisa() {
  const [pesquisaLivro, setPesquisaLivro] = useState([]);
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    fetchLivros()
  }, [])

  async function fetchLivros(){
    const livrosAPI = await getLivros()
    setLivros(livrosAPI)
  }

  async function insereFavorito(id) {
    await postFavoritos(id)
    alert(`O livro de id: ${id} foi inserido com sucesso`)
}

  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <SubTitulo>Encontre seu livro em nossa estante</SubTitulo>
      <Input 
        placeholder="Escreva sua próxima leitura" 
        onBlur={(evento) => {
          const textoDigitado = evento.target.value
          const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado))
          setPesquisaLivro(resultadoPesquisa)
        }}
      />
      {pesquisaLivro.map(livro => (
        <Resultado onClick={() => insereFavorito(livro.id)}>
        <img src={livro.src}/>
        <p>{livro.nome}</p>
    </Resultado>
      ))}
    </PesquisaContainer>
  );
}
