Ejercicio 3:

        Ahora vamos a introducir a los nuevos customers en el servidor.

        Recuerda, que para mandar un nuevo recurso a una api tenemos que usar un POST con esta pinta

        var urlServer = 'http://localhost:3000/api/customers';

        return $http.post(urlServer , nuevoCustomer);

        Así que realiza el método add de la factoría y úsalo desde el controlador cuando sea necesario para que se añadan en el servidor.

        Si todo fue bien, al refrescar el programa el servidor te mandará también el nuevo customer en el listado