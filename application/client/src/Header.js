import './App.css';

function Header() {
  return (
    <div className="App">
      <header className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a href="/" className="navbar-brand">
            Kibati Auto Parts Store
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="/" className="nav-link">Home</a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">Shop</a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">About</a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
