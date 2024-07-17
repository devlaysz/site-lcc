import React from 'react';
import { Link } from 'react-router-dom';
import './assets/styles/index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Contato() {
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

      <section className="contact">
        <div className="max-width">
          <h2 className="title">Contato</h2>
          <div className="contact-content">
            <div className="column left">
              <p>Mauris volutpat arcu eu mi volutpat fermentum. Aenean vel dignissim orci. Vestibulum mollis elit vel tellus viverra dictum.</p>
              <div className="icons">
                <div className="row">
                  <i className="fa-solid fa-user"></i>
                  <div className="info">
                    <div className="head">Empresa</div>
                    <div className="sub-title">Celke</div>
                  </div>
                </div>
                <div className="row">
                  <i className="fa-solid fa-location-dot"></i>
                  <div className="info">
                    <div className="head">Enderço</div>
                    <div className="sub-title">Avenida Winston Churchill</div>
                  </div>
                </div>
                <div className="row">
                  <i className="fa-solid fa-envelope"></i>
                  <div className="info">
                    <div className="head">E-mail</div>
                    <div className="sub-title">cesar@celke.com.br</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="column right">
              <div className="text">Mensagem de Contato</div>
              <form>
                <div className="fields">
                  <div className="field name">
                    <input type="text" placeholder="Digite o nome" required />
                  </div>
                  <div className="field email">
                    <input type="email" placeholder="Digite o e-mail" required />
                  </div>
                </div>
                <div className="field">
                  <input type="text" placeholder="Digite o assunto" required />
                </div>
                <div className="field textarea">
                  <textarea cols="30" rows="10" placeholder="Digite o conteúdo" required></textarea>
                </div>
                <div className="button-area">
                  <button type="submit">Enviar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <span>Created By <a href="https://celke.com.br">Laís</a></span>
      </footer>
    </div>
  );
}

export default Contato;
