import React from 'react';
import { Link } from 'react-router-dom';
import './assets/styles/index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function SobreEmpresa() {
  return (
    <div>
      <nav className="navbar">
        <div className="max-width">
          <div className="logo">
            <Link to="/">Celke</Link>
          </div>
          <ul className="menu" id="menu-site">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/sobre">Sobre Empresa</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
          <div className="menu-btn" id="menu-btn">
            <i className="fa-solid fa-bars" id="menu-icon"></i>
          </div>
        </div>
      </nav>

      <section className="about">
        <div className="max-width">
          <h2 className="title">Sobre Empresa</h2>
          <div className="about-content">
            <div className="column left">
              <img src="assets/img/premium_v5.jpg" alt="Sobre Empresa" />
            </div>
            <div className="column right">
              <div className="text">
                Desenvolvido para você atingir seus melhores índices de produtividade, criatividade e bem-estar.
              </div>
              <p>Mauris semper lobortis dolor sed ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec erat odio, rutrum efficitur lobortis vel, rhoncus eget nunc. Vivamus molestie turpis non interdum dignissim. Ut venenatis
                lectus malesuada, ultricies tortor et, fermentum massa. Mauris id felis faucibus, ullamcorper erat eget, gravida est.</p>
            </div>
          </div>

          <div className="about-content">
            <div className="column left">
              <img src="assets/img/premium_v5.jpg" alt="Sobre Empresa" />
            </div>
            <div className="column right">
              <div className="text">
                Desenvolvido para você atingir seus melhores índices de produtividade, criatividade e bem-estar.
              </div>
              <p>Mauris semper lobortis dolor sed ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec erat odio, rutrum efficitur lobortis vel, rhoncus eget nunc. Vivamus molestie turpis non interdum dignissim. Ut venenatis
                lectus malesuada, ultricies tortor et, fermentum massa. Mauris id felis faucibus, ullamcorper erat eget, gravida est.</p>
            </div>
          </div>

          <div className="about-content">
            <div className="column left">
              <img src="assets/img/premium_v5.jpg" alt="Sobre Empresa" />
            </div>
            <div className="column right">
              <div className="text">
                Desenvolvido para você atingir seus melhores índices de produtividade, criatividade e bem-estar.
              </div>
              <p>Mauris semper lobortis dolor sed ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec erat odio, rutrum efficitur lobortis vel, rhoncus eget nunc. Vivamus molestie turpis non interdum dignissim. Ut venenatis
                lectus malesuada, ultricies tortor et, fermentum massa. Mauris id felis faucibus, ullamcorper erat eget, gravida est.</p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <span>Created By <a href="https://celke.com.br">Celke</a></span>
      </footer>
    </div>
  );
}

export default SobreEmpresa;
