window.BANCO = {
"mcq": [
{
"id": "m1",
"tema": "Inodos y enlaces",
"q": "¿Qué tipo de enlace puede apuntar a un archivo ubicado en otro sistema de archivos?",
"o": [
"El soft link",
"El hard link",
"Ninguno de los dos",
"Ambos, sin restricciones"
],
"ok": 0,
"f": "El soft link guarda una ruta, y una ruta puede atravesar puntos de montaje",
"src": "Simulacro 01"
},
{
"id": "m2",
"tema": "Inodos y enlaces",
"q": "¿Qué contiene el directorio /dev?",
"o": [
"Las herramientas de desarrollo",
"Los logs del sistema",
"Archivos especiales que representan a los dispositivos",
"Los directorios personales de los desarrolladores"
],
"ok": 2,
"f": "Discos, terminales y otros dispositivos aparecen como archivos en /dev",
"src": "Simulacro 01"
},
{
"id": "m3",
"tema": "Rutas y directorios",
"q": "En una ruta, ¿qué representa \"..\" ?",
"o": [
"El directorio personal del usuario",
"El directorio padre del actual",
"La raíz del sistema",
"El directorio actual"
],
"ok": 1,
"f": "( I es el directorio actual y.. el que lo contiene.",
"src": "Simulacro 01"
},
{
"id": "m4",
"tema": "Rutas y directorios",
"q": "¿En qué directorio buscaría los logs del sistema?",
"o": [
"/var/log",
"/etc/log",
"/home/log",
"/tmp/log"
],
"ok": 0,
"f": "Los logs son datos variables, por eso viven bajo /var",
"src": "Simulacro 01"
},
{
"id": "m5",
"tema": "Permisos",
"q": "Un archivo de clave privada tiene permisos 400. ¿Qué significa?",
"o": [
"El propietario puede leer y escribir",
"Solo el propietario puede leerlas; nadie puede modificarlas ni otros usuarios leerlas",
"Todos pueden leerlas pero nadie modificarlas",
"Nadie puede leerlas, ni siquiera el propietario"
],
"ok": 1,
"f": "4 = solo lectura para el propietario; 0 para grupo y otros.",
"src": "Simulacro 01"
},
{
"id": "m6",
"tema": "Permisos",
"q": "¿Qué comando cambia los permisos de un archivo?",
"o": [
"chown",
"cat",
"chmod",
"mkdir"
],
"ok": 2,
"f": "chmod cambia permisos; chown cambia propietario y grupo.",
"src": "Simulacro 01"
},
{
"id": "m7",
"tema": "Permisos",
"q": "¿Qué comando cambia el propietario de un archivo?",
"o": [
"passwd",
"ls",
"chmod",
"chown"
],
"ok": 3,
"f": "chown usuario:grupo archivo.",
"src": "Simulacro 01"
},
{
"id": "m8",
"tema": "Montaje y sistemas de archivos",
"q": "¿En qué se destaca btrfs?",
"o": [
"En no tener permisos",
"En ser el sistema de archivos de los pendrives",
"En ser el único que admite soft links",
"En snapshots casí gratuitos y checksums que detectan corrupcion"
],
"ok": 3,
"f": "Usa copy-on-write, lo que hace baratos los snapshots.",
"src": "Simulacro 01"
},
{
"id": "m9",
"tema": "Montaje y sistemas de archivos",
"q": "¿Cuál es el orden correcto de las capas en LVM, de abajo hacia arriba?",
"o": [
"Sistema de archivos → volumen lógico → grupo de volumenes → volumen físico",
"Volumen físico → grupo de volumenes → volumen lógico → sistema de archivos",
"Volumen lógico → volumen físico → grupo de volumenes -→ sistema de archivos",
"Grupo de volumenes → volumen físico → sistema de archivos → volumen lógico"
],
"ok": 1,
"f": "Los discos o particiones son volumenes físicos; juntos forman un grupo, del que se recortan volumenes lógicos.",
"src": "Simulacro 01"
},
{
"id": "m10",
"tema": "Bloques, archivos y objetos",
"q": "¿Cuál de los tres modelos escala a billones de elementos sin un límite práctico?",
"o": [
"Objetos",
"Archivos",
"Bloques",
"Ninguno de los tres"
],
"ok": 0,
"f": "El namespace plano evita los costos de un árbol de directorios gigante.",
"src": "Simulacro 01"
},
{
"id": "m11",
"tema": "Shell y comandos",
"q": "¿Para qué se usa el comando ls?",
"o": [
"Para listar el contenido de un directorio",
"Para cambiar de directorio",
"Para ver el espacio libre del disco",
"Para borrar archivos"
],
"ok": 0,
"f": "Con -1 muestra permisos, propietario, tamaño y fecha.",
"src": "Simulacro 01"
},
{
"id": "m12",
"tema": "API y llamadas al sistema",
"q": "Un programa compila sin cambios en dos sistemas distintos, pero el ejecutable de uno no corre en el otro. ¿Por qué?",
"o": [
"Porque los permisos del ejecutable son incorrectos",
"Porque el programa tiene errores",
"Porque comparten la API pero tienen distinta ABI",
"Porque tienen distinta API pero la misma ABI"
],
"ok": 2,
"f": "La API da portabilidad de fuentes; la ABI, de binarios.",
"src": "Simulacro 01"
},
{
"id": "m13",
"tema": "Criptografía y certificados",
"q": "¿Qué son las claves asímétricas?",
"o": [
"Dos copias idénticas de la misma clave",
"Un par de claves relacionadas matemáticamente: una pública que se comparte y una privada que se guarda en secreto",
"Claves que cambian cada vez que se usan",
"Una clave larga y otra corta para el mismo uso"
],
"ok": 1,
"f": "Lo que hace una, solo lo puede deshacer o verificar la otra.",
"src": "Simulacro 01"
},
{
"id": "m14",
"tema": "Laboratorio de Kubernetes",
"q": "¿Qué conviene hacer antes de desconectar el pendrive donde corre K3s?",
"o": [
"Borrar los PVC",
"Desactivar el registry de contenedores",
"Ejecutar./scripts/apagar.sh todos --motor o apagar Fedora para detener los servicios y vaciar las escrituras pendientes",
"Nada: se puede retirar en cualquier momento"
],
"ok": 2,
"f": "Retirarlo mientras se escribe puede corromper la base de datos del cluster o los volumenes.",
"src": "Simulacro 01"
},
{
"id": "m15",
"tema": "Laboratorio de Kubernetes",
"q": "¿Por qué hubo que configurar tanto /etc/docker/daemon.json como /etc/rancher/k3s/registries.yaml?",
"o": [
"Porque uno es para Samba y el otro para NFS",
"Porque uno es para lectura y el otro para escritura del mismo programa",
"Porque Fedora exige dos copias de cada configuración",
"Porque el push lo hace el daemon de Docker y la descarga de imagenes para los Pods la hace containerd, dentro de K3s"
],
"ok": 3,
"f": "Son dos daemons distintos, cada uno con su archivo,",
"src": "Simulacro 01"
},
{
"id": "m16",
"tema": "Inodos y enlaces",
"q": "¿Qué es un hard link?",
"o": [
"Otro nombre, en un directorio, que apunta al mismo i-nodo que el archivo original",
"Una copia completa del archivo en otro lugar",
"Un archivo pequeño cuyo contenido es la ruta de otro archivo",
"Un acceso directo que solo funciona en el escritorio"
],
"ok": 0,
"f": "Un hard link es una entrada de directorio más hacia el mismo i-nodo: los dos nombres son igual de \"originales\"",
"src": "Simulacro 02"
},
{
"id": "m17",
"tema": "Inodos y enlaces",
"q": "Un sistema de archivos tiene espacio libre pero no permite crear archivos nuevos. ¿Cuál es una causa posible?",
"o": [
"Se qued sin i-nodos libres",
"El disco está montado como solo lectura para root",
"Hay demasíados soft links",
"El directorio /tmp está vacio"
],
"ok": 0,
"f": "Cada archivo necesita un i-nodo; si se agotan, no importa cuanto espacio quede.",
"src": "Simulacro 02"
},
{
"id": "m18",
"tema": "Rutas y directorios",
"q": "¿Qué se guarda en /home?",
"o": [
"Los dispositivos",
"El kernel y los archivos de arranque",
"Los directorios personales de los usuarios",
"La configuración de red"
],
"ok": 2,
"f": "Cada usuario tiene su directorio dentro de /home",
"src": "Simulacro 02"
},
{
"id": "m19",
"tema": "Rutas y directorios",
"q": "¿Qué tipo de datos se guarda en /var?",
"o": [
"Archivos que se borran al reiniciar",
"Los programas de la distribución",
"Variables de entorno de cada usuario",
"Datos que cambian constantemente, como logs del sistema y colas"
],
"ok": 3,
"f": "/var es variable: logs, cachés, bases de datos. Suele ser el que se llena",
"src": "Simulacro 02"
},
{
"id": "m20",
"tema": "Permisos",
"q": "¿A qué valor octal corresponde -rw-r----- ?",
"o": [
"604",
"760",
"644",
"640"
],
"ok": 3,
"f": "rw- = 6, r-- = 4, --- = 0.",
"src": "Simulacro 02"
},
{
"id": "m21",
"tema": "Permisos",
"q": "¿Qué hace el bit setuid en un programa ejecutable?",
"o": [
"El programa se ejecuta en segundo plano",
"El proceso se ejecuta con la identidad del propietario del archivo",
"Los archivos que crea quedan con permiso 777",
"El programa solo puede ejecutarlo su propietario"
],
"ok": 1,
"f": "Es el caso del programa de cambio de contraseña, que necesita escribir en un archivo del sistema.",
"src": "Simulacro 02"
},
{
"id": "m22",
"tema": "Montaje y sistemas de archivos",
"q": "Se monta un disco sobre un directorio que ya tenía archivos. ¿Qué pasa con esos archivos?",
"o": [
"Se copian al disco montado",
"Se mezclan con el contenido del disco",
"Quedan ocultos mientras dure el montaje, pero no se borran",
"Se borran definitivamente"
],
"ok": 2,
"f": "Al desmontar vuelven a verse.",
"src": "Simulacro 02"
},
{
"id": "m23",
"tema": "Montaje y sistemas de archivos",
"q": "¿Para qué sirve el journaling en un sistema de archivos?",
"o": [
"Para comprimir los datos",
"Para cifrar los archivos",
"Para recuperar la consistencia de las estructuras después de un corte de energia",
"Para guardar un historial de quién leyo cada archivo"
],
"ok": 2,
"f": "Anota primero qué va a hacer y después lo hace; al reiniciar, completa o descarta lo pendiente.",
"src": "Simulacro 02"
},
{
"id": "m24",
"tema": "Bloques, archivos y objetos",
"q": "¿Qué es Amazon S3?",
"o": [
"Un servidor de correo",
"Un sistema de archivos de Linux",
"Un tipo de disco de bloques para instancias",
"Un servicio de almacenamiento de objetos"
],
"ok": 3,
"f": "S3 es el ejemplo más conocido de almacenamiento de objetos.",
"src": "Simulacro 02"
},
{
"id": "m25",
"tema": "Shell y comandos",
"q": "¿Cuál de los siguientes NO es un shell?",
"o": [
"fish",
"XFS",
"zsh",
"bash"
],
"ok": 1,
"f": "XFS es un sistema de archivos.",
"src": "Simulacro 02"
},
{
"id": "m26",
"tema": "Shell y comandos",
"q": "¿Para qué se usa el comando mv?",
"o": [
"Para mostrar el contenido de un archivo",
"Para mover o renombrar archivos",
"Para montar volumenes",
"Para copiar archivos dejando el original"
],
"ok": 1,
"f": "Dentro del mismo sistema de archivos es instantaneo: solo cambia entradas de directorio.",
"src": "Simulacro 02"
},
{
"id": "m27",
"tema": "Shell y comandos",
"q": "¿Qué indica la primera línea #!/bin/bash de un script?",
"o": [
"Qué intérprete debe ejecutar el script",
"Que el script es un comentario",
"Que el script debe ejecutarse en segundo plano",
"Que solo root puede ejecutarlo"
],
"ok": 0,
"f": "Se la conoce como shebang.",
"src": "Simulacro 02"
},
{
"id": "m28",
"tema": "API y llamadas al sistema",
"q": "En UNIX, ¿qué lugar ocupa la interfaz gráfica?",
"o": [
"Es una llamada al sistema",
"Es un conjunto de bibliotecas y programas de usuario, reemplazables, fuera del kernel",
"Es un sistema de archivos",
"Es parte obligatoria del kernel"
],
"ok": 1,
"f": "Por eso hay varios entornos graficos distintos para el mismo sistema.",
"src": "Simulacro 02"
},
{
"id": "m29",
"tema": "Criptografía y certificados",
"q": "¿Qué garantiza el candado del navegador?",
"o": [
"Que el sitio es honesto y confiable",
"Que el sitio pertenece a una empresa grande",
"Que la conexión esta cifrada y que el sitio controla ese nombre de dominio",
"Que el sitio no tiene virus"
],
"ok": 2,
"f": "Un sitio fraudulento puede tener un certificado válido para su propio dominio.",
"src": "Simulacro 02"
},
{
"id": "m30",
"tema": "Laboratorio de Kubernetes",
"q": "¿Qué es un rolling update al pasar de v1 a v2?",
"o": [
"Reemplazar los Pods de a poco, de modo que el servicio no se interrumpe durante el cambio",
"Apagar todo y volver a encenderlo con la versión nueva",
"Mantener las dos versiones para siempre",
"Actualizar el kernel de Fedora"
],
"ok": 0,
"f": "Mientras arrancan los Pods nuevos, los viejos siguen atendiendo",
"src": "Simulacro 02"
},
{
"id": "m31",
"tema": "Inodos y enlaces",
"q": "¿Cuál de los siguientes datos NO se guarda en el i-nodo de un archivo?",
"o": [
"El tamaño",
"El nombre del archivo",
"El propietario",
"Los permisos"
],
"ok": 1,
"f": "El nombre vive en la entrada del directorio que contiene al archivo; el i-nodo guarda todo lo demas.",
"src": "Simulacro 03"
},
{
"id": "m32",
"tema": "Rutas y directorios",
"q": "¿Cuál de los siguientes NO es un directorio estándar de la raíz en Linux?",
"o": [
"/config",
"/opt",
"/tmp",
"/usr"
],
"ok": 0,
"f": "La configuración del sistema va en /etc; /config no es estándar.",
"src": "Simulacro 03"
},
{
"id": "m33",
"tema": "Rutas y directorios",
"q": "¿Cuál es una diferencia de fondo entre la organización de archivos de Linux y la de Windows?",
"o": [
"Linux no tiene directorios, solo archivos",
"Linux tiene una sola raíz y monta los discos dentro de ella; Windows usa una raíz por unidad, con letras",
"Windows no permite subdirectorios",
"Linux asígna una letra a cada disco"
],
"ok": 1,
"f": "En Linux un disco nuevo aparece dentro del árbol único; en Windows aparece como otra letra.",
"src": "Simulacro 03"
},
{
"id": "m34",
"tema": "Permisos",
"q": "¿Qué permisos representa 644?",
"o": [
"El propietario lee, escribe y ejecuta; el resto nada",
"El propietario lee y escribe; el grupo y los demas solo leen",
"Todos leen y escriben",
"Solo el grupo puede escribir"
],
"ok": 1,
"f": "Es el permiso habitual de un archivo de datos comun.",
"src": "Simulacro 03"
},
{
"id": "m35",
"tema": "Permisos",
"q": "¿Por qué se considera una mala práctica dar permisos 777 a un archivo?",
"o": [
"Porque el archivo ocupa más espacio",
"Porque solo el superusuario podría abrirlo",
"Porque cualquier usuario del sistema puede leerlo, modificarlo y ejecutarlo",
"Porque el archivo deja de poder ejecutarse"
],
"ok": 2,
"f": "777 da todos los permisos a todos, incluidos usuarios que no deberían tocarlo.",
"src": "Simulacro 03"
},
{
"id": "m36",
"tema": "Montaje y sistemas de archivos",
"q": "¿Qué comando muestra el espacio usado y libre de los sistemas de archivos montados?",
"o": [
"df",
"echo",
"pwd",
"cat"
],
"ok": 0,
"f": "df -h muestra el uso de cada sistema de archivos montado.",
"src": "Simulacro 03"
},
{
"id": "m37",
"tema": "Montaje y sistemas de archivos",
"q": "¿Cuál es el sistema de archivos más difundido y tradicional en Linux, usado por omisión en distribuciónes como Debian y Ubuntu?",
"o": [
"FAT32",
"ZFS",
"ext4",
"NTFS"
],
"ok": 2,
"f": "No hay un único estándar obligatorio, pero ext4 es el más usado y maduro",
"src": "Simulacro 03"
},
{
"id": "m38",
"tema": "Bloques, archivos y objetos",
"q": "¿Qué tipo de almacenamiento conviene para el disco de una máquina virtual?",
"o": [
"Un bucket de S3",
"Objetos",
"Un soft link",
"Bloques"
],
"ok": 3,
"f": "El sistema operativo invitado quiere formatearlo y modificar sectores sueltos.",
"src": "Simulacro 03"
},
{
"id": "m39",
"tema": "Bloques, archivos y objetos",
"q": "¿Qué modelo permite agregar metadatos arbitrarios definidos por el usuario a cada elemento?",
"o": [
"Objetos",
"Particiones",
"Bloques",
"Enlaces duros"
],
"ok": 0,
"f": "Además de los metadatos del sistema, cada objeto acepta pares nombre-valor propios.",
"src": "Simulacro 03"
},
{
"id": "m40",
"tema": "Shell y comandos",
"q": "¿Qué hace tail -f /var/log/syslog?",
"o": [
"Muestra las ultimas líneas del archivo y sigue mostrando las que se agreguen",
"Borra el archivo cuando termina de leerlo",
"Busca la palabra \"f\" en el archivo",
"Muestra las primeras líneas del archivo"
],
"ok": 0,
"f": "Muy usado para seguir logs en vivo.",
"src": "Simulacro 03"
},
{
"id": "m41",
"tema": "API y llamadas al sistema",
"q": "¿Cuál es una ventaja de que los programas usen la API del sistema en lugar de acceder directamente al hardware?",
"o": [
"Que el programa corre siempre más rápido",
"Que puede leer la memoria de otros procesos",
"Que no necesita permisos",
"Portabilidad y protección: el programa no depende del hardware concreto y el kernel controla el acceso"
],
"ok": 3,
"f": "El sistema operativo abstrae el hardware y arbitra entre procesos.",
"src": "Simulacro 03"
},
{
"id": "m42",
"tema": "Criptografía y certificados",
"q": "En criptografía simétrica:",
"o": [
"Cada mensaje usa una clave pública distinta",
"No se usan claves",
"Se usa la misma clave para cifrar y para descifrar",
"Se usa una clave pública y una privada"
],
"ok": 2,
"f": "Es rápida, pero ambas partes deben compartir el secreto.",
"src": "Simulacro 03"
},
{
"id": "m43",
"tema": "Criptografía y certificados",
"q": "Una firma digital se genera con ______ y se verifica con ______:",
"o": [
"la clave privada del receptor / la clave pública del receptor",
"la clave pública del firmante / su clave privada",
"la clave privada del firmante / su clave pública",
"una clave simétrica / la misma clave"
],
"ok": 2,
"f": "Firmar con la privada prueba quién genero el mensaje y que no fue alterado.",
"src": "Simulacro 03"
},
{
"id": "m44",
"tema": "Criptografía y certificados",
"q": "¿Qué algoritmo es la recomendación actual para generar claves de SSH?",
"o": [
"DES",
"RSA de 1024 bits",
"MD5",
"Ed25519"
],
"ok": 3,
"f": "Claves cortas, firmas rapidas y diseño que evita errores de implementación.",
"src": "Simulacro 03"
},
{
"id": "m45",
"tema": "Laboratorio de Kubernetes",
"q": "En la central Asterisk, ¿qué diferencia hay entre SIP y RTP?",
"o": [
"Son dos nombres del mismo protocolo",
"SiP establece y corta la llamada señalización; RTP transporta el audio",
"SIP transporta el audio y RTP lo cifra",
"RTP establece la llamada y SIP la graba"
],
"ok": 1,
"f": "Por eso usan puertos distintos: 5060 para SIP y 10000-10020/udp para RTP.",
"src": "Simulacro 03"
},
{
"id": "m46",
"tema": "Inodos y enlaces",
"q": "¿Qué es un directorio en un sistema de archivos tipo UNIX?",
"o": [
"Una zona de memoria donde el kernel guarda archivos abiertos",
"Una partición del disco",
"Un archivo especial cuyo contenido es una tabla que asocia nombres con números de i-nodo",
"Un i-nodo sin bloques de datos"
],
"ok": 2,
"f": "Por eso renombrar dentro del mismo sistema de archivos es instantaneo: solo cambia una entrada de esa tabla.",
"src": "Simulacro 04"
},
{
"id": "m47",
"tema": "Rutas y directorios",
"q": "¿Qué contiene /boot?",
"o": [
"El kernel y los archivos necesarios para el arranque",
"Los directorios personales",
"Los logs de cada arranque",
"Los programas que se ejecutan al iniciar sesión"
],
"ok": 0,
"f": "Ahi esta la imagen del kernel que carga el cargador de arranque.",
"src": "Simulacro 04"
},
{
"id": "m48",
"tema": "Permisos",
"q": "En los permisos de un archivo, ¿a quién se refiere \"other\" (otros)?",
"o": [
"A todos los usuarios que no son el propietario ni pertenecen al grupo del archivo",
"A los usuarios conectados de forma remota",
"Al superusuario",
"A los procesos del kernel"
],
"ok": 0,
"f": "Es la tercera terna: el resto del mundo.",
"src": "Simulacro 04"
},
{
"id": "m49",
"tema": "Permisos",
"q": "SSH se niega a usar una clave privada con permisos 644. ¿Por qué?",
"o": [
"Porque 644 no permite leer el archivo",
"Porque otros usuarios podrían leerla, y una clave privada expuesta equivale a una contraseña publicada",
"Porque SSH solo acepta claves con permiso de ejecución",
"Porque 644 impide al propietario usarla"
],
"ok": 1,
"f": "La clave privada debe quedar en 600 o 400.",
"src": "Simulacro 04"
},
{
"id": "m50",
"tema": "Montaje y sistemas de archivos",
"q": "¿Por qué se suele usar FAT en un pendrive?",
"o": [
"Porque tiene journaling",
"Por compatibilidad: se lee en casí cualquier equipo sin instalar nada",
"Porque tiene permisos por usuario",
"Porque es el más seguro"
],
"ok": 1,
"f": "Sus carencias (sin permisos ni journaling) importan poco en un medio que circula entre sistemas distintos.",
"src": "Simulacro 04"
},
{
"id": "m51",
"tema": "Montaje y sistemas de archivos",
"q": "¿Qué es una partición?",
"o": [
"Un archivo de gran tamaño",
"Un proceso que administra el disco",
"Un directorio del sistema",
"Una división de un disco en regiones independientes"
],
"ok": 3,
"f": "Cada partición puede tener su propio sistema de archivos.",
"src": "Simulacro 04"
},
{
"id": "m52",
"tema": "Bloques, archivos y objetos",
"q": "¿Cuáles son las tres partes de un objeto?",
"o": [
"El bloque, el sector y el cilindro",
"El i-nodo, el directorio y los permisos",
"El nombre, la extension y la fecha",
"Los datos, la clave que lo identifica y los metadatos"
],
"ok": 3,
"f": "Los metadatos pueden incluir pares nombre-valor definidos por el usuario",
"src": "Simulacro 04"
},
{
"id": "m53",
"tema": "Bloques, archivos y objetos",
"q": "¿Qué tipo de almacenamiento conviene para una carpeta compartida por un equipo de trabajo?",
"o": [
"Archivos",
"Objetos",
"Bloques",
"Swap"
],
"ok": 0,
"f": "Un servidor de archivos administra el árbol, los permisos y el acceso concurrente.",
"src": "Simulacro 04"
},
{
"id": "m54",
"tema": "Shell y comandos",
"q": "¿Qué es un shell?",
"o": [
"El kernel del sistema operativo",
"Un intérprete de comandos: un programa que lee ordenes y le pide al sistema operativo que las ejecute",
"Un sistema de archivos",
"Un tipo de permiso especial"
],
"ok": 1,
"f": "Es un programa de usuario más, no parte del kernel.",
"src": "Simulacro 04"
},
{
"id": "m55",
"tema": "Shell y comandos",
"q": "¿Qué es sh en un sistema tipo UNIX?",
"o": [
"El shell más moderno, con sugerencias mientras se escribe",
"Un comando para apagar el sistema",
"El estándar de shell que cumplen varios intéerpretes; /bin/sh apunta a alguno de ellos",
"Un shell exclusivo de Windows"
],
"ok": 2,
"f": "Un script escrito solo con sh corre en cualquier sistema tipo UNIX.",
"src": "Simulacro 04"
},
{
"id": "m56",
"tema": "API y llamadas al sistema",
"q": "¿Qué normaliza POSIX?",
"o": [
"El formato de los ejecutables de todos los sistemas",
"El sistema de archivos de Linux",
"El protocolo de SSH",
"La API de los sistemas tipo UNIX, no la ABI"
],
"ok": 3,
"f": "Por eso un programa POSiX es portable a nivel de fuentes y hay que recompilarlo",
"src": "Simulacro 04"
},
{
"id": "m57",
"tema": "Criptografía y certificados",
"q": "¿Qué es un certificado digital?",
"o": [
"Un archivo que prueba que un sitio es honesto",
"Un permiso especial del sistema de archivos",
"Una clave pública más datos de a quién pertenece y hasta cuando vale, firmado por una autoridad",
"Una clave privada protegida con contraseña"
],
"ok": 2,
"f": "En lugar de conocer cada clave, alcanza con confiar en quien la avala.",
"src": "Simulacro 04"
},
{
"id": "m58",
"tema": "Laboratorio de Kubernetes",
"q": "¿Cuál es la diferencia entre una imagen y un contenedor?",
"o": [
"La imagen es la plantilla, formada por capas que no cambian; el contenedor es una instancia en ejecución de esa imagen",
"La imagen es una copia de seguridad del contenedor",
"El contenedor es la plantilla y la imagen es lo que se ejecuta",
"Son exactamente lo mismo"
],
"ok": 0,
"f": "La imagen se arma por capas inmutables; el contenedor agrega una capa de escritura propia.",
"src": "Simulacro 04"
},
{
"id": "m59",
"tema": "Laboratorio de Kubernetes",
"q": "Al ejecutar docker push localhost:30500/utec/mi-app:v1, ¿cómo sabe Docker a qué servidor enviar la imagen?",
"o": [
"Por una variable de entorno llamada PUSH",
"Por el prefijo del nombre de la imagen: localhost:30500",
"Siempre la envia a Docker Hub",
"Por el nombre de la carpeta donde esta el Dockerfile"
],
"ok": 1,
"f": "El nombre completo tiene la forma HOST:PUERTO/REPOSITORIO:ETIQUETA.",
"src": "Simulacro 04"
},
{
"id": "m60",
"tema": "Laboratorio de Kubernetes",
"q": "¿Cuál de los protocolos de archivos del laboratorio es el nativo de Windows?",
"o": [
"SIP",
"NFSv4",
"SMB/CIFS, que implementa Samba",
"SFTP"
],
"ok": 2,
"f": "Samba implementa SMB, compatible con Windows, Linux y macOS. Parte IIl. Desarrollo",
"src": "Simulacro 04"
},
{
"id": "m61",
"tema": "Inodos y enlaces",
"q": "¿Se puede crear un hard link hacia un archivo que esta en otra partición otro sistema de archivos?",
"o": [
"No, porque los hard links solo pueden apuntar a directorios",
"Si, pero solo si ambas particiones son ext4",
"No, porque el número de i-nodo solo tiene sentido dentro de su propio sistema de archivos",
"Si, siempre que se tenga permiso de escritura"
],
"ok": 2,
"f": "Cada sistema de archivos numera sus propios i-nodos; para cruzar de uno a otro se usa un soft link",
"src": "Simulacro 05"
},
{
"id": "m62",
"tema": "Inodos y enlaces",
"q": "En la salida de ls -l, el número que aparece después de los permisos indica:",
"o": [
"Cuantos nombres hard links apuntan a ese i-nodo",
"El tamaño del archivo en kilobytes",
"Cuantos usuarios lo tienen abierto",
"El número de i-nodo"
],
"ok": 0,
"f": "Es el contador de enlaces del i-nodo",
"src": "Simulacro 05"
},
{
"id": "m63",
"tema": "Inodos y enlaces",
"q": "¿Qué significa el principio de UNIX \"todo es un archivo\"?",
"o": [
"Que cada proceso se guarda en disco como un archivo ejecutable",
"Que dispositivos, información del kernel y archivos comunes se manejan con las mismas operaciones de abrir, leer y escribir",
"Que no existen directorios, solo archivos",
"Que el sistema operativo guarda todo en un único archivo"
],
"ok": 1,
"f": "Una misma interfaz sirve para un disco, una terminal o el estado de un proceso.",
"src": "Simulacro 05"
},
{
"id": "m64",
"tema": "Rutas y directorios",
"q": "¿Cuál de los siguientes NO es un directorio estándar de la raíz en Linux?",
"o": [
"/usuarios",
"/proc",
"/dev",
"/boot"
],
"ok": 0,
"f": "Los directorios personales están en /home; /usuarios no es estándar.",
"src": "Simulacro 05"
},
{
"id": "m65",
"tema": "Permisos",
"q": "¿Qué permisos representa 700?",
"o": [
"Solo el propietario puede leer, escribir y ejecutar; nadie más tiene acceso",
"El grupo tiene los mismos permisos que el propietario",
"Todos tienen todos los permisos",
"El propietario solo puede leer"
],
"ok": 0,
"f": "7 = 4+2+ 1 para el propietario y 0 para el resto.",
"src": "Simulacro 05"
},
{
"id": "m66",
"tema": "Montaje y sistemas de archivos",
"q": "¿Qué es un punto de montaje?",
"o": [
"Un archivo que contiene la imagen del disco",
"La primera partición de un disco",
"Un usuario con permiso para usar discos",
"Un directorio existente donde se engancha un sistema de archivos"
],
"ok": 3,
"f": "Por ejemplo /mnt/datos /media/pendrive",
"src": "Simulacro 05"
},
{
"id": "m67",
"tema": "Montaje y sistemas de archivos",
"q": "¿En qué se destaca XFS?",
"o": [
"En compatibilidad universal con cualquier sistema operativo",
"En volumenes grandes y cargas paralelas intensas",
"En poder reducir su tamaño fácilmente",
"En no necesitar i-nodos"
],
"ok": 1,
"f": "Divide el volumen en grupos que se administran en paralelo. Por diseño, no se puede reducir.",
"src": "Simulacro 05"
},
{
"id": "m68",
"tema": "Bloques, archivos y objetos",
"q": "En S3, ¿qué es un bucket?",
"o": [
"Un disco virtual de la instancia",
"Un tipo de clave de cifrado",
"Un directorio dentro de otro objeto",
"El contenedor donde viven los objetos, con un nombre único a nivel global"
],
"ok": 3,
"f": "El nombre del bucket forma parte de la direccion con la que se accede.",
"src": "Simulacro 05"
},
{
"id": "m69",
"tema": "Bloques, archivos y objetos",
"q": "¿Qué entrega el almacenamiento de bloques?",
"o": [
"Objetos accesibles por HTTP",
"Un arreglo de bloques numerados sin estructura, que el cliente formatea",
"Un árbol de directorios ya formateado",
"Archivos con permisos ya asígnados"
],
"ok": 1,
"f": "No sabe qué hay adentro: es lo que ve el sistema de archivos por debajo",
"src": "Simulacro 05"
},
{
"id": "m70",
"tema": "Shell y comandos",
"q": "¿Para qué se usa el comando mkdir?",
"o": [
"Para crear archivos vacios",
"Para borrar directorios",
"Para montar discos",
"Para crear directorios"
],
"ok": 3,
"f": "mkdir -p a/b/c crea toda la cadena.",
"src": "Simulacro 05"
},
{
"id": "m71",
"tema": "Shell y comandos",
"q": "¿Para qué se usa el comando man?",
"o": [
"Para montar discos",
"Para consultar el manual de un comando",
"Para listar procesos",
"Para administrar usuarios"
],
"ok": 1,
"f": "man ls muestra la documentacion de ls",
"src": "Simulacro 05"
},
{
"id": "m72",
"tema": "API y llamadas al sistema",
"q": "¿Qué es una llamada al sistema?",
"o": [
"Un comando del shell",
"Una función de la biblioteca que corre solo en espacio de usuario",
"Un pedido de servicio al kernel, que implica un cambio de nivel de privilegio",
"Una llamada telefonica al administrador"
],
"ok": 2,
"f": "Es la puerta de entrada controlada al kernel.",
"src": "Simulacro 05"
},
{
"id": "m73",
"tema": "API y llamadas al sistema",
"q": "¿Cuál de estos grupos son llamadas al sistema para trabajar con archivos?",
"o": [
"ext4 xfs btrfs zfs",
"/etc /var /home /opt",
"open read write close",
"ls cat grep echo"
],
"ok": 2,
"f": "Los comandos del shell usan internamente estas llamadas.",
"src": "Simulacro 05"
},
{
"id": "m74",
"tema": "Criptografía y certificados",
"q": "¿Por qué no se cifra un archivo grande directamente con RSA?",
"o": [
"Porque RSA solo cifra texto",
"Porque RSA no tiene clave privada",
"Porque lo asímétrico es varios érdenes de magnitud más lento que lo simétrico",
"Porque el archivo quedaria público"
],
"ok": 2,
"f": "Se usa un esquema híbrido: asímétrico para identidad y key exchange, simétrico para los datos.",
"src": "Simulacro 05"
},
{
"id": "m75",
"tema": "Laboratorio de Kubernetes",
"q": "¿Para qué se usa un ConfigMap en el despliegue de Asterisk?",
"o": [
"Para guardar archivos de configuración como pjsip.conf separados de la imagen del contenedor",
"Para almacenar la imagen de Asterisk",
"Para guardar las grabaciones de las llamadas",
"Para mapear los puertos del nodo"
],
"ok": 0,
"f": "Se cambia la configuración sin reconstruir la imagen.",
"src": "Simulacro 05"
},
{
"id": "m76",
"tema": "Inodos y enlaces",
"q": "¿Qué comando crea un soft link llamado corto hacia /ruta/larga?",
"o": [
"ln -s /ruta/larga corto",
"mv -s /ruta/larga corto",
"cp -s /ruta/larga corto",
"ln /ruta/larga corto"
],
"ok": 0,
"f": "ln crea hard links por omisión; con -s crea un soft link.",
"src": "Simulacro 06"
},
{
"id": "m77",
"tema": "Rutas y directorios",
"q": "¿Qué es una ruta relativa?",
"o": [
"Una ruta que apunta a otro sistema de archivos",
"Una ruta que se interpreta a partir del directorio de trabajo actual",
"Una ruta que solo puede usar el superusuario",
"Una ruta que comienza en"
],
"ok": 1,
"f": "Su significado cambia segun el directorio actual.",
"src": "Simulacro 06"
},
{
"id": "m78",
"tema": "Rutas y directorios",
"q": "¿Qué se guarda en /etc?",
"o": [
"Los logs del sistema",
"Los archivos temporales",
"Los programas que instala el usuario",
"La configuración del sistema, en archivos de texto"
],
"ok": 3,
"f": "/etc es lo primero que se mira y lo primero que se respalda.",
"src": "Simulacro 06"
},
{
"id": "m79",
"tema": "Permisos",
"q": "Para borrar un archivo, ¿sobre qué se necesita permiso de escritura?",
"o": [
"Sobre el directorio que lo contien",
"Sobre el directorio raíz",
"Sobre el i-nodo del archivo",
"Sobre el archivo mismo"
],
"ok": 0,
"f": "Borrar es quitar una entrada de la tabla del directorio, y eso modifica el directorio",
"src": "Simulacro 06"
},
{
"id": "m80",
"tema": "Permisos",
"q": "¿Para qué sirve el sticky bit en un directorio como /tmp?",
"o": [
"Hace que los archivos no se borren al reiniciar",
"Impide que un usuario borre archivos que no son suyos, aunque todos puedan escribir en el directorio",
"Hace que los archivos nuevos hereden el grupo del directorio",
"Permite ejecutar programas con permisos de root"
],
"ok": 1,
"f": "Sin él, cualquiera con escritura en /tmp podría borrar los archivos de otros.",
"src": "Simulacro 06"
},
{
"id": "m81",
"tema": "Montaje y sistemas de archivos",
"q": "¿Qué caracteriza a ZFS?",
"o": [
"Es un comando de Linux para formatear",
"Es el sistema de archivos de los pendrives",
"Es una versión de FAT para discos grandes",
"Integra en uno solo el sistema de archivos y la gestin de volumenes, con checksums"
],
"ok": 3,
"f": "Igual que btrfs, conoce los archivos y puede verificar y reparar los datos.",
"src": "Simulacro 06"
},
{
"id": "m82",
"tema": "Bloques, archivos y objetos",
"q": "¿Cómo se accede normalmente a un objeto guardado en almacenamiento de objetos?",
"o": [
"Mediante pedidos HTTP a una interfaz web",
"Leyendo sus bloques directamente",
"Montandolo como un disco y formateandolo",
"Con un hard link desde el sistema local"
],
"ok": 0,
"f": "No se monta: se le piden objetos por su clave a través de la red.",
"src": "Simulacro 06"
},
{
"id": "m83",
"tema": "Shell y comandos",
"q": "¿Qué caracteriza a fish?",
"o": [
"Es el shell estándar que usa el sistema para arrancar",
"Es un shell sin variables",
"Es muy amigable, pero su sintaxis no es compatible con sh",
"Es el shell por omisión de Debian"
],
"ok": 2,
"f": "Por eso no sirve para scripts portables.",
"src": "Simulacro 06"
},
{
"id": "m84",
"tema": "Shell y comandos",
"q": "¿Qué contiene la variable de entorno PATH?",
"o": [
"La ruta del directorio personal",
"La ruta del directorio actual",
"La lista de directorios donde el shell busca los ejecutables",
"La contraseña del usuario cifrada"
],
"ok": 2,
"f": "Si un programa no esta en esos directorios, hay que indicar su ruta.",
"src": "Simulacro 06"
},
{
"id": "m85",
"tema": "Shell y comandos",
"q": "¿Cuál es la diferencia de fondo entre un pipe de bash y uno de PowerShell?",
"o": [
"PowerShell no tiene pipes",
"En bash viaja texto; en PowerShell viajan objetos con propiedades",
"En bash viajan objetos; en PowerShell texto",
"bash solo admite un pipe por línea"
],
"ok": 1,
"f": "En bash hay que cortar el texto por columnas; en PowerShell se accede a propiedades por nombre.",
"src": "Simulacro 06"
},
{
"id": "m86",
"tema": "API y llamadas al sistema",
"q": "¿Qué es una ABI?",
"o": [
"Una biblioteca gráfica",
"Un sinonimo de API",
"El contrato a nivel binario: como se pasan los argumentos, como se disponen las estructuras y el formato del ejecutable",
"Un lenguaje de programacion"
],
"ok": 2,
"f": "Determina si un binario compilado corre sin recompilar.",
"src": "Simulacro 06"
},
{
"id": "m87",
"tema": "API y llamadas al sistema",
"q": "¿Cómo se organiza tipicamente un programa con interfaz gráfica?",
"o": [
"Alrededor de un event loop que espera acciones del usuario y las atiende",
"Como un script de shell",
"Como un proceso que nunca usa llamadas al sistema",
"Como una secuencia fija de pasos sin interaccion"
],
"ok": 0,
"f": "Clics y teclas llegan como eventos que el programa procesa uno por uno.",
"src": "Simulacro 06"
},
{
"id": "m88",
"tema": "Criptografía y certificados",
"q": "Un mensaje cifrado con la clave pública de Ana solo puede descifrarse con:",
"o": [
"Cualquier clave pública",
"La clave privada de quien lo envio",
"La clave pública de Ana",
"La clave privada de Ana"
],
"ok": 3,
"f": "Por eso cualquiera puede escribirle a Ana en secreto, pero solo ella puede leer.",
"src": "Simulacro 06"
},
{
"id": "m89",
"tema": "Criptografía y certificados",
"q": "SSH avisa que el fingerprint del servidor cambio. ¿Qué conviene hacer?",
"o": [
"Cambiar a autenticación por contraseña",
"Ignorar el aviso",
"Verificar el fingerprint nuevo por un canal independiente antes de aceptarla",
"Borrar la línea de servidores conocidos y seguir"
],
"ok": 2,
"f": "Puede ser una reinstalacion, pero también alguien interponiéendose en la conexión.",
"src": "Simulacro 06"
},
{
"id": "m90",
"tema": "Laboratorio de Kubernetes",
"q": "¿Qué diferencia hay entre un Service de tipo ClusterIP y uno de tipo NodePort?",
"o": [
"NodePort solo funciona con HTTP",
"ClusterIP solo es accesible dentro del cluster; NodePort además abre un puerto en el nodo (como 30022 para SFTP",
"ClusterIP es más rápido y NodePort más lento",
"No hay diferencia, son sinónimos"
],
"ok": 1,
"f": "La app web es ClusterIP y se pública por Traefik; SFTP, Samba y NFS usan NodePort.",
"src": "Simulacro 06"
},
{
"id": "m91",
"tema": "Inodos y enlaces",
"q": "¿Dónde se guarda el nombre de un archivo en un sistema de archivos tipo UNIX?",
"o": [
"En la entrada del directorio que lo contiene, que asocia el nombre con el número de i-nodo",
"En la tabla de procesos del kernel",
"Dentro del i-nodo del archivo",
"En los primeros bytes del contenido del archivo"
],
"ok": 0,
"f": "Un directorio es una tabla de pares nombre -→ número de i-nodo.",
"src": "Simulacro 07"
},
{
"id": "m92",
"tema": "Rutas y directorios",
"q": "¿Cuál de los siguientes NO es un directorio estándar de la raíz en Linux?",
"o": [
"/drivers",
"/sys",
"/mnt",
"/media"
],
"ok": 0,
"f": "Los dispositivos aparecen en /dev y sus parámetros en /sys; /drivers no existe en la norma.",
"src": "Simulacro 07"
},
{
"id": "m93",
"tema": "Permisos",
"q": "En los permisos de UNIX, las tres ternas se refieren a:",
"o": [
"El usuario, el proceso y el kernel",
"Lectura, escritura y ejecución",
"El superusuario, el administrador y el invitado",
"El propietario del archivo, el grupo del archivo y el resto de los usuarios"
],
"ok": 3,
"f": "owner u, group g y other o.",
"src": "Simulacro 07"
},
{
"id": "m94",
"tema": "Permisos",
"q": "Sobre un directorio, ¿qué permite el permiso de ejecución x?",
"o": [
"Listar los nombres de su contenido",
"Ejecutar todos los programas que contiene",
"Atravesarlo, es decir, entrar en él y acceder a lo que contiene",
"Borrar el directorio"
],
"ok": 2,
"f": "Sin x no se puede entrar al directorio aunque se puedan ver los nombres.",
"src": "Simulacro 07"
},
{
"id": "m95",
"tema": "Montaje y sistemas de archivos",
"q": "¿Qué significa formatear una partición?",
"o": [
"Dividirla en partes más chicas",
"Crear en ella las estructuras de un sistema de archivos i-nodos, directorio raíz, etc.",
"Darle permisos 755",
"Montarla en un directorio"
],
"ok": 1,
"f": "Después de formatear, la partición esta lista para montarse.",
"src": "Simulacro 07"
},
{
"id": "m96",
"tema": "Bloques, archivos y objetos",
"q": "En S3, un objeto tiene la clave 2026/03/informe.pdf. ¿Qué significan las barras?",
"o": [
"Son caracteres más del nombre: no existen directorios 2026 ni 03",
"Indican que el objeto esta dentro de dos directorios reales",
"Indican que el objeto esta dividido en tres partes",
"Indican la ruta en el disco físico"
],
"ok": 0,
"f": "El namespace del almacenamiento de objetos es plano.",
"src": "Simulacro 07"
},
{
"id": "m97",
"tema": "Shell y comandos",
"q": "¿Cuál es el shell por omisión en la mayoria de las distribuciónes de Linux?",
"o": [
"PowerShell",
"fish",
"csh",
"bash"
],
"ok": 3,
"f": "bash es el más difundido; conviene saberlo si o si.",
"src": "Simulacro 07"
},
{
"id": "m98",
"tema": "Shell y comandos",
"q": "¿Cuál es el shell por omisión de macOs en la actualidad?",
"o": [
"fish",
"ksh",
"bash",
"zsh"
],
"ok": 3,
"f": "zsh es muy comodo para uso interactivo.",
"src": "Simulacro 07"
},
{
"id": "m99",
"tema": "API y llamadas al sistema",
"q": "¿Cuál es la API principal de Windows?",
"o": [
"POSIX",
"Win32",
"ext4",
"bash"
],
"ok": 1,
"f": "Es mucho más amplia que el kernel de llamadas de UNlX.",
"src": "Simulacro 07"
},
{
"id": "m100",
"tema": "API y llamadas al sistema",
"q": "Las aplicaciones acceden a S3 mediante pedidos HTTP con un formato definido. ¿Cómo se llama ese contrato?",
"o": [
"Una ABI",
"Una API",
"Un sistema de archivos",
"Un soft link"
],
"ok": 1,
"f": "Una API también puede ofrecerse por red: define qué pedidos se pueden hacer y qué devuelven.",
"src": "Simulacro 07"
},
{
"id": "m101",
"tema": "Criptografía y certificados",
"q": "¿En qué se basa la seguridad de RSA?",
"o": [
"En que la clave pública nunca se pública",
"En mantener en secreto el algoritmo",
"En que es muy difícil factorizar el producto de dos números primos grandes",
"En cambiar la clave cada minuto"
],
"ok": 2,
"f": "Multiplicar es fácil; deshacer la multiplicacion, carisimo.",
"src": "Simulacro 07"
},
{
"id": "m102",
"tema": "Criptografía y certificados",
"q": "¿Qué comando genera un par de claves para SSH?",
"o": [
"openssl ca",
"chmod",
"ssh-keygen",
"ssh-copy-id"
],
"ok": 2,
"f": "Por ejemplo ssh-keygen -t ed25519",
"src": "Simulacro 07"
},
{
"id": "m103",
"tema": "Criptografía y certificados",
"q": "¿Qué amenaza explica que el key exchange ya esté migrando a algoritmos poscuánticos?",
"o": [
"Que las computadoras actuales ya rompen RSA de 4096 bits",
"Que alguien grabe hoy tráfico cifrado y lo descifre cuando exista una computadora cuántica capaz de romper RSA",
"Que Ed25519 fue prohibido por los organismos de estandarización",
"Que las claves simétricas dejaron de ser seguras"
],
"ok": 1,
"f": "Se lo conoce como guardar ahora y descifrar después: por eso se protege el key exchange primero.",
"src": "Simulacro 07"
},
{
"id": "m104",
"tema": "Laboratorio de Kubernetes",
"q": "En Kubernetes, ¿qué es un Pod?",
"o": [
"La unidad minima que se ejecuta: uno o más contenedores que comparten red y volumenes",
"Un archivo de configuración YAML",
"Un nodo físico del cluster",
"Un disco persistente"
],
"ok": 0,
"f": "Kubernetes no ejecuta contenedores sueltos sino Pods.",
"src": "Simulacro 07"
},
{
"id": "m105",
"tema": "Laboratorio de Kubernetes",
"q": "La partición persistente del pendrive se monta con la opcion noatime. ¿Qué evita?",
"o": [
"Que se puedan crear archivos nuevos",
"Que la partición se monte al arranque",
"Que cada lectura no actualice la fecha de acceso, para no desgastar la memoria flash",
"Que se pueda leer la partición desde otros sistemas operativos"
],
"ok": 2,
"f": "Evita escrituras innecesarias en un pendrive, que tiene una cantidad limitada de ciclos.",
"src": "Simulacro 07"
},
{
"id": "m106",
"tema": "Inodos y enlaces",
"q": "¿Qué es un soft link?",
"o": [
"Otro nombre que apunta al mismo i-nodo que el archivo original",
"Un permiso especial que permite leer archivos protegidos",
"Una copia del archivo que se actualiza sola",
"Un archivo especial cuyo contenido es la ruta de otro archivo"
],
"ok": 3,
"f": "El soft link guarda una ruta; si el archivo destino se mueve o se borra, el enlace queda roto.",
"src": "Simulacro 08"
},
{
"id": "m107",
"tema": "Inodos y enlaces",
"q": "¿Cuál de estos dispositivos se representa tipicamente como un archivo especial de bloques?",
"o": [
"Un puerto serie",
"Una terminal",
"Un disco",
"Un teclado"
],
"ok": 2,
"f": "Los dispositivos de bloques permiten acceso aleatorio a bloques numerados; los de caracteres entregan un flujo de bytes.",
"src": "Simulacro 08"
},
{
"id": "m108",
"tema": "Rutas y directorios",
"q": "¿Para qué se usa /opt?",
"o": [
"Para software instalado aparte, fuera del gestor de paquetes de la distribución",
"Para los archivos temporales de los programas",
"Para los puntos de montaje de discos externos",
"Para las opciones de arranque del kernel"
],
"ok": 0,
"f": "/opt es para software instalado aparte, fuera del gestor de paquetes de la distribución.",
"src": "Simulacro 08"
},
{
"id": "m109",
"tema": "Permisos",
"q": "¿Qué usuario puede leer o modificar cualquier archivo sin importar sus permisos?",
"o": [
"El superusuario root",
"Cualquier usuario del grupo del archivo",
"El propietario del directorio raíz",
"Ninguno: los permisos se aplican a todos"
],
"ok": 0,
"f": "root saltea las verificaciones de permisos salvo mecanismos adicionales como atributos inmutables",
"src": "Simulacro 08"
},
{
"id": "m110",
"tema": "Montaje y sistemas de archivos",
"q": "¿Qué comando desmonta un sistema de archivos?",
"o": [
"umount",
"mkfs",
"rm",
"unmount -f"
],
"ok": 0,
"f": "Se monta con mount y se desmonta con umount.",
"src": "Simulacro 08"
},
{
"id": "m111",
"tema": "Montaje y sistemas de archivos",
"q": "¿Cuál es una ventaja de usar LVM frente a particiones fijas?",
"o": [
"Permitir hard links entre discos",
"Evitar tener que usar un sistema de archivos",
"Poder agrandar un volumen sin reparticionar el disco, incluso usando varios discos",
"Hacer innecesarios los respaldos"
],
"ok": 2,
"f": "Una partición tiene tamaño y posicion fjos; un volumen lógico no.",
"src": "Simulacro 08"
},
{
"id": "m112",
"tema": "Bloques, archivos y objetos",
"q": "¿Se puede modificar una parte de un objeto sin reescribirlo entero?",
"o": [
"Si, pero solo los primeros bloques",
"No: el objeto se reemplaza completo",
"Si, si se lo monta primero",
"Si, como en cualquier archivo"
],
"ok": 1,
"f": "Es una de las diferencias de fondo con bloques y archivos.",
"src": "Simulacro 08"
},
{
"id": "m113",
"tema": "Shell y comandos",
"q": "Al escribir ls *.txt, ¿quién reemplaza *.txt por la lista de archivos?",
"o": [
"El kernel",
"El sistema de archivos",
"El comando 1s",
"El shell, antes de ejecutar el programa"
],
"ok": 3,
"f": "ls recibe la lista ya expandida y nunca ve el asterisco.",
"src": "Simulacro 08"
},
{
"id": "m114",
"tema": "API y llamadas al sistema",
"q": "En UNIX, ¿cómo se crea un proceso que ejecute otro programa?",
"o": [
"Con el comando mkdir",
"Copiando el ejecutable a /proc",
"Con una única llamada que recibe todos los parametros",
"Con una llamada que crea una copia del proceso padre y otra que carga el nuevo programa"
],
"ok": 3,
"f": "fork crea la copia y exec carga el programa; Windows lo hace en una sola llamada",
"src": "Simulacro 08"
},
{
"id": "m115",
"tema": "Criptografía y certificados",
"q": "¿Qué es el esquema híbrido que usan SSH y TLS?",
"o": [
"Se alterna entre RSA y Ed25519 en cada paquete",
"Lo asímétrico se usa para autenticar y acordar una clave; después los datos viajan con cifrado simétrico",
"Se cifra todo dos veces, una con cada clave",
"Se usa solo cifrado simétrico con contraseña"
],
"ok": 1,
"f": "Combina la comodidad de lo asímétrico con la velocidad de lo simétrico.",
"src": "Simulacro 08"
},
{
"id": "m116",
"tema": "Criptografía y certificados",
"q": "En la cadena de confianza de TLS, ¿quién emite habitualmente los certificados de los sitios?",
"o": [
"Una autoridad intermedia, firmada a su vez por una raíz",
"El dueño del sitio, sin intervencion de terceros",
"La autoridad raíz directamente, siempre",
"El propio navegador"
],
"ok": 0,
"f": "La intermedia opera en el dia a dia y protege a la raíz.",
"src": "Simulacro 08"
},
{
"id": "m117",
"tema": "Criptografía y certificados",
"q": "La primera vez que uno se conecta por SSH a un servidor, el cliente muestra un fingerprint y pide aceptarlo. ¿Cómo se llama ese modelo?",
"o": [
"Autenticación por contraseña",
"TOFU trust on first use",
"Cadena de confianza",
"Cifrado simétrico"
],
"ok": 1,
"f": "Se guarda el fingerprint y en las conexiones siguientes se exige la misma.",
"src": "Simulacro 08"
},
{
"id": "m118",
"tema": "Laboratorio de Kubernetes",
"q": "¿Para qué se usa el comando kubectl?",
"o": [
"Para editar archivos de texto",
"Para administrar el cluster de Kubernetes desde la línea de comandos",
"Para montar volúmenes NFS",
"Para construir imágenes"
],
"ok": 1,
"f": "Por ejemplo kubectl get pods -n lab-so.",
"src": "Simulacro 08"
},
{
"id": "m119",
"tema": "Laboratorio de Kubernetes",
"q": "¿Qué hace docker tag mi-app:v1 localhost:30500/utec/mi-app:v1?",
"o": [
"Borra la imagen original",
"Sube la imagen al registry",
"Agrega otro nombre a la misma imagen, sin copiar sus capas, indicando el registry de destino",
"Duplica la imagen y ocupa el doble de espacio"
],
"ok": 2,
"f": "Es un nuevo puntero a la misma imagen; el prefijo le dice a push a qué servidor enviarla.",
"src": "Simulacro 08"
},
{
"id": "m120",
"tema": "Inodos y enlaces",
"q": "Se crea un soft link hacia informe.txt y después se borra informe.txt. ¿Qué pasa con el enlace?",
"o": [
"Queda roto: apunta a una ruta que ya no existe",
"Sigue funcionando porque comparte el i-nodo con el original",
"Pasa a contener una copia de los datos",
"Se borra automáticamente junto con el original"
],
"ok": 0,
"f": "El soft link solo guarda la ruta; si ese nombre desaparece, no hay a donde llegar.",
"src": "Simulacro 09"
},
{
"id": "m121",
"tema": "Inodos y enlaces",
"q": "¿Qué comando muestra los metadatos completos de un archivo, incluido su número de i-nodo?",
"o": [
"echo",
"stat",
"pwd",
"cat"
],
"ok": 1,
"f": "stat muestra i-nodo, enlaces, permisos y fechas.",
"src": "Simulacro 09"
},
{
"id": "m122",
"tema": "Rutas y directorios",
"q": "¿Qué caracteristica tiene /tmp?",
"o": [
"Solo puede escribir en él el superusuario",
"Guarda archivos temporales y su contenido se borra al reiniciar",
"Contiene los dispositivos del sistema",
"Guarda la configuración que se respalda todos los dias"
],
"ok": 1,
"f": "Es un área temporal compartida, que además lleva el sticky bit",
"src": "Simulacro 09"
},
{
"id": "m123",
"tema": "Rutas y directorios",
"q": "¿Qué hace cd sin argumentos?",
"o": [
"Vuelve al directorio anterior",
"Muestra el directorio actual",
"Lleva a la raíz del sistema",
"Lleva al directorio personal del usuario"
],
"ok": 3,
"f": "Sin argumentos va a HOME; con cd - vuelve al anterior.",
"src": "Simulacro 09"
},
{
"id": "m124",
"tema": "Permisos",
"q": "¿A qué valor octal corresponde -rwxr-xr-x ?",
"o": [
"777",
"744",
"755",
"711"
],
"ok": 2,
"f": "rwx = 7, r-x = 5, r-x = 5.",
"src": "Simulacro 09"
},
{
"id": "m125",
"tema": "Montaje y sistemas de archivos",
"q": "¿Cuál de estos sistemas de archivos NO se puede reducir de tamaño?",
"o": [
"XFS",
"ext4",
"btrfs",
"Ninguno: todos se pueden reducir"
],
"ok": 0,
"f": "Es una decision de diseño de XFS: solo puede crecer.",
"src": "Simulacro 09"
},
{
"id": "m126",
"tema": "Bloques, archivos y objetos",
"q": "¿Cuál de los siguientes NO es un uso típico del almacenamiento de objetos?",
"o": [
"Las fotos de una aplicación web",
"El disco donde esta instalado el sistema operativo",
"Los logs que se guardan para analisis",
"El archivo historico de respaldos"
],
"ok": 1,
"f": "Un sistema operativo necesita un dispositivo de bloques que pueda formatear y modificar por partes.",
"src": "Simulacro 09"
},
{
"id": "m127",
"tema": "Shell y comandos",
"q": "¿Qué hay que tener en cuenta al usar rm?",
"o": [
"Pide siempre confirmacion",
"El borrado es definitivo: no hay papelera",
"Solo mueve los archivos a /tmp",
"Solo funciona con directorios vacios"
],
"ok": 1,
"f": "Con -r borra arboles completos sin preguntar.",
"src": "Simulacro 09"
},
{
"id": "m128",
"tema": "Shell y comandos",
"q": "¿Para qué se usa el comando ps?",
"o": [
"Para imprimir archivos",
"Para cambiar la contraseña",
"Para ver el espacio en disco",
"Para listar los procesos en ejecución"
],
"ok": 3,
"f": "ps aux muestra todos los procesos del sistema.",
"src": "Simulacro 09"
},
{
"id": "m129",
"tema": "API y llamadas al sistema",
"q": "¿Qué diferencia hay entre printf y write en C sobre UNIX?",
"o": [
"printf es una función de biblioteca en espacio de usuario; write es una llamada al sistema",
"printf es una llamada al sistema y write una función de biblioteca",
"write solo funciona en Windows",
"Son exactamente lo mismo"
],
"ok": 0,
"f": "printf formatea el texto y termina usando write para pedirle al kernel que lo escriba.",
"src": "Simulacro 09"
},
{
"id": "m130",
"tema": "Criptografía y certificados",
"q": "¿Qué propiedad tiene una conexión con forward secrecy?",
"o": [
"La clave privada se envia cifrada al cliente",
"La sesión dura para siempre",
"Si en el futuro se roba la clave privada del servidor, no se pueden descifrar las sesiones pasadas",
"La conexión nunca necesita claves"
],
"ok": 2,
"f": "Cada sesión usa claves temporales que se descartan.",
"src": "Simulacro 09"
},
{
"id": "m131",
"tema": "Laboratorio de Kubernetes",
"q": "El Deployment mi-app declara 2 replicas. ¿Qué significa?",
"o": [
"Que Kubernetes mantiene siempre dos Pods iguales funcionando y recrea cualquiera que se caiga",
"Que la aplicación usa dos puertos",
"Que hay dos versiones distintas de la aplicación",
"Que la imagen se guarda dos veces en el registry"
],
"ok": 0,
"f": "El Deployment declara el estado deseado y Kubernetes lo sostiene.",
"src": "Simulacro 09"
},
{
"id": "m132",
"tema": "Laboratorio de Kubernetes",
"q": "¿Qué función cumple Traefik en el laboratorio?",
"o": [
"Reemplaza a containerd",
"Construye las imagenes de contenedores",
"Recibe el tráfico HTTP en los puertos 80 y 443 y lo dirige al Service que corresponde",
"Almacena los volumenes persistentes"
],
"ok": 2,
"f": "Con Gateway API, la ruta / llega al Service mi-app",
"src": "Simulacro 09"
},
{
"id": "m133",
"tema": "Laboratorio de Kubernetes",
"q": "¿Sobre qué protocolo funciona SFTP?",
"o": [
"Sobre UDP, sin conexión",
"Sobre SMB",
"Sobre FTP sin cifrar",
"Sobre SSH, en un único canal TCP cifrado"
],
"ok": 3,
"f": "No confundir con FTPS, que es FTP sobre TLS.",
"src": "Simulacro 09"
},
{
"id": "m134",
"tema": "Inodos y enlaces",
"q": "Se crea un hard link hacia datos.csv y después se borra datos.csv. ¿Qué pasa con los datos?",
"o": [
"Se mueven automáticamente a la papelera",
"Siguen accesibles por el otro nombre; se liberan reciéen cuando no queda ningun enlace",
"Quedan accesibles solo para el superusuario",
"Se pierden, porque el hard link solo guardaba la ruta"
],
"ok": 1,
"f": "El i-nodo lleva un contador de enlaces; borrar un nombre lo decrementa y los datos se liberan al llegar a cero",
"src": "Simulacro 10"
},
{
"id": "m135",
"tema": "Inodos y enlaces",
"q": "¿Qué contiene el directorio /proc?",
"o": [
"Información en tiempo real sobre los procesos y el estado del sistema, generada por el kernel",
"Los archivos de configuración del sistema",
"Los programas instalados por el gestor de paquetes",
"Las copias de respaldo de los procesos terminados"
],
"ok": 0,
"f": "/proc es virtual: no ocupa disco, el kernel genera su contenido al leerlo.",
"src": "Simulacro 10"
},
{
"id": "m136",
"tema": "Rutas y directorios",
"q": "¿Qué es una ruta absoluta?",
"o": [
"Una ruta que siempre termina en un archivo",
"Una ruta que incluye la letra de la unidad",
"Una ruta que comienza en el directorio de trabajo actual",
"Una ruta que comienza en la raíz del árbol, /"
],
"ok": 3,
"f": "La ruta absoluta no depende de donde esté parado el usuario",
"src": "Simulacro 10"
},
{
"id": "m137",
"tema": "Rutas y directorios",
"q": "¿Cuál de las siguientes es una ruta relativa?",
"o": [
"/var/log/syslog",
"/etc/hosts",
"../datos/ventas.csv",
"/"
],
"ok": 2,
"f": "No comienza en /: depende del directorio actual.",
"src": "Simulacro 10"
},
{
"id": "m138",
"tema": "Rutas y directorios",
"q": "En el shell, ¿qué representa ~ ?",
"o": [
"La raíz del sistema",
"El directorio de archivos temporales",
"El directorio personal del usuario",
"El directorio anterior"
],
"ok": 2,
"f": "~ se expande al valor de HOME.",
"src": "Simulacro 10"
},
{
"id": "m139",
"tema": "Permisos",
"q": "¿Qué permisos representa 755?",
"o": [
"Solo el propietario puede hacer algo",
"El grupo y los demás solo pueden escribir",
"Todos leen, escriben y ejecutan",
"El propietario lee, escribe y ejecuta; el grupo y los demás leen y ejecutan"
],
"ok": 3,
"f": "No comienza en /: depende del directorio actual.",
"src": "Simulacro 10"
},
{
"id": "m140",
"tema": "Permisos",
"q": "¿Qué es el umask?",
"o": [
"Un permiso especial que cifra el contenido",
"Un valor por proceso que indica quée permisos quitar a todo archivo nuevo",
"Un comando que oculta archivos",
"La lista de usuarios que pueden crear archivos"
],
"ok": 1,
"f": "Con la máscara habitual, un archivo nuevo queda en 644 y un directorio en 755.",
"src": "Simulacro 10"
},
{
"id": "m141",
"tema": "Montaje y sistemas de archivos",
"q": "¿Por qué el sistema puede negarse a desmontar un sistema de archivos?",
"o": [
"Porque el disco está casí lleno",
"Porque el sistema de archivos tiene demasíados i-nodos",
"Porque algun proceso tiene archivos abiertos o su directorio de trabajo esta dentro de él",
"Porque los permisos son 644"
],
"ok": 2,
"f": "Desmontarlo en uso dejaria a esos procesos sin sus archivos.",
"src": "Simulacro 10"
},
{
"id": "m142",
"tema": "Bloques, archivos y objetos",
"q": "Un sitio web estatico publicado en un servicio como S3, ¿qué tipo de almacenamiento usa?",
"o": [
"Almacenamiento de objetos",
"Un volumen lógico de LVM",
"Un sistema de archivos ext4",
"Almacenamiento de bloques"
],
"ok": 0,
"f": "Cada pagina es un objeto que se pide por HTTP.",
"src": "Simulacro 10"
},
{
"id": "m143",
"tema": "Shell y comandos",
"q": "¿Qué hace el símbolo | (pipe) entre dos comandos?",
"o": [
"Guarda la salida del primero en un archivo",
"Ejecuta el segundo solo si el primero falla",
"Conecta la salida estándar del primero con la entrada estándar del segundo",
"Ejecuta los dos comandos al mismo tiempo sin relación"
],
"ok": 2,
"f": "Es la base de la filosofía de herramientas pequeñas que se combinan.",
"src": "Simulacro 10"
},
{
"id": "m144",
"tema": "Shell y comandos",
"q": "¿Para qué se usa el comando head?",
"o": [
"Para ver las ultimas líneas de un archivo",
"Para ver el usuario actual",
"Para ver el encabezado de un i-nodo",
"Para ver las primeras líneas de un archivo"
],
"ok": 3,
"f": "head -20 datos.csv muestra las primeras 20 líneas.",
"src": "Simulacro 10"
},
{
"id": "m146",
"tema": "Criptografía y certificados",
"q": "En la autenticación SSH por clave pública, ¿qué se copia al servidor?",
"o": [
"La clave pública del usuario, en el archivo de claves autorizadas",
"La contraseña del usuario",
"La clave privada del usuario",
"Las dos claves"
],
"ok": 0,
"f": "La privada nunca sale del equipo del usuario",
"src": "Simulacro 10"
},
{
"id": "m147",
"tema": "Criptografía y certificados",
"q": "¿Para qué sirve proteger la clave privada con una passphrase?",
"o": [
"Para que robar el archivo de la clave no alcance para usarla",
"Para que la conexión sea más rápida",
"Para que la clave pública también quede protegida",
"Para no tener que copiar la clave pública al servidor"
],
"ok": 0,
"f": "La passphrase cifra la clave privada en el disco.",
"src": "Simulacro 10"
},
{
"id": "m148",
"tema": "Laboratorio de Kubernetes",
"q": "¿Para qué sirve el registry de contenedores que corre dentro de K3s en el puerto 30500?",
"o": [
"Para guardar los logs de los Pods",
"Para almacenar las imágenes propias y que el cluster las descargue sin depender de Internet",
"Para registrar los usuarios de Fedora",
"Para registrar los internos telefónicos"
],
"ok": 1,
"f": "Es un Docker Registry v2 con sus datos en un volumen persistente del pendrive",
"src": "Simulacro 10"
},
{
"id": "n1",
"tema": "Inodos y enlaces",
"q": "¿Qué ocurre con el contador de enlaces de un i-nodo cuando se crea un hard link?",
"o": [
"Se reinicia en cero",
"Aumenta en uno",
"Disminuye en uno",
"No cambia"
],
"ok": 1,
"f": "Cada hard link es un nombre más que apunta al mismo i-nodo, por eso el contador sube.",
"src": "Nueva"
},
{
"id": "n2",
"tema": "Inodos y enlaces",
"q": "¿Qué contiene un soft link guardado en disco?",
"o": [
"Una copia de los bloques del archivo destino",
"El número de i-nodo del archivo destino",
"El contador de enlaces del archivo destino",
"Una ruta (un texto) hacia el archivo destino"
],
"ok": 3,
"f": "Por eso puede apuntar a otro sistema de archivos y por eso queda roto si se borra el destino.",
"src": "Nueva"
},
{
"id": "n3",
"tema": "Inodos y enlaces",
"q": "¿Qué muestra el comando stat de un archivo?",
"o": [
"Solo el contenido del archivo",
"Los procesos que tienen el archivo abierto",
"El i-nodo, el contador de enlaces, permisos y fechas",
"Únicamente el tamaño en bytes"
],
"ok": 2,
"f": "stat lee los metadatos del i-nodo; no muestra el contenido.",
"src": "Nueva"
},
{
"id": "n4",
"tema": "Rutas y directorios",
"q": "¿Dónde se guarda la configuración del sistema en Linux?",
"o": [
"/lib",
"/etc",
"/bin",
"/srv"
],
"ok": 1,
"f": "/etc contiene archivos de configuración en texto y es lo primero que se respalda.",
"src": "Nueva"
},
{
"id": "n5",
"tema": "Rutas y directorios",
"q": "¿Cuál es la diferencia entre un archivo y un directorio en el sistema de archivos?",
"o": [
"El archivo es el que puede contener otros archivos además de datos",
"El directorio es un archivo especial cuya tabla asocia nombres con números de i-nodo",
"El directorio no ocupa bloques en disco ni tiene un número de i-nodo propio",
"No hay ninguna diferencia técnica: se distinguen solo por convención"
],
"ok": 1,
"f": "Un directorio es un archivo con formato especial: su contenido son entradas nombre → i-nodo.",
"src": "Nueva"
},
{
"id": "n6",
"tema": "Rutas y directorios",
"q": "Si el directorio actual es /home/ana y se escribe cd../.., ¿dónde queda el usuario?",
"o": [
"En /home",
"En /home/ana",
"En /root",
"En /"
],
"ok": 3,
"f": "Cada.. sube un nivel: de /home/ana a /home y de /home a la raíz.",
"src": "Nueva"
},
{
"id": "n7",
"tema": "Permisos",
"q": "¿Qué permiso hace falta para entrar en un directorio y leer un archivo que está dentro?",
"o": [
"Lectura sobre el archivo únicamente",
"Solo lectura sobre el directorio",
"Ejecución sobre el directorio",
"Escritura sobre el archivo"
],
"ok": 2,
"f": "Sin el permiso x sobre el directorio no se puede atravesarlo, aunque se vean los nombres.",
"src": "Nueva"
},
{
"id": "n8",
"tema": "Permisos",
"q": "El comando chmod 640 informe.txt deja el archivo con estos permisos:",
"o": [
"Propietario solo lee; grupo escribe",
"Propietario lee y escribe; grupo lee; otros nada",
"Propietario lee y escribe; grupo y otros leen",
"Todos leen y escriben"
],
"ok": 1,
"f": "6 = rw-, 4 = r--, 0 = ---.",
"src": "Nueva"
},
{
"id": "n9",
"tema": "Permisos",
"q": "¿Qué hace el comando chown?",
"o": [
"Cambia los permisos de un archivo",
"Crea un usuario nuevo",
"Muestra el propietario del sistema",
"Cambia el propietario y el grupo de un archivo"
],
"ok": 3,
"f": "chown usuario:grupo archivo cambia la propiedad; los permisos se cambian con chmod.",
"src": "Nueva"
},
{
"id": "n10",
"tema": "Permisos",
"q": "¿Qué efecto tiene el umask 022 sobre un archivo nuevo?",
"o": [
"Le quita escritura al grupo y a otros, así que queda en 644",
"Le da permisos 777 porque la máscara solo afecta a root",
"Impide crear el archivo hasta que se cambie la máscara",
"Le da permisos 755 aunque después se puedan corregir con chmod"
],
"ok": 0,
"f": "Los permisos se calculan restando la máscara a 666 para archivos (y 777 para directorios).",
"src": "Nueva"
},
{
"id": "n11",
"tema": "Montaje y sistemas de archivos",
"q": "¿Qué comando crea un sistema de archivos dentro de una partición?",
"o": [
"umount",
"mount",
"df",
"mkfs"
],
"ok": 3,
"f": "mkfs (make filesystem) escribe las estructuras del sistema de archivos, por ejemplo mkfs.ext4.",
"src": "Nueva"
},
{
"id": "n12",
"tema": "Montaje y sistemas de archivos",
"q": "¿Para qué sirve /etc/fstab?",
"o": [
"Para indicar qué sistemas de archivos se montan, dónde y con qué opciones",
"Para guardar los logs de cada arranque del sistema",
"Para almacenar las claves públicas autorizadas de SSH",
"Para listar los usuarios que pueden iniciar sesión"
],
"ok": 0,
"f": "fstab declara punto de montaje, sistema de archivos y opciones para cada dispositivo.",
"src": "Nueva"
},
{
"id": "n13",
"tema": "Montaje y sistemas de archivos",
"q": "En LVM, ¿qué es un grupo de volúmenes?",
"o": [
"La unión de varios volúmenes físicos de la que se recortan volúmenes lógicos",
"Un punto de montaje temporal que existe mientras dura la sesión",
"Un disco físico completo que se formatea directamente con mkfs",
"Un sistema de archivos ya formateado y listo para montarse"
],
"ok": 0,
"f": "El orden es: volumen físico → grupo de volúmenes → volumen lógico → sistema de archivos.",
"src": "Nueva"
},
{
"id": "n14",
"tema": "Montaje y sistemas de archivos",
"q": "¿Qué característica distingue a un sistema de archivos con copy-on-write como btrfs?",
"o": [
"Que solo funciona en pendrives y en memorias flash extraíbles",
"Que no usa i-nodos: guarda los metadatos dentro de los directorios",
"Que los snapshots son casi gratuitos porque no se copian los datos",
"Que no admite permisos ni propietario por archivo"
],
"ok": 2,
"f": "Al no sobrescribir bloques en uso, tomar una instantánea es barato.",
"src": "Nueva"
},
{
"id": "n15",
"tema": "Bloques, archivos y objetos",
"q": "¿Qué diferencia hay entre el almacenamiento de bloques y el de archivos?",
"o": [
"El de bloques guarda archivos completos y el de archivos guarda bloques numerados",
"El de bloques entrega un arreglo de bloques sin estructura y el de archivos un árbol ya administrado por el servidor",
"Son dos nombres comerciales del mismo servicio de almacenamiento en red",
"Solo el de archivos se puede usar por red; el de bloques es siempre local"
],
"ok": 1,
"f": "El de bloques es materia prima; el de archivos es un árbol ya administrado por el servidor.",
"src": "Nueva"
},
{
"id": "n16",
"tema": "Bloques, archivos y objetos",
"q": "En un objeto de S3, ¿qué son los metadatos definidos por el usuario?",
"o": [
"Pares nombre-valor que el usuario agrega al objeto",
"Las réplicas del objeto en otros servidores",
"Los permisos del sistema de archivos",
"Los bloques que forman el objeto"
],
"ok": 0,
"f": "Además de los metadatos del sistema, cada objeto puede llevar pares propios.",
"src": "Nueva"
},
{
"id": "n17",
"tema": "Bloques, archivos y objetos",
"q": "¿Por qué el almacenamiento de objetos no sirve para instalar un sistema operativo?",
"o": [
"Porque no admite más de un archivo dentro de cada contenedor",
"Porque no se monta como un disco ni se puede modificar por partes",
"Porque obliga a usar FTP en lugar de HTTP para acceder",
"Porque solo guarda texto y no datos binarios de ningún tipo"
],
"ok": 1,
"f": "Un sistema operativo necesita un dispositivo de bloques que pueda formatear y escribir por sectores.",
"src": "Nueva"
},
{
"id": "n18",
"tema": "Shell y comandos",
"q": "¿Qué hace el comando grep error registro.log?",
"o": [
"Renombra el archivo con el nombre del patrón buscado",
"Muestra las líneas de registro.log que contienen error",
"Cuenta cuántas líneas tiene el archivo completo",
"Borra las líneas del archivo que contienen el patrón error"
],
"ok": 1,
"f": "grep filtra líneas según un patrón.",
"src": "Nueva"
},
{
"id": "n19",
"tema": "Shell y comandos",
"q": "En un script, ¿qué diferencia hay entre > y >>?",
"o": [
"> reemplaza el contenido del archivo y >> agrega al final",
"No hay diferencia: los dos escriben al final",
"Los dos agregan al final sin borrar lo anterior",
">> reemplaza el archivo y > agrega al final"
],
"ok": 0,
"f": "> trunca el destino; >> escribe al final sin borrar lo anterior.",
"src": "Nueva"
},
{
"id": "n20",
"tema": "Shell y comandos",
"q": "¿Qué hace la línea echo $HOME dentro de un script?",
"o": [
"Crea la variable HOME",
"Muestra el texto literal $HOME",
"Borra la variable HOME",
"Muestra el valor de la variable HOME"
],
"ok": 3,
"f": "El shell expande $HOME antes de ejecutar echo.",
"src": "Nueva"
},
{
"id": "n21",
"tema": "Shell y comandos",
"q": "¿Qué es POSIX en relación con los shells?",
"o": [
"Un sistema de archivos pensado para servidores con muchos usuarios",
"Un estándar que define el comportamiento común de los shells y la API de UNIX",
"Un protocolo de red para ejecutar comandos remotos sin cifrar la sesión",
"Un shell gráfico con ventanas que reemplaza a la terminal"
],
"ok": 1,
"f": "Un script escrito solo con lo que define POSIX corre en cualquier shell que lo cumpla.",
"src": "Nueva"
},
{
"id": "n22",
"tema": "Shell y comandos",
"q": "En bash, ¿qué hace la orden ls -l > lista.txt 2> errores.txt?",
"o": [
"Guarda la salida normal en lista.txt y los errores en errores.txt",
"Junta la salida normal y los errores al final de lista.txt",
"Muestra todo por pantalla y además lo copia en los dos archivos",
"Borra los dos archivos antes de empezar a escribir en ellos"
],
"ok": 0,
"f": "> redirige la salida estándar y 2> la salida de error.",
"src": "Nueva"
},
{
"id": "n23",
"tema": "Criptografía y certificados",
"q": "¿Qué garantiza una firma digital además de la autenticidad del autor?",
"o": [
"El anonimato del firmante",
"La confidencialidad del mensaje",
"La integridad del mensaje: no fue alterado",
"Que el mensaje llegue más rápido"
],
"ok": 2,
"f": "Firmar no cifra: el contenido sigue visible salvo que además se cifre.",
"src": "Nueva"
},
{
"id": "n24",
"tema": "Criptografía y certificados",
"q": "¿Con qué clave se cifra un mensaje que solo Ana debe poder leer?",
"o": [
"Con una contraseña compartida",
"Con la clave pública de Ana",
"Con la clave privada del emisor",
"Con la clave privada de Ana"
],
"ok": 1,
"f": "Solo la clave privada de Ana puede descifrar lo cifrado con su clave pública.",
"src": "Nueva"
},
{
"id": "n25",
"tema": "Criptografía y certificados",
"q": "¿Qué copia ssh-copy-id al servidor?",
"o": [
"La clave pública del usuario, al archivo de claves autorizadas del servidor",
"El archivo de configuración de SSH del equipo del usuario",
"La clave privada del usuario, para que el servidor pueda autenticarlo",
"La contraseña del usuario, cifrada con la clave pública del servidor"
],
"ok": 0,
"f": "La clave privada nunca sale del equipo del usuario.",
"src": "Nueva"
},
{
"id": "n26",
"tema": "API y llamadas al sistema",
"q": "¿Cuál es la diferencia entre una función de biblioteca y una llamada al sistema?",
"o": [
"La función de biblioteca necesita privilegios de root y la llamada al sistema no",
"Son dos nombres del mismo mecanismo: el nombre depende del lenguaje",
"La función de biblioteca corre en espacio de usuario; la llamada al sistema pide un servicio al kernel",
"La llamada al sistema no puede devolver errores, la función de biblioteca sí"
],
"ok": 2,
"f": "printf es una función de biblioteca que termina usando write, que es la llamada al sistema.",
"src": "Nueva"
},
{
"id": "n27",
"tema": "API y llamadas al sistema",
"q": "¿Qué llamadas al sistema se usan típicamente para leer un archivo?",
"o": [
"fork, exec y wait",
"chmod, chown y umask",
"mkdir, rmdir y stat",
"open, read y close"
],
"ok": 3,
"f": "Se abre con open, se lee con read y se cierra con close.",
"src": "Nueva"
},
{
"id": "n28",
"tema": "Laboratorio de Kubernetes",
"q": "¿Qué es un ConfigMap en Kubernetes?",
"o": [
"Una copia de seguridad de un Pod",
"Un volumen persistente para los datos de la aplicación",
"Un servicio que expone puertos del nodo",
"Un recurso que guarda configuración separada de la imagen del contenedor"
],
"ok": 3,
"f": "Se edita el manifiesto y se aplica con kubectl apply, sin reconstruir la imagen.",
"src": "Nueva"
},
{
"id": "n29",
"tema": "Laboratorio de Kubernetes",
"q": "¿Qué diferencia hay entre un Pod y un contenedor?",
"o": [
"Un Pod solo puede existir fuera del cluster, en el equipo del desarrollador",
"Un Pod es una imagen guardada en el registry y un contenedor es un archivo del nodo",
"Ninguna: son sinónimos y Kubernetes los usa de forma intercambiable",
"Un Pod es la unidad que Kubernetes programa y puede agrupar uno o más contenedores que comparten red y volúmenes"
],
"ok": 3,
"f": "Kubernetes no programa contenedores sueltos: programa Pods.",
"src": "Nueva"
},
{
"id": "n30",
"tema": "Permisos",
"q": "En la salida de ls -l, la línea de un archivo empieza con 'd'. ¿Qué indica ese carácter?",
"o": [
"Que el archivo está duplicado en el disco",
"Que es un directorio y no un archivo común",
"Que el propietario tiene todos los permisos",
"Que el archivo está dañado"
],
"ok": 1,
"f": "El primer carácter distingue el tipo: '-' archivo común, 'd' directorio, 'l' enlace simbólico, 'c' y 'b' dispositivos.",
"src": "Nueva"
},
{
"id": "n178",
"q": "¿Cuántos i-nodos consume un archivo con tres hard links?",
"o": [
"Ninguno: los hard links guardan la ruta y no tocan los i-nodos",
"Uno solo: los tres nombres apuntan al mismo i-nodo",
"Depende del tamaño del archivo y de los bloques que ocupe en el disco",
"Tres, porque cada nombre necesita su propio i-nodo con sus metadatos"
],
"ok": 1,
"f": "Los nombres son entradas de directorio; el archivo sigue teniendo un único i-nodo.",
"tema": "Inodos y enlaces",
"src": "Nueva"
},
{
"id": "n179",
"q": "¿Qué le pasa al contador de enlaces de un i-nodo cuando se borra uno de sus nombres?",
"o": [
"Aumenta en uno",
"Se reinicia en cero",
"Disminuye en uno",
"No cambia, porque el archivo sigue existiendo"
],
"ok": 2,
"f": "Los datos se liberan recién cuando el contador llega a cero.",
"tema": "Inodos y enlaces",
"src": "Nueva"
},
{
"id": "n180",
"q": "¿Qué contiene el directorio /var/log?",
"o": [
"Las claves públicas de los usuarios del sistema",
"Los registros (logs) del sistema y de los servicios",
"Los binarios del sistema que se pueden ejecutar",
"Los directorios personales de cada usuario"
],
"ok": 1,
"f": "/var guarda datos variables, y /var/log es donde quedan los registros.",
"tema": "Rutas y directorios",
"src": "Nueva"
},
{
"id": "n181",
"q": "¿Qué hace el comando pwd?",
"o": [
"Muestra el directorio de trabajo actual",
"Crea un directorio nuevo en la ruta indicada",
"Lista el contenido del directorio actual",
"Cambia de directorio de trabajo en el shell"
],
"ok": 0,
"f": "pwd viene de print working directory.",
"tema": "Rutas y directorios",
"src": "Nueva"
},
{
"id": "n182",
"q": "Un directorio con permisos 755 y dueño ana: ¿qué puede hacer el usuario pedro, que no es ana ni del grupo?",
"o": [
"Cambiar los permisos del directorio a su gusto",
"Nada en absoluto: no es el dueño ni pertenece al grupo del directorio",
"Listar los nombres y atravesar el directorio, pero no crear archivos",
"Crear y borrar archivos dentro del directorio sin límites"
],
"ok": 2,
"f": "El 5 final le da lectura y ejecución a otros: puede ver los nombres y entrar, pero no escribir.",
"tema": "Permisos",
"src": "Nueva"
},
{
"id": "n183",
"q": "¿Qué permiso hace falta sobre un directorio para crear un archivo nuevo dentro?",
"o": [
"Escritura (w)",
"Ejecución (x)",
"Solo ser el propietario del directorio",
"Lectura (r)"
],
"ok": 0,
"f": "Crear un archivo es agregar una entrada a la tabla del directorio: hace falta escritura sobre el directorio.",
"tema": "Permisos",
"src": "Nueva"
},
{
"id": "n184",
"q": "¿Qué hace el comando mount sin argumentos?",
"o": [
"Muestra los sistemas de archivos que están montados ahora",
"Monta todos los discos conectados que detecta el sistema",
"Formatea la partición indicada con el sistema de archivos por omisión",
"Desmonta el último sistema de archivos que se montó"
],
"ok": 0,
"f": "Sin argumentos lista los montajes actuales; para montar hay que indicar dispositivo y punto de montaje.",
"tema": "Montaje y sistemas de archivos",
"src": "Nueva"
},
{
"id": "n185",
"q": "¿Qué comando indica cuánto espacio libre queda en cada sistema de archivos montado, en formato legible?",
"o": [
"free -h",
"df -h",
"ls -lh",
"du -h"
],
"ok": 1,
"f": "df mira el sistema de archivos; du mide cuánto ocupa cada archivo o directorio; free muestra memoria.",
"tema": "Montaje y sistemas de archivos",
"src": "Nueva"
},
{
"id": "n186",
"q": "¿Qué identifica de forma única a un objeto dentro de un contenedor?",
"o": [
"Su posición en el disco",
"Su fecha de creación",
"Su cantidad de bloques",
"Su clave"
],
"ok": 3,
"f": "La clave es el nombre del objeto dentro del bucket y no se repite en ese contenedor.",
"tema": "Bloques, archivos y objetos",
"src": "Nueva"
},
{
"id": "n187",
"q": "¿Cuál es la diferencia entre el almacenamiento de archivos y el de objetos respecto de la modificación de los datos?",
"o": [
"En archivos se puede modificar una parte; en objetos hay que reemplazar el objeto entero",
"Ninguno de los dos modelos permite modificar datos ya escritos",
"En objetos se puede modificar una parte; en archivos hay que reemplazar todo",
"Los dos permiten modificar partes sin restricciones y sin copiar el resto"
],
"ok": 0,
"f": "Un archivo se puede abrir y editar en el lugar; un objeto se lee y se reescribe completo.",
"tema": "Bloques, archivos y objetos",
"src": "Nueva"
},
{
"id": "n188",
"q": "¿Qué hace el comando tail -n 5 registro.txt?",
"o": [
"Muestra las primeras 5 líneas",
"Cuenta las líneas del archivo",
"Borra las últimas 5 líneas",
"Muestra las últimas 5 líneas"
],
"ok": 3,
"f": "tail muestra el final del archivo; head muestra el principio.",
"tema": "Shell y comandos",
"src": "Nueva"
},
{
"id": "n189",
"q": "¿Qué hace cd - en el shell?",
"o": [
"Va al directorio personal",
"No hace nada",
"Va a la raíz",
"Vuelve al directorio anterior"
],
"ok": 3,
"f": "El guion representa el directorio anterior (OLDPWD).",
"tema": "Shell y comandos",
"src": "Nueva"
},
{
"id": "n190",
"q": "¿Qué hace chmod +x script.sh?",
"o": [
"Borra el script",
"Lo ejecuta como root",
"Le cambia el dueño",
"Le agrega permiso de ejecución a todos los usuarios"
],
"ok": 3,
"f": "+x les da permiso de ejecución a propietario, grupo y otros: es equivalente a a+x.",
"tema": "Shell y comandos",
"src": "Nueva"
},
{
"id": "n191",
"q": "¿Para qué sirve una función de hash en criptografía?",
"o": [
"Para firmar mensajes sin claves",
"Para cifrar y poder descifrar después",
"Para obtener una huella corta de un contenido y detectar si cambió",
"Para generar claves simétricas a partir de una contraseña y nada más"
],
"ok": 2,
"f": "El hash es de un solo sentido: sirve para verificar integridad, no para recuperar el contenido.",
"tema": "Criptografía y certificados",
"src": "Nueva"
},
{
"id": "n192",
"q": "¿Qué es la criptografía simétrica?",
"o": [
"Cifrar solo con contraseñas de un solo uso",
"Un esquema sin claves",
"Usar dos claves distintas, una pública y una privada",
"Usar la misma clave para cifrar y para descifrar"
],
"ok": 3,
"f": "Es rápida, pero ambas partes tienen que compartir el secreto de antemano.",
"tema": "Criptografía y certificados",
"src": "Nueva"
},
{
"id": "n193",
"q": "¿Qué guarda el archivo known_hosts del cliente SSH?",
"o": [
"Los fingerprints de los servidores a los que ya se conectó",
"Los permisos de los archivos que se copiaron por la red",
"Las contraseñas de cada servidor al que se conectó",
"Las claves privadas de los usuarios que se conectan"
],
"ok": 0,
"f": "Es la memoria del modelo TOFU: si cambia el fingerprint, avisa.",
"tema": "Criptografía y certificados",
"src": "Nueva"
},
{
"id": "n194",
"q": "¿En qué se diferencia una biblioteca de una llamada al sistema?",
"o": [
"La biblioteca corre en espacio de usuario y la llamada al sistema pide un servicio al kernel",
"La llamada al sistema es más rápida porque no necesita tocar el hardware",
"No hay ninguna diferencia real: los dos nombres designan lo mismo",
"La biblioteca siempre forma parte del kernel y corre con privilegios"
],
"ok": 0,
"f": "Una biblioteca puede ofrecer una API cómoda y por dentro usar varias llamadas al sistema.",
"tema": "API y llamadas al sistema",
"src": "Nueva"
},
{
"id": "n195",
"q": "¿Cuál de estas es una llamada al sistema para crear un proceso en UNIX?",
"o": [
"mkdir",
"chmod",
"fork",
"ls"
],
"ok": 2,
"f": "fork crea una copia del proceso actual; exec carga otro programa en esa copia.",
"tema": "API y llamadas al sistema",
"src": "Nueva"
},
{
"id": "n196",
"q": "¿Qué es un volumen persistente (PVC) en Kubernetes?",
"o": [
"Un puerto del nodo que se expone hacia afuera del cluster",
"Una copia de la imagen del contenedor guardada en el nodo",
"Un pedido de almacenamiento cuyo contenido sobrevive a la vida del Pod",
"Una regla de red que habilita el tráfico entre dos Pods"
],
"ok": 2,
"f": "El PVC se declara aparte del Pod, y el Pod lo monta; si el Pod se recrea, los datos siguen ahí.",
"tema": "Laboratorio de Kubernetes",
"src": "Nueva"
},
{
"id": "n197",
"q": "¿Qué hace kubectl get pods -n lab-so?",
"o": [
"Crea un Pod llamado lab-so",
"Muestra los logs de todos los Pods",
"Lista los Pods del namespace lab-so",
"Borra los Pods del cluster"
],
"ok": 2,
"f": "-n indica el namespace donde consultar; get pods lista el estado de esos Pods.",
"tema": "Laboratorio de Kubernetes",
"src": "Nueva"
},
{
"id": "n198",
"q": "¿Para qué sirve el comando docker push?",
"o": [
"Para construir la imagen a partir de las instrucciones del Dockerfile",
"Para descargar una imagen desde el registry al equipo local",
"Para subir una imagen desde el equipo local al registry",
"Para ejecutar un contenedor nuevo usando esa imagen ya construida"
],
"ok": 2,
"f": "build la construye, tag le pone nombre y push la publica en el registry.",
"tema": "Laboratorio de Kubernetes",
"src": "Nueva"
},
{
"id": "n199",
"q": "¿Qué caracteriza al sistema de archivos FAT si se lo compara con ext4?",
"o": [
"Tiene journaling y permisos por usuario, como cualquier sistema moderno",
"Es el único sistema de archivos que admite i-nodos y hard links",
"Solo funciona en Linux y no se puede leer desde otros sistemas",
"No tiene journaling ni permisos por usuario, y por eso es compatible con casi todo"
],
"ok": 3,
"f": "Su simplicidad es lo que lo vuelve legible en cualquier sistema, y también su limitación.",
"tema": "Montaje y sistemas de archivos",
"src": "Nueva"
},
{
"id": "n200",
"q": "¿Qué comando se usa para crear un hard link?",
"o": [
"cp origen destino",
"mv origen destino",
"ln origen destino",
"ln -s origen destino"
],
"ok": 2,
"f": "Sin -s crea un hard link; con -s crea un soft link. cp y mv copian o mueven, no enlazan.",
"tema": "Inodos y enlaces",
"src": "Nueva"
}
],
"dev": [
{
"id": "d1",
"tema": "Inodos y enlaces",
"q": "Explicar la diferencia entre ruta absoluta y ruta relativa. Si el directorio actual es /home/ana, escribir de las dos formas la ruta al archivo /home/ana/docs/tp1.txt.",
"kb": [
"ruta absoluta",
"ruta relativa",
"/home/ana/docs/tp1.txt",
"docs/tp1.txt",
"directorio de trabajo actual",
"raíz"
],
"rub": [
{
"t": "Define ruta absoluta (empieza en la raíz y no depende del directorio actual)",
"p": 2
},
{
"t": "Define ruta relativa (se interpreta desde el directorio de trabajo actual)",
"p": 2
},
{
"t": "Escribe correctamente la ruta absoluta: /home/ana/docs/tp1.txt",
"p": 2
},
{
"t": "Escribe correctamente la ruta relativa: docs/tp1.txt o ./docs/tp1.txt",
"p": 2
}
],
"src": "Simulacro 01",
"h": [
"Una ruta se puede escribir de dos maneras según desde dónde se la empiece a resolver.",
"Si arranca con / no depende de dónde estés parado; si no arranca con /, se resuelve desde el directorio de trabajo.",
"Con el directorio actual /home/ana, la absoluta es la ruta completa y la relativa es lo que falta: docs/tp1.txt (o./docs/tp1.txt)."
],
"e": "Una ruta absoluta comienza en la raíz del árbol y no depende del directorio en el que esté parado el usuario: siempre identifica el mismo archivo. Una ruta relativa se interpreta a partir del directorio de trabajo actual, así que cambia de significado si uno se mueve. Para el archivo /home/ana/docs/tp1.txt con el directorio actual en /home/ana, la forma absoluta es /home/ana/docs/tp1.txt y la relativa es docs/tp1.txt, que también se puede escribir./docs/tp1.txt para dejar explícito que parte del directorio actual."
},
{
"id": "d2",
"tema": "Bloques, archivos y objetos",
"q": "¿Dónde se usa el almacenamiento de objetos? Describir cómo se organiza (contenedor, clave, metadatos) y cómo se accede a él.",
"kb": [
"respaldos",
"imágenes",
"videos",
"logs",
"sitios web estáticos",
"S3",
"bucket",
"contenedor",
"clave",
"metadatos",
"namespace plano",
"HTTP",
"no se modifica por partes"
],
"rub": [
{
"t": "Usos típicos correctos (respaldos, imágenes/videos, logs, sitios estáticos)",
"p": 2
},
{
"t": "Organización: contenedor (bucket), clave, metadatos y espacio de nombres plano",
"p": 3
},
{
"t": "Acceso por HTTP, sin montaje y sin modificación parcial",
"p": 3
}
],
"src": "Simulacro 01",
"h": [
"Pensá en datos que se escriben una vez, enteros, y se leen muchas veces: respaldos, fotos, videos, logs, sitios estáticos.",
"Se organiza en contenedores (buckets) con nombre único, y cada elemento tiene datos, una clave que lo identifica y metadatos, incluidos los del usuario. El espacio de nombres es plano.",
"El acceso es por pedidos HTTP a una interfaz web: no se monta como un disco y un objeto no se modifica por partes, se reemplaza entero. El ejemplo clásico es S3."
],
"e": "El almacenamiento de objetos se usa para datos que se escriben enteros y se leen muchas veces: respaldos, imágenes y videos, logs para análisis y sitios web estáticos. Se organiza en contenedores (en S3, buckets) de nombre único, y cada objeto tiene datos, una clave que lo identifica y metadatos, incluidos los pares nombre-valor que define el usuario. El espacio de nombres es plano: las barras de una clave no crean directorios. Se accede con pedidos HTTP contra una interfaz web; no se monta como un disco y no admite modificación parcial: para cambiar algo hay que reemplazar el objeto completo."
},
{
"id": "d3",
"tema": "Shell y comandos",
"q": "¿Qué diferencia hay entre sh, bash y dash? ¿Por qué un script que empieza con #!/bin/sh puede funcionar al probarlo a mano y fallar cuando lo ejecuta el sistema?",
"kb": [
"sh",
"estándar",
"POSIX",
"bash",
"superconjunto",
"dash",
"/bin/sh",
"intérprete",
"shebang",
"falla"
],
"rub": [
{
"t": "Distingue sh, bash y dash",
"p": 4
},
{
"t": "Explica el caso del script (declara /bin/sh, que puede ser dash y no entiende funciones de bash)",
"p": 4
}
],
"src": "Simulacro 01",
"h": [
"Son tres intérpretes de comandos distintos, no tres versiones del mismo programa.",
"sh es el estándar; /bin/sh es un enlace a algún intérprete que lo cumple. bash lo amplía con funciones extra; dash implementa el estándar de forma mínima y rápida.",
"El script declara /bin/sh pero usa funciones de bash: a mano en bash anda, y al ejecutarlo el sistema lo corre con dash, que no las entiende."
],
"e": "sh es el estándar de shell: /bin/sh es un enlace a algún intérprete que lo cumple. bash es un superconjunto de sh, con funciones extra como arreglos y expansiones; dash implementa el estándar de manera mínima y rápida. Un script que empieza con #!/bin/sh declara que lo ejecute lo que sea que esté detrás de /bin/sh. Si el script usa funciones propias de bash y lo probás escribiendo los comandos en una terminal con bash, funciona; pero cuando el sistema lo ejecuta, en muchas distribuciones /bin/sh es dash, que no entiende esas funciones, y el script falla."
},
{
"id": "d4",
"tema": "Criptografía y certificados",
"q": "Al conectarse por SSH a un servidor conocido aparece un aviso de que su fingerprint cambió. ¿Qué significa? Nombrar dos causas posibles y cómo se debe proceder.",
"kb": [
"TOFU",
"fingerprint",
"clave",
"reinstaló",
"otra máquina",
"ataque",
"interpuso",
"canal independiente",
"verificar",
"no borrar"
],
"rub": [
{
"t": "Explica qué significa el aviso (el servidor presenta otra clave)",
"p": 2
},
{
"t": "Dos causas posibles, incluida la posibilidad de un ataque",
"p": 3
},
{
"t": "Procedimiento correcto: verificar por un canal independiente antes de aceptar",
"p": 3
}
],
"src": "Simulacro 01",
"h": [
"La primera vez que te conectaste, el cliente guardó el fingerprint de la clave del servidor (TOFU, trust on first use).",
"El aviso significa que ahora el servidor presenta otra clave. Pensá en dos causas: reinstalación o cambio de máquina, y la posibilidad de que alguien se interponga.",
"No hay que borrar la línea para que deje de molestar: hay que verificar el fingerprint nuevo por un canal independiente y recién entonces reemplazar la entrada."
],
"e": "La primera vez que un cliente se conecta, guarda el fingerprint de la clave del servidor y en las conexiones siguientes exige el mismo (modelo TOFU). Si aparece el aviso, significa que el servidor ahora presenta otra clave. Las causas posibles son que el servidor se reinstaló y generó claves nuevas, que cambió la máquina detrás de esa dirección, o que alguien se interpuso en la conexión. No se debe borrar la línea para que deje de aparecer: hay que verificar el fingerprint nuevo por un canal independiente (la consola del proveedor, un colega en la máquina) y recién entonces reemplazar la entrada."
},
{
"id": "d5",
"tema": "Laboratorio de Kubernetes",
"q": "¿Qué es un rolling update? Explicar cómo se pasa de la versión v1 a la v2 de mi-app sin cortar el servicio.",
"kb": [
"Pods",
"viejos",
"nuevos",
"listos",
"sin cortar",
"servicio",
"registry",
"v2",
"Deployment"
],
"rub": [
{
"t": "Define rolling update (se reemplazan los Pods de a poco)",
"p": 4
},
{
"t": "Describe el paso de v1 a v2 en el laboratorio",
"p": 4
}
],
"src": "Simulacro 01",
"h": [
"Es una forma de actualizar sin apagar todo: se reemplazan los Pods de a poco.",
"Se crean Pods nuevos con la versión nueva y recién cuando están listos se eliminan los viejos, así siempre hay Pods atendiendo.",
"En el laboratorio: construir y publicar mi-app:v2 en el registry (donde conviven v1 y v2) y actualizar el Deployment; el Service sigue repartiendo el tráfico."
],
"e": "Un rolling update es reemplazar los Pods de una versión por los de otra de a poco: se crean Pods nuevos y, cuando están listos, se eliminan los viejos, de modo que siempre hay Pods atendiendo y el servicio no se corta. En el laboratorio se construye y publica mi-app:v2 en el registry local (donde quedan conviviendo v1 y v2 con etiquetas distintas), se actualiza el Deployment para que use la imagen nueva y Kubernetes va levantando los Pods de v2 y bajando los de v1 mientras el Service sigue repartiendo las peticiones."
},
{
"id": "d6",
"tema": "Inodos y enlaces",
"q": "¿Qué es un i-nodo y para qué sirve? Nombrar tres datos que guarda y uno que no guarda.",
"kb": [
"metadatos",
"permisos",
"propietario",
"grupo",
"tamaño",
"fechas",
"contador de enlaces",
"bloques",
"nombre",
"directorio"
],
"rub": [
{
"t": "Define el i-nodo como estructura de metadatos y explica para qué sirve",
"p": 2
},
{
"t": "Nombra tres datos que guarda (1 punto cada uno)",
"p": 3
},
{
"t": "Indica que el nombre no se guarda en el i-nodo sino en el directorio",
"p": 3
}
],
"src": "Simulacro 02",
"h": [
"Es la estructura del sistema de archivos que describe a un archivo; cada archivo tiene uno.",
"Sirve para saber quién puede acceder y dónde están los datos. Guarda permisos, propietario y grupo, tamaño, fechas y contador de enlaces.",
"Lo que NO guarda es el nombre: el nombre vive en la entrada del directorio que lo contiene."
],
"e": "El i-nodo es la estructura del sistema de archivos que describe a un archivo; cada archivo tiene exactamente uno. Sirve para que el sistema operativo sepa quién puede acceder al archivo y en qué bloques están sus datos. Guarda, entre otros datos, los permisos, el propietario y el grupo, el tamaño, las fechas de modificación y acceso, el contador de enlaces y la ubicación de los bloques de datos. Lo que no guarda es el nombre: el nombre está en la entrada del directorio que contiene al archivo, que asocia ese nombre con el número de i-nodo."
},
{
"id": "d7",
"tema": "Montaje y sistemas de archivos",
"q": "Un compañero le da permisos 777 a un script que solo usa él. ¿Qué problema tiene? ¿Qué permisos le recomendaría y por qué?",
"kb": [
"777",
"cualquier usuario",
"leer",
"modificar",
"ejecutar",
"riesgo",
"700",
"principio",
"permisos necesarios"
],
"rub": [
{
"t": "Explica el riesgo de 777, idealmente con un ejemplo",
"p": 4
},
{
"t": "Recomienda 700 (o 755 justificado) y justifica",
"p": 4
}
],
"src": "Simulacro 02",
"h": [
"777 significa lectura, escritura y ejecución para el propietario, para el grupo y para todos los demás.",
"El riesgo es que cualquiera podría modificar el script y agregarle instrucciones que después se ejecuten con la identidad del dueño.",
"La recomendación es dar solo lo necesario: 700, y justificar si alguno más necesita leerlo (755)."
],
"e": "Con 777 cualquier usuario del sistema puede leer, modificar y ejecutar ese script. Otro usuario podría, por ejemplo, agregarle instrucciones maliciosas que después se ejecutarían con la identidad del dueño. Se le recomendaría 700, que deja solo al propietario leer, escribir y ejecutar, siguiendo el principio de dar únicamente los permisos necesarios. Si hiciera falta que otros lo lean o lo ejecuten sin modificarlo, 755 sería una alternativa, pero siempre justificando por qué."
},
{
"id": "d8",
"tema": "Shell y comandos",
"q": "Explicar para qué sirven pwd, cd, mkdir y rm. ¿Por qué hay que tener especial cuidado con rm -r?",
"kb": [
"pwd",
"directorio de trabajo",
"cd",
"cambia de directorio",
"mkdir",
"crea directorios",
"rm",
"borra",
"recursivo",
"sin papelera",
"no se recupera"
],
"rub": [
{
"t": "Los cuatro comandos (1 punto cada uno)",
"p": 4
},
{
"t": "Explica el riesgo de rm -r (borra árboles sin preguntar, sin papelera)",
"p": 4
}
],
"src": "Simulacro 02",
"h": [
"pwd muestra dónde estás, cd cambia de directorio, mkdir crea directorios y rm borra archivos.",
"rm sin opciones borra un archivo; con -r actúa sobre todo un árbol de directorios.",
"El peligro de rm -r es que no pide confirmación y no hay papelera: un error en la ruta puede borrar mucho más de lo previsto."
],
"e": "pwd muestra el directorio de trabajo actual; cd cambia de directorio (sin argumentos va al directorio personal); mkdir crea directorios; rm borra archivos. rm -r es peligroso porque borra un árbol completo de directorios de forma recursiva, sin preguntar y sin papelera: lo borrado no se recupera. Un error en la ruta, un espacio de más o una variable vacía puede hacer que borre mucho más de lo previsto, incluido el directorio actual, por eso conviene revisar la ruta dos veces antes de ejecutarlo."
},
{
"id": "d9",
"tema": "Criptografía y certificados",
"q": "¿Por qué una clave privada debe tener permisos 600 y conviene protegerla con una passphrase? ¿Qué protege cada medida?",
"kb": [
"600",
"solo el dueño",
"otros usuarios",
"SSH se niega",
"passphrase",
"cifra",
"robo",
"respaldo",
"disco"
],
"rub": [
{
"t": "Permisos 600 y qué protegen",
"p": 4
},
{
"t": "Passphrase y qué protege",
"p": 4
}
],
"src": "Simulacro 02",
"h": [
"Las dos medidas protegen contra cosas distintas: una contra otros usuarios del equipo, la otra contra el robo del archivo.",
"Los permisos 600 hacen que solo el dueño pueda leer la clave; SSH incluso se niega a usarla si es legible por otros.",
"La passphrase cifra la clave en el disco: si alguien copia el archivo (un respaldo, una notebook perdida), sin la passphrase no le sirve."
],
"e": "Los permisos 600 hacen que solo el dueño pueda leer el archivo de la clave, y protegen contra otros usuarios del mismo sistema: SSH de hecho se niega a usar una clave privada que pueda leer cualquiera. La passphrase cifra la clave dentro del disco, así que protege el caso en que alguien roba o copia el archivo, por ejemplo desde un respaldo o una notebook perdida: sin la passphrase, el archivo robado no sirve para autenticarse. Son medidas complementarias: una cubre el acceso local, la otra la pérdida del archivo."
},
{
"id": "d10",
"tema": "Laboratorio de Kubernetes",
"q": "¿Qué son un Pod, un Deployment y un Service en Kubernetes? Explicar cómo se relacionan usando la aplicación mi-app del laboratorio.",
"kb": [
"Pod",
"unidad mínima",
"contenedores",
"Deployment",
"réplicas",
"estado deseado",
"Service",
"dirección estable",
"balancea",
"mi-app"
],
"rub": [
{
"t": "Pod",
"p": 2
},
{
"t": "Deployment",
"p": 2
},
{
"t": "Service",
"p": 2
},
{
"t": "Relación con el ejemplo de mi-app",
"p": 2
}
],
"src": "Simulacro 02",
"h": [
"Pod es la unidad mínima que se ejecuta; Deployment declara cuántas réplicas y con qué imagen; Service es una dirección estable.",
"El Deployment sostiene el estado deseado: si un Pod se cae, lo recrea. El Service reparte las peticiones entre Pods cuyas IP cambian.",
"En mi-app: el Deployment mantiene 2 Pods con la imagen del registry y el Service balancea entre ellos."
],
"e": "Un Pod es la unidad mínima que Kubernetes ejecuta: uno o más contenedores que comparten red y volúmenes. Un Deployment declara el estado deseado —cuántas réplicas de un Pod se quieren y con qué imagen— y Kubernetes lo sostiene, recreando los Pods que se caen. Un Service da una dirección estable y reparte las peticiones entre los Pods, cuyas IP cambian. En el laboratorio, el Deployment mi-app mantiene dos Pods con la imagen publicada en el registry y el Service mi-app balancea entre ellos: por eso al recargar el sitio responde a veces un Pod y a veces el otro."
},
{
"id": "d11",
"tema": "Inodos y enlaces",
"q": "¿Qué es un directorio en un sistema de archivos tipo UNIX? ¿Por qué renombrar un archivo dentro del mismo sistema de archivos es instantáneo, aunque el archivo sea muy grande?",
"kb": [
"archivo especial",
"tabla",
"nombres",
"i-nodo",
"entrada",
"no se mueven los datos",
"tamaño"
],
"rub": [
{
"t": "Define el directorio como tabla nombre → número de i-nodo",
"p": 4
},
{
"t": "Explica que renombrar solo modifica la entrada y no mueve los datos",
"p": 4
}
],
"src": "Simulacro 03",
"h": [
"Un directorio no es una carpeta física: es un archivo con un formato especial.",
"Su contenido es una tabla que asocia nombres con números de i-nodo.",
"Renombrar cambia una entrada de esa tabla; los datos y el i-nodo no se tocan, por eso es instantáneo aunque el archivo pese gigabytes."
],
"e": "En UNIX un directorio es un archivo especial cuyo contenido es una tabla que asocia nombres con números de i-nodo. Renombrar un archivo dentro del mismo sistema de archivos solo cambia una entrada de esa tabla: se quita el nombre viejo y se pone el nuevo, o se mueve la entrada a otro directorio. Los datos del archivo y su i-nodo no se tocan, no se copia nada; por eso la operación es instantánea aunque el archivo sea enorme."
},
{
"id": "d12",
"tema": "Permisos",
"q": "Explicar qué significan los permisos de lectura, escritura y ejecución sobre un directorio. ¿Por qué un usuario puede borrar un archivo sobre el que no tiene permiso de escritura?",
"kb": [
"lectura",
"listar",
"escritura",
"crear",
"renombrar",
"borrar",
"ejecución",
"atravesar",
"directorio",
"entrada"
],
"rub": [
{
"t": "Lectura (listar nombres)",
"p": 2
},
{
"t": "Escritura (crear, renombrar, borrar entradas)",
"p": 2
},
{
"t": "Ejecución (atravesarlo)",
"p": 2
},
{
"t": "Explica que borrar modifica el directorio, no el archivo",
"p": 2
}
],
"src": "Simulacro 03",
"h": [
"Sobre un directorio los permisos significan cosas distintas que sobre un archivo.",
"Lectura permite listar los nombres, escritura crear y borrar entradas, ejecución atravesarlo para llegar a lo de adentro.",
"Borrar un archivo es quitar su entrada de la tabla del directorio: se modifica el directorio, no el archivo."
],
"e": "Sobre un directorio, lectura permite listar los nombres que contiene; escritura permite crear, renombrar y borrar entradas dentro de él; ejecución permite atravesarlo, es decir entrar y acceder a lo que contiene. Borrar un archivo es quitar su entrada de la tabla del directorio, así que lo que se modifica es el directorio, no el archivo. Por eso un usuario puede borrar un archivo sobre el que no tiene permiso de escritura: le alcanza con tener escritura sobre el directorio que lo contiene."
},
{
"id": "d13",
"tema": "Shell y comandos",
"q": "Explicar para qué sirven cat, echo, grep y ls, dando un ejemplo de uso de cada uno.",
"kb": [
"cat",
"contenido",
"echo",
"texto",
"variable",
"grep",
"patrón",
"busca",
"ls",
"lista",
"directorio"
],
"rub": [
{
"t": "cat",
"p": 2
},
{
"t": "echo",
"p": 2
},
{
"t": "grep",
"p": 2
},
{
"t": "ls",
"p": 2
}
],
"src": "Simulacro 03",
"h": [
"Los cuatro trabajan con archivos, pero en cosas distintas: ver contenido, escribir texto, filtrar y listar.",
"cat vuelca el contenido; echo escribe un texto o el valor de una variable; grep busca líneas que coinciden con un patrón; ls lista un directorio.",
"Un ejemplo de cada uno: cat notas.txt, echo $HOME, grep error registro.log, ls -l /etc."
],
"e": "cat muestra el contenido de un archivo o concatena varios (cat notas.txt). echo escribe un texto o el valor de una variable en la salida estándar (echo $HOME). grep busca y muestra las líneas que coinciden con un patrón (grep error registro.log). ls lista el contenido de un directorio, y con -l muestra permisos, propietario, tamaño y fecha (ls -l /etc). Los cuatro son ejemplos de la idea de UNIX de herramientas chicas que hacen una cosa y se combinan entre sí."
},
{
"id": "d14",
"tema": "Criptografía y certificados",
"q": "¿Qué es un certificado digital? ¿Qué garantiza el candado del navegador y qué no garantiza?",
"kb": [
"clave pública",
"dominio",
"vigencia",
"firmado",
"autoridad",
"cifrado",
"controla el dominio",
"no garantiza",
"honesto"
],
"rub": [
{
"t": "Define certificado",
"p": 3
},
{
"t": "Qué garantiza",
"p": 3
},
{
"t": "Qué no garantiza",
"p": 2
}
],
"src": "Simulacro 03",
"h": [
"Un certificado es una clave pública con datos de identidad y vigencia, firmado por una autoridad en la que ya se confía.",
"El candado garantiza que la conexión está cifrada y que quien controla el sitio demostró controlar ese dominio.",
"No garantiza que el sitio sea honesto: un sitio fraudulento puede tener un certificado válido para su propio dominio."
],
"e": "Un certificado digital es una clave pública más datos sobre a quién pertenece (por ejemplo un nombre de dominio) y hasta cuándo vale, todo firmado por una autoridad certificante en la que el sistema ya confía. El candado del navegador garantiza que la conexión está cifrada y que quien controla el sitio demostró controlar ese nombre de dominio ante la autoridad. No garantiza que el sitio sea honesto ni que no tenga intenciones maliciosas: un sitio fraudulento puede obtener un certificado válido para su propio dominio."
},
{
"id": "d15",
"tema": "Laboratorio de Kubernetes",
"q": "Comparar SFTP, Samba 4 y NFSv4 indicando sobre qué protocolo funciona cada uno, cómo se autentica el usuario y en qué escenario elegiría cada uno.",
"kb": [
"SFTP",
"SSH",
"cifrado",
"Samba",
"SMB",
"CIFS",
"Windows",
"NFSv4",
"kernel",
"monta",
"UID",
"GID"
],
"rub": [
{
"t": "SFTP",
"p": 3
},
{
"t": "Samba",
"p": 3
},
{
"t": "NFSv4",
"p": 2
}
],
"src": "Simulacro 03",
"h": [
"Uno va sobre SSH, otro es el protocolo nativo de Windows y el tercero es el estándar de UNIX.",
"SFTP viaja por un canal TCP cifrado y autentica con usuario y contraseña o clave; Samba implementa SMB/CIFS; NFSv4 lo monta el kernel y controla el acceso por máquina y UID/GID.",
"Elegís SFTP para transferir por redes no confiables, Samba para carpetas compartidas con Windows y NFSv4 para compartir directorios entre servidores Linux."
],
"e": "SFTP funciona sobre SSH, en un único canal TCP cifrado, y autentica con usuario y contraseña o con clave; sirve para transferir archivos de forma segura a través de redes no confiables. Samba 4 implementa SMB/CIFS, el protocolo nativo de Windows, autentica con usuario y contraseña o acceso de invitado, y es la opción para carpetas compartidas en redes con equipos Windows, Linux y macOS. NFSv4 es el estándar de UNIX/Linux: el cliente lo monta a través del kernel y lo usa como un directorio local, y el acceso se controla por máquina y por UID/GID; conviene para compartir directorios entre servidores Linux."
},
{
"id": "d16",
"tema": "Inodos y enlaces",
"q": "¿Qué significa el principio \"todo es un archivo\" en Linux? Dar dos ejemplos con directorios concretos y explicar por qué es una ventaja.",
"kb": [
"misma interfaz",
"abrir",
"leer",
"escribir",
"/dev",
"/proc",
"/sys",
"ventaja",
"mismas herramientas"
],
"rub": [
{
"t": "Explica el principio: una misma interfaz para recursos distintos",
"p": 2
},
{
"t": "Dos ejemplos correctos con su directorio",
"p": 3
},
{
"t": "Explica la ventaja",
"p": 3
}
],
"src": "Simulacro 04",
"h": [
"La idea es que recursos muy distintos se manejen con la misma interfaz: abrir, leer, escribir, cerrar.",
"Dos ejemplos con su directorio: /dev (los dispositivos), /proc (el estado del sistema y los procesos), /sys (parámetros de dispositivos).",
"La ventaja es que con las mismas herramientas (cat, echo, redirecciones) consultás el estado del sistema o configurás algo sin programas especiales."
],
"e": "El principio \"todo es un archivo\" significa que recursos muy distintos se acceden con las mismas operaciones: abrir, leer, escribir y cerrar. Ejemplos concretos: en /dev los dispositivos aparecen como archivos (un disco, una terminal); en /proc hay información en tiempo real sobre los procesos y el sistema, que el kernel genera al leerla; en /sys están los dispositivos y sus parámetros, algunos modificables escribiendo. La ventaja es que con las herramientas de siempre (cat, echo, redirecciones) se puede consultar el estado del sistema, cambiar un parámetro o montar un volumen, sin programas especiales para cada recurso."
},
{
"id": "d17",
"tema": "Permisos",
"q": "Interpretar los permisos 600, 644 y 755, indicando qué puede hacer el propietario, el grupo y el resto. Dar un uso típico de cada uno.",
"kb": [
"600",
"propietario",
"grupo",
"otros",
"4",
"2",
"1",
"clave privada",
"644",
"datos",
"755",
"programa",
"directorio"
],
"rub": [
{
"t": "Interpreta 600",
"p": 2
},
{
"t": "Interpreta 644",
"p": 2
},
{
"t": "Interpreta 755",
"p": 2
},
{
"t": "Da un uso típico razonable de cada uno",
"p": 2
}
],
"src": "Simulacro 04",
"h": [
"Cada dígito es una terna: propietario, grupo, otros. Lectura 4, escritura 2, ejecución 1.",
"600: el dueño lee y escribe, el resto nada. 644: el dueño lee y escribe, el resto solo lee. 755: el dueño hace todo, el resto lee y ejecuta.",
"Usos típicos: 600 para una clave privada o un archivo con secretos; 644 para datos o configuración común; 755 para un programa o un directorio."
],
"e": "Cada dígito corresponde a una terna: propietario, grupo y otros; lectura vale 4, escritura 2 y ejecución 1. 600: el propietario lee y escribe, grupo y otros nada; uso típico, una clave privada SSH o un archivo con secretos. 644: el propietario lee y escribe, grupo y otros solo leen; uso típico, un archivo de datos o de configuración común. 755: el propietario lee, escribe y ejecuta, y grupo y otros leen y ejecutan; uso típico, un programa o un directorio por el que hay que pasar."
},
{
"id": "d18",
"tema": "Shell y comandos",
"q": "¿Cómo se organiza un programa con interfaz gráfica? ¿Necesita servicios del kernel distintos de los que usa un programa de consola?",
"kb": [
"event loop",
"eventos",
"clics",
"teclas",
"no necesita",
"mismos servicios",
"espacio de usuario"
],
"rub": [
{
"t": "Explica el event loop",
"p": 4
},
{
"t": "Indica que usa los mismos servicios del kernel",
"p": 4
}
],
"src": "Simulacro 04",
"h": [
"Un programa con interfaz gráfica no sigue una secuencia fija de pasos: espera a que pasen cosas.",
"Se organiza alrededor de un event loop que recibe clics, teclas y mensajes del sistema de ventanas y los atiende uno por uno.",
"No necesita servicios nuevos del kernel: la interfaz gráfica es una capa en espacio de usuario sobre procesos, IPC, archivos y entrada/salida."
],
"e": "Un programa con interfaz gráfica se organiza alrededor de un event loop: queda esperando eventos (clics, teclas, mensajes del sistema de ventanas) y los atiende uno por uno, en lugar de ejecutar una secuencia fija de pasos. No necesita servicios del kernel distintos de los que usa un programa de consola: la interfaz gráfica es una capa construida en espacio de usuario sobre los mismos servicios de siempre —procesos, comunicación entre procesos, archivos y entrada/salida—, y por eso existen varios entornos gráficos distintos sobre el mismo sistema."
},
{
"id": "d19",
"tema": "Criptografía y certificados",
"q": "¿Qué es una autoridad raíz? Explicar cómo funciona la cadena de confianza cuando un navegador se conecta a un sitio con HTTPS.",
"kb": [
"autoridad certificante",
"clave pública",
"preinstalada",
"raíz",
"intermedia",
"firma",
"verifica",
"cadena",
"vigencia"
],
"rub": [
{
"t": "Define autoridad raíz",
"p": 3
},
{
"t": "Describe raíz → intermedia → sitio",
"p": 3
},
{
"t": "Describe la verificación del navegador",
"p": 2
}
],
"src": "Simulacro 04",
"h": [
"La autoridad raíz es el punto de partida: su clave pública viene preinstalada en el sistema o el navegador.",
"La cadena va de arriba hacia abajo: la raíz firma autoridades intermedias y las intermedias firman los certificados de los sitios.",
"El navegador verifica cada firma hacia arriba hasta llegar a una raíz conocida, y además comprueba el nombre y la vigencia."
],
"e": "Una autoridad raíz es una autoridad certificante cuya clave pública viene preinstalada en el sistema operativo o en el navegador: es el punto de partida de la confianza. La cadena funciona así: la raíz firma autoridades intermedias, y las intermedias firman los certificados de los sitios. Cuando el navegador se conecta a un sitio HTTPS recibe su certificado junto con las intermedias, verifica cada firma hacia arriba hasta llegar a una raíz que ya conoce, y comprueba que el nombre del certificado coincida con el del sitio y que nada esté vencido."
},
{
"id": "d20",
"tema": "Laboratorio de Kubernetes",
"q": "En el laboratorio, la aplicación web se publica en http://localhost/ mediante Traefik, mientras que SFTP usa el puerto 30022. Explicar qué tipo de Service usa cada uno y por qué.",
"kb": [
"ClusterIP",
"interno",
"Traefik",
"80",
"443",
"Gateway API",
"NodePort",
"30022",
"SFTP",
"no es HTTP"
],
"rub": [
{
"t": "ClusterIP más Traefik para la web",
"p": 4
},
{
"t": "NodePort para SFTP y por qué",
"p": 4
}
],
"src": "Simulacro 04",
"h": [
"Uno de los dos servicios es HTTP y el otro no lo es.",
"La web usa un Service ClusterIP, accesible solo dentro del cluster, y Traefik recibe el tráfico del host en 80/443 y lo dirige según la ruta declarada con Gateway API.",
"SFTP se publica con un NodePort: abre el puerto 30022 en el nodo y lo conecta con el Pod, así no hace falta un proxy HTTP."
],
"e": "La aplicación web usa un Service de tipo ClusterIP, accesible solo dentro del cluster: Traefik recibe el tráfico HTTP del host en los puertos 80 y 443 y, siguiendo la ruta declarada con Gateway API, lo dirige a ese Service. Así no hace falta abrir un puerto propio por cada aplicación web. SFTP no es HTTP, así que se publica con un Service de tipo NodePort: abre el puerto 30022 en el nodo y lo conecta directamente con el Pod, que es la forma de exponer un protocolo que no pasa por un proxy HTTP."
},
{
"id": "d21",
"tema": "Rutas y directorios",
"q": "Comparar cómo organizan los archivos Linux y Windows. Si se conecta un pendrive, ¿dónde aparece su contenido en cada sistema?",
"kb": [
"árbol único",
"raíz",
"monta",
"letra de unidad",
"Windows",
"/media",
"/mnt",
"pendrive"
],
"rub": [
{
"t": "Explica el árbol único de Linux con montaje",
"p": 3
},
{
"t": "Explica las letras de unidad de Windows",
"p": 3
},
{
"t": "Ubica el pendrive en cada sistema",
"p": 2
}
],
"src": "Simulacro 05",
"h": [
"Uno de los dos sistemas tiene un solo árbol; el otro, una raíz por unidad.",
"En Linux cualquier disco se monta en un directorio del árbol único; en Windows cada unidad tiene su letra.",
"Un pendrive aparece en Linux bajo /media o /mnt y en Windows como una letra nueva."
],
"e": "Linux tiene un único árbol con una sola raíz: cualquier disco o partición se monta en un directorio de ese árbol y se accede con rutas normales. Windows tiene una raíz por unidad, identificada por una letra (C:, D:…). Si se conecta un pendrive, en Linux aparece dentro de un punto de montaje, típicamente bajo /media o /mnt, mientras que en Windows aparece como una letra de unidad nueva. La consecuencia práctica es que en Linux una ruta no dice en qué disco está el archivo."
},
{
"id": "d22",
"tema": "Montaje y sistemas de archivos",
"q": "¿Qué es LVM y qué ventajas ofrece? Describir sus capas en orden.",
"kb": [
"capa",
"volumen físico",
"grupo de volúmenes",
"volumen lógico",
"sistema de archivos",
"agrandar",
"varios discos",
"snapshots"
],
"rub": [
{
"t": "Define LVM como capa entre discos y sistemas de archivos",
"p": 2
},
{
"t": "Describe las capas en orden",
"p": 4
},
{
"t": "Dos ventajas correctas",
"p": 2
}
],
"src": "Simulacro 05",
"h": [
"LVM es una capa intermedia entre los discos y los sistemas de archivos.",
"De abajo hacia arriba: volumen físico (discos o particiones) → grupo de volúmenes → volumen lógico → sistema de archivos.",
"Ventajas: agrandar un volumen sin reparticionar, incluso en caliente, que un volumen abarque varios discos, snapshots y mover datos sin cortar el servicio."
],
"e": "LVM es una capa entre los discos y los sistemas de archivos: agrupa el espacio de varios discos y permite recortar volúmenes lógicos flexibles. Sus capas, de abajo hacia arriba, son: los discos o particiones son volúmenes físicos; juntos forman un grupo de volúmenes; de ese grupo se crean los volúmenes lógicos; y sobre cada volumen lógico se pone el sistema de archivos. Sus ventajas son poder agrandar un volumen sin reparticionar el disco (incluso en caliente), que un volumen abarque varios discos, tomar snapshots y mover datos entre discos sin detener el servicio."
},
{
"id": "d23",
"tema": "Shell y comandos",
"q": "Distinguir API y ABI. ¿Por qué un programa puede compilar sin cambios en dos sistemas y, sin embargo, el ejecutable de uno no correr en el otro?",
"kb": [
"fuente",
"API",
"ABI",
"binario",
"argumentos",
"estructuras",
"ejecutable",
"recompilar"
],
"rub": [
{
"t": "Define API",
"p": 3
},
{
"t": "Define ABI",
"p": 3
},
{
"t": "Explica el caso: misma API, distinta ABI",
"p": 2
}
],
"src": "Simulacro 05",
"h": [
"Una habla del código fuente y la otra del binario ya compilado.",
"La API es el contrato a nivel de fuente: funciones, parámetros y resultados. La ABI es el contrato a nivel binario: cómo se pasan los argumentos, cómo se disponen las estructuras y el formato del ejecutable.",
"Un programa puede compilar igual en dos sistemas (misma API) y generar binarios que no corren en el otro porque la ABI es distinta."
],
"e": "La API es el contrato a nivel de código fuente: qué funciones existen, qué reciben y qué devuelven. La ABI es el contrato a nivel binario: cómo se pasan los argumentos, cómo se disponen las estructuras en memoria, cómo se hace la llamada y qué formato tiene el ejecutable. Por eso un programa puede compilar sin cambios en dos sistemas —la API es la misma— y sin embargo el ejecutable de uno no correr en el otro: comparten la API pero tienen distinta ABI, y hay que recompilar para cada uno."
},
{
"id": "d24",
"tema": "Criptografía y certificados",
"q": "Comparar RSA y Ed25519. ¿En qué se basa cada uno y por qué hoy se recomienda Ed25519 para SSH?",
"kb": [
"factorizar",
"primos",
"curvas elípticas",
"claves cortas",
"firmas rápidas",
"3072",
"errores de implementación"
],
"rub": [
{
"t": "RSA: base y situación actual",
"p": 3
},
{
"t": "Ed25519: base",
"p": 2
},
{
"t": "Justifica la recomendación",
"p": 3
}
],
"src": "Simulacro 05",
"h": [
"Uno se apoya en la dificultad de factorizar números grandes; el otro, en curvas elípticas.",
"RSA sigue vigente pero necesita claves de 3072 bits o más para un nivel adecuado, lo que lo hace lento y voluminoso. Ed25519 está pensado para evitar errores de implementación.",
"Se recomienda Ed25519 porque logra igual o mayor seguridad con claves mucho más cortas y firmas más rápidas."
],
"e": "RSA se basa en la dificultad de factorizar el producto de dos primos grandes; sigue vigente, pero para un nivel de seguridad adecuado necesita claves de 3072 bits o más, lo que lo vuelve lento y voluminoso. Ed25519 se basa en curvas elípticas y tiene un diseño pensado para evitar errores de implementación. Se recomienda Ed25519 para SSH porque consigue igual o mayor seguridad con claves mucho más cortas y firmas más rápidas, sin las trampas de implementación de otros esquemas."
},
{
"id": "d25",
"tema": "Laboratorio de Kubernetes",
"q": "¿Por qué hubo que configurar /etc/docker/daemon.json y también /etc/rancher/k3s/registries.yaml para usar el registry local?",
"kb": [
"dos daemons",
"Docker",
"daemon.json",
"containerd",
"registries.yaml",
"push",
"pull",
"K3s"
],
"rub": [
{
"t": "Identifica los dos daemons y su archivo",
"p": 4
},
{
"t": "Explica qué falla si falta uno",
"p": 4
}
],
"src": "Simulacro 05",
"h": [
"En el camino de la imagen intervienen dos programas distintos, no uno.",
"El push lo hace el daemon de Docker, que lee /etc/docker/daemon.json; cuando K3s crea un Pod, quien descarga la imagen es containerd, que lee /etc/rancher/k3s/registries.yaml.",
"Si falta uno, funciona solo la mitad del circuito: se puede publicar y no descargar, o al revés."
],
"e": "Porque intervienen dos daemons distintos. El docker push lo ejecuta el daemon de Docker, que lee /etc/docker/daemon.json para saber que el registry es inseguro o cómo autenticarse. Cuando K3s crea un Pod, quien descarga la imagen del registry es containerd, integrado en K3s, que lee /etc/rancher/k3s/registries.yaml. Si falta el primero, el push falla; si falta el segundo, el Pod no puede descargar la imagen: cada daemon necesita su propio archivo."
},
{
"id": "d26",
"tema": "Inodos y enlaces",
"q": "¿Por qué un hard link no puede apuntar a un archivo de otro sistema de archivos y un soft link sí?",
"kb": [
"número de i-nodo",
"entrada de directorio",
"cada sistema de archivos numera",
"ruta",
"puntos de montaje",
"árbol"
],
"rub": [
{
"t": "Indica que el hard link guarda un número de i-nodo",
"p": 2
},
{
"t": "Explica que los i-nodos se numeran por sistema de archivos",
"p": 2
},
{
"t": "Indica que el soft link guarda una ruta",
"p": 2
},
{
"t": "Explica que la ruta puede cruzar puntos de montaje",
"p": 2
}
],
"src": "Simulacro 06",
"h": [
"Un hard link guarda un número de i-nodo; un soft link guarda una ruta.",
"Cada sistema de archivos numera sus propios i-nodos: el mismo número en otra partición sería otro archivo, o ninguno.",
"Una ruta se resuelve recorriendo el árbol completo, y ese recorrido sí puede atravesar puntos de montaje."
],
"e": "Un hard link es una entrada de directorio que guarda un número de i-nodo. Cada sistema de archivos numera sus propios i-nodos, así que ese número solo tiene sentido dentro del sistema de archivos donde está el directorio; en otra partición el mismo número sería otro archivo o ninguno. Un soft link, en cambio, guarda una ruta, y una ruta se resuelve recorriendo el árbol completo, que puede atravesar puntos de montaje. Por eso el soft link puede apuntar a cualquier lugar y el hard link no puede cruzar de un sistema de archivos a otro."
},
{
"id": "d27",
"tema": "Bloques, archivos y objetos",
"q": "Explicar la diferencia entre almacenamiento de bloques, de archivos y de objetos, y dar un uso típico de cada uno.",
"kb": [
"bloques",
"arreglo",
"cliente formatea",
"archivos",
"árbol de directorios",
"servidor",
"objetos",
"HTTP",
"inmutable",
"se reemplaza"
],
"rub": [
{
"t": "Bloques y su uso",
"p": 2
},
{
"t": "Archivos y su uso",
"p": 2
},
{
"t": "Objetos y su uso",
"p": 2
},
{
"t": "Los usos elegidos son coherentes con cada modelo",
"p": 2
}
],
"src": "Simulacro 06",
"h": [
"Pensá qué le entrega cada modelo al cliente: bloques sueltos, un árbol o elementos identificados por clave.",
"Bloques: arreglo numerado que el cliente formatea (disco de una VM, base de datos). Archivos: árbol con nombres y permisos ya administrado por el servidor (carpeta compartida). Objetos: datos + clave + metadatos, por HTTP, sin modificación parcial (respaldos, fotos, sitios estáticos).",
"El uso que elijas para cada uno tiene que ser coherente con lo que el modelo entrega."
],
"e": "El almacenamiento de bloques entrega un arreglo de bloques numerados sin estructura, y el cliente lo formatea: es lo que usa el disco de una máquina virtual o de una base de datos. El almacenamiento de archivos entrega un árbol de directorios con nombres y permisos ya administrado por el servidor: es lo que se usa para una carpeta compartida por un equipo. El de objetos guarda cada elemento con sus datos, una clave y metadatos, se accede por HTTP y no se modifica por partes: es lo que se usa para respaldos, fotos y videos, y sitios estáticos. Los usos tienen que ser coherentes con lo que cada modelo entrega."
},
{
"id": "d28",
"tema": "API y llamadas al sistema",
"q": "¿Qué es una API? ¿En qué se diferencia de una llamada al sistema? Dar un ejemplo de API.",
"kb": [
"contrato",
"funciones",
"reciben",
"devuelven",
"código fuente",
"llamada al sistema",
"kernel",
"privilegio",
"POSIX",
"Win32"
],
"rub": [
{
"t": "Define API",
"p": 3
},
{
"t": "Diferencia con llamada al sistema",
"p": 3
},
{
"t": "Ejemplo correcto",
"p": 2
}
],
"src": "Simulacro 06",
"h": [
"Una API es un contrato pensado en el código fuente; una llamada al sistema es el mecanismo concreto de pedirle algo al kernel.",
"La API dice qué funciones o pedidos existen, qué reciben y qué devuelven. La llamada al sistema implica un cambio de nivel de privilegio.",
"Ejemplos de API: POSIX, Win32, la API de una biblioteca gráfica o la API HTTP de S3."
],
"e": "Una API es el contrato que ofrece una biblioteca o un sistema a quien programa: qué funciones o pedidos existen, qué reciben, qué devuelven y qué errores producen; es un concepto de código fuente. Una llamada al sistema es el mecanismo concreto para pedirle un servicio al kernel, con cambio de nivel de privilegio. Una biblioteca puede ofrecer una API y por dentro usar varias llamadas al sistema (printf termina usando write). Ejemplos de API: POSIX, Win32, la API de una biblioteca gráfica o la API HTTP de S3."
},
{
"id": "d29",
"tema": "Criptografía y certificados",
"q": "¿Qué es una firma digital? ¿Con qué clave se firma, con cuál se verifica y qué garantiza?",
"kb": [
"clave privada",
"firmante",
"clave pública",
"verifica",
"autenticidad",
"integridad",
"no oculta",
"no es cifrar"
],
"rub": [
{
"t": "Define firma digital",
"p": 2
},
{
"t": "Se firma con la privada y se verifica con la pública",
"p": 3
},
{
"t": "Qué garantiza (y que no oculta el contenido)",
"p": 3
}
],
"src": "Simulacro 06",
"h": [
"Una firma es un valor calculado sobre el mensaje con una clave, que cualquiera puede verificar con la otra.",
"Se firma con la clave privada del firmante y se verifica con su clave pública.",
"Garantiza autenticidad e integridad, pero no oculta el contenido: firmar no es cifrar."
],
"e": "Una firma digital es un valor que se calcula sobre un mensaje usando la clave privada del firmante; cualquiera que tenga su clave pública puede verificarla. Se firma con la privada y se verifica con la pública. Garantiza autenticidad, es decir quién generó el mensaje, e integridad, es decir que no fue alterado. No oculta el contenido: firmar no es cifrar, el mensaje sigue visible salvo que además se cifre."
},
{
"id": "d30",
"tema": "Laboratorio de Kubernetes",
"q": "¿Qué es un PersistentVolumeClaim? ¿Qué ocurre con los datos de SFTP, Samba o NFS al ejecutar./scripts/apagar.sh todos y dónde quedan físicamente?",
"kb": [
"PVC",
"pedido de almacenamiento",
"persistente",
"0 réplicas",
"Pods",
"se conservan",
"/srv/k3s-persistente/pv",
"pendrive",
"montan"
],
"rub": [
{
"t": "Define PVC",
"p": 2
},
{
"t": "Explica qué pasa al escalar a 0 y que los datos se conservan",
"p": 3
},
{
"t": "Ubicación física",
"p": 3
}
],
"src": "Simulacro 06",
"h": [
"Un PVC es un pedido de almacenamiento persistente: su contenido no depende de la vida del Pod.",
"El script escala los Deployments a 0 réplicas: los Pods se detienen y liberan CPU y RAM, pero los PVC se conservan.",
"Físicamente los datos quedan en el pendrive, en directorios dentro de /srv/k3s-persistente/pv."
],
"e": "Un PersistentVolumeClaim es un pedido de almacenamiento persistente: su contenido no depende de la vida del Pod que lo usa. Al ejecutar./scripts/apagar.sh todos, los Deployments se escalan a 0 réplicas, así que los Pods se detienen y liberan CPU y RAM, pero los PVC se conservan y no se pierde nada; al volver a encender, los Pods nuevos montan los mismos volúmenes. Físicamente los datos quedan en el pendrive, en directorios dentro de /srv/k3s-persistente/pv."
},
{
"id": "d31",
"tema": "Rutas y directorios",
"q": "Describir qué contiene cada uno de estos directorios estándar de Linux: /etc, /home, /var y /tmp.",
"kb": [
"/etc",
"configuración",
"texto",
"/home",
"directorios personales",
"/var",
"logs",
"colas",
"cachés",
"/tmp",
"temporales",
"reiniciar"
],
"rub": [
{
"t": "/etc",
"p": 2
},
{
"t": "/home",
"p": 2
},
{
"t": "/var",
"p": 2
},
{
"t": "/tmp",
"p": 2
}
],
"src": "Simulacro 07",
"h": [
"Pensá qué tipo de contenido justifica cada directorio: configuración, usuarios, datos que cambian, temporales.",
"/etc es configuración en texto; /home son los directorios personales; /var son datos variables como logs, colas y cachés; /tmp son temporales que se borran al reiniciar.",
"Cuatro líneas, una por directorio, y ya tenés los 8 puntos."
],
"e": "/etc contiene la configuración del sistema, en archivos de texto, y es lo primero que se respalda. /home contiene los directorios personales de los usuarios. /var guarda datos que cambian constantemente, como los logs del sistema en /var/log, colas y cachés, y suele ser el que se llena. /tmp guarda archivos temporales, que se borran al reiniciar, y además lleva el sticky bit para que cada usuario solo pueda borrar lo suyo."
},
{
"id": "d32",
"tema": "Montaje y sistemas de archivos",
"q": "¿Qué implica montar una partición? ¿Qué es el punto de montaje y qué pasa con los archivos que ya había en ese directorio?",
"kb": [
"enganchar",
"árbol único",
"punto de montaje",
"directorio existente",
"ocultos",
"no borrados",
"desmontar"
],
"rub": [
{
"t": "Explica qué es montar",
"p": 2
},
{
"t": "Define punto de montaje",
"p": 3
},
{
"t": "Explica que los archivos previos quedan ocultos, no borrados",
"p": 3
}
],
"src": "Simulacro 07",
"h": [
"Montar es enganchar el sistema de archivos de una partición en un directorio del árbol único.",
"Ese directorio existente es el punto de montaje (por ejemplo /mnt/datos); después del montaje, la raíz de la partición aparece ahí.",
"Los archivos que ya había en el directorio no se borran: quedan ocultos y vuelven a verse al desmontar."
],
"e": "Montar una partición es enganchar su sistema de archivos en un directorio del árbol único para que su contenido sea accesible con rutas normales; antes de montarla, sus archivos no se pueden usar. El punto de montaje es ese directorio existente, por ejemplo /mnt/datos, y después del montaje la raíz de la partición aparece ahí. Los archivos que ya había en el directorio no se borran: quedan ocultos mientras dure el montaje y vuelven a verse al desmontar."
},
{
"id": "d33",
"tema": "Shell y comandos",
"q": "¿Qué es una variable de entorno? Explicar PATH y HOME. ¿Qué pasa si se intenta ejecutar un programa que no está en ningún directorio de PATH?",
"kb": [
"par nombre-valor",
"hereda",
"PATH",
"HOME",
"busca ejecutables",
"comando no existe",
"ruta",
"agregar"
],
"rub": [
{
"t": "Define variable de entorno",
"p": 2
},
{
"t": "PATH",
"p": 2
},
{
"t": "HOME",
"p": 2
},
{
"t": "Qué pasa y cómo se resuelve",
"p": 2
}
],
"src": "Simulacro 07",
"h": [
"Una variable de entorno es un par nombre-valor que un proceso hereda de su padre y pasa a sus hijos.",
"PATH es la lista de directorios donde el shell busca los ejecutables; HOME es el directorio personal del usuario.",
"Si el programa no está en ningún directorio de PATH, el shell dice que el comando no existe; se resuelve ejecutándolo con su ruta (./mi_programa) o agregando su directorio a PATH."
],
"e": "Una variable de entorno es un par nombre-valor que un proceso hereda de su padre y transmite a sus hijos; sirve para configurar programas sin cambiar cómo se los invoca. PATH es la lista de directorios donde el shell busca los ejecutables, y HOME es el directorio personal del usuario. Si se intenta ejecutar un programa que no está en ningún directorio de PATH, el shell responde que el comando no existe; se resuelve indicando su ruta explícitamente (./mi_programa) o agregando su directorio a PATH."
},
{
"id": "d34",
"tema": "Criptografía y certificados",
"q": "¿Qué son las claves asimétricas? ¿Qué diferencia hay entre la clave pública y la privada? Dar un ejemplo de uso.",
"kb": [
"par",
"relacionadas matemáticamente",
"pública",
"privada",
"no se deduce",
"SSH",
"firma",
"cifrar"
],
"rub": [
{
"t": "Define el par de claves",
"p": 3
},
{
"t": "Diferencia pública/privada",
"p": 3
},
{
"t": "Ejemplo correcto",
"p": 2
}
],
"src": "Simulacro 07",
"h": [
"Son dos claves, no dos copias: están relacionadas matemáticamente.",
"Lo que se hace con una solo se puede deshacer o verificar con la otra, y conocer la pública no permite deducir la privada. La pública se reparte; la privada nunca sale del equipo.",
"Ejemplo: autenticación SSH, firma digital o cifrar con la pública de alguien para que solo esa persona lo lea."
],
"e": "Las claves asimétricas son un par de claves relacionadas matemáticamente: lo que se hace con una solo se puede deshacer o verificar con la otra, y conocer la pública no permite deducir la privada. La pública se puede distribuir a cualquiera; la privada la guarda su dueño y nunca sale de su equipo. Ejemplos de uso: autenticación SSH (la pública se copia al servidor y el cliente firma un desafío con la privada), firma digital, o cifrar un mensaje con la clave pública de alguien para que solo esa persona pueda leerlo."
},
{
"id": "d35",
"tema": "Laboratorio de Kubernetes",
"q": "¿Por qué no se debe retirar el pendrive mientras K3s está funcionando? ¿Qué hace./scripts/apagar.sh todos --motor antes de desconectarlo?",
"kb": [
"escribiendo",
"corrupción",
"base de datos",
"sync",
"detiene",
"servicios",
"0 réplicas",
"seguro"
],
"rub": [
{
"t": "Explica el riesgo de retirarlo en caliente",
"p": 4
},
{
"t": "Explica qué hace el script, incluido sync",
"p": 4
}
],
"src": "Simulacro 07",
"h": [
"Mientras K3s funciona, su base de datos y los servicios están escribiendo en el pendrive.",
"Retirarlo en caliente puede dejar estructuras a medio escribir y corromper la base del cluster o los volúmenes.",
"El script apaga los servicios (0 réplicas), detiene el motor de K3s y ejecuta sync, que fuerza a escribir todo lo pendiente; recién entonces es seguro desconectarlo."
],
"e": "Mientras K3s funciona, su base de datos interna y los servicios están escribiendo en el pendrive, y parte de esas escrituras queda en curso. Retirarlo en caliente puede dejar estructuras a medio escribir y corromper la base de datos del cluster o los volúmenes. El script apaga todos los servicios (los escala a 0 réplicas), detiene el motor de K3s y ejecuta sync, que fuerza a escribir en el pendrive todo lo que estaba pendiente; recién entonces es seguro desconectarlo."
},
{
"id": "d36",
"tema": "Rutas y directorios",
"q": "¿Qué son /proc y /sys? ¿Por qué no tiene sentido incluirlos en un respaldo?",
"kb": [
"virtuales",
"kernel genera",
"/proc",
"procesos",
"/sys",
"parámetros",
"se regeneran",
"arranque"
],
"rub": [
{
"t": "Qué contiene /proc",
"p": 2
},
{
"t": "Qué contiene /sys",
"p": 2
},
{
"t": "Indica que son virtuales, generados por el kernel",
"p": 2
},
{
"t": "Justifica por qué no se respaldan",
"p": 2
}
],
"src": "Simulacro 08",
"h": [
"Los dos son sistemas de archivos, pero no ocupan disco.",
"/proc contiene información en tiempo real sobre los procesos y el estado del sistema; /sys, los dispositivos y sus parámetros.",
"El kernel genera ese contenido al leerlo, así que no tiene sentido respaldarlo: se vuelve a generar en cada arranque."
],
"e": "/proc y /sys son sistemas de archivos virtuales: el kernel genera su contenido en el momento en que se lee, así que no ocupan espacio en disco. /proc muestra información en tiempo real sobre los procesos y el estado del sistema; /sys expone los dispositivos y sus parámetros, algunos modificables escribiendo. No tiene sentido incluirlos en un respaldo porque no contienen datos propios: son una vista del estado actual y se vuelven a generar en cada arranque."
},
{
"id": "d37",
"tema": "Montaje y sistemas de archivos",
"q": "Nombrar una característica distintiva de ext4, de XFS y de btrfs. ¿Cuál de los tres elegiría para un servidor donde puede hacer falta reducir el tamaño del volumen?",
"kb": [
"ext4",
"maduro",
"reducir",
"XFS",
"grandes",
"no se puede reducir",
"btrfs",
"snapshots",
"copy-on-write"
],
"rub": [
{
"t": "Característica de ext4",
"p": 2
},
{
"t": "Característica de XFS",
"p": 2
},
{
"t": "Característica de btrfs",
"p": 2
},
{
"t": "Elige ext4 y justifica que XFS no se puede reducir",
"p": 2
}
],
"src": "Simulacro 08",
"h": [
"ext4 es el más difundido y maduro; XFS está pensado para volúmenes grandes y cargas paralelas; btrfs trae snapshots baratos y checksums.",
"Uno de los tres no se puede reducir de tamaño por diseño: solo crece.",
"Para un servidor donde puede hacer falta reducir el volumen, elegís ext4 y justificás que XFS no se reduce."
],
"e": "ext4 es el sistema de archivos más difundido y maduro, con las mejores herramientas de reparación, y es el que usan por omisión Debian y Ubuntu. XFS está diseñado para volúmenes grandes y cargas paralelas intensas, pero por diseño solo puede crecer: no se puede reducir. btrfs usa copy-on-write, lo que hace casi gratuitos los snapshots y le permite detectar corrupción con checksums. Para un servidor donde puede hacer falta reducir el tamaño del volumen elegiría ext4, porque XFS no se reduce nunca y ext4 sí se puede reducir (desmontado)."
},
{
"id": "d38",
"tema": "Shell y comandos",
"q": "Explicar qué hace cada línea de este script: #!/bin/bash; echo \"Hola $USER\"; ls -l /tmp | grep txt > lista.txt",
"kb": [
"shebang",
"intérprete",
"bash",
"USER",
"variable",
"ls",
"pipe",
"grep",
"redirección",
"reemplaza"
],
"rub": [
{
"t": "Primera línea",
"p": 2
},
{
"t": "Segunda línea, incluida la variable",
"p": 2
},
{
"t": "Tercera línea: ls, pipe, grep y redirección",
"p": 4
}
],
"src": "Simulacro 08",
"h": [
"Tres líneas: el shebang, un echo con una variable y una tubería con redirección.",
"#!/bin/bash indica qué intérprete ejecuta el script. echo \"Hola $USER\" muestra Hola y el valor de la variable USER.",
"ls -l /tmp | grep txt > lista.txt: lista /tmp en formato largo, se queda con las líneas que tienen txt y guarda el resultado en lista.txt, reemplazando lo que había."
],
"e": "#!/bin/bash es el shebang: indica que el script debe ejecutarlo bash. echo \"Hola $USER\" muestra la palabra Hola seguida del nombre del usuario actual, que está en la variable de entorno USER. ls -l /tmp | grep txt > lista.txt lista en formato largo el contenido de /tmp, se queda solo con las líneas que contienen txt y guarda ese resultado en lista.txt, reemplazando su contenido anterior (con >> se agregaría al final en lugar de reemplazar)."
},
{
"id": "d39",
"tema": "Criptografía y certificados",
"q": "Explicar paso a paso cómo funciona la autenticación SSH con clave pública. ¿Por qué es más segura que la autenticación por contraseña?",
"kb": [
"ssh-keygen",
"ssh-copy-id",
"clave pública",
"desafío",
"firma",
"privada",
"verifica",
"no viaja la contraseña"
],
"rub": [
{
"t": "Describe los pasos (generar, copiar pública, desafío firmado, verificación)",
"p": 5
},
{
"t": "Justifica por qué es más segura",
"p": 3
}
],
"src": "Simulacro 08",
"h": [
"Son cuatro pasos y empiezan antes de conectarse: generar el par y copiar la pública.",
"El cliente genera el par con ssh-keygen y copia la pública al servidor con ssh-copy-id, al archivo de claves autorizadas.",
"Al conectarse, el servidor manda un desafío y el cliente lo firma con su privada; el servidor verifica con la pública. Es más segura porque la contraseña no viaja y no hay nada adivinable en el servidor."
],
"e": "El usuario genera un par de claves con ssh-keygen. Copia la clave pública al servidor con ssh-copy-id, al archivo de claves autorizadas de su cuenta. Al conectarse, el servidor envía un desafío y el cliente lo firma con su clave privada. El servidor verifica la firma con la clave pública guardada y deja entrar. Es más segura que la autenticación por contraseña porque la contraseña no viaja nunca por la red y el servidor no guarda nada que pueda adivinarse: solo una clave pública, que no sirve para suplantar al usuario."
},
{
"id": "d40",
"tema": "Laboratorio de Kubernetes",
"q": "En la central Asterisk, ¿por qué una llamada VoIP usa dos protocolos, SIP y RTP? ¿Por qué el despliegue usa hostNetwork: true?",
"kb": [
"SIP",
"señalización",
"5060",
"RTP",
"audio",
"UDP",
"NAT",
"hostNetwork",
"red del nodo"
],
"rub": [
{
"t": "SIP y RTP",
"p": 5
},
{
"t": "Justifica hostNetwork",
"p": 3
}
],
"src": "Simulacro 08",
"h": [
"Una llamada VoIP usa un protocolo para señalizar y otro para transportar el audio.",
"SIP registra los internos y establece o corta la llamada (puerto 5060); RTP transporta el audio en tiempo real por UDP (10000-10020).",
"SIP anuncia dentro de sus mensajes las IP y puertos de RTP; si NAT los cambia, el audio se corta, por eso el Pod usa hostNetwork: true y la red del nodo."
],
"e": "SIP es la señalización: registra los internos y establece y corta la llamada, en el puerto 5060. RTP transporta el audio en tiempo real, por UDP, en otros puertos (10000-10020). Hacen falta los dos porque señalizar y transportar son cosas distintas. Además, SIP incluye dentro de sus mensajes las direcciones IP y los puertos que va a usar RTP; si la traducción de direcciones de Kubernetes (NAT) los cambia, el audio se corta. Por eso el despliegue usa hostNetwork: true, para que el Pod use directamente la red del nodo y se evite ese problema."
},
{
"id": "d41",
"tema": "Rutas y directorios",
"q": "¿Qué diferencia hay entre /usr y /opt? Si se instala un programa descargando su paquete del fabricante, fuera del gestor de paquetes, ¿dónde conviene ubicarlo y por qué?",
"kb": [
"/usr",
"distribución",
"gestor de paquetes",
"/opt",
"fuera",
"no se pisa",
"actualización"
],
"rub": [
{
"t": "Explica /usr",
"p": 3
},
{
"t": "Explica /opt",
"p": 3
},
{
"t": "Elige /opt y lo justifica",
"p": 2
}
],
"src": "Simulacro 09",
"h": [
"Uno guarda lo que instala la distribución; el otro, lo que se instala aparte.",
"/usr tiene los programas y bibliotecas del gestor de paquetes y se puede reinstalar (por eso no se respalda); /opt es para software instalado fuera del gestor.",
"El paquete del fabricante conviene en /opt, para no mezclarlo con lo de la distribución ni que una actualización lo pise."
],
"e": "/usr contiene los programas y bibliotecas que instala la distribución con su gestor de paquetes; se puede reinstalar y por eso normalmente no se respalda. /opt es para software instalado aparte, fuera del gestor de paquetes. Un programa que llega como paquete del fabricante conviene ubicarlo en /opt para no mezclarlo con lo que administra la distribución y para que una actualización del sistema no lo pise ni lo deje inconsistente."
},
{
"id": "d42",
"tema": "Montaje y sistemas de archivos",
"q": "Explicar los tres pasos para dejar un disco nuevo listo para usarse (particionar, formatear, montar) y qué hace cada paso.",
"kb": [
"particionar",
"divisiones",
"formatear",
"estructuras",
"i-nodos",
"ext4",
"montar",
"directorio"
],
"rub": [
{
"t": "Particionar",
"p": 3
},
{
"t": "Formatear",
"p": 3
},
{
"t": "Montar",
"p": 2
}
],
"src": "Simulacro 09",
"h": [
"Son tres pasos y van en orden: uno prepara el soporte, el otro lo estructura, el último lo hace visible.",
"Particionar divide el disco en regiones independientes; formatear crea en la partición las estructuras del sistema de archivos (i-nodos, directorio raíz); montar la engancha en un directorio del árbol.",
"Cada paso tiene un comando típico: fdisk/parted, mkfs.ext4, mount."
],
"e": "Particionar es dividir el disco en regiones independientes, cada una con su propio uso. Formatear es crear en la partición las estructuras de un sistema de archivos —i-nodos, directorio raíz, etc.—, por ejemplo con mkfs.ext4. Montar es enganchar ese sistema de archivos en un directorio del árbol para poder usarlo con rutas normales, con mount. Los tres pasos van en ese orden: sin partición no hay dónde formatear, y sin formatear no hay estructura que montar."
},
{
"id": "d43",
"tema": "Shell y comandos",
"q": "Explicar qué hacen |, > y >> en el shell, con un ejemplo de cada uno.",
"kb": [
"pipe",
"salida estándar",
"entrada",
"reemplaza",
"agrega",
"al final",
"redirige"
],
"rub": [
{
"t": "Pipe con ejemplo",
"p": 3
},
{
"t": "&gt; con ejemplo, aclarando que reemplaza",
"p": 3
},
{
"t": "&gt;&gt; con ejemplo, aclarando que agrega",
"p": 2
}
],
"src": "Simulacro 09",
"h": [
"Los tres tratan con la salida o la entrada de un comando, pero de forma distinta.",
"El pipe | conecta la salida de uno con la entrada del siguiente; > manda la salida a un archivo reemplazándolo; >> la agrega al final.",
"Un ejemplo de cada uno: ps aux | grep ssh, ls -l > lista.txt, echo hola >> registro.txt."
],
"e": "El pipe | conecta la salida estándar de un comando con la entrada del siguiente: ps aux | grep ssh se queda solo con las líneas de ssh. El > redirige la salida a un archivo reemplazando su contenido: ls -l > lista.txt deja en lista.txt únicamente el resultado de esta ejecución. El >> redirige la salida al final de un archivo, agregando sin borrar lo anterior: echo hola >> registro.txt suma una línea al registro."
},
{
"id": "d44",
"tema": "Criptografía y certificados",
"q": "¿Es válido usar hoy claves RSA de 1024 bits? Justificar y explicar qué usaría en su lugar para una clave SSH.",
"kb": [
"no",
"factorizar",
"inseguras",
"2048",
"3072",
"Ed25519",
"claves cortas"
],
"rub": [
{
"t": "Responde que no y lo justifica",
"p": 3
},
{
"t": "Menciona tamaños mínimos actuales para RSA",
"p": 2
},
{
"t": "Propone Ed25519 y justifica",
"p": 3
}
],
"src": "Simulacro 09",
"h": [
"La seguridad de RSA depende de que sea muy difícil factorizar el producto de dos primos grandes.",
"Con 1024 bits eso ya está al alcance de un atacante con recursos; se necesitan al menos 2048 y se recomiendan 3072 o más.",
"Para SSH hoy se recomienda Ed25519: claves cortas, firmas rápidas y diseño que evita errores de implementación."
],
"e": "No, hoy no es válido usar claves RSA de 1024 bits. La seguridad de RSA depende de que sea muy difícil factorizar el producto de dos primos grandes, y con 1024 bits eso ya está al alcance de un atacante con recursos: se consideran inseguras. RSA necesita al menos 2048 bits, y se recomiendan 3072 o más, lo que lo vuelve lento y voluminoso. Para una clave SSH usaría Ed25519: claves cortas, firmas rápidas y un diseño que evita errores de implementación."
},
{
"id": "d45",
"tema": "Laboratorio de Kubernetes",
"q": "¿Qué es un ConfigMap? ¿Qué ventaja tiene usarlo para la configuración de Asterisk en lugar de incluir los archivos dentro de la imagen?",
"kb": [
"ConfigMap",
"configuración",
"separada",
"imagen",
"kubectl apply",
"no reconstruir",
"subPath"
],
"rub": [
{
"t": "Define ConfigMap",
"p": 4
},
{
"t": "Ventaja de separar configuración e imagen",
"p": 4
}
],
"src": "Simulacro 09",
"h": [
"Un ConfigMap guarda configuración separada de la imagen del contenedor y se monta dentro.",
"Ventaja: para agregar un interno o una extensión se edita el manifiesto y se aplica con kubectl apply, sin reconstruir ni republicar la imagen.",
"La misma imagen sirve con configuraciones distintas; con subPath se reemplazan solo los archivos necesarios sin ocultar el resto de /etc/asterisk."
],
"e": "Un ConfigMap es un recurso de Kubernetes que guarda configuración, por ejemplo archivos de texto como pjsip.conf o extensions.conf, separada de la imagen, y se monta dentro del contenedor. La ventaja es que para agregar un interno o una extensión se edita el manifiesto y se aplica con kubectl apply, sin reconstruir ni volver a publicar la imagen; la misma imagen sirve con configuraciones distintas. Además, con subPath se reemplazan solo los archivos necesarios sin ocultar el resto de /etc/asterisk."
},
{
"id": "d46",
"tema": "Inodos y enlaces",
"q": "Un sistema de archivos muestra espacio libre, pero al intentar crear un archivo nuevo da error por falta de espacio. ¿Cómo puede ser? ¿Qué relación tiene con los i-nodos?",
"kb": [
"i-nodo",
"cantidad fija",
"agotan",
"archivos chicos",
"bloques",
"espacio libre"
],
"rub": [
{
"t": "Indica que cada archivo necesita un i-nodo",
"p": 3
},
{
"t": "Explica que los i-nodos pueden agotarse antes que el espacio",
"p": 3
},
{
"t": "Relaciona el caso con muchos archivos chicos",
"p": 2
}
],
"src": "Simulacro 10",
"h": [
"Cada archivo necesita dos cosas: bloques para los datos y un i-nodo que lo describa.",
"La cantidad de i-nodos es fija y se decide al formatear; si se crean muchísimos archivos chicos, se pueden agotar antes que los bloques.",
"Queda espacio libre en bloques, pero no hay i-nodo para el archivo nuevo, así que la creación falla."
],
"e": "Cada archivo necesita un i-nodo además de bloques para sus datos, y la cantidad de i-nodos de un sistema de archivos es fija: se decide al formatearlo. Si se crearon muchísimos archivos chicos, los i-nodos pueden agotarse antes que los bloques. En ese caso queda espacio libre en bloques, pero no hay un i-nodo disponible para describir el archivo nuevo, y la creación falla. Se puede ver el consumo con df -i."
},
{
"id": "d47",
"tema": "Montaje y sistemas de archivos",
"q": "¿Qué es el journaling de un sistema de archivos y qué problema resuelve? ¿Por qué igualmente se sigue usando FAT en los pendrives, si no tiene journaling?",
"kb": [
"journal",
"corte de energía",
"consistencia",
"completa o descarta",
"FAT",
"compatibilidad",
"sin permisos"
],
"rub": [
{
"t": "Explica qué hace el journal",
"p": 3
},
{
"t": "Indica qué problema resuelve",
"p": 2
},
{
"t": "Justifica el uso de FAT por compatibilidad",
"p": 3
}
],
"src": "Simulacro 10",
"h": [
"Un corte de energía en medio de una operación puede dejar las estructuras del sistema de archivos a medio actualizar.",
"El journal anota primero qué se va a hacer y después lo hace; al reiniciar, completa o descarta lo pendiente y la estructura queda consistente sin revisar todo el disco.",
"FAT se sigue usando por compatibilidad: se lee en casi cualquier equipo sin instalar nada, y sus carencias importan poco en un medio que circula entre sistemas."
],
"e": "Un corte de energía en medio de una operación puede dejar las estructuras del sistema de archivos a medio actualizar. El journaling anota primero qué se va a hacer y después lo hace; al reiniciar, el sistema completa o descarta las operaciones pendientes y la estructura vuelve a ser consistente sin revisar todo el disco. FAT se sigue usando en pendrives por compatibilidad: se lee en casi cualquier equipo sin instalar nada, y sus carencias —sin journaling, sin permisos, sin propietario— importan poco en un medio que circula entre sistemas distintos."
},
{
"id": "d48",
"tema": "Shell y comandos",
"q": "¿Cuál es la diferencia de fondo entre un pipe de bash y uno de PowerShell? Indicar una ventaja de cada enfoque.",
"kb": [
"texto",
"objetos",
"propiedades",
"universal",
"robusto",
"columnas"
],
"rub": [
{
"t": "Texto contra objetos",
"p": 2
},
{
"t": "Ventaja del texto",
"p": 3
},
{
"t": "Ventaja de los objetos",
"p": 3
}
],
"src": "Simulacro 10",
"h": [
"La diferencia es qué viaja por la tubería: texto o algo con estructura.",
"En bash viajan líneas de texto y cada programa tiene que cortarlas por columnas; en PowerShell viajan objetos con propiedades, a las que se accede por nombre.",
"Ventaja del texto: es universal. Ventaja de los objetos: es más robusto, no se rompe si cambia el formato o el ancho de una columna."
],
"e": "En bash, entre comandos viaja texto: cada programa recibe líneas y tiene que cortarlas por columnas para extraer lo que necesita. En PowerShell viajan objetos con propiedades y se accede a ellas por nombre. La ventaja del texto es que es universal: cualquier programa, en cualquier lenguaje, puede leerlo y escribirlo. La ventaja de los objetos es que es más robusto: no se rompe si cambia el formato de la salida o el ancho de una columna."
},
{
"id": "d49",
"tema": "Criptografía y certificados",
"q": "¿Qué amenaza explica que el key exchange ya esté migrando a algoritmos poscuánticos, incluso antes de que exista una computadora cuántica capaz de romper RSA?",
"kb": [
"guardar ahora",
"descifrar después",
"tráfico grabado",
"key exchange",
"híbrido",
"poscuántico"
],
"rub": [
{
"t": "Explica guardar ahora y descifrar después",
"p": 5
},
{
"t": "Explica por qué afecta al key exchange hoy",
"p": 3
}
],
"src": "Simulacro 10",
"h": [
"Aunque hoy no exista una computadora cuántica capaz de romper RSA, hay algo que se puede hacer hoy.",
"El ataque es guardar ahora y descifrar después: alguien graba tráfico cifrado cifrado hoy y lo descifra cuando la tecnología exista.",
"Por eso se protege primero el key exchange, con esquemas que combinan algoritmos clásicos y poscuánticos."
],
"e": "La amenaza es el ataque de guardar ahora y descifrar después: alguien puede grabar hoy tráfico cifrado y guardarlo; si más adelante consigue una computadora cuántica capaz de romper RSA, podrá descifrar esas sesiones pasadas. Como el tráfico ya está grabado, no alcanza con migrar en el futuro: hay que haber usado algoritmos resistentes en ese momento. Por eso el key exchange es lo primero que está migrando, a esquemas que combinan algoritmos clásicos y poscuánticos."
},
{
"id": "d50",
"tema": "Laboratorio de Kubernetes",
"q": "Explicar por qué el laboratorio desactiva el swap (incluido zram) y por qué monta la partición del pendrive con noatime,commit=60.",
"kb": [
"swap",
"rendimiento",
"predecible",
"límites",
"noatime",
"fecha de acceso",
"commit=60",
"journal",
"memoria flash",
"desgaste"
],
"rub": [
{
"t": "Justifica la desactivación de swap",
"p": 3
},
{
"t": "noatime",
"p": 2
},
{
"t": "commit=60 y el motivo (memoria flash)",
"p": 3
}
],
"src": "Simulacro 10",
"h": [
"Las dos decisiones tienen el mismo objetivo: que el pendrive y el rendimiento sean predecibles.",
"Con swap, un contenedor puede ir a disco y los límites de memoria dejan de ser confiables. noatime evita escribir la fecha de acceso en cada lectura.",
"commit=60 agrupa las escrituras del journal de ext4 cada 60 segundos; las dos medidas reducen escrituras chicas, que en memoria flash causan desgaste y latencia."
],
"e": "El laboratorio desactiva el swap, incluido zram, porque si un contenedor puede ir a swap el rendimiento deja de ser predecible y los límites de memoria dejan de cumplirse: el Pod parece tener más RAM de la que tiene. Monta la partición con noatime para que cada lectura no actualice la fecha de último acceso en el i-nodo, y con commit=60 para agrupar las escrituras del journal de ext4 cada 60 segundos en lugar de hacerlo más seguido. Las dos medidas reducen escrituras pequeñas, que en una memoria flash causan desgaste y latencia."
},
{
"id": "dn1",
"tema": "Inodos y enlaces",
"q": "Un archivo tiene tres nombres (hard links) en distintos directorios. ¿Qué muestra el contador de enlaces del i-nodo y qué pasa si se borran dos de esos nombres?",
"kb": [
"contador de enlaces",
"3",
"decrementa",
"2",
"1",
"datos",
"se liberan",
"cero"
],
"rub": [
{
"t": "Indica que el contador vale 3 y por qué",
"p": 3
},
{
"t": "Explica que cada borrado lo decrementa",
"p": 3
},
{
"t": "Aclara que los datos se liberan recién al llegar a cero",
"p": 2
}
],
"src": "Nueva",
"h": [
"Cada nombre nuevo sobre el mismo i-nodo suma uno al contador.",
"Con tres nombres, el contador vale 3; borrar un nombre lo decrementa, no borra los datos.",
"Si se borran dos quedan 2 nombres y los datos siguen; se liberan recién cuando el contador llega a cero."
],
"e": "El contador de enlaces del i-nodo indica cuántos nombres apuntan a ese mismo i-nodo: con tres nombres, vale 3. Al borrar uno de esos nombres el contador baja a 2 y los datos siguen intactos; al borrar el segundo baja a 1 y sigue habiendo acceso por el nombre que queda. Los bloques de datos se liberan recién cuando el contador llega a cero, es decir cuando no queda ningún nombre apuntando al i-nodo."
},
{
"id": "dn2",
"tema": "Inodos y enlaces",
"q": "¿A qué se llama \"enlace roto\"? Explicar cómo puede detectarse desde el shell.",
"kb": [
"soft link",
"ruta",
"destino",
"ya no existe",
"ls -l",
"roto",
"no se puede seguir"
],
"rub": [
{
"t": "Define enlace roto",
"p": 4
},
{
"t": "Explica cómo detectarlo (ls -l, stat, intentar abrirlo)",
"p": 4
}
],
"src": "Nueva",
"h": [
"Pensá qué pasa con un soft link cuando desaparece el archivo al que apunta.",
"El enlace sigue existiendo, pero apunta a una ruta que ya no resuelve a ningún archivo.",
"Se detecta con ls -l (la flecha al destino no lleva a nada) o intentando abrirlo, y stat falla con un error."
],
"e": "Un enlace roto es un soft link cuya ruta de destino ya no existe, porque el archivo se borró o se movió; el enlace sigue estando en el directorio, pero no lleva a ningún archivo. Se puede detectar con ls -l, que muestra el enlace y su destino, intentando abrirlo (falla), o con stat, que devuelve un error de archivo inexistente. Un hard link en cambio nunca queda roto: mientras existe el nombre, los datos existen."
},
{
"id": "dn3",
"tema": "Rutas y directorios",
"q": "Explicar por qué el sistema de archivos de Linux tiene una sola raíz y qué implica eso cuando se conecta un disco nuevo.",
"kb": [
"raíz única",
"árbol",
"montaje",
"directorio",
"no letras",
"/mnt",
"/media"
],
"rub": [
{
"t": "Explica la raíz única y el árbol",
"p": 3
},
{
"t": "Explica que un disco nuevo se monta en un directorio",
"p": 3
},
{
"t": "Contrasta con las letras de unidad de Windows",
"p": 2
}
],
"src": "Nueva",
"h": [
"Linux no tiene letras de unidad: tiene un solo árbol.",
"Cualquier disco o partición se monta en un directorio de ese árbol único y se accede con rutas normales.",
"Se contrasta con Windows: ahí cada unidad tiene su letra. Un disco nuevo en Linux aparece como un directorio más."
],
"e": "Linux tiene una sola raíz y un único árbol de directorios: no hay letras de unidad. Cuando se conecta un disco nuevo, su sistema de archivos se monta en un directorio de ese árbol, por ejemplo bajo /mnt o /media, y desde ese momento se accede con rutas normales como cualquier otro directorio. Windows funciona al revés: cada unidad tiene su propia raíz identificada por una letra. La consecuencia es que en Linux una ruta no dice en qué disco está el archivo y un disco nuevo no crea una jerarquía nueva, sino que se injerta en la existente."
},
{
"id": "dn4",
"tema": "Permisos",
"q": "¿Qué son los permisos especiales setuid, setgid y sticky bit? Explicar cada uno con un caso de uso y un riesgo.",
"kb": [
"setuid",
"propietario",
"setgid",
"grupo",
"sticky",
"/tmp",
"solo el dueño borra",
"riesgo",
"privilegios"
],
"rub": [
{
"t": "Explica setuid y su caso de uso",
"p": 3
},
{
"t": "Explica setgid",
"p": 2
},
{
"t": "Explica sticky bit y su riesgo/utilidad",
"p": 3
}
],
"src": "Nueva",
"h": [
"Son tres bits que se suman a los permisos habituales y cambian quién ejecuta o quién puede borrar.",
"setuid hace que el proceso corra con la identidad del propietario del archivo (passwd); setgid hace lo mismo con el grupo (o hereda el grupo en directorios); sticky en un directorio como /tmp impide que borres lo ajeno.",
"Riesgo del setuid: si el programa está mal escrito, cualquiera puede usarlo para actuar como root. El sticky evita que en un directorio compartido borres archivos de otros."
],
"e": "setuid hace que el proceso se ejecute con la identidad del propietario del archivo: es el caso de passwd, que necesita escribir en un archivo del sistema, y su riesgo es que un programa mal escrito da privilegios a cualquiera que lo ejecute. setgid hace lo análogo con el grupo, y en un directorio hace que los archivos nuevos hereden el grupo del directorio, útil en carpetas compartidas. El sticky bit en un directorio como /tmp impide que un usuario borre o renombre archivos de otros, aunque tenga escritura sobre el directorio; así todos pueden usar el área temporal sin pisarse."
},
{
"id": "dn5",
"tema": "Montaje y sistemas de archivos",
"q": "¿Qué pasa con un sistema de archivos si se desmonta mientras un proceso lo está usando? ¿Qué se debe hacer antes de desmontar un pendrive?",
"kb": [
"se niega",
"ocupado",
"archivos abiertos",
"sync",
"cerrar",
"desmontar",
"umount",
"pérdida"
],
"rub": [
{
"t": "Explica por qué el desmontaje falla",
"p": 3
},
{
"t": "Explica las precauciones (cerrar procesos, sync)",
"p": 3
},
{
"t": "Indica el comando umount",
"p": 2
}
],
"src": "Nueva",
"h": [
"El kernel no puede desmontar algo que está en uso.",
"Falla si algún proceso tiene archivos abiertos ahí o tiene su directorio de trabajo dentro de ese sistema de archivos.",
"Antes de desmontar un pendrive: cerrar los programas que lo usan, salir de ese directorio y ejecutar sync; después umount."
],
"e": "Si se intenta desmontar un sistema de archivos en uso, el kernel se niega, porque hacerlo dejaría a esos procesos sin sus archivos: se produce un error de dispositivo ocupado. Antes de desmontar un pendrive hay que cerrar los programas que tengan archivos abiertos ahí, salir del directorio si es el directorio de trabajo actual y ejecutar sync para forzar la escritura de lo pendiente; recién entonces se ejecuta umount, y si no se puede, umount -l o investigar qué proceso lo está usando."
},
{
"id": "dn6",
"tema": "Montaje y sistemas de archivos",
"q": "Comparar cómo afecta el tamaño de bloque de un sistema de archivos cuando hay miles de archivos muy pequeños.",
"kb": [
"bloque",
"tamaño",
"desperdicio",
"fragmentación interna",
"i-nodos",
"espacio"
],
"rub": [
{
"t": "Explica que cada archivo ocupa al menos un bloque",
"p": 4
},
{
"t": "Relaciona el desperdicio con archivos pequeños",
"p": 2
},
{
"t": "Menciona el papel de los i-nodos",
"p": 2
}
],
"src": "Nueva",
"h": [
"Un archivo ocupa al menos un bloque, aunque su contenido sea más chico.",
"Con bloques grandes y miles de archivos chicos se desperdicia una parte de cada bloque: fragmentación interna.",
"Además cada archivo consume un i-nodo, así que también hay que mirar cuántos i-nodos hacen falta."
],
"e": "El tamaño de bloque se nota mucho con miles de archivos muy pequeños. Un archivo ocupa al menos un bloque completo, aunque su contenido sea de pocos bytes: el espacio que sobra en el último bloque se desperdicia, y eso se llama fragmentación interna. Con bloques grandes y muchos archivos chicos el desperdicio puede ser enorme, mientras que bloques chicos desperdician menos pero hacen que un archivo grande necesite más bloques y más búsquedas. Además, cada archivo consume un i-nodo, así que con muchos archivos chicos también hay que contar los i-nodos disponibles."
},
{
"id": "dn7",
"tema": "Bloques, archivos y objetos",
"q": "¿Por qué el almacenamiento de objetos no necesita una jerarquía de directorios? Explicar qué papel cumplen las barras en una clave como 2026/03/informe.pdf.",
"kb": [
"namespace plano",
"clave",
"barras",
"no crean directorios",
"parte del nombre",
"escala"
],
"rub": [
{
"t": "Explica el espacio plano",
"p": 4
},
{
"t": "Explica que las barras no crean directorios",
"p": 2
},
{
"t": "Relaciona con la escalabilidad",
"p": 2
}
],
"src": "Nueva",
"h": [
"El almacenamiento de objetos no tiene una estructura de directorios interna.",
"El espacio de nombres es plano: cada objeto se identifica por una clave, que es un texto.",
"Las barras de 2026/03/informe.pdf son caracteres más de la clave: no crean directorios. Eso es lo que permite escalar a miles de millones de objetos sin el costo de un árbol gigante."
],
"e": "El almacenamiento de objetos no necesita una jerarquía de directorios porque su espacio de nombres es plano: cada objeto se identifica por una clave, que es un texto, y no hay estructura de directorios que mantener. En una clave como 2026/03/informe.pdf las barras son caracteres más del nombre: no crean directorios 2026 ni 03, y la consola puede simularlos para que sea cómodo navegar. Ese espacio plano evita el costo de mantener un árbol de directorios gigante y es lo que permite escalar a miles de millones de objetos sin un límite práctico."
},
{
"id": "dn8",
"tema": "Bloques, archivos y objetos",
"q": "Comparar el almacenamiento en un volumen de bloques, en una carpeta compartida NFS y en S3 para guardar 20 TB de videos que casi nunca se modifican. ¿Cuál recomendaría y por qué?",
"kb": [
"bloques",
"archivos",
"objetos",
"inmutable",
"costo",
"HTTP",
"respaldos",
"se reescribe entero"
],
"rub": [
{
"t": "Caracteriza cada modelo",
"p": 3
},
{
"t": "Relaciona el uso (videos, sin modificación) con objetos",
"p": 3
},
{
"t": "Justifica la recomendación",
"p": 2
}
],
"src": "Nueva",
"h": [
"Mirá el patrón de uso: se escriben una vez, pesan mucho y casi nunca se modifican.",
"Un volumen de bloques o un NFS te obligan a administrar capacidad y a copiar para cambiar algo; el objeto se reemplaza entero, pero acá no importa.",
"Para 20 TB de videos que no se tocan, objetos: barato, escalable, accesible por HTTP y sin montar nada."
],
"e": "Para 20 TB de videos que casi nunca se modifican conviene el almacenamiento de objetos. Un volumen de bloques obliga a dimensionar y administrar el espacio, a montarlo y a tener un sistema de archivos, y para leerlo hay que tener una máquina conectada. Una carpeta compartida NFS resuelve el acceso entre equipos, pero hay que mantener el servidor, la capacidad y los respaldos. Los objetos se adaptan al patrón de uso: se escriben enteros, se leen muchas veces, se acceden por HTTP y escalan a gran volumen sin administrar discos; que no admitan modificación parcial no importa, porque esos videos no se editan en el lugar."
},
{
"id": "dn9",
"tema": "Shell y comandos",
"q": "¿Qué diferencia hay entre un proceso que corre en primer plano y uno en segundo plano? ¿Cómo se manda un proceso al fondo desde la terminal?",
"kb": [
"primer plano",
"bloquea",
"segundo plano",
"&",
"ctrl-z",
"bg",
"fg",
"jobs"
],
"rub": [
{
"t": "Explica la diferencia",
"p": 4
},
{
"t": "Explica cómo mandarlo al fondo (&, Ctrl+Z y bg)",
"p": 4
}
],
"src": "Nueva",
"h": [
"Uno de los dos bloquea la terminal hasta terminar.",
"En primer plano el shell espera al proceso; en segundo plano el shell te devuelve el prompt y el proceso sigue.",
"Se manda al fondo con & al final, o con Ctrl+Z (lo suspende) y después bg; fg lo trae de vuelta."
],
"e": "Un proceso en primer plano ocupa la terminal: el shell queda esperando a que termine y no se pueden escribir otros comandos. En segundo plano, el proceso sigue ejecutándose pero el shell devuelve el prompt de inmediato, así que se puede seguir trabajando. Se manda un proceso al fondo agregando & al final del comando; si ya está corriendo en primer plano, se lo suspende con Ctrl+Z y se lo reanuda en segundo plano con bg. El comando jobs los lista y fg lo trae de vuelta al primer plano."
},
{
"id": "dn10",
"tema": "Shell y comandos",
"q": "Explicar el ciclo de trabajo de un intérprete de comandos: qué hace desde que se escribe una orden hasta que se ejecuta el programa.",
"kb": [
"lee",
"analiza",
"expande",
"variables",
"comodines",
"busca en PATH",
"fork",
"exec",
"wait",
"código de salida"
],
"rub": [
{
"t": "Describe lectura, análisis y expansión",
"p": 3
},
{
"t": "Describe la búsqueda del ejecutable en PATH",
"p": 2
},
{
"t": "Describe la ejecución (fork/exec) y la espera",
"p": 3
}
],
"src": "Nueva",
"h": [
"El shell es un programa que repite siempre el mismo ciclo.",
"Primero lee la línea, después la analiza y expande variables y comodines, luego busca el ejecutable en PATH.",
"Para terminar: crea un proceso hijo con fork, carga el programa con exec, espera a que termine y muestra el código de salida."
],
"e": "El intérprete de comandos repite un ciclo. Primero lee la línea que escribió la persona. Después la analiza y expande lo que corresponda: variables, comodines, comillas, redirecciones. Luego busca el ejecutable en los directorios de PATH. Si lo encuentra, crea un proceso hijo (fork), carga en ese hijo el programa pedido (exec) y espera a que termine, guardando el código de salida para saber si salió bien o mal. Si no lo encuentra, muestra un error y vuelve al principio del ciclo."
},
{
"id": "dn11",
"tema": "Shell y comandos",
"q": "¿Qué es un script de shell y qué cuidado hay que tener con la primera línea y con los permisos del archivo para poder ejecutarlo?",
"kb": [
"script",
"shebang",
"#!/bin/bash",
"chmod",
"+x",
"permiso de ejecución",
"./"
],
"rub": [
{
"t": "Define script",
"p": 2
},
{
"t": "Explica el shebang",
"p": 3
},
{
"t": "Explica el permiso de ejecución y cómo invocarlo",
"p": 3
}
],
"src": "Nueva",
"h": [
"Un script es un archivo de texto con comandos que el shell ejecuta en orden.",
"La primera línea es el shebang (#!...) e indica qué intérprete usarlo; sin ella el sistema no sabe con qué ejecutarlo.",
"Además el archivo necesita permiso de ejecución (chmod +x) y se lo invoca con./nombre para que el shell no lo busque en PATH."
],
"e": "Un script de shell es un archivo de texto con una secuencia de comandos que un intérprete ejecuta en orden, como si se los escribiera uno por uno. La primera línea, el shebang (por ejemplo #!/bin/bash), indica con qué intérprete hay que ejecutarlo; conviene que coincida con lo que el script realmente usa. Para poder ejecutarlo el archivo necesita permiso de ejecución (chmod +x), y se lo invoca con./nombre_script para que el shell lo tome del directorio actual en lugar de buscarlo en PATH."
},
{
"id": "dn12",
"tema": "Shell y comandos",
"q": "Explicar la diferencia entre una variable de entorno y una variable local del shell, y cómo se pasa una variable a un programa hijo.",
"kb": [
"variable local",
"variable de entorno",
"export",
"hijo",
"hereda",
"PATH"
],
"rub": [
{
"t": "Distingue local de entorno",
"p": 4
},
{
"t": "Explica export y la herencia",
"p": 4
}
],
"src": "Nueva",
"h": [
"La diferencia está en quién la ve, no en el tipo de dato.",
"Una variable local solo existe en el shell actual; una variable de entorno además se transmite a los procesos hijos.",
"export es lo que convierte una variable en variable de entorno, y así el programa hijo la hereda."
],
"e": "Una variable local del shell existe solo dentro de ese shell: no la ven los programas que se ejecutan desde él. Una variable de entorno, en cambio, se transmite a los procesos hijos, que la heredan. La diferencia práctica es la exportación: al declarar una variable y hacer export nombre=valor, el proceso hijo la recibe en su entorno y puede leerla, como sucede con PATH. Si no se exporta, para el hijo esa variable simplemente no existe."
},
{
"id": "dn13",
"tema": "Criptografía y certificados",
"q": "Explicar el esquema híbrido que usan SSH y TLS: por qué no se cifra toda la sesión con criptografía asimétrica.",
"kb": [
"asimétrico",
"lento",
"key exchange",
"clave de sesión",
"simétrico",
"rápido",
"autenticación"
],
"rub": [
{
"t": "Explica que lo asimétrico autentica y acuerda la clave",
"p": 3
},
{
"t": "Explica que los datos viajan con cifrado simétrico",
"p": 3
},
{
"t": "Justifica por rendimiento",
"p": 2
}
],
"src": "Nueva",
"h": [
"Lo asimétrico es cómodo para identificarse, pero es lento; lo simétrico es rápido, pero hay que compartir la clave.",
"El esquema combina las dos cosas: lo asimétrico se usa para autenticar y acordar una clave de sesión; después los datos viajan con cifrado simétrico.",
"La razón es el rendimiento: cifrar un archivo grande directamente con RSA sería varios órdenes de magnitud más lento."
],
"e": "El esquema híbrido combina lo mejor de cada criptografía. Lo asimétrico se usa para autenticar a las partes y acordar una clave de sesión, aprovechando que no hace falta compartir un secreto de antemano. Después, los datos viajan cifrados con criptografía simétrica usando esa clave de sesión, que es distinta en cada conexión y se descarta al terminar. No se cifra toda la sesión con criptografía asimétrica porque es varios órdenes de magnitud más lenta: lo asimétrico se usa poco y solo para lo que no puede hacer lo simétrico."
},
{
"id": "dn14",
"tema": "Criptografía y certificados",
"q": "¿Qué es el principio de confianza TOFU que usa SSH la primera vez que se conecta a un servidor? ¿Qué debilidad tiene?",
"kb": [
"TOFU",
"trust on first use",
"fingerprint",
"guarda",
"known_hosts",
"primera conexión",
"ataque",
"canal seguro"
],
"rub": [
{
"t": "Define TOFU",
"p": 5
},
{
"t": "Explica la debilidad (la primera conexión no está verificada)",
"p": 3
}
],
"src": "Nueva",
"h": [
"TOFU significa trust on first use: confiar en el primer uso.",
"La primera vez que te conectás, el cliente muestra el fingerprint y lo guarda; en las conexiones siguientes exige el mismo.",
"La debilidad es que esa primera conexión no está verificada: si alguien se interpone en ese primer momento, aceptás su clave."
],
"e": "TOFU (trust on first use) es el modelo que usa SSH la primera vez que uno se conecta a un servidor: el cliente muestra el fingerprint de la clave y pide aceptarlo, y a partir de ahí lo guarda y exige el mismo en las conexiones siguientes. Su debilidad es que la primera conexión no está verificada por ningún canal independiente: si alguien se interpone justo en ese primer contacto, uno acepta la clave del atacante y después todas las conexiones parecen normales. Por eso conviene verificar el fingerprint por otro medio la primera vez."
},
{
"id": "dn15",
"tema": "Criptografía y certificados",
"q": "Explicar por qué una misma clave privada debe mantenerse fuera del servidor y qué pasaría si se copia la privada en lugar de la pública.",
"kb": [
"privada",
"nunca sale",
"pública",
"claves autorizadas",
"suplantación",
"robo",
"secreto"
],
"rub": [
{
"t": "Explica qué se copia y por qué",
"p": 4
},
{
"t": "Explica el riesgo de copiar la privada",
"p": 4
}
],
"src": "Nueva",
"h": [
"Pensá qué prueba cada clave: la privada demuestra identidad, la pública solo permite verificar.",
"Al servidor se copia solo la pública, al archivo de claves autorizadas; la privada nunca sale del equipo del usuario.",
"Si copiás la privada al servidor, cualquiera con acceso a ese servidor (o a un respaldo suyo) puede hacerse pasar por vos."
],
"e": "La clave privada es el secreto que demuestra la identidad del usuario: nunca debe salir de su equipo, porque cualquiera que la tenga puede autenticarse en su nombre. Al servidor se copia solo la clave pública, que se guarda en el archivo de claves autorizadas y sirve únicamente para verificar las firmas; conocerla no permite suplantar a nadie. Si se copiara la privada en lugar de la pública, el servidor —y cualquiera con acceso a él o a sus respaldos— tendría el secreto y podría usarlo para hacerse pasar por el usuario, además de que se rompe la separación entre el equipo del usuario y el servidor."
},
{
"id": "dn16",
"tema": "API y llamadas al sistema",
"q": "Explicar la diferencia entre el espacio de usuario y el espacio del kernel. ¿Por qué un programa no puede escribir directamente en el disco?",
"kb": [
"espacio de usuario",
"kernel",
"privilegios",
"llamada al sistema",
"protección",
"aislamiento",
"hardware"
],
"rub": [
{
"t": "Distingue los dos espacios",
"p": 3
},
{
"t": "Explica el cambio de nivel de privilegio",
"p": 3
},
{
"t": "Relaciona con la protección entre procesos",
"p": 2
}
],
"src": "Nueva",
"h": [
"El sistema se divide en dos zonas con privilegios distintos: espacio de usuario y espacio del kernel.",
"Un programa común no puede tocar el hardware ni el disco: solo pide servicios mediante llamadas al sistema, que implican un cambio de nivel de privilegio.",
"Así el kernel controla el acceso y aísla a los procesos entre sí: si un programa no puede escribir el disco directamente, tampoco puede pisar los archivos de otro."
],
"e": "El espacio de usuario es donde corren los programas comunes, con permisos limitados; el espacio del kernel es donde corre el núcleo del sistema, con todos los privilegios. Un programa no puede escribir directamente en el disco porque no tiene acceso al hardware: para hacerlo tiene que pedirle un servicio al kernel mediante una llamada al sistema, y esa llamada implica un cambio de nivel de privilegio. Ese diseño es lo que permite que el kernel controle el acceso al hardware, valide los pedidos y aísle a los procesos entre sí: un programa no puede escribir donde se le ocurra, solo donde el sistema se lo permite."
},
{
"id": "dn17",
"tema": "API y llamadas al sistema",
"q": "¿Qué es una interfaz gráfica de usuario y cómo se relaciona con los eventos y con las llamadas al sistema?",
"kb": [
"bibliotecas",
"espacio de usuario",
"eventos",
"event loop",
"llamadas al sistema",
"archivos",
"procesos"
],
"rub": [
{
"t": "Ubica la interfaz gráfica en espacio de usuario",
"p": 3
},
{
"t": "Explica el modelo de eventos",
"p": 3
},
{
"t": "Aclara que usa las mismas llamadas al sistema",
"p": 2
}
],
"src": "Nueva",
"h": [
"La interfaz gráfica no está dentro del kernel: son bibliotecas y programas de usuario.",
"Se organiza alrededor de eventos y un event loop: recibe clics y teclas y los atiende uno por uno, en lugar de seguir pasos fijos.",
"Para hacer su trabajo usa las mismas llamadas al sistema que un programa de consola: procesos, comunicación entre procesos, archivos y entrada/salida."
],
"e": "Una interfaz gráfica de usuario es un conjunto de bibliotecas y programas que corren en espacio de usuario, fuera del kernel, y por eso se puede reemplazar sin tocar el sistema. Se organiza alrededor del modelo de eventos: el programa mantiene un event loop que espera acciones del usuario (clics, teclas, mensajes del sistema de ventanas) y las atiende una por una. Aunque el usuario la vea como algo distinto, para funcionar usa las mismas llamadas al sistema que un programa de consola: procesos, comunicación entre procesos, archivos y entrada/salida."
},
{
"id": "dn18",
"tema": "Laboratorio de Kubernetes",
"q": "¿Qué ventaja tiene usar un registry de contenedores propio dentro del cluster en lugar de Docker Hub?",
"kb": [
"sin Internet",
"latencia",
"control",
"privadas",
"cluster",
"containerd"
],
"rub": [
{
"t": "Menciona la independencia de Internet",
"p": 3
},
{
"t": "Menciona velocidad y control de las imágenes",
"p": 3
},
{
"t": "Relaciona con el laboratorio",
"p": 2
}
],
"src": "Nueva",
"h": [
"Pensá qué pasa si el registry depende de Internet: velocidad, disponibilidad y control.",
"Un registry propio guarda las imágenes dentro del cluster: no hay que salir a Docker Hub para descargarlas.",
"Ventajas: no depende de Internet ni de una cuenta externa, es más rápido por estar en la red local y permite tener imágenes privadas bajo control."
],
"e": "Usar un registry propio dentro del cluster tiene varias ventajas: no depende de Internet ni de una cuenta o cuota externas, así que el laboratorio funciona igual sin conexión; las descargas son más rápidas porque el registry está en la red local, junto a los nodos; y las imágenes propias quedan bajo control, sin publicarlas en un servicio de terceros. Cuando K3s crea un Pod, containerd descarga la imagen de ese registry interno, el mismo al que se hizo push antes, con tal de que esté configurado en registries.yaml."
},
{
"id": "dn19",
"tema": "Laboratorio de Kubernetes",
"q": "Explicar la diferencia entre escalar un Deployment a 0 réplicas y borrarlo. ¿Qué pasa con los datos en cada caso?",
"kb": [
"0 réplicas",
"Pods",
"detienen",
"PVC",
"se conservan",
"borrar",
"Deployment",
"volumen",
"datos"
],
"rub": [
{
"t": "Explica el escalado a 0",
"p": 3
},
{
"t": "Explica el borrado del Deployment",
"p": 2
},
{
"t": "Aclara qué pasa con los PVC y los datos",
"p": 3
}
],
"src": "Nueva",
"h": [
"Hay que distinguir el objeto que declara los Pods del volumen que guarda los datos.",
"Escalar a 0 detiene los Pods y libera CPU y RAM, pero el Deployment y los PVC siguen existiendo.",
"Borrar el Deployment elimina también su definición; los PVC pueden quedar o borrarse según cómo se hayan creado, y si se borran, los datos se pierden."
],
"e": "Escalar un Deployment a 0 réplicas significa decir que no se quiere ningún Pod corriendo: los Pods se detienen y liberan CPU y RAM, pero el Deployment sigue existiendo con su definición y los PersistentVolumeClaims se conservan, así que no se pierde nada y al volver a escalar los Pods nuevos montan los mismos volúmenes. Borrar el Deployment elimina el objeto y con él sus Pods; los PVC pueden quedar o eliminarse según cómo se hayan creado, y si se borran, los datos se pierden. La diferencia central es que el 0 es reversible sin pérdida y el borrado no."
},
{
"id": "dn20",
"tema": "Rutas y directorios",
"q": "¿Qué son los archivos ocultos en Linux y cómo se listan? Explicar por qué existen y dar un ejemplo típico.",
"kb": [
"punto",
"nombre",
"ls -a",
"configuración",
".bashrc",
"no es un permiso",
"convención"
],
"rub": [
{
"t": "Explica que es una convención de nombre con punto inicial",
"p": 4
},
{
"t": "Explica cómo listarlos (ls -a)",
"p": 2
},
{
"t": "Da un ejemplo y aclara que no es un permiso",
"p": 2
}
],
"src": "Nueva",
"h": [
"No son un permiso ni un atributo: es una convención sobre el nombre.",
"Los archivos ocultos empiezan con un punto; existen para no llenar el listado con archivos de configuración.",
"Se listan con ls -a (o ls -la). Ejemplo típico:.bashrc en el directorio personal."
],
"e": "En Linux un archivo oculto es simplemente un archivo cuyo nombre empieza con un punto: es una convención de nombre, no un permiso ni un atributo especial. Existen para no llenar la vista normal con archivos de configuración que se tocan poco. Se listan con ls -a, o ls -la para ver además los detalles. Un ejemplo típico es.bashrc en el directorio personal, que el shell lee al iniciar sesión; también.ssh, que guarda las claves del usuario."
},
{
"id": "dn21",
"tema": "Inodos y enlaces",
"q": "Explicar por qué un archivo puede tener varios nombres distintos en el mismo sistema de archivos y qué relación tiene eso con el comando mv dentro de la misma partición.",
"kb": [
"hard link",
"entrada de directorio",
"mismo i-nodo",
"nombre",
"mv",
"renombrar",
"instantáneo",
"no copia"
],
"rub": [
{
"t": "Explica que cada nombre es una entrada de directorio al mismo i-nodo",
"p": 3
},
{
"t": "Relaciona mv con cambiar la entrada y no los datos",
"p": 3
},
{
"t": "Explica por qué es instantáneo incluso con archivos grandes",
"p": 2
}
],
"src": "Nueva",
"h": [
"Un archivo es su i-nodo; los nombres son solo entradas de directorio que apuntan a él.",
"Se pueden crear varios nombres para el mismo i-nodo (hard links) y todos son igual de originales; el contador de enlaces los cuenta.",
"Dentro del mismo sistema de archivos, mv solo cambia la entrada de directorio: no copia los datos, por eso es instantáneo."
],
"e": "Un archivo en un sistema de archivos UNIX es su i-nodo: cada nombre es solo una entrada de directorio que apunta a ese i-nodo. Por eso puede tener varios nombres en distintos directorios (hard links), todos equivalentes, y el contador de enlaces del i-nodo indica cuántos son. Eso explica el comportamiento de mv dentro de la misma partición: mover o renombrar cambia una entrada de directorio, o la pasa de un directorio a otro, sin tocar los datos ni el i-nodo; por eso es instantáneo incluso con archivos enormes. Copiar de una partición a otra, en cambio, sí implica copiar los datos."
},
{
"id": "dn22",
"tema": "Montaje y sistemas de archivos",
"q": "¿Qué son los i-nodos libres y cómo se consulta cuántos quedan? Explicar por qué un servidor de correo puede llenarse de i-nodos antes que de espacio.",
"kb": [
"i-nodos",
"libres",
"df -i",
"cantidad fija",
"archivos pequeños",
"espacio",
"agotar"
],
"rub": [
{
"t": "Explica que la cantidad de i-nodos es fija al formatear",
"p": 3
},
{
"t": "Indica cómo consultarlos (df -i)",
"p": 2
},
{
"t": "Explica el caso del servidor con muchos archivos chicos",
"p": 3
}
],
"src": "Nueva",
"h": [
"La cantidad de i-nodos se fija al formatear y no crece con el uso.",
"Se consultan con df -i, que muestra i-nodos totales, usados y libres.",
"Un servidor de correo o un repositorio con millones de archivos chicos agota i-nodos mucho antes que bloques."
],
"e": "Los i-nodos libres son las entradas de la tabla de i-nodos que todavía no usa ningún archivo. La cantidad total se decide al formatear el sistema de archivos y no crece con el uso, así que es un recurso aparte del espacio en bloques. Se consulta con df -i, que informa i-nodos totales, usados y disponibles. Un servidor de correo puede llenarse de i-nodos antes que de espacio porque guarda millones de archivos muy pequeños: cada mensaje consume un i-nodo aunque ocupe pocos bloques, y llega un momento en que no se pueden crear archivos nuevos aunque quede espacio libre."
},
{
"id": "dx1",
"q": "Explicar cómo se resuelve un nombre de archivo hasta llegar a sus datos: qué papel cumplen el directorio, el i-nodo y los bloques.",
"tema": "Inodos y enlaces",
"kb": [
"directorio",
"tabla",
"nombre",
"i-nodo",
"metadatos",
"bloques",
"apunta"
],
"rub": [
{
"t": "El directorio asocia nombre con número de i-nodo",
"p": 3
},
{
"t": "El i-nodo guarda metadatos y la ubicación de los bloques",
"p": 3
},
{
"t": "Los bloques contienen los datos",
"p": 2
}
],
"src": "Nueva",
"h": [
"El camino va siempre en el mismo orden: nombre, número, metadatos, datos.",
"Primero se busca el nombre en la tabla del directorio; eso da un número de i-nodo.",
"El i-nodo dice dónde están los bloques, y los bloques son los que tienen los datos."
],
"e": "Para llegar del nombre a los datos se hacen tres saltos. Primero, el directorio que lo contiene es una tabla que asocia el nombre con un número de i-nodo, y ahí se resuelve el nombre. Segundo, se lee el i-nodo, que guarda los metadatos del archivo —permisos, propietario, tamaño, fechas, contador de enlaces— y la ubicación de sus bloques de datos. Tercero, con esa ubicación se leen los bloques, que son los que contienen el contenido. Por eso el nombre no está en el i-nodo: es solo una etiqueta de la tabla del directorio."
},
{
"id": "dx2",
"q": "¿Qué son los permisos efectivos frente a los permisos nominales de un archivo? Explicar qué papel cumplen el umask y el propietario real.",
"tema": "Inodos y enlaces",
"kb": [
"permisos nominales",
"efectivos",
"umask",
"máscara",
"propietario",
"grupo",
"otros",
"se aplican"
],
"rub": [
{
"t": "Distingue nominales (los que se piden) de efectivos (los que quedan)",
"p": 3
},
{
"t": "Explica el umask como máscara que quita permisos al crear",
"p": 3
},
{
"t": "Aclara cómo se decide si contás como propietario, grupo u otros",
"p": 2
}
],
"src": "Nueva",
"h": [
"Uno es lo que pedís al crear; el otro es lo que el sistema termina aplicando.",
"El umask es una máscara que se resta a los permisos pedidos: con umask 022 un 666 queda en 644.",
"Además, para saber qué terna te toca, el sistema mira si sos el dueño, si estás en el grupo o si sos 'otros'."
],
"e": "Los permisos nominales son los que se piden o se declaran al crear el archivo; los efectivos son los que el sistema termina aplicando. Al crear un archivo, el umask del proceso quita permisos sobre el valor pedido: con umask 022, un archivo nuevo queda en 644 y un directorio en 755. Los permisos efectivos también dependen de quién sos: el sistema decide primero si sos el propietario, si no si pertenecés al grupo, y si no te aplica la terna de otros. De ahí que un mismo archivo se vea accesible o no según el usuario, y que el setuid y el setgid puedan cambiar la identidad con la que se ejecuta."
},
{
"id": "dx3",
"q": "¿Qué funciones cumplen los directorios /bin, /sbin, /lib y /proc? Explicar por qué los programas de usuario normalmente no guardan nada en ellos.",
"tema": "Rutas y directorios",
"kb": [
"/bin",
"binarios",
"/sbin",
"administración",
"/lib",
"bibliotecas",
"/proc",
"virtual",
"sistema",
"read-only"
],
"rub": [
{
"t": "/bin y /sbin",
"p": 3
},
{
"t": "/lib",
"p": 2
},
{
"t": "/proc virtual",
"p": 2
},
{
"t": "Justifica por qué no se guarda ahí",
"p": 1
}
],
"src": "Nueva",
"h": [
"Son directorios del sistema, no de usuario: cada uno tiene un tipo de contenido fijo.",
"/bin tiene binarios básicos y /sbin los de administración; /lib tiene bibliotecas compartidas.",
"/proc es virtual y lo genera el kernel; nada de eso es un lugar para guardar archivos propios."
],
"e": "/bin contiene los binarios básicos del sistema (ls, cat, cp) y /sbin los comandos de administración (mount, fdisk), que suelen requerir privilegios. /lib contiene las bibliotecas compartidas y módulos que esos binarios necesitan para arrancar. /proc es un sistema de archivos virtual: el kernel genera su contenido al leerlo y expone procesos y estado del sistema, así que no ocupa disco. Los programas de usuario no guardan nada ahí porque son directorios administrados por el sistema o por el gestor de paquetes: una actualización los pisa, se necesita root para escribir, y en /proc directamente no se puede persistir nada. Los datos propios van en /home, /var o /tmp."
},
{
"id": "dx4",
"q": "Un usuario no puede leer un archivo aunque tenga permisos de lectura para 'otros'. ¿Qué verificaciones pueden explicar el bloqueo? Nombrar al menos tres.",
"tema": "Permisos",
"kb": [
"permiso de ejecución",
"directorio",
"padre",
"root",
"atributos",
"ACL",
"montaje",
"solo lectura",
"SELinux"
],
"rub": [
{
"t": "Falta de ejecución sobre algún directorio del camino",
"p": 3
},
{
"t": "Otra restricción: ACL, atributos, montaje de solo lectura",
"p": 3
},
{
"t": "Casos especiales: root o el propio dueño con 000",
"p": 2
}
],
"src": "Nueva",
"h": [
"El permiso del archivo no es lo único que importa: también hay que poder llegar a él.",
"Si falta x en algún directorio del camino, no se llega; también pueden intervenir ACL, atributos o un montaje de solo lectura.",
"Y ojo con los casos especiales: root saltea los permisos, y el dueño de un archivo con 000 tampoco puede leerlo."
],
"e": "Primero, para llegar al archivo hace falta permiso de ejecución sobre cada directorio del camino: si falta en alguno, no se llega aunque el archivo sea legible. Segundo, pueden existir restricciones adicionales: listas de control de acceso (ACL) que achican los permisos, atributos como inmutable o append-only, el sistema de archivos montado como solo lectura, o políticas de seguridad tipo SELinux. Tercero, hay casos especiales que invierten la intuición: root saltea las verificaciones de permisos, y el propietario de un archivo con permisos 000 no puede leerlo aunque sea suyo, porque la terna del propietario se aplica antes que la de otros."
},
{
"id": "dx5",
"q": "¿Qué es la tabla de particiones de un disco y qué información guarda? ¿Qué pasa si se corrompe?",
"tema": "Montaje y sistemas de archivos",
"kb": [
"tabla de particiones",
"inicio",
"fin",
"tipo",
"MBR",
"GPT",
"arranque",
"no se encuentra",
"reparar"
],
"rub": [
{
"t": "Define la tabla de particiones",
"p": 3
},
{
"t": "Indica qué datos guarda (inicio, tamaño, tipo)",
"p": 3
},
{
"t": "Explica la consecuencia de corromperla",
"p": 2
}
],
"src": "Nueva",
"h": [
"Está al principio del disco y describe dónde empieza y termina cada región.",
"Guarda, por cada partición, el sector de inicio, el tamaño y el tipo de sistema de archivos.",
"Si se daña, el sistema no sabe dónde están las particiones: el disco parece vacío aunque los datos sigan ahí."
],
"e": "La tabla de particiones es la estructura que está al comienzo del disco y describe cómo está dividido: por cada partición guarda dónde empieza (sector de inicio), cuánto mide y de qué tipo es, además de cuál es la partición activa. Existen en formato MBR, clásico, y GPT, el actual. Si se corrompe, el sistema no sabe qué regiones del disco forman cada partición, así que el disco parece vacío o sin sistema de archivos aunque los datos sigan físicamente ahí; por eso hay que repararla o reconstruirla con herramientas específicas, y por eso conviene tener respaldada la estructura."
},
{
"id": "dx6",
"q": "¿Qué significa que un sistema de almacenamiento sea \"escalable\"? Comparar cómo escalan el almacenamiento en bloques y el de objetos.",
"tema": "Bloques, archivos y objetos",
"kb": [
"escalar",
"agregar",
"capacidad",
"límite",
"árbol de directorios",
"namespace plano",
"nodos"
],
"rub": [
{
"t": "Define escalabilidad",
"p": 2
},
{
"t": "Explica cómo escala el de bloques",
"p": 3
},
{
"t": "Explica cómo escala el de objetos",
"p": 3
}
],
"src": "Nueva",
"h": [
"Escalar es poder crecer agregando recursos sin rehacer lo que ya existe.",
"El de bloques crece agregando discos o volúmenes, pero el sistema de archivos tiene costos de administración: un árbol de directorios gigante se vuelve caro.",
"El de objetos usa un espacio de nombres plano y se reparte entre muchos servidores, por eso escala a miles de millones sin un límite práctico."
],
"e": "Escalable significa que el sistema puede crecer en capacidad o en cantidad de elementos agregando recursos, sin rehacer lo que ya funciona ni degradarse. El almacenamiento de bloques escala agregando discos o volúmenes, pero su crecimiento está limitado por el sistema de archivos que se pone encima: un árbol de directorios con miles de millones de archivos se vuelve caro de recorrer y de administrar. El almacenamiento de objetos escala distinto porque usa un espacio de nombres plano y reparte los objetos entre muchos servidores: cada objeto se ubica por su clave y no hay un árbol central que mantener, por eso puede llegar a miles de millones de elementos sin un límite práctico."
},
{
"id": "dx7",
"q": "Un equipo necesita que varios servidores escriban a la vez en los mismos archivos, con bloqueo y permisos por usuario. ¿Qué modelo de almacenamiento elegiría y por qué?",
"tema": "Bloques, archivos y objetos",
"kb": [
"archivos",
"árbol",
"permisos",
"bloqueo",
"NFS",
"Samba",
"concurrente",
"no objetos"
],
"rub": [
{
"t": "Elige almacenamiento de archivos y lo justifica",
"p": 3
},
{
"t": "Explica por qué no sirven bloques ni objetos",
"p": 3
},
{
"t": "Menciona el protocolo adecuado",
"p": 2
}
],
"src": "Nueva",
"h": [
"Mirá los requisitos: varios servidores, los mismos archivos, bloqueo y permisos.",
"El de bloques no coordina accesos concurrentes por sí solo y el de objetos no permite modificar por partes.",
"Un servidor de archivos (NFS o Samba) administra el árbol, los permisos y el acceso concurrente."
],
"e": "Elegiría almacenamiento de archivos, montado por red con NFSv4 (en un entorno UNIX) o Samba (si hay clientes Windows). Es el único modelo que ya entrega lo que se pide: un árbol de directorios administrado por el servidor, con permisos por usuario y grupo y bloqueo para el acceso concurrente. El almacenamiento de bloques no coordina escrituras concurrentes ni conoce usuarios; si dos máquinas lo montan sin un sistema de archivos en red, se pisan los datos. El de objetos tampoco sirve porque no permite modificar partes de un elemento: cada cambio implica reemplazar el objeto entero, y eso no es lo que se espera de un archivo compartido."
},
{
"id": "dx8",
"q": "Explicar qué hace el comando ps aux | grep apache | head -3, paso por paso.",
"tema": "Shell y comandos",
"kb": [
"ps aux",
"procesos",
"pipe",
"grep",
"filtra",
"head",
"primeras líneas"
],
"rub": [
{
"t": "ps aux: lista procesos",
"p": 3
},
{
"t": "grep filtra y head limita",
"p": 3
},
{
"t": "El pipe conecta cada salida con la siguiente entrada",
"p": 2
}
],
"src": "Nueva",
"h": [
"Son tres programas encadenados, y cada uno recibe la salida del anterior.",
"ps aux lista todos los procesos con detalle; grep se queda con las líneas que contienen apache; head corta las tres primeras.",
"El pipe es lo que hace que la salida de uno sea la entrada del siguiente, sin archivos intermedios."
],
"e": "ps aux lista todos los procesos del sistema con su usuario, PID, uso de CPU y memoria y la línea de comando. Esa salida no va a la pantalla sino a la entrada del comando siguiente, porque el pipe conecta la salida estándar de uno con la entrada estándar del otro. grep apache filtra y deja pasar solo las líneas que contienen apache, es decir los procesos cuyo comando menciona apache. head -3 toma esa lista filtrada y muestra únicamente las tres primeras líneas. El resultado es una vista corta de los procesos de apache, sin crear archivos intermedios."
},
{
"id": "dx9",
"q": "¿Qué diferencia hay entre ejecutar un script con./script.sh y con bash script.sh?",
"tema": "Shell y comandos",
"kb": [
"./",
"shebang",
"intérprete",
"bash",
"permiso de ejecución",
"PATH"
],
"rub": [
{
"t": "Explica ./script.sh (usa el shebang y necesita permiso x)",
"p": 3
},
{
"t": "Explica bash script.sh (lo interpreta bash explícitamente)",
"p": 3
},
{
"t": "Menciona la implicancia práctica",
"p": 2
}
],
"src": "Nueva",
"h": [
"En un caso el sistema elige el intérprete; en el otro lo elegís vos.",
"Con./script.sh se ejecuta el archivo: cuenta el shebang de la primera línea y hace falta permiso de ejecución.",
"Con bash script.sh lo lee bash, como argumento, aunque no tenga permiso de ejecución y aunque el shebang diga otra cosa."
],
"e": "Al escribir./script.sh se pide ejecutar ese archivo: el sistema mira la primera línea (el shebang) para saber con qué intérprete correrlo, y por eso es obligatorio tener permiso de ejecución. El./ es necesario para que el shell no lo busque en PATH. Al escribir bash script.sh, en cambio, se invoca bash directamente y se le pasa el script como argumento: bash lo lee e interpreta sin importar el shebang y sin necesidad de permiso de ejecución. La diferencia práctica es que un script con #!/bin/sh puede funcionar con bash script.sh y fallar con./script.sh si el sistema tiene dash detrás de /bin/sh."
},
{
"id": "dx10",
"q": "¿Qué es un alias en el shell y qué diferencia tiene con una función? Dar un ejemplo de cada uno.",
"tema": "Shell y comandos",
"kb": [
"alias",
"atajo",
"comando",
"función",
"argumentos",
"parámetros",
"shell"
],
"rub": [
{
"t": "Define alias con ejemplo",
"p": 3
},
{
"t": "Define función con ejemplo",
"p": 3
},
{
"t": "Marca la diferencia (parámetros y lógica)",
"p": 2
}
],
"src": "Nueva",
"h": [
"Los dos son atajos que se escriben en el shell, pero uno solo reemplaza texto.",
"Un alias es un nombre corto para un comando: alias ll='ls -l'.",
"Una función es código con lógica y parámetros: mkdircd() { mkdir -p \"$1\"; cd \"$1\"; }"
],
"e": "Un alias es un nombre corto que el shell reemplaza por un comando completo: por ejemplo alias ll='ls -l' hace que escribir ll ejecute ls -l. Una función, en cambio, es un bloque de código con nombre que puede tener lógica, condicionales, bucles y parámetros: por ejemplo mkdircd() { mkdir -p \"$1\" && cd \"$1\"; } crea un directorio y entra en él. La diferencia central es que el alias solo sustituye texto y no recibe argumentos de forma controlada, mientras que la función se comporta como un pequeño programa dentro del shell."
},
{
"id": "dx11",
"q": "¿Qué es el código de salida de un comando y cómo se usa para encadenar comandos con && y ||?",
"tema": "Shell y comandos",
"kb": [
"código de salida",
"0",
"éxito",
"error",
"&&",
"||",
"secuencia"
],
"rub": [
{
"t": "Define código de salida y el 0 de éxito",
"p": 3
},
{
"t": "Explica &&",
"p": 3
},
{
"t": "Explica ||",
"p": 2
}
],
"src": "Nueva",
"h": [
"Cada comando, al terminar, deja un número que dice si salió bien.",
"0 significa éxito; cualquier otro valor significa error. Se consulta en $?.",
"&& ejecuta el siguiente solo si el anterior salió bien; || solo si falló."
],
"e": "Todo comando, al terminar, devuelve un código de salida: 0 si salió bien y un número distinto de cero si hubo error, que queda disponible en la variable $?. Ese valor se usa para encadenar comandos de forma condicional: con && el segundo comando se ejecuta solo si el primero devolvió 0 (mkdir datos && cd datos), y con || se ejecuta solo si el primero falló (cd datos || echo \"no existe\"). Combinando ambos se arma lógica de una línea, por ejemplo comando && echo ok || echo falló."
},
{
"id": "dx12",
"q": "¿Qué es un ataque de intermediario (man in the middle) y cómo lo previenen SSH y TLS?",
"tema": "Criptografía y certificados",
"kb": [
"intermediario",
"suplanta",
"claves",
"fingerprint",
"certificado",
"verificar",
"canal"
],
"rub": [
{
"t": "Define el ataque",
"p": 3
},
{
"t": "Cómo lo previene SSH",
"p": 3
},
{
"t": "Cómo lo previene TLS",
"p": 2
}
],
"src": "Nueva",
"h": [
"Alguien se pone en el medio y hace de puente sin que las partes lo noten.",
"En SSH la defensa es el fingerprint: si el servidor presenta una clave distinta, el cliente avisa.",
"En TLS la defensa es el certificado firmado por una autoridad en la que el navegador confía."
],
"e": "Un ataque de intermediario ocurre cuando alguien se interpone en la conexión y hace de puente: se presenta como el servidor ante el cliente y como el cliente ante el servidor, y puede leer y modificar el tráfico sin que ninguno lo note. SSH se defiende con el fingerprint de la clave del servidor: el cliente guarda el de la primera conexión y avisa si cambia. TLS se defiende con los certificados: el navegador verifica que el certificado del sitio esté firmado por una autoridad en la que confía y que el nombre coincida. En los dos casos el punto débil es el primero: en SSH la primera conexión, en TLS la confianza en la autoridad raíz."
},
{
"id": "dx13",
"q": "Describir el recorrido completo de una llamada al sistema desde que un programa pide leer un archivo hasta que recibe los datos.",
"tema": "API y llamadas al sistema",
"kb": [
"espacio de usuario",
"biblioteca",
"llamada",
"kernel",
"cambio de privilegio",
"control",
"datos",
"retorno"
],
"rub": [
{
"t": "El programa llama a una función de biblioteca en espacio de usuario",
"p": 3
},
{
"t": "La llamada entra al kernel con cambio de nivel",
"p": 3
},
{
"t": "El kernel valida, hace el trabajo y devuelve el resultado",
"p": 2
}
],
"src": "Nueva",
"h": [
"Son cuatro momentos: pedido, cambio de nivel, trabajo del kernel y retorno.",
"El programa llama a una función de biblioteca (como read); esa función arma el pedido y ejecuta la instrucción de llamada al sistema.",
"El kernel toma el control, valida permisos, lee del dispositivo y copia los datos al espacio del programa, que sigue ejecutando."
],
"e": "El programa llama a una función de biblioteca en espacio de usuario, por ejemplo read. Esa función arma el pedido con los argumentos y ejecuta la instrucción de llamada al sistema, que provoca un cambio controlado de nivel de privilegio. El kernel toma el control, valida que el pedido sea correcto y que el proceso tenga permisos sobre ese archivo, consulta al sistema de archivos y lee del dispositivo los datos pedidos. Después copia esos datos al espacio de memoria del programa y devuelve el control al punto siguiente, con la cantidad de bytes leídos o un código de error. Todo lo que el programa ve es una función que devolvió; el cambio de nivel queda escondido."
},
{
"id": "dx14",
"q": "¿Qué es una biblioteca estándar de C y qué relación tiene con las llamadas al sistema y con la portabilidad?",
"tema": "API y llamadas al sistema",
"kb": [
"biblioteca estándar",
"libc",
"funciones",
"envoltorio",
"llamadas al sistema",
"portabilidad",
"recompilar"
],
"rub": [
{
"t": "Define la biblioteca estándar",
"p": 3
},
{
"t": "Explica que envuelve llamadas al sistema",
"p": 3
},
{
"t": "Relación con la portabilidad",
"p": 2
}
],
"src": "Nueva",
"h": [
"Es la biblioteca que viene con el lenguaje, no el kernel.",
"Ofrece funciones como printf, malloc o open, y por dentro muchas de ellas usan llamadas al sistema.",
"Usarla hace que el mismo código fuente compile en distintos sistemas; si se llama directo al kernel, el programa deja de ser portable."
],
"e": "La biblioteca estándar de C (la libc) es el conjunto de funciones que vienen con el lenguaje: entrada y salida, manejo de cadenas, memoria, etc. Muchas de esas funciones son envoltorios de llamadas al sistema: printf formatea y termina usando write, fopen usa open. La relación con la portabilidad es directa: si un programa usa solo la API de la biblioteca estándar y el sistema cumple POSIX, el mismo código fuente compila en distintos UNIX y solo hay que recompilar; si en cambio llama directamente a las llamadas al sistema propias de un kernel, el programa deja de ser portable."
},
{
"id": "dx15",
"q": "Explicar qué es un namespace en Kubernetes y por qué el laboratorio usa uno propio (lab-so).",
"tema": "Laboratorio de Kubernetes",
"kb": [
"namespace",
"aislar",
"nombres",
"recursos",
"lab-so",
"kubectl -n",
"separar"
],
"rub": [
{
"t": "Define namespace",
"p": 3
},
{
"t": "Para qué se usa (aislar nombres y recursos)",
"p": 3
},
{
"t": "Cómo se usa en el laboratorio",
"p": 2
}
],
"src": "Nueva",
"h": [
"Es una forma de separar grupos de recursos dentro del mismo cluster.",
"Permite que dos equipos usen el mismo nombre de Deployment sin pisarse y acotar los comandos.",
"En el laboratorio todo vive en lab-so, y por eso los comandos llevan -n lab-so."
],
"e": "Un namespace es una división lógica dentro de un mismo cluster que permite agrupar recursos y separar nombres: dos Deployments pueden llamarse igual si están en namespaces distintos. Sirve para aislar equipos o proyectos, para acotar los comandos (kubectl get pods -n lab-so muestra solo los de ese espacio) y para aplicar límites. El laboratorio usa el namespace lab-so para que todos los servicios del trabajo práctico —registry, SFTP, Samba, NFS, Asterisk, Gitea, Uptime Kuma— queden agrupados y no se mezclen con los recursos del sistema del propio cluster."
},
{
"id": "dx16",
"q": "¿Qué es un Service de tipo NodePort? Explicar qué puerto se abre, dónde y quién puede acceder.",
"tema": "Laboratorio de Kubernetes",
"kb": [
"Service",
"NodePort",
"puerto",
"nodo",
"30000-32767",
"acceso externo",
"ClusterIP"
],
"rub": [
{
"t": "Define el Service como dirección estable",
"p": 2
},
{
"t": "Explica NodePort: abre un puerto en cada nodo",
"p": 4
},
{
"t": "Indica el rango y quién accede",
"p": 2
}
],
"src": "Nueva",
"h": [
"Un Service da una dirección estable para un conjunto de Pods.",
"NodePort además abre un puerto fijo en todos los nodos del cluster y lo redirige al Service.",
"El puerto suele estar en el rango 30000-32767; cualquiera que llegue a la IP del nodo por ese puerto accede al servicio, como 30022 para SFTP."
],
"e": "Un Service es una dirección estable que reparte las peticiones entre los Pods de un Deployment, cuyas IP cambian. El tipo NodePort, además de eso, abre un puerto fijo en todos los nodos del cluster y redirige lo que llega ahí al Service correspondiente. Ese puerto se elige dentro del rango 30000-32767, por ejemplo 30022 para SFTP o 30445 para Samba. Cualquiera que tenga acceso a la IP del nodo por ese puerto accede al servicio, así que se usa para protocolos que no son HTTP y no pasan por Traefik, mientras la web se publica con ClusterIP más el proxy."
},
{
"id": "dx17",
"q": "¿Qué es un manifiesto YAML en Kubernetes? Explicar qué partes tiene y cómo se aplica.",
"tema": "Laboratorio de Kubernetes",
"kb": [
"YAML",
"manifiesto",
"apiVersion",
"kind",
"metadata",
"spec",
"kubectl apply",
"estado deseado"
],
"rub": [
{
"t": "Define manifiesto",
"p": 3
},
{
"t": "Nombra sus partes",
"p": 3
},
{
"t": "Explica kubectl apply",
"p": 2
}
],
"src": "Nueva",
"h": [
"Es un archivo de texto que declara el estado deseado de un recurso.",
"Tiene cuatro secciones típicas: apiVersion, kind, metadata (nombre, namespace) y spec (la configuración).",
"Se aplica con kubectl apply -f archivo.yaml y el cluster converge a lo declarado."
],
"e": "Un manifiesto YAML es un archivo de texto que declara el estado deseado de uno o más recursos de Kubernetes. Tiene cuatro partes típicas: apiVersion (la versión de la API), kind (el tipo de recurso: Pod, Deployment, Service, ConfigMap), metadata (nombre, namespace, etiquetas) y spec (la configuración concreta: imagen, réplicas, puertos, volúmenes). Se aplica con kubectl apply -f archivo.yaml: el cluster compara lo declarado con lo que existe y crea o modifica lo necesario para que coincidan. Como es texto, se versiona en Git y se puede reaplicar sin reconstruir nada."
},
{
"id": "dx18",
"q": "¿Qué son las etiquetas (labels) de Kubernetes y para qué las usan los Services y los Deployments?",
"tema": "Laboratorio de Kubernetes",
"kb": [
"labels",
"etiquetas",
"clave-valor",
"selector",
"Service",
"Deployment",
"Pods",
"match"
],
"rub": [
{
"t": "Define labels como pares clave-valor",
"p": 3
},
{
"t": "Explica el selector",
"p": 3
},
{
"t": "Relación con Service y Deployment",
"p": 2
}
],
"src": "Nueva",
"h": [
"Son pares clave-valor que se pegan a los objetos; no son nombres.",
"Sirven para seleccionar: un selector elige todos los Pods que tienen cierta etiqueta.",
"El Service encuentra los Pods por etiqueta, y el Deployment crea Pods con esas etiquetas: así se conectan sin saber IPs."
],
"e": "Las etiquetas (labels) son pares clave-valor que se asignan a los objetos de Kubernetes, por ejemplo app=mi-app o tier=frontend. No identifican de forma única: sirven para agrupar. Los selectores usan esas etiquetas para encontrar conjuntos de objetos: el Service busca por etiqueta los Pods que debe balancear, y el Deployment define la plantilla de sus Pods con esas mismas etiquetas, además de usarlas para saber cuáles son suyos. Por eso el Service sigue funcionando aunque los Pods se recreen y cambien de IP: encuentra a los nuevos por la etiqueta."
},
{
"id": "dx19",
"q": "El Pod de Asterisk usa hostNetwork: true. Explicar qué significa y qué riesgos trae.",
"tema": "Laboratorio de Kubernetes",
"kb": [
"hostNetwork",
"red del nodo",
"IP",
"puertos",
"NAT",
"choques",
"aislamiento"
],
"rub": [
{
"t": "Explica que el Pod usa la red del nodo",
"p": 3
},
{
"t": "Por qué se usa (SIP/RTP y NAT)",
"p": 3
},
{
"t": "Riesgos: puertos y aislamiento",
"p": 2
}
],
"src": "Nueva",
"h": [
"Por defecto cada Pod tiene su propia IP en una red virtual; con hostNetwork usa la del nodo.",
"Se usa para que SIP anuncie direcciones que RTP después pueda usar sin que NAT las cambie.",
"Riesgo: el Pod compite por los puertos del nodo y se pierde el aislamiento de red."
],
"e": "hostNetwork: true hace que el Pod use directamente la pila de red y la IP del nodo donde corre, en lugar de tener su propia IP en la red virtual del cluster. En el laboratorio se usa para Asterisk porque SIP incluye dentro de sus mensajes las direcciones IP y los puertos que va a usar RTP: si la traducción de direcciones de Kubernetes los cambia, el audio se corta. El costo es que el Pod compite por los puertos del nodo (no puede usar uno ya ocupado), deja de estar aislado en su propia red y hay que cuidar que no choque con otros servicios, además de que el Pod queda atado a la red de ese nodo."
},
{
"id": "dx20",
"q": "¿Qué significa que una imagen de contenedor esté construida por capas? ¿Qué relación tiene con el Dockerfile?",
"tema": "Laboratorio de Kubernetes",
"kb": [
"capas",
"Dockerfile",
"instrucciones",
"caché",
"inmutables",
"imagen",
"reutilizar"
],
"rub": [
{
"t": "Explica las capas",
"p": 3
},
{
"t": "Relación con las instrucciones del Dockerfile",
"p": 3
},
{
"t": "Ventaja de la caché",
"p": 2
}
],
"src": "Nueva",
"h": [
"Cada instrucción del Dockerfile agrega una capa, y las capas no cambian.",
"La imagen final es la suma de esas capas de solo lectura; el contenedor agrega una capa de escritura encima.",
"Como las capas se reutilizan, si solo cambia el final del Dockerfile se reconstruye rápido usando la caché."
],
"e": "Una imagen se arma por capas: cada instrucción del Dockerfile (FROM, COPY, RUN) genera una capa que se guarda como una diferencia sobre la anterior, y esas capas son inmutables. La imagen final es la suma ordenada de todas ellas, y cuando se ejecuta un contenedor se le agrega una capa de escritura encima, que es lo único que cambia. La ventaja es la caché: como cada capa se identifica por su contenido, al reconstruir solo se rehacen las capas que cambiaron y las anteriores se reutilizan, por eso conviene poner primero lo que cambia poco y al final lo que cambia seguido."
},
{
"id": "dx21",
"q": "Explicar el camino completo desde docker build hasta que la aplicación responde en http://localhost/ en el laboratorio.",
"tema": "Laboratorio de Kubernetes",
"kb": [
"build",
"tag",
"registry",
"push",
"Deployment",
"image",
"pull",
"containerd",
"Pod",
"Service",
"Traefik"
],
"rub": [
{
"t": "Construcción y publicación de la imagen",
"p": 3
},
{
"t": "Despliegue: Deployment descarga y crea Pods",
"p": 3
},
{
"t": "Publicación por Service y Traefik",
"p": 2
}
],
"src": "Nueva",
"h": [
"Son cinco pasos y van en cadena: construir, etiquetar, publicar, desplegar, publicar.",
"docker build arma la imagen, docker tag le pone el nombre con el registry y docker push la sube a localhost:30500.",
"El Deployment pide esa imagen, containerd la descarga del registry, se crean los Pods, el Service los agrupa y Traefik rutea el tráfico del puerto 80 hacia ese Service."
],
"e": "Se construye la imagen con docker build, se la etiqueta con docker tag para que su nombre incluya el registry (localhost:30500/utec/mi-app:v1) y se la publica con docker push, que envía las capas al registry que corre dentro de K3s. Después se actualiza o aplica el manifiesto del Deployment indicando esa imagen; containerd, dentro de K3s, la descarga del registry local y crea los Pods declarados. El Service de tipo ClusterIP agrupa esos Pods por etiqueta y les da una dirección estable. Por último, Traefik recibe el tráfico HTTP del host en el puerto 80, sigue la ruta declarada con Gateway API y lo dirige al Service, así que http://localhost/ termina respondiendo desde uno de los Pods."
},
{
"id": "dx22",
"q": "¿Qué pasa cuando se copia un archivo con cp a otro directorio del mismo sistema de archivos? Comparar con mv y con ln.",
"tema": "Inodos y enlaces",
"kb": [
"cp",
"copia",
"datos",
"i-nodo nuevo",
"mv",
"renombra",
"ln",
"hard link",
"mismo i-nodo"
],
"rub": [
{
"t": "cp crea un i-nodo nuevo y copia los datos",
"p": 3
},
{
"t": "mv solo cambia la entrada de directorio",
"p": 3
},
{
"t": "ln crea otro nombre para el mismo i-nodo",
"p": 2
}
],
"src": "Nueva",
"h": [
"Los tres operan distinto sobre el i-nodo y sobre los datos.",
"cp lee los datos y crea un archivo nuevo, con su propio i-nodo e independiente del original.",
"mv solo cambia la entrada de directorio (instantáneo); ln crea otro nombre apuntando al mismo i-nodo, sin copiar datos."
],
"e": "cp lee el contenido del archivo original y lo escribe en un archivo nuevo, que tiene su propio i-nodo y sus propios bloques: después de copiar hay dos archivos independientes, y modificar uno no afecta al otro. mv dentro del mismo sistema de archivos no copia nada: solo cambia la entrada de directorio, quitando el nombre de un directorio y agregándolo en otro, así que es instantáneo y el i-nodo sigue siendo el mismo. ln crea otro nombre (hard link) para ese mismo i-nodo, sin duplicar datos: los dos nombres son equivalentes y el contador de enlaces sube."
},
{
"id": "dx23",
"q": "¿Cómo se representa un permiso con notación simbólica (rwxr-x---) y cómo se lo cambia con chmod usando letras? Dar un ejemplo.",
"tema": "Permisos",
"kb": [
"simbólica",
"rwx",
"propietario",
"grupo",
"otros",
"chmod",
"u",
"g",
"o",
"+x",
"-w"
],
"rub": [
{
"t": "Lee la notación simbólica en tres ternas",
"p": 3
},
{
"t": "Explica chmod con letras (u, g, o, a y + - =)",
"p": 3
},
{
"t": "Da un ejemplo correcto",
"p": 2
}
],
"src": "Nueva",
"h": [
"Son tres grupos de tres letras: propietario, grupo y otros.",
"Cada terna tiene r, w y x; un guion significa que ese permiso no está.",
"Con chmod se usan letras: chmod g-w archivo quita escritura al grupo, chmod u+x agrega ejecución al dueño, chmod o=r deja a otros solo lectura."
],
"e": "La notación simbólica usa nueve posiciones agrupadas en tres ternas: propietario, grupo y otros, cada una con r (lectura), w (escritura) y x (ejecución), y un guion cuando el permiso no está. Así, rwxr-x--- significa que el propietario lee, escribe y ejecuta; el grupo lee y ejecuta; y otros no tiene nada. Se cambia con chmod usando a quién afecta —u, g, o o a para todos— y la operación +, - o =: chmod g-w archivo quita escritura al grupo, chmod u+x script agrega ejecución al dueño y chmod o=r archivo deja a otros solo lectura."
},
{
"id": "dx24",
"q": "¿Qué es un sistema de archivos de red y qué diferencia hay entre montarlo y acceder por un cliente de transferencia como SFTP?",
"tema": "Montaje y sistemas de archivos",
"kb": [
"red",
"montar",
"NFS",
"kernel",
"árbol",
"transparente",
"SFTP",
"transferencia",
"cliente"
],
"rub": [
{
"t": "Define sistema de archivos de red",
"p": 3
},
{
"t": "Explica el montaje y el acceso transparente",
"p": 3
},
{
"t": "Distingue de SFTP",
"p": 2
}
],
"src": "Nueva",
"h": [
"Uno integra el recurso remoto al árbol local; el otro transfiere archivos a pedido.",
"NFSv4 se monta con el kernel y desde ahí se usa como un directorio local, sin pensar en la red.",
"SFTP no monta nada: hay que conectarse con un cliente y subir o bajar archivos en cada operación."
],
"e": "Un sistema de archivos de red es un sistema de archivos que vive en un servidor y los clientes montan a través de la red; NFSv4 es el ejemplo clásico en UNIX. Al montarlo, el kernel integra el recurso remoto al árbol local, así que los programas lo usan como un directorio cualquiera, sin saber que está en otra máquina: abrir, escribir y recorrer es transparente. SFTP funciona distinto: no monta nada, se conecta con un cliente y transfiere archivos explícitamente en cada operación. Montar es más cómodo para trabajar todo el día sobre los mismos datos; SFTP es más simple y seguro para transferencias puntuales por redes no confiables."
},
{
"id": "dx25",
"q": "¿Qué significa que un sistema de archivos sea \"journaling\"? Nombrar una ventaja y una limitación frente a un sistema sin journal.",
"tema": "Bloques, archivos y objetos",
"kb": [
"journal",
"registro",
"operaciones",
"corte",
"consistencia",
"desempeño",
"no repara todo"
],
"rub": [
{
"t": "Explica el journal",
"p": 3
},
{
"t": "Ventaja: consistencia tras un corte",
"p": 3
},
{
"t": "Limitación: no protege los datos de la aplicación ni es gratis en desempeño",
"p": 2
}
],
"src": "Nueva",
"h": [
"El sistema anota en un registro lo que va a hacer antes de hacerlo.",
"La ventaja aparece después de un corte de energía: al reiniciar se completa o descarta lo pendiente y la estructura queda consistente.",
"La limitación es que no garantiza que los datos de la aplicación estén completos ni repara corrupción física, y además hay un costo de escritura."
],
"e": "Un sistema de archivos con journaling mantiene un registro (journal) donde anota primero qué operación va a hacer y después la ejecuta. Su ventaja aparece después de un corte de energía o un bloqueo: al reiniciar, el sistema lee el journal, completa o descarta las operaciones pendientes y deja las estructuras consistentes sin recorrer todo el disco, lo que además lo hace mucho más rápido que un chequeo completo. Su limitación es que no protege los datos de la aplicación —el archivo puede quedar consistente a nivel de estructura pero con contenido incompleto—, no repara daños físicos, y tiene un costo de escritura por cada operación que se registra."
},
{
"id": "dx26",
"q": "¿Qué son los comodines (globbing) del shell y en qué se diferencian de una expresión regular? Dar ejemplos.",
"tema": "Shell y comandos",
"kb": [
"comodines",
"asterisco",
"signo de pregunta",
"corchetes",
"shell",
"expansión",
"expresión regular",
"grep"
],
"rub": [
{
"t": "Explica el globbing y quién lo hace",
"p": 3
},
{
"t": "Ejemplos con * ? y []",
"p": 3
},
{
"t": "Distingue de la expresión regular (la interpreta el programa)",
"p": 2
}
],
"src": "Nueva",
"h": [
"Son patrones que el shell expande antes de ejecutar el comando.",
"* representa cualquier secuencia, ? un carácter y [abc] uno de esos caracteres: ls *.txt, ls dato?.csv, ls foto[12].jpg.",
"El globbing lo hace el shell sobre nombres de archivos; la expresión regular la interpreta el programa (grep, sed) sobre texto."
],
"e": "Los comodines son patrones que el shell expande antes de ejecutar el comando, reemplazándolos por la lista de nombres de archivos que coinciden: * representa cualquier secuencia de caracteres, ? un carácter cualquiera y [abc] uno de los caracteres listados. Por eso ls *.txt lista todos los.txt, ls dato?.csv los que tienen un carácter entre dato y.csv, y rm foto[12].jpg borra solo dos archivos. La diferencia con una expresión regular es quién la interpreta y sobre qué: el globbing lo hace el shell sobre nombres de archivos, con una sintaxis muy limitada; la expresión regular la interpreta el propio programa (grep, sed, awk) sobre el contenido del texto, y es mucho más expresiva."
},
{
"id": "dx27",
"q": "¿Por qué un programa no puede acceder directamente a la memoria de otro? Explicar qué mecanismo lo impide y para qué sirve.",
"tema": "API y llamadas al sistema",
"kb": [
"memoria virtual",
"aislamiento",
"protección",
"MMU",
"kernel",
"permisos",
"procesos"
],
"rub": [
{
"t": "Explica la memoria virtual y el aislamiento",
"p": 3
},
{
"t": "Menciona el papel del kernel y del hardware",
"p": 3
},
{
"t": "Para qué sirve: protección y estabilidad",
"p": 2
}
],
"src": "Nueva",
"h": [
"Cada proceso cree que tiene toda la memoria para sí, pero es una ilusión.",
"Hay memoria virtual: cada proceso ve su propio espacio de direcciones, y el hardware traduce esas direcciones a memoria física bajo control del kernel.",
"Sin ese aislamiento, un programa con un error podría pisar los datos de otro o del sistema; para compartir memoria hay mecanismos explícitos."
],
"e": "Un programa no puede acceder a la memoria de otro porque cada proceso ve su propio espacio de direcciones, una ilusión que da la memoria virtual: el hardware (la MMU) traduce esas direcciones a memoria física y el kernel decide qué páginas son válidas para cada proceso. Si un programa intenta tocar una dirección que no le corresponde, el hardware genera una excepción y el kernel lo termina con un error de segmentación. Ese aislamiento sirve para proteger los datos de los demás procesos y del sistema, para que un error en un programa no derribe a los otros, y para que el sistema pueda reubicar o paginar memoria sin que el programa lo note. Para compartir memoria existen mecanismos explícitos, como la memoria compartida o las tuberías, que pasan por el kernel."
},
{
"id": "dx28",
"q": "Explicar por qué una conexión HTTPS protege la confidencialidad pero no garantiza que el sitio sea confiable.",
"tema": "Criptografía y certificados",
"kb": [
"confidencialidad",
"cifrado",
"certificado",
"dominio",
"honesto",
"no garantiza",
"phishing"
],
"rub": [
{
"t": "Explica qué sí protege (cifrado y dominio)",
"p": 3
},
{
"t": "Explica qué no garantiza (honestidad)",
"p": 3
},
{
"t": "Ejemplo de sitio fraudulento con certificado válido",
"p": 2
}
],
"src": "Nueva",
"h": [
"El candado habla del canal, no de las intenciones del dueño.",
"HTTPS garantiza que el tráfico está cifrado y que quien controla el sitio demostró controlar ese dominio.",
"Un sitio de phishing puede tener un certificado válido para su propio dominio, por eso el candado no dice nada sobre la honestidad."
],
"e": "HTTPS protege la confidencialidad porque todo el tráfico entre el navegador y el servidor viaja cifrado, y garantiza además que el sitio demostró controlar ese nombre de dominio. Lo que no garantiza es la honestidad: el certificado solo dice que alguien que controla ese dominio lo obtuvo, no que sea una empresa confiable ni que sus intenciones sean buenas. Un sitio de phishing puede tener un certificado perfectamente válido para su propio dominio, con su candado, y dedicarse a robar contraseñas. Por eso el candado no es un indicador de confianza en el contenido: hay que mirar el dominio y desconfiar de nombres parecidos."
}
],
"temas": [
"Inodos y enlaces",
"Rutas y directorios",
"Permisos",
"Montaje y sistemas de archivos",
"Bloques, archivos y objetos",
"Shell y comandos",
"API y llamadas al sistema",
"Criptografía y certificados",
"Laboratorio de Kubernetes"
]
};
