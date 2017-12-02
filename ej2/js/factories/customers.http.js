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

            return  // code here  $http.get
        }


        function get (){

        }


        function add (customer){

        }

        function update (){

        }


        function remove (){

        }


    }
})();