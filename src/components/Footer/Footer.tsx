import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <div className={styles.Footer}>
      <footer className="container-fluid w-100 px-0">
        <div className="row mx-0">

          <div className="col-lg-3 col-md-12 d-none d-md-block d-flex justify-content-center align-items-center">
            <img src="./images/logo-psychowell.png" alt="Logo Psicologos" className={styles.logo} />
          </div>
          <div className="col-lg-3 col-md-12 d-none d-md-block">
            <div className={styles.contactInfo}>
              <h3>Contacta con nosotros</h3>
              <div className={`${styles.divider} w-100`}></div>
              <p><strong>Correo electrónico:</strong> contacto@psicologos.com</p>
              <p><strong>Teléfono:</strong> +34 123 456 789</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-12 d-none d-md-block" >
            <div className="social-media">
              <h3>Síguenos</h3>
              <div className={`${styles.divider} w-100`}></div>
              <ul style={{ listStyleType: "none" }}>
                <li><a href="https://facebook.com/psicologos" className={styles["footer-link"]}>
                  <i className="fab fa-facebook-square"></i>
                </a></li>
                <li><a href="https://instagram.com/psicologos" className={styles["footer-link"]}><i className="fab fa-instagram-square"></i></a></li>
                <li><a href="https://x.com/company/psicologos" className={styles["footer-link"]}><i className="fab fa-twitter-square"></i></a></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-12 d-none d-md-block">
            <div className="legal">
              <h3>Servicios</h3>
              <div className={`${styles.divider} w-100`}></div>
              <ul style={{ listStyleType: "none" }}>
                <li><Link to={"/servicio-1"} className={styles["footer-link"]}>Servicio 1</Link></li>
                <li><Link to={"/servicio-2"} className={styles["footer-link"]}>Servicio 2</Link></li>
                <li><Link to={"/servicio-3"} className={styles["footer-link"]}>Servicio 3</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className={`${styles.dividerTextosLegales} col-lg-12 d-none d-md-block`} style={{ marginLeft: "110px", width: "94%" }} ></div>
        <div className="row justify-content-center d-none d-md-flex">
          <div className="col-auto">
            <Link to="/politica-privacidad" className={styles["footer-link"]}>
              Política de privacidad
            </Link>
          </div>
          <div className="col-auto">
            <Link to="/accesibilidad" className={styles["footer-link"]}>
              Accesibilidad
            </Link>
          </div>
          <div className="col-auto">
            <Link to="/politica-cookies" className={styles["footer-link"]}>
              Política de cookies
            </Link>
          </div>
          <div className="col-auto">
            <Link to="/aviso-legal" className={styles["footer-link"]}>
              Aviso legal
            </Link>
          </div>
        </div>
        <div className="col-sm-12 d-block d-md-none">
          <div className={styles.contactInfo}>
            <h3>Contacta con nosotros</h3>
            <div className={`${styles.divider} w-100`}></div>
            <p><strong>Correo electrónico:</strong> contacto@psicologos-online.com</p>
            <p><strong>Teléfono:</strong> +34 123 456 789</p>
          </div>
        </div>

        <div className="col-sm-12 d-block d-md-none">
          <div>
            <h3>Síguenos</h3>
            <div className={`${styles.divider} w-100`}></div>
            <ul style={{ listStyleType: "none" }}>
              <li><a href="https://facebook.com/psicologos" className={styles["footer-link"]}>
                <i className="fab fa-facebook-square"></i>
              </a></li>
              <li><a href="https://instagram.com/psicologos" className={styles["footer-link"]}><i className="fab fa-instagram-square"></i></a></li>
              <li><a href="https://x.com/company/psicologos" className={styles["footer-link"]}><i className="fab fa-twitter-square"></i></a></li>
            </ul>
          </div>
        </div>

        <div className="col-sm-12 d-block d-md-none">
          <div>
            <h3>Servicios</h3>
            <div className={`${styles.divider} w-100`}></div>
            <ul>
              <li><Link to={"/servicio-1"} className={styles["footer-link"]}>Servicio 1</Link></li>
              <li><Link to={"/servicio-2"} className={styles["footer-link"]}>Servicio 2</Link></li>
              <li><Link to={"/servicio-3"} className={styles["footer-link"]}>Servicio 3</Link></li>
            </ul>
          </div>
        </div>
        <div className={`${styles.dividerTextosLegales} col-sm-12 d-block d-md-none`} ></div>
        <div className='row d-flex justify-content-center col-sm-12 d-block d-md-none'>
          <div className="col-auto ">
            <Link to={"/politica-privacidad"} className={styles["footer-link"]}>
              Política de privacidad
            </Link>
          </div>
          <div className="col-auto ">
            <Link to={"/accesibilidad"} className={styles["footer-link"]}>
              Accesibilidad
            </Link>
          </div>
          <div className="col-auto ">
            <Link to={"/politica-cookies"} className={styles["footer-link"]}>
              Política de cookies
            </Link>
          </div>
          <div className="col-auto">
            <Link to="/aviso-legal" className={styles["footer-link"]}>
              Aviso legal
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
