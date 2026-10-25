


import "../Style/Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">Shop<span>Zone</span></div>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search products..."
        />
        <button>Search</button>
      </div>

      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>

      <div className="header-icons">
        <a href="/wishlist">♡ Wishlist</a>
        <a href="/cart">🛒 Cart</a>
        <a href="/login">Login</a>
      </div>
    </header>
  );
}

export default Header;
