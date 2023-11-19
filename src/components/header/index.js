import React, { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header__container">
      <div className="header__content">
        <a href="/">
          <img
            className="header__logo"
            src="/images/logo.jpg"
            alt="Logo onda animal"
          />
        </a>
        <nav className="header__horizontal--menu">
          <ul>
            <li>Home</li>
            <li>Quem Somos</li>
            <li>Clínica Veterinária – CEA</li>
            <li>
              Adote
              <ul className="header__submenu">
                <li>Guarda Responsável</li>
                <li>Adoção</li>
              </ul>
            </li>
            <li>
              Como Ajudar
              <ul className="header__submenu">
                <li>Voluntariado</li>
              </ul>
            </li>
            <li>Notícias</li>
            <li>
              Dicas
              <ul className="header__submenu">
                <li>Dicas do Veterinário</li>
                <li>Comportamento Animal</li>
              </ul>
            </li>
            <li>Contatos</li>
          </ul>
        </nav>
        <img
          className={`${menuOpen ? 'display--none' : 'header__menu'}`}
          src="/icons/menu.png"
          alt="Menu"
          onClick={toggleMenu}
        />
        <img
          className={`${menuOpen ? 'header__menu' : 'display--none'}`}
          src="/icons/x.png"
          alt="Menu"
          onClick={toggleMenu}
        />
      </div>
      <nav
        className={`header__vertical--menu ${
          menuOpen ? 'header__menu--open' : ''
        }`}
      >
        <ul>
          <li>Home</li>
          <li>Quem Somos</li>
          <li>Clínica Veterinária – CEA</li>
          <li>
            Adote
            <ul className="header__submenu">
              <li>Guarda Responsável</li>
              <li>Adoção</li>
            </ul>
          </li>
          <li>
            Como Ajudar
            <ul className="header__submenu">
              <li>Voluntariado</li>
            </ul>
          </li>
          <li>Notícias</li>
          <li>
            Dicas
            <ul className="header__submenu">
              <li>Dicas do Veterinário</li>
              <li>Comportamento Animal</li>
            </ul>
          </li>
          <li>Contatos</li>
        </ul>
        <div className="header__vertical--images">
          <a
            href="https://www.instagram.com/ondaanimal_adocoes/"
            target="_blank"
          >
            <img
              className="header__vertical--image"
              src="/icons/instagram.png"
              alt="Instagram"
            />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100081495490168"
            target="_blank"
          >
            <img
              className="header__vertical--image"
              src="/icons/facebook.png"
              alt="Facebook"
            />
          </a>
        </div>
      </nav>
    </header>
  );
}
