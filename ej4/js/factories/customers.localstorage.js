(function () {
    'use strict';

    angular
        .module('CRM')
        .factory('CustomersLS', CustomersLS);

    CustomersLS.$inject = [];

    function CustomersLS() {
        var service = {
            getAll: getAll,
            update: update,
            cleanMemory: removeAll
        };
        return service;


        //////////////// LocalStorage /////////////////

        function getAll() {
            // DONE: Verificamos que existia algo guardado como customers
            if (localStorage.getItem('customers')) {
                var customersSavedStringified = localStorage.getItem('customers');
                var realCustomers = JSON.parse(customersSavedStringified);
                // DONE: Como había algo guardado y además era un array, lo devolvemos
                if (typeof realCustomers == 'object' && realCustomers instanceof Array)
                    return realCustomers;
                else {
                    //  DONE: Este caso es para evitarles errores
                    // Si no había guardado un array en customers lo reinicio
                    console.log('Había guardado algo incorrecto en customers');
                    console.log('Saved before **', realCustomers);
                    realCustomers = [];
                    localStorage.setItem('customers', JSON.stringify(realCustomers));
                    console.log('Saved now **', realCustomers);
                    return realCustomers;
                }
            } else {
                return [];
            }
        }

        function update(customers) {
            // DONE: Reemplazar el localStorage por estos nuevos Ciústomers !

            // Recordamos que necesitamos pasarlo a forma de String
            var newCustomersStringified = JSON.stringify(customers);

            // Lo guardamos ahora que es una String
            localStorage.setItem('customers', newCustomersStringified);
        }

        function removeAll() {
            localStorage.setItem('customers', []);
        }

        // TODO: Implementa aquí el nuevo método para ver si un customer está guardado correctamente
        function isSaved(customer) {


        }


    }
})();