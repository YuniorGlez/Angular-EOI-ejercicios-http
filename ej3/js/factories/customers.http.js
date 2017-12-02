(function () {
    'use strict';

    angular
        .module('CRM')
        .factory('CustomersHTTP', CustomersHTTP);

    CustomersHTTP.$inject = ['$http'];

    function CustomersHTTP($http) {
        var service = {
            getAll: getAll,
            update: update,
            add: add,
            get: get,
            remove: remove
        };
        var urlCustomersAPI = 'http://localhost:3000/customers';
        return service;


        //////////////// HTTP /////////////////

        function getAll() {
            return  // $http.get 
        }


        function get (){

        }

        // TODO: Recuerda mandarle como parámetro ahora solo un customer
        function add (customer){
            // TODO: realiza un post al servidor con el nuevo usuario
        }

        function update (){

        }


        function remove (){

        }

    }
})();