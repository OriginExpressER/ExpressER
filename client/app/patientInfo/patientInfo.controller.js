(function () {
    'use strict';

    angular
        .module('app.patientInfo')
        .controller('PatientInfoController', PatientInfoController);

    PatientInfoController.$inject = ['$stateParams', '$state', 'patientFactory'];

    function PatientInfoController($stateParams, $state, patientFactory) {
        var vm = this;

        vm.save = save;

        //activate();

        

        //function activate() {}

        function save(patient){
            patientFactory
            .create(patient)
                .then(function(response){
                alert('patient Created!');
                console.log(response.id);
               $state.go('wizard.emergencyContact' + response.id);
                });            
        }

    }
})();


