import React from 'react';
import styles from './SobreNosotros.module.css';



export function SobreNosotros() {
  return (

    <div className={styles.SobreNosotros}>
      <h1>Sobre Nosotros</h1>
      <div className='row'>
        <div className='col-lg-5'>
          <img className={styles['foto-sobre-nosotros']} src='./images/foto-sobre-nosotros.webp' alt='Sobre nosotros' />
        </div>
        <div className={`col-lg-7 ${styles['tablet-specific']}`}>
          <h2>¿Quiénes somos?</h2>
          <p style={{ marginTop: "20px" }}>Las personas son nuestro principal valor. Ponemos el foco en la mejora del bienestar y en potenciar las fortalezas de las personas.
            Sabemos que los conocimientos, las habilidades y los años de profesión se adquieren y son indicadores de éxito en el desempeño del trabajador, pero hay algo que marca la diferencia y son las aptitudes. Las aptitudes que definen la manera de ser y actuar, los valores de las personas se entrenan y nosotros te ayudamos a mejorar.
          </p>
          <p style={{ marginTop: "10px" }}>
            Actualmente Es conocido que las aptitudes o softskills más valoradas en RRHH són: inteligencia emocional, creatividad, iniciativa, trabajo en equipo, resolución de problemas complejos, capacidad de liderazgo, habilidades de comunicación y resiliencia.
            El punto más importante a valorar es la aptitud, las motivaciones y las soft-skills. Porque los conocimientos, habilidades y los años de profesión se adquieren pero la actitud, la manera de ser y los valores forman parte inherente de las personas y ese es nuestro mejor valor.
          </p>
          <p style={{ marginTop: "20px" }}>
            Nuestra misión es ofrecer soluciones personalizadas que potencien las habilidades humanas esenciales para el éxito en un entorno profesional y personal. Creemos firmemente que las personas, cuando tienen las herramientas adecuadas, pueden lograr grandes cosas.
          </p>
        </div>
      </div>
    </div>

  );
}
