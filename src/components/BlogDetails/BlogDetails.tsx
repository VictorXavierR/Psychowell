import React from 'react';
import styles from './BlogDetails.module.css';
import { useLocation } from 'react-router-dom';

export function BlogDetails() {
  const location = useLocation();
  const post = location.state?.post; // Obtenemos el artículo pasado por navigate
  return <div className={styles.BlogDetails}>
    <h1>{post.fields.titulo}</h1>
    <div className='row'>
      <div className='col-lg-5'>
        <img className={styles.imagenBlog} src={post.fields.imagen?.fields?.file?.url} alt={post.fields.titulo}/>
      </div>
      <div className='col-lg-7'>
        <p><b>Autor:</b> {post.fields.autor}</p>
        <div className={styles.Contenido}>
          {post.fields.contenido?.content?.map((item: any, index: number) => (
            <p key={index} className={styles.parrafo}>{item.content?.[0]?.value}</p>
          ))}
        </div>
      </div>
    </div>
  </div>;
}
