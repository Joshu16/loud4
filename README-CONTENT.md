# 📝 Guía de Gestión de Contenido

Este proyecto usa archivos JSON para gestionar el contenido, permitiendo actualizar fotos, videos, eventos y miembros sin modificar código.

## 📂 Estructura de Archivos

```
src/
  ├── data/
  │   └── content.json    ← Edita este archivo para cambiar contenido
  └── assets/
      └── images/         ← Coloca nuevas imágenes aquí (formato WebP recomendado)
```

## 🎯 Cómo Editar Contenido

### 1. **Editar Eventos** (Lugares donde han tocado)

Abre `src/data/content.json` y modifica la sección `events`:

```json
{
  "events": [
    {
      "id": 1,
      "venue": "Nombre del lugar",
      "image": "nombre-imagen.webp",
      "location": "Ciudad"
    }
  ]
}
```

**Para agregar una nueva imagen:**
1. Convierte la imagen a formato WebP (usa herramientas online o `sharp`)
2. Coloca el archivo en `src/assets/images/`
3. Agrega una entrada en `events` con el nombre del archivo

### 2. **Editar Videos**

Modifica la sección `videos`:

```json
{
  "videos": [
    {
      "id": 1,
      "type": "youtube",           // o "facebook"
      "youtubeId": "CODIGO_VIDEO",  // Solo si es YouTube
      "facebookId": "ID_FACEBOOK",  // Solo si es Facebook
      "title": "Título del video",
      "description": "Descripción"
    }
  ]
}
```

**Cómo obtener el ID de YouTube:**
- URL: `https://www.youtube.com/watch?v=CODIGO_AQUI`
- El código después de `v=` es el `youtubeId`

**Cómo obtener el ID de Facebook:**
- URL: `https://www.facebook.com/reel/ID_AQUI`
- El código al final es el `facebookId`

### 3. **Editar Miembros de la Banda**

Modifica la sección `members`:

```json
{
  "members": [
    {
      "id": 1,
      "name": "Nombre completo",
      "role": "Rol en la banda",
      "image": "nombre-foto.webp",
      "instrument": "Instrumento"
    }
  ]
}
```

### 4. **Editar Repertorio**

Modifica la sección `repertoire`:

```json
{
  "repertoire": [
    {
      "id": 1,
      "title": "Título del repertorio",
      "description": "Descripción",
      "image": "imagen.webp",
      "alt": "Texto alternativo"
    }
  ]
}
```

## 🖼️ Convertir Imágenes a WebP

### Opción 1: Herramientas Online
- https://convertio.co/jpg-webp/
- https://ezgif.com/png-to-webp

### Opción 2: Usando Node.js (ya instalado)

Crea un archivo temporal `convert.js`:

```javascript
import sharp from 'sharp';

await sharp('imagen-original.jpg')
  .webp({ quality: 85 })
  .toFile('imagen-final.webp');
```

Ejecuta: `node convert.js`

## ⚠️ Reglas Importantes

1. **Nunca elimines campos requeridos** (id, title, image, etc.)
2. **Los IDs deben ser únicos** (no repetir números)
3. **Formato de imágenes:** Usa WebP para mejor rendimiento
4. **Tamaños recomendados:**
   - Eventos: 800x600px
   - Miembros: 440x497px
   - Videos: Los tamaños se ajustan automáticamente

## 🔄 Después de Editar

1. Guarda el archivo `content.json`
2. Si agregaste imágenes, colócalas en `src/assets/images/`
3. Si estás en desarrollo: `npm run dev` (cambios se reflejan automáticamente)
4. Si estás en producción: `npm run build` y despliega

## 📚 Opciones Avanzadas (Futuro)

Si necesitas más control, considera:

1. **CMS Headless** (Strapi, Contentful)
   - Panel de administración visual
   - Requiere servidor/hosting adicional

2. **Base de datos** (Firebase, Supabase)
   - Escalable, pero más complejo
   - Requiere backend

3. **Panel de Admin Simple**
   - Interfaz web propia
   - Edita JSON desde el navegador

¿Necesitas ayuda implementando alguna de estas opciones?
