### Inventrory and loan system 

Descripción del Proyecto:

El Sistema de Inventario y Reserva es una solución informática que permite a las organizaciones o empresas gestionar de manera eficiente su inventario de productos y brindar a sus clientes la capacidad de reservar estos productos. El sistema tiene como objetivo principal optimizar el control de stock, la disponibilidad de productos y simplificar el proceso de reserva para los clientes. A continuación, se detallan sus características clave:

Funcionalidades Principales:

Gestión de Usuarios: El sistema permite la gestión de usuarios con diferentes roles, como clientes, administradores y superadministradores. Cada tipo de usuario tiene acceso a funcionalidades específicas.

Control de Inventario: Los administradores pueden agregar, actualizar y eliminar productos en el inventario. El sistema realiza un seguimiento exhaustivo de la cantidad de productos en stock, en préstamo y su ubicación física en el almacén.

Búsqueda de Productos: Los clientes pueden buscar productos por nombre y categoría, lo que facilita la localización de productos específicos.

Reservas de Productos: Los clientes pueden realizar reservas de productos disponibles. El sistema verifica la disponibilidad de los productos en tiempo real y permite a los clientes confirmar sus reservas.

Gestión de Reservas: Los administradores pueden ver todas las reservas realizadas, aprobar o rechazar reservas pendientes y marcar reservas como completadas o canceladas.

Préstamos de Productos: El sistema permite a los administradores crear préstamos de productos a los clientes. Se realiza un seguimiento de los préstamos, incluidas las fechas de préstamo y devolución.

Informes y Estadísticas: Los administradores y superadministradores pueden generar informes detallados sobre las ventas de productos por mes, las reservas pendientes y las transacciones de préstamos. También pueden supervisar los préstamos vencidos.

Seguridad y Autenticación: El sistema garantiza la seguridad de los datos y la autenticación de usuarios, con roles y permisos definidos.


## Instalacion y uso
Para hacer uso de se debe tener instalado [GIT](https://git-scm.com/), [Node.js](https://nodejs.org/es/)

> Nota: El proyecto hace uso de la version de nodejs v18.17.0

### Clonar el repositorio
```bash
git clone https://github.com/gersonhdz8/Project-Inventory-system-backend.git
```
> Una vez clonado el repositorio accede a la carpeteta del proyecto
### Instalar dependencias
```bash
npm install
```
### Configurar variables de entorno
Crear un archivo .env en la raiz del proyecto
```bash
touch .env
```
> Nota: Este comando solo funciona en sistemas operativos basados en Unix.
> Si estas en Windows puedes crear el archivo .env desde el explorador de archivos

Una vez creado el archivo .env, accede a el desde un editor de texto
Agregar las siguientes variables de entorno
```bash
ATLAS_STRING="mongodb+srv://gerson422:gerson3202504140.@gersonhdz.kvlilds.mongodb.net/"
ATLAS_DB="inventorySystem"
MY_SERVER={"host":"127.0.0.10", "port":3010}
SECRET_KEY="Clave_Secreta123-Secretita#"
```
> Nota: En el campo port se puede cambiar a un puerto que no este en uso, por ejemplo 8080, 3000, 5000, etc. El rango de puertos disponibles es de 0 a 65535, se recomienda no utilizar los puertos reservados que van del 0 al 1023, para mas informacion sobre los puertos reservados [click aqui](https://es.wikipedia.org/wiki/Anexo:Puertos_de_red_utilizados_por_protocolos_de_transporte)
> 
> Nota: En el campo JWT_SECRET se debe agregar una cadena de texto que sera utilizada para la generacion de tokens JWT, esta cadena de texto puede ser cualquiera, como el que esta por ejemplo: "secret".


>**Cada cambio en las variables de entorno requiere reiniciar el servidor para que los cambios surtan efecto.**

### Base de datos
En la carpeta **database** se encuentra el archivo **MongoDB.mongodb** que contiene el script para crear la base de datos y las tablas necesarias para el funcionamiento del proyecto.

Tambien puedes optar por usar el archivo **.env.example** que contiene las variables de entorno necesarias para la conexion a la base de datos, solo debes cambiar el nombre del archivo a **.env** y esta te conectara a la base de datos que se encuentra en la nube.


### Iniciar el servidor
Para iniciar el servidor se debe ejecutar en la terminal para iniciar el servidor.
Se puede usar cualquiera de los 2 comandos, el primero se ejecuta con--watch y el segundo con nodemon
```bash
npm run dev
npm run start
```

### Uso de la plataforma
Para hacer uso de la plataforma se debe contar con herramientas informaticas para la realizacion de pruebas de api como **[Thunder Client](https://www.thunderclient.com/)** o **[Postman](https://www.postman.com/)**, ademas necesitas obtener un token de autenticacion, para esto se debe hacer una peticion GET a la ruta **/auth**.

**NOTA: En la raiz del proyecto, el archivo api.http contiene ejemplos de peticiones para cada endpoint. Puedes hacer uso de cualquiera de las herramientas anteriormente mencionadas, o usar [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) y ejecutar cada peticion con un solo click**


### Obtener token de autenticacion
Para la obtencion del token se 

| Método  | Ruta                                   | Descripción                         |
| ------- | -------------------------------------- | ----------------------------------- |
| POST    | `/auth/user/login`                  | Iniciar sesión     |
| POST    | `/auth/user/register`               | Registrar un nuevo usuario       |


Ejemplo:

- Para el registro de un nuevo usuario se debe hacer una peticion POST a la ruta **/auth/user/register** con el siguiente body:
```json
{
    {
    "name": "Gerson",
    "last_name": "Hernández Olave",
    "email": "gerson@example.com",
    "username": "gersonhdz",
    "password": "gerson123",
    "dni": "1096248657865R"       
}
}
```

- Para el inicio de sesion de un usuario se debe hacer una peticion POST a la ruta **/auth/users/login** con el siguiente body:
```json
{
    "username": "gersonhdz",
    "password": "gerson123"
}
```


El token de autenticacion sera necesario para cada endpoint listado en la seccion siguiente, para hacer uso de estos endpoints se debe agregar el token de autenticacion en el header de la peticion con el nombre **Authorization**.
> Nota: El token de autenticacion tiene una duracion de 1 hora, despues de este tiempo se debe volver a solicitar un nuevo token.
> 
> Tambien las rutas de registro e inicio de sesion tienen un limite de peticiones por hora, si se supera este limite se debe esperar para volver a hacer una peticion.

### Roles y Permisos
La plataforma cuenta con 3 roles: **Client**, **Admin** y **Superadmin**.

Cada rol tiene permisos diferentes para hacer uso de los endpoints. 

### Endpoints

Por cada endpoint se debe agregar el token de autenticacion en el header de la peticion con el nombre **Authorization**.

Ademas se debe agregar el header **Content-Type** con el valor **application/json**.

Finalmente combinar la ruta base con la ruta del endpoint que se desea usar, por ejemplo:

```Bash
http://127.0.0.10:3010/aplication/client/getAllInventories
```

#### Client

```Bash
http://127.0.0.10:3010/aplication/client
```

| Método  | Ruta                                  | Descripción                               |
| ------- | ------------------------------------- | ----------------------------------------- |
| GET     | `/getAllInventories`                                  | Obtener la lista de todos los productos.          |
| GET     | `/getInventoryCategory/Misterio`                    | Obtener un producto por categoria |
| GET     | `/reserveDetails/456789123C`                    | Detalles de las reservas por dni de usuario |

Estos son algunos ejemplos de los Endpoints, para obtener información de todos los endpoint dirigite al archivo api.http, allí estarán todos los endpoints disponibles de la aplicación con su respectivo ejemplo, recuerda cambiar el token de autenticacion en cada petición


### Modelo Base de Datos

![Modelo Base de Datos](![image](./assets/database.png)
)



## Autor

- Gerson Hernandez - [@GersonHdz](https://github.com/gersonhdz8)
