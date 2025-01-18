import '../css/App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <div className="container-fluid bg-white sticky-top shadow-sm">
      <header className="d-flex align-items-center justify-content-between py-3 px-4">
        <a href="/" className="text-dark text-decoration-none d-flex align-items-center">
          <span className="fs-2 fw-bold">KIBATI</span>
          <span className="text-secondary fs-5 ms-2"><i>Dynamics</i></span>
        </a>
        <nav>
          <ul className="nav d-flex justify-content-center">
            <li className="nav-item">
              <a href="/" className="nav-link text-dark">
                <div className="icon-container">
                  <i className="fa-solid fa-house icon"></i>
                  <span className="nav-text">Home</span>
                </div>
              </a>
            </li>
            <li className="nav-item">
              <a href="/store" className="nav-link text-dark">
                <div className="icon-container">
                  <i className="fa-solid fa-inbox icon"></i>
                  <span className="nav-text">Products</span>
                </div>
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link text-dark">
                <div className="icon-container">
                  <i className="fa-solid fa-address-card icon"></i>
                  <span className="nav-text">Contact</span>
                </div>
              </a>
            </li>
            <li className="nav-item">
              <a href="/blog" className="nav-link text-dark">
                <div className="icon-container">
                  <i className="fa-solid fa-book icon"></i>
                  <span className="nav-text">Blog</span>
                </div>
              </a>
            </li>
            <li className="nav-item">
              <a href="/cart" className="nav-link text-dark">
                <div className="icon-container">
                  <i className="fa-solid fa-cart-shopping icon"></i>
                  <span className="nav-text">Cart</span>
                </div>
              </a>
            </li>
          </ul>
        </nav>

      </header>
    </div>
  );
}

export default Header;
