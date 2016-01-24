'use strict';

moravitaliApp.controller('body', ['$scope', '$location', '$http',
    function ($scope, $location, $http) {

        //GIVE THE WRAPER 50PX margin top and bottom
        var element = $("#wraper");
        var windowHeight = $(window).height();
        var result = (windowHeight-250);
        element.css({
            height: result
        });

        //GIVE THE SIDEMENU 50PX margin top and bottom
        var element = $("#sideMenu");

        var elementHeight = $("#sideMenu").height();
        var windowHeight = $(window).height();
        var result = (windowHeight-50);
        element.css({
            height: result
        });

        $scope.collapsePortfolio = function(){
            $(this).show();
            $('#menuPortfolios').slideToggle("slow");
        }

            $scope.pageTitle = "Mora Vitali Fotografa.";

            $http.get('estructura.json')
               .then(function(res){
                  $scope.items = res.data;
            });

    }
]);


moravitaliApp.controller('main', ['$scope', '$location',
    function ($scope, $location) {

        //ADJUST THE MAIN IMAGE
        var element = $("#mainImg");
        var target = $("#wraper");
        console.log(element, target);
        var elementHeight = element.height();
        var targetHeight = target.height();
        element.css({
            height: targetHeight
        });
    }
]);

moravitaliApp.controller('portfolio', ['$scope', '$location', '$stateParams',
    function ($scope, $location, $stateParams) {

        //Creo el contenedor de las slides
        $scope.slides = [];

        //TODO: poder deshabilitar una galeria
        //revisar que la galeria seleccionada tenga contenido
        var i;
        for(i=0; i<$scope.items[0].subItems.length; i++){
            if($scope.items[0].subItems[i].ref === $location.$$path.split("/").pop()){
                var e;
                for(e=0; e<$scope.items[0].subItems[i].items.length; e++){
                    var slide;
                    slide = $scope.items[0].subItems[i].items[e];
                    $scope.slides.push(slide);
                }
            }
        }
    }
]);

moravitaliApp.controller('contacto', ['$scope', '$location', '$http',
    function ($scope, $location, $http) {

        $scope.result = 'hidden'
    $scope.resultMessage;
    $scope.formData; //formData is an object holding the name, email, subject, and message
    $scope.submitButtonDisabled = false;
    $scope.submitted = false; //used so that form errors are shown only after the form has been submitted
    $scope.submit = function(contactform) {
        event.preventDefault();
        $scope.submitted = true;
        $scope.submitButtonDisabled = true;
        if (contactform.$valid) {
            $http({
                method  : 'POST',
                url     : 'contact-form.php',
                data    : $.param($scope.formData),  //param method from jQuery
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  //set the headers so angular passing info as form data (not request payload)
            }).success(function(data){
                console.log(data);
                if (data.success) { //success comes from the return json object
                    $scope.submitButtonDisabled = true;
                    $scope.resultMessage = data.message;
                    $scope.result='bg-success';
                } else {
                    $scope.submitButtonDisabled = false;
                    $scope.resultMessage = data.message;
                    $scope.result='bg-danger';
                }
            });
        } else {
            $scope.submitButtonDisabled = false;
            $scope.resultMessage = 'Failed <img src="http://www.chaosm.net/blog/wp-includes/images/smilies/icon_sad.gif" alt=":(" class="wp-smiley">  Please fill out all the fields.';
            $scope.result='bg-danger';
        }
        console.log($scope.formData);

    }
    }
]);

moravitaliApp.controller('cv', ['$scope', '$location',
    function ($scope, $location) {
        console.log($scope.items[2].subItems);

        //Creo el contenedor de las muestras
        $scope.muestras = [];

        //TODO: poder deshabilitar una muestra
        //revisar que la muestra seleccionada tenga contenido
        var i;
        for(i=0; i<$scope.items[2].subItems.length; i++){
            var muestra;
            muestra = $scope.items[2].subItems[i];
            $scope.muestras.push(muestra);
        }
        console.log($scope.muestras);
    }
]);
