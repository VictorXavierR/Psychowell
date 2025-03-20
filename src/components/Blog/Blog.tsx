import React, { useState, useEffect } from 'react';
import styles from './Blog.module.css'; // Import the styles
import { fetchPosts } from '../../services/contentfulService'; // Asegúrate de importar el servicio

export function Blog() {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      const data = await fetchPosts();
      console.log('Datos obtenidos de Contentful:', data);
      setPosts(data); // Almacenamos los posts en el estado
    };

    loadPosts();
  }, []);

  return (
    <div className={styles.Blog}>
      <h1>Blog</h1>

      {posts.length === 0 ? (
        <p>Cargando publicaciones...</p>
      ) : (
        posts.map((post, index) => {
          // Verificar que cada post tiene los campos esperados
          console.log(`Post ${index}:`, post);

          const title = post.fields.titulo; // Accede al título
          const content = post.fields.contenido?.content?.[0]?.content?.[0]?.value || 'Sin contenido'; // Extrae el contenido de los bloques de texto
          const author = post.fields.autor; // Accede al autor
          const imageUrl = post.fields.imagen?.fields?.file?.url; // Accede a la URL de la imagen si está disponible
          const resumen = content.length > 200 ? content.slice(0, 200) + '...' : content;

          return (
            <div className='col-lg-12'>
              <article className={`col-lg-4 ${styles.card}`} key={index}>
                <h2 style={{marginTop:"20px",textAlign:"center"}}>{title}</h2>
                {imageUrl && (
                  <img
                    src={imageUrl}
                    alt={title}
                    style={{ maxWidth: '220px', maxHeight: '220px' }}
                  />
                )}
                <p className={styles.autor}>Autor: {author}</p>
                <p className={styles.resumen}>{resumen}</p>
              </article>
            </div>
          );
        })
      )}
    </div>
  );
}
