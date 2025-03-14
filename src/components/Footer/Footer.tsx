import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <div className={styles.Footer}>
      <footer className="container-fluid w-100 px-0">
          <div className="row mx-0">
            <div className="col-lg-4 col-md-6 d-none d-md-block">
              <div className="contact-info">
                <h3>Contacta con nosotros</h3>
                <p><strong>Correo electrónico:</strong> contacto@psicologos-online.com</p>
                <p><strong>Teléfono:</strong> +34 123 456 789</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-none d-md-block" >
              <div className="social-media">
                <h3>Síguenos</h3>
                <ul style={{listStyleType: "none"}}>
                  <li><a href="https://facebook.com/psicologos" className={styles["footer-link"]}>
                  <i className="fab fa-facebook-square"></i> 
                  </a></li>
                  <li><a href="https://instagram.com/psicologos" className={styles["footer-link"]}><i className="fab fa-instagram-square"></i></a></li>
                  <li><a href="https://x.com/company/psicologos" className={styles["footer-link"]}><i className="fab fa-twitter-square"></i></a></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 d-none d-md-block">
              <div className="legal">
                <h3>Información Legal</h3>
                <ul>
                  <li><Link to={"/politica-privacidad"} className={styles["footer-link"]}>Política de privacidad</Link></li>
                  <li><Link to={"/terminos-condiciones"} className={styles["footer-link"]}>Terminos y condiciones</Link></li>
                  <li><Link to={"/Politica-cookies"} className={styles["footer-link"]}>Politica de cookies</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-12 d-block d-md-none">
              <div className="contact-info" style={{marginLeft:"-20px"}}>
                <h3>Contacta con nosotros</h3>
                <p><strong>Correo electrónico:</strong> contacto@psicologos-online.com</p>
                <p><strong>Teléfono:</strong> +34 123 456 789</p>
              </div>
            </div>

            <div className="col-sm-12 d-block d-md-none">
              <div className="social-media" style={{marginLeft:"-20px"}}>
                <h3>Síguenos</h3>
                <ul style={{listStyleType: "none"}}>
                  <li><a href="https://facebook.com/psicologos" className={styles["footer-link"]}>
                  <i className="fab fa-facebook-square"></i> 
                  </a></li>
                  <li><a href="https://instagram.com/psicologos" className={styles["footer-link"]}><i className="fab fa-instagram-square"></i></a></li>
                  <li><a href="https://x.com/company/psicologos" className={styles["footer-link"]}><i className="fab fa-twitter-square"></i></a></li>
                </ul>
              </div>
            </div>

            <div className="col-sm-12 d-block d-md-none">
              <div className="legal" style={{marginLeft:"-20px"}}>
                <h3>Información Legal</h3>
                <ul>
                  <li><Link to={"/politica-privacidad"} className={styles["footer-link"]}>Política de privacidad</Link></li>
                  <li><Link to={"/terminos-condiciones"} className={styles["footer-link"]}>Terminos y condiciones</Link></li>
                  <li><Link to={"/Politica-cookies"} className={styles["footer-link"]}>Politica de cookies</Link></li>
                </ul>
              </div>
            </div>
      </footer>
    </div>
  );
}
