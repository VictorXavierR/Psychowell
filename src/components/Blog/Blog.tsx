import React, { useState, useEffect, useRef } from 'react';
import styles from './Blog.module.css'; // Import the styles
import { fetchPosts } from '../../services/contentfulService'; // Asegúrate de importar el servicio
import { useNavigate } from 'react-router-dom';

export function Blog() {
  const [posts, setPosts] = useState<any[]>([]);
  const navigate = useNavigate(); // Hook para la navegación
  const lastCardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      const data = await fetchPosts();
      setPosts(data); // Almacenamos los posts en el estado
    };

    loadPosts();
  }, []);

  useEffect(() => {
    // Solo aplicar el margin-bottom a la última tarjeta después de la carga de posts
    if (lastCardRef.current) {
      // Obtener el ancho de la pantalla
      const screenWidth = window.innerWidth;

      // Ajustar el margin-bottom dependiendo del tamaño de la pantalla
      if (screenWidth >= 1200) {
        lastCardRef.current.style.marginBottom = '250px'; // Para pantallas grandes
      } else if (screenWidth >= 768) {
        lastCardRef.current.style.marginBottom = '150px'; // Para tabletas
      } else {
        lastCardRef.current.style.marginBottom = '100px'; // Para móviles
      }
    }
  }, [posts]); 

  // Función para manejar el clic en la tarjeta
  const handleCardClick = (post: any) => {
    navigate('/blog-details/',{state:{post}}); // Redirige a la página de eventos con el ID del post
  };
  return (
    <div className={styles.Blog}>
      <h1>Blog</h1>

      {posts.length === 0 ? (
        <p>Cargando publicaciones...</p>
      ) : (
        <div className="row"> {/* Contenedor de fila */}
          {posts.map((post, index) => {
            console.log(`Post ${index}:`, post);

            const title = post.fields.titulo; 
            const author = post.fields.autor; 
            const imageUrl = post.fields.imagen?.fields?.file?.url; 
            const extracto = post.fields.extracto; 
            
            return (
              <article key={index} className="col-lg-3 col-md-6 col-sm-12" ref={index === posts.length - 1 ? lastCardRef : null}> {/* Distribuye los posts */}
                <div className={styles.card} onClick={() => handleCardClick(post)}>
                  <h2 style={{ marginTop: "20px", textAlign: "center" }}>{title}</h2>
                  {imageUrl && (
                    <img
                      src={imageUrl}
                      alt={title}
                      style={{ maxWidth: '220px', maxHeight: '220px'}}
                    />
                  )}
                  <p className={styles.autor}><b>Autor: {author}</b></p>
                  <p className={styles.resumen}>{extracto}</p>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
