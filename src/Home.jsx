import React from 'react';
import { Link } from 'react-router-dom';
import './assets/styles/index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Home() {
  return (
    <div>
      <nav className="navbar">
        <div className="max-width">
          <div className="logo">
            <Link to="/">LCC</Link>
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

      <section className="top">
        <div className="max-width">
          <div className="top-content">
            <div className="text-1">Temos a solução</div>
            <div className="text-2">que a sua empresa precisa</div>
            <div className="text-3">Podemos ajudar a sua empresa!</div>
            <Link to="/contato">Entre em Contato</Link>
          </div>
        </div>
      </section>

      <section className="services">
        <div className="max-width">
          <h2 className="title">Serviços</h2>
          <div className="serv-content">
            <div className="card">
              <div className="box">
                <i className="fa-solid fa-wifi"></i>
                <div className="text">Wifi veloz</div>
                <p>Sed et dui in ipsum sollicitudin efficitur quis sed elit volutpat. </p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <i className="fa-solid fa-rocket"></i>
                <div className="text">Espaço inspirador</div>
                <p>Sed et dui in ipsum sollicitudin efficitur quis sed elit volutpat. </p>
              </div>
            </div>
            <div className="card">
              <div className="box">
                <i className="fa-solid fa-handshake"></i>
                <div className="text">Reuniões</div>
                <p>Sed et dui in ipsum sollicitudin efficitur quis sed elit volutpat. </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="premium">
        <div className="max-width">
          <h2 className="title">Serviço Premium</h2>
          <div className="premium-content">
            <div className="column left">
              <img src="assets/img/premium_v5.jpg" alt="Serviço premium" />
            </div>
            <div className="column right">
              <div className="text">
                Desenvolvido para você atingir seus melhores índices de produtividade, criatividade e bem-estar.
              </div>
              <p>
                Ut tempus dui in fringilla consequat. Donec accumsan feugiat venenatis. Vestibulum blandit lectus nec lacus tincidunt tempus. Praesent porta erat non ligula egestas, eget imperdiet justo egestas. Pellentesque cursus risus nec leo tincidunt fringilla.
                Suspendisse faucibus aliquam vestibulum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris volutpat arcu eu mi volutpat fermentum. Aenean vel dignissim orci. Vestibulum mollis
                elit vel tellus viverra dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus a mattis sem. Cras aliquam fermentum viverra.
              </p>
              <Link to="/contato">Contato</Link>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <span>Created By <a href="https://LCC.com.br">Laís</a></span>
      </footer>
    </div>
  );
}

export default Home;
