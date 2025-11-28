// Cargador de contenido desde JSON
import contentData from '../data/content.json';

// Importar todas las imágenes de forma estática para Vite
import santaAnaCountryClubImage from '../assets/images/santa-ana-country-club.webp';
import elChinamoImage from '../assets/images/el-chinamo.webp';
import jazzCafeImage from '../assets/images/jazz-cafe.webp';
import hardRockCafeImage from '../assets/images/hard-rock-cafe.webp';
import corridasDeToroImage from '../assets/images/corridas-de-toro.webp';
import mundoLocoImage from '../assets/images/mundo-loco.webp';
import barCosmosImage from '../assets/images/bar-cosmos.webp';
import barTheWhiskeyImage from '../assets/images/bar-the-whiskey.webp';
import elCuartelImage from '../assets/images/el-cuartel.webp';
import fiestasPrivadasImage from '../assets/images/fiestas-privadas.webp';
import dagoOrtizImage from '../assets/images/dago-ortiz.webp';
import walterSaborioImage from '../assets/images/walter-saborio.webp';
import aleGonzalezImage from '../assets/images/ale-gonzalez.webp';
import luisMongeImage from '../assets/images/luis-monge.webp';
import andresAriasImage from '../assets/images/andres-arias.webp';
import Loud4Image from '../assets/images/Loud4.webp';

// Mapa de imágenes para resolver nombres dinámicamente
const imageMap = {
  'santa-ana-country-club.webp': santaAnaCountryClubImage,
  'el-chinamo.webp': elChinamoImage,
  'jazz-cafe.webp': jazzCafeImage,
  'hard-rock-cafe.webp': hardRockCafeImage,
  'corridas-de-toro.webp': corridasDeToroImage,
  'mundo-loco.webp': mundoLocoImage,
  'bar-cosmos.webp': barCosmosImage,
  'bar-the-whiskey.webp': barTheWhiskeyImage,
  'el-cuartel.webp': elCuartelImage,
  'fiestas-privadas.webp': fiestasPrivadasImage,
  'dago-ortiz.webp': dagoOrtizImage,
  'walter-saborio.webp': walterSaborioImage,
  'ale-gonzalez.webp': aleGonzalezImage,
  'luis-monge.webp': luisMongeImage,
  'andres-arias.webp': andresAriasImage,
  'Loud4.webp': Loud4Image,
};

// Función helper para obtener la imagen
const getImage = (imageName) => {
  return imageMap[imageName] || Loud4Image; // Fallback a Loud4 si no existe
};

// Procesar contenido y cargar imágenes
export const loadContent = () => {
  // Eventos con imágenes resueltas
  const events = contentData.events.map(event => ({
    ...event,
    image: getImage(event.image)
  }));

  // Miembros con imágenes resueltas
  const members = contentData.members.map(member => ({
    ...member,
    image: getImage(member.image)
  }));

  // Repertorio con imágenes resueltas
  const repertoire = contentData.repertoire.map(item => ({
    ...item,
    image: getImage(item.image)
  }));

  return {
    events,
    videos: contentData.videos,
    members,
    repertoire
  };
};