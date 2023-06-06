import "./App.css";
import Logo from "./componentes/Logo";
import perfil from "./imagens/perfil.svg";
import sacola from "./imagens/sacola.svg";

const textoOpcoes = ['CATEGORIAS', 'MINHA ESTANTE', 'FAVORITOS'];
const icones = [perfil, sacola]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo/>
        <ul className="opcoes">
          {textoOpcoes.map(opcao => (
             <li className='opcao'><p>{opcao}</p></li>
          ))}
        </ul>
          <ul className="icones">
            {icones.map((icone)=> (
              <li className="icone"><img src={icone}/></li>
            ))}
          </ul>
      </header>
    </div>
  );
}

export default App;
