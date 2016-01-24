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

moravitaliApp.controller('contacto', ['$scope', '$location',
    function ($scope, $location) {
        var windowHeight = $(window).height();
        var contactHeight = $("#contacto").height();
        var margin = (windowHeight - contactHeight)/2;
        $("#contacto").attr('style','top:'+margin+'px;');
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
