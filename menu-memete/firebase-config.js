/* ==========================================================================
   CONEXIÓN A LA NUBE

   Ya está conectada. Los platos que se cargan desde "Mis platos" van a la nube
   y los ve cualquiera que abra el link, sin recargar.

   Proyecto en Firebase: se llama "menu-memete".
   El ID quedó como "orbe-entrena" porque el proyecto se reusó y el ID de un
   proyecto de Google no se puede cambiar. Es solo un nombre interno: no se ve
   en ningún lado ni cambia nada.

   Va SIN login: cualquiera con el link puede cargar y borrar platos. Las reglas
   de la base solo controlan la forma de lo que se guarda (ver REGLAS-FIREBASE.txt).

   Esta clave no es una contraseña: en las apps web va siempre a la vista. Lo que
   protege la base son las reglas, no la clave.
   ========================================================================== */

window.MEMETE_FIREBASE = {
  apiKey:            "AIzaSyBdb5g8cf__WYSsaGYtf94fPjK8Y8ukw1c",
  authDomain:        "orbe-entrena.firebaseapp.com",
  databaseURL:       "https://orbe-entrena-default-rtdb.firebaseio.com",
  projectId:         "orbe-entrena",
  storageBucket:     "orbe-entrena.firebasestorage.app",
  messagingSenderId: "1043092322118",
  appId:             "1:1043092322118:web:04c06e6d471cc1aa545747"
};
