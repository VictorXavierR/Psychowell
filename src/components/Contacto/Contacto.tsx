import React from 'react';
import styles from './Contacto.module.css';



export function Contacto() {
  return <div className={styles.Contacto}>
    <h1>Contacto</h1>
    <div className='row'>
      <div className='col-lg-6'>
        <form className={styles.formulario}>
          <div className='form-group'>
            <label htmlFor='nombre'>Nombre</label>
            <input type='text' className='form-control' id='nombre' placeholder='Nombre' />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type='email' className='form-control' id='email' placeholder='Email' />
          </div>
          <div className='form-group'>
            <label htmlFor='mensaje'>Mensaje</label>
            <textarea className='form-control' id='mensaje' rows={3} placeholder='Mensaje' />
          </div>
          <button type='submit' className={styles.botonFormulario}>Enviar
          </button>
        </form>
        <div>
          <h3 style={{ marginTop: "20px" }}>Horarios de Atención</h3>
          <table>
            <tbody>
              <tr>
                <th>Día</th>
                <th>Horario</th>
              </tr>
              <tr>
                <td>Lunes a Viernes</td>
                <td>9:00 AM - 6:00 PM</td>
              </tr>
              <tr>
                <td>Sabados</td>
                <td>9:00 AM - 2:00 PM</td>
              </tr>

            </tbody>

          </table>
        </div>
      </div>
      <div className='col-lg-6'>
        <h2>Contacta con nosotros sin compromiso y dinos en qué podemos ayudarte</h2>
        <p className={styles.parrafoContacto}>El equipo se podra en contacto contigo, recibiras asesoramiento y se te asignara a un psicólogo según tus necesidades personales. Abordamos cada caso de manera individualizada y manteniendo la confidencialidad, no esperes más y contactanos!</p>
        <img src='./images/foto-contacto.png' alt='contacto' className={styles.fotoContacto} />
      </div>
    </div>
  </div>;
}
