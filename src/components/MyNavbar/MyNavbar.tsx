import React from 'react';
import styles from './MyNavbar.module.css';
import { Link} from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav} from 'react-bootstrap';

export function MyNavbar() {
  return (
    <div className={styles.Navbar}>
      <BootstrapNavbar bg="dark" variant="dark" expand="lg">
          <BootstrapNavbar.Brand href="/">
            <img
              src="./images/logo-psychowell.png"
              alt="logo"
              className={styles.NavbarImg}
            />
          </BootstrapNavbar.Brand>
          <BootstrapNavbar.Toggle aria-controls="navbar-nav" />
          <BootstrapNavbar.Collapse id="navbar-nav">
            <Nav className="mx-auto">
              <Link className="nav-link" to="/">Inicio</Link>
              <Link className="nav-link" to="/sobre-nosotros">Sobre Nosotros</Link>
              <Link className="nav-link" to="/equipo">Equipo</Link>
              <Link className="nav-link" to="/contacto">Contacto</Link>
            </Nav>
          </BootstrapNavbar.Collapse>
      </BootstrapNavbar>
    </div>
  );
}
