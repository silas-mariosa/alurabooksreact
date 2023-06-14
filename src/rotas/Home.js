import "./App.css";
import Pesquisa from "componentes/Pesquisa";
import UltimosLancamentos from "componentes/UltimosLancamentos";
import CardRecomenda from "componentes/CardRecomenda";
import img from "../imagens/livro2.png"

function Home() {
  return (
    <div className="App">      
      <Pesquisa />
      <UltimosLancamentos/>
      <CardRecomenda
        titulo={"texte"}
        subtitulo={"textoSub"}
        descricao={"textoDescrição"}
        img={img}
      />
    </div>
  );
}

export default Home;
