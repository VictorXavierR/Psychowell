import React from 'react';

import styles from './Equipo.module.css';


export function Equipo() {
  return <div className={styles.Equipo}>

    <h1>Equipo</h1>
    <div className='row'>
      <div className='col-lg-6'>
        <h2 style={{ marginTop: "20px" }}>¿Que nos diferencia de otras empresas?</h2>
        <p style={{ marginTop: "10px" }}>Nuestro equipo está formado por psicólogos con titulación clínica, personal sanitario y clínicos habilitados.
          Nos dedicamos a la psicología clínica, con un enfoque basado en la terapia cognitivo conductual y terapias de tercera generación, llevamos el diván de la consulta terapéutica a tu empresa.</p>
        <p>Somos vanguardia, creemos en la mejora constante “método kaizen”, ofrecemos este modelo a tus trabajadores.
          Tenemos más valor añadido que una consultoría de salud mental, somos expertos en psicologia clinica y  bienestar emocional.
        </p>
        <h2 style={{ marginTop: "20px" }}>¿Por qué elegirnos?</h2>
        <ul style={{ marginTop: "10px" }}>
          <li><b>Mantenemos un equilibrio calidad-precio:</b>  A diferencia de otras empresas del sector, pagamos unos honorarios que permiten retener talento y la adquisición de profesionales veteranos en el ejercicio de la psicología.</li>
          <li><b>Consultorías de equipo:</b> Los psicólogos se reúnen para la revisión de casos, manteniendo siempre la confidencialidad del paciente. En la consultoría los psicólogos obtienen feedback para la mejora en el abordaje terapéutico. También se obtiene validación de la praxis psicológica, una parte importante para el cuidado del trabajador. En esta sinergia generada estamos abiertos al aprendizaje constante “mente del principiante”</li>
          <li><b>Criterios de selección de personal cualificado:</b> Tenemos un protocolo de selección de personal basado en competencias, valores y habilidad de los terapeutas.</li>
        </ul>
      </div>
      <div className='col-lg-6'>
        <img src="./images/foto-equipo.webp" alt="Equipo" className={styles.fotoEquipo} />
      </div>
    </div>
    <div className='col-12'>
      <h2 style={{ marginTop: "20px", marginBottom:"20px"}}>Nuestro equipo</h2>
      <div className={`col-lg-12 d-flex justify-content-start ${styles.nuestroEquipo}`}>
        <div className='row'>
          <div className={`col-lg-4`}>
            <img src="./images/foto-psicologo.png" alt="Psicólogo 1" className={styles.fotoPsicologos}/>
            <h3>Psicólogo 1</h3>
            <p>Psicólogo clínico con más de 10 años de experiencia en el sector de la psicología clínica.</p>
          </div>
          <div className={`col-lg-4 ${styles.fichaPsicologo}`}>
            <img src="./images/foto-psicologo.png" alt="Psicólogo 2" className={styles.fotoPsicologos}/>
            <h3>Psicólogo 2</h3>
            <p>Psicólogo clínico con más de 10 años de experiencia en el sector de la psicología clínica.</p>
          </div>
          <div className={`col-lg-4 ${styles.fichaPsicologo}`}>
            <img src="./images/foto-psicologo.png" alt="Psicólogo 3" className={styles.fotoPsicologos}/>
            <h3>Psicólogo 3</h3>
            <p>Psicólogo clínico con más de 10 años de experiencia en el sector de la psicología clínica.</p>
          </div>
        </div>
      </div>    
    </div>
  </div>;
}
