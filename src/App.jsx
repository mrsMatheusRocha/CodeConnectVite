import { useEffect, useState } from "react";
import "./App.css";
import BarraPesquisa from "./components/BarraPesquisa";
import Card from "./components/Card";
import Filtro from "./components/Filtro";
import Sidebar from "./components/Sidebar";

export default function App() {
  const [dados, setDados] = useState([]);
  useEffect(() => {
    fetch("https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes")
      .then(res => res.json())
      .then(dados => setDados(dados))
  }, [])

  return (
    <div className="container"> 
      <Sidebar />
      <div>
        <BarraPesquisa />
        <Filtro />
        <ul className="lista-cards">
          {dados ? dados.map((item, index) => (
            <li key={index}>
              <Card 
                id={item.id}
                imagemUrl={item.imagem_capa}
                titulo={item.titulo}
                resumo={item.resumo}
                linhasDeCodigo={item.linhas_de_codigo}
                compartilhamentos={item.compartilhamentos}
                comentarios={item.comentarios}
                usuario={item.usuario}
              />
            </li>
          )): null}
        </ul>
      </div>
    </div>
  );
}
