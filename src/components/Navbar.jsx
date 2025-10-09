import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <Link to="/" className="logo">
            <h2>LOUD4</h2>
          </Link>
          <ul className="nav-links">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/events">Eventos</Link></li>
            <li><Link to="/members">Integrantes</Link></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
