import React from 'react';
import styles from './Home.module.css';

export function Home() {
  return (
    <div className={styles.Home}>
      <div className='row'>
        <div className='col-lg-6 col-12'>
          <h1>Bienvenidos a Psychowell</h1>
          <h2>Bienestar mental y emocional a tu alcance</h2>
          <p style={{ marginTop: '10px' }}>En Psychowell seguimos un sistema terapéutico combinando la psicoterapia breve con enfoque cognitivo-conductual y las terapias de tercera generación.
            Nuestros tratamientos son breves, con una perspectiva resolutiva que  capacita a la persona con habilidades para mejorar su bienestar emocional.</p>
          <h3 style={{marginTop:'10px'}}>Qué habilidades se entrenan en nuestro tratamiento:</h3>
          <ul style={{ marginTop: '10px' }}>
            <li>Psicoeducación: Asesoramos al paciente para identificar qué factores generan malestar.</li>
            <li>Regulación emocional (Desarrollar Inteligencia emocional, regulación de las emociones y gestión del estrés).</li>
            <li>Técnicas de relajación.</li>
            <li>Tolerar el malestar (Técnicas para reducir el malestar percibido).</li>
            <li>Habilidades comunicativas (Asertividad, liderazgo, trabajo en equipo, mejora en la comunicación).</li>
            <li>Resolución de problemas.</li>
            <li>Hábitos de vida saludable (Higiene del sueño, alimentación, ejercicio físico, rutinas que incrementan el bienestar, adicciones).</li>
            <li>Gestión del tiempo (conciliación laboral y familiar, rutinas, etc.).</li>
          </ul>
          <h3 style={{marginTop:'10px'}}>Por que se consiguen resultados con esta metodología:</h3>
          <ol style={{marginTop:'10px'}}>
            <li>Psicoeducación: Asesoramos al paciente para identificar qué factores generan malestar.</li>
            <li>Capacitamos al paciente con habilidades y técnicas para gestionar su bienestar emocional.</li>
            <li>Mandamos ejercicios entre sesión y sesión para que el paciente aplique las habilidades y técnicas.</li>
            <li>Realizamos un seguimiento del bienestar del paciente.</li>
            <li>El equipo de psicólogos está disponible para resolver dudas que puedan surgir en las terapias.</li>
            <li>El equipo de psicólogos se basa en el mismo modelo de enfoque terapéutico que funciona. Constantemente mejoramos nuestros métodos para que la terapia sea más eficaz, por ello realizamos formación interna y consultorías de supervisión e investigación.</li>
          </ol>
          <p>Nosotros entendemos las causas, te ayudamos a gestionar el problema</p>
      </div>
      <div className='col-lg-6 col-12'>
        <img src='./images/foto-inicio.jpg' alt='Bienestar' className={styles["foto-inicio"]} />
      </div>
    </div>
    </div >
  );
}
