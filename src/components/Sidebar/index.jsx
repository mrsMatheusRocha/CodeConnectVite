import Logo from "./assets/Logo.svg";
import Feed from "./assets/feed.svg";
import Perfil from "./assets/account_circle.svg";
import Info from "./assets/info.svg";
import Logout from "./assets/logout.svg";

import "./style.css";

export default function Sidebar() {
  return (
    <aside>
      <img src={Logo} alt="Logo da CodeConnect" />
      <nav>
        <ul className="lista-sidebar">
          <li>
            <a href="#" className="item__link-publicacao">Publicar</a>
          </li>
          <li>
            <a href="#" className="item__link item__link--ativo">
              <img src={Feed} alt="Ícone do feed" />
              <span>Feed</span>
            </a>
          </li>
          <li>
            <a href="#" className="item__link">
              <img src={Perfil} alt="Ícone do perfil" />
              <span>Perfil</span>
            </a>
          </li>
          <li>
            <a href="#" className="item__link">
              <img src={Info} alt="Ícone de informações" />
              <span>Sobre nós</span>
            </a>
          </li>
          <li>
            <a href="#" className="item__link">
              <img src={Logout} alt="Ícone de sair" />
              <span>Sair</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
