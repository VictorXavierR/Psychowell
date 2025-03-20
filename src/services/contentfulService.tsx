import { createClient } from 'contentful';

// Configura tu cliente de Contentful
const client = createClient({
  space: '31crebjobq8i', // Sustituye con tu Space ID
  accessToken: 'HozmNl4iWMx8FAhPsJDxxmIvPLOfl_fW8_1cDJpSrZw', // Sustituye con tu Access Token
});

// Función para obtener los posts del blog
export const fetchPosts = async () => {
  try {
    const entries = await client.getEntries({ content_type: 'nuevoBlog' }); // 'nuevoBlog' es el nombre del modelo de contenido
    return entries.items;
  } catch (error) {
    console.error('Error al obtener los posts:', error);
    return [];
  }
};