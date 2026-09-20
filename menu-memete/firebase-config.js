/* ==========================================================================
   CONEXIÓN A LA NUBE  —  ESTE ES EL ÚNICO ARCHIVO QUE HAY QUE TOCAR

   Mientras esto esté vacío, la herramienta guarda los platos en el propio
   aparato y nadie más los ve. Apenas se completa, los platos pasan a la nube
   y los ve cualquiera que abra el link.

   Cómo se completa:

     1. Entrar a  console.firebase.google.com  y crear un proyecto.
     2. Adentro del proyecto: Realtime Database → Crear base de datos.
        Elegir la ubicación y arrancar en "modo de prueba".
     3. Engranaje (arriba a la izquierda) → Configuración del proyecto →
        bajar hasta "Tus apps" → botón </> (Web) → registrar la app.
        Ahí muestra un bloque igual a este. Copiar los valores y pegarlos abajo.
     4. Volver a Realtime Database → pestaña "Reglas" y pegar lo que está
        en el archivo REGLAS-FIREBASE.txt de esta misma carpeta.

   No hace falta tocar nada más: ni el index.html, ni las fotos.
   ========================================================================== */

window.MEMETE_FIREBASE = {
  apiKey:            "",
  authDomain:        "",
  databaseURL:       "",
  projectId:         "",
  storageBucket:     "",
  messagingSenderId: "",
  appId:             ""
};
