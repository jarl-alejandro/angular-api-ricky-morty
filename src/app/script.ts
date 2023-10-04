const os = require("os");
console.log("Nombre del sistema operativo: " + os.type());
console.log("Versión del sistema operativo: " + os.version());
console.log("Arquitectura del sistema operativo: " + os.arch());
console.log("Nombre de host del sistema operativo: " + os.hostname());
console.log("Tiempo de actividad del sistema operativo: " + os.uptime());
