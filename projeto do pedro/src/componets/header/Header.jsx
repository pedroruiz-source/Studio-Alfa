import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img
            className="logo-icon"
            src="..\..\ scr\assets\img\Alfa-romeu-logo.png"
            alt="logo"
          />
          <span className="logo-text">Studio Alfa</span>
        </div>

        <nav className="nav">
          <a href="#">Início</a>
          <a href="#">Serviços</a>
          <a href="#">Sobre</a>
          <a href="#">Contato</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
