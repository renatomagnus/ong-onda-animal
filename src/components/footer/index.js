const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer__container">
        <a href="#" className="footer__content--right">
          <img src="/images/logo.jpg" alt="Logo" />
        </a>
        <div className="footer__content--left">
          <a
            href="https://www.instagram.com/ondaanimal_adocoes/"
            target="_blank"
          >
            <img
              className="header__vertical--image"
              src="/icons/instagram-white.png"
              alt="Instagram"
            />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100081495490168"
            target="_blank"
          >
            <img
              className="header__vertical--image"
              src="/icons/facebook-white.png"
              alt="Facebook"
            />
          </a>
        </div>
      </div>
      <div className="footer__rights">
        <p>@2023 - Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
