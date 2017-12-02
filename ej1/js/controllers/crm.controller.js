(function () {
    'use strict';

    angular
        .module('CRM')
        .controller('CRMController', CRMController);

    CRMController.$inject = ['$scope', 'CustomersLS'];

    function CRMController($scope, CustomersLS) {
        //////////// scope functions //////////
        $scope.customerCompleted = customerCompleted;
        $scope.cancelButton = cancelButton;
        $scope.editCustomer = editCustomer;
        $scope.updateCustomer = updateCustomer;
        $scope.createNewCustomer = createNewCustomer;
        $scope.removeCustomer = removeCustomer;


        //////////// scope vars ////////////
        $scope.newCustomer = {};
        $scope.customers = [];
        $scope.editing = false;
        $scope.studiesOptions = ['Primaria', 'Secundaria', 'Bachillerato', 'Ciclo o  Grado'];

        activate();

        ////////////////////////

        function activate() {
            $scope.customers = CustomersLS.getAll();
        }

        function customerCompleted() {
            return $scope.editForm.$valid;
        }


        function cleanNewCustomer() {
            $scope.newCustomer = {};
            var form = $scope.editForm;
            form.$setUntouched();
            form.$setPristine();
        }

        function cancelButton() {
            if ($scope.editing) $scope.editing = false;
            cleanNewCustomer();
        }
        function createNewCustomer() {
            if (customerCompleted()) {
                $scope.newCustomer.id = randId();
                $scope.customers.push($scope.newCustomer);
                CustomersLS.update($scope.customers);
                cleanNewCustomer();
            }
        }

        function editCustomer(customer) {
            $scope.newCustomer = angular.copy(customer);
            $scope.editing = true;
        }

        function updateCustomer(customer) {
            $scope.customers.forEach(function (customerToEdit, idx) {
                if (customer.id == customerToEdit.id) {
                    $scope.customers[idx] = customer;
                }
            });
            $scope.editing = false;
            CustomersLS.update($scope.customers);

            cleanNewCustomer();
        }

        function removeCustomer(customer) {
            var confirmation = prompt('Seguro que deseas borrar al usuario ?');
            if (confirmation == customer.name) {
                $scope.customers.forEach(function (customerToRemove, idx) {
                    if (customer.id == customerToRemove.id) {
                        $scope.customers.splice(idx, 1);
                    }
                });
            }
            CustomersLS.update($scope.customers);
        }


        ///////// auxiliars  /////////
        function randId() {
            return Math.random().toString(36).substr(2, 20);
        }
    }
})();