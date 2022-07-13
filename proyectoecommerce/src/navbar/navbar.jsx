import CartWidget from "./CartWidget/CartWidget"

const Navbar = () => {


  return (

    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link" href="#">Computadoras</a>
          <a className="nav-link" href="#">Telefonos</a>
          <a className="nav-link" href="#">Audifonos</a>
          <a className="nav-link" href="#">Relojes</a>
        </div>
       
      </div>
      <CartWidget />

    </div>
  </nav>
  )
}

export default Navbar