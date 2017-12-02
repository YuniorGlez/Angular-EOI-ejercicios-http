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
        var customers = getFakeCustomers();
        return service;


        //////////////// HTTP /////////////////

        function getAll() {

        }


        function get (){

        }

        function add (){

        }

        function update (){

        }


        function remove (){

        }

        function getFakeCustomers() {
            return [
                {
                    "id": 1,
                    "name": "Yunior González",
                    "email": "yunior.developer@hotmail.com",
                    "photo": "https://avatars3.githubusercontent.com/u/5472670?v=3&s=460",
                    "phone": "627646689",
                    "description": "Yunior es el profesor de AngularJS"
                },
                {
                    "id": 2,
                    "name": "Miguel Dominguez Domingas",
                    "email": "miguelin@traken.com",
                    "photo": "https://pbs.twimg.com/profile_images/722410502261972992/W0xz8uaq.jpg",
                    "phone": "622334455",
                    "description": "Miguel es el profesor de Maquetación con HTML5 y CSS3"
                },
                {
                    "id": 3,
                    "name": "Imanol Cea González",
                    "email": "imanol@gmail.com",
                    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/2/000/120/35f/2769f3d.jpg",
                    "phone": "622333443",
                    "description": "Imanol es el profesor de JavaScript"
                }
            ];
        }

    }
})();