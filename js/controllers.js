'use strict';

moravitaliApp.controller('body', ['$scope', '$location',
    function ($scope, $location) {


            $scope.mainTitle = "Mora Vitali Fotografa.";

            $scope.showChilds = function(item){
            item.active = !item.active;
            };

            $scope.items = [
            {
                name: "portfolio",
                subItems: [
                    {
                        name: "a simple love story",
                        ref: "lovestory",
                        items: [{
                            id: 1,
                            type: "img",
                            titulo: "Titulo 1",
                            content: "http://moravitali.com.ar/photo/asimplelovestori_01.jpg",
                            thumbnail: "http://moravitali.com.ar/photo/asimplelovestori_01_thumb.jpg"
                        },
                        {
                            id: 2,
                            type: "txt",
                            titulo: "Titulo 2",
                            content: "Este es el contenido del item 2. Cuyo titulo es Titulo 2.",
                            thumbnail: "http://moravitali.com.ar/photo/asimplelovestori_02_thumb.jpg"
                        },
                        {
                            id: 3,
                            type: "img",
                            titulo: "Titulo 3",
                            content: "http://moravitali.com.ar/photo/asimplelovestori_03.jpg",
                            thumbnail: "http://moravitali.com.ar/photo/asimplelovestori_03_thumb.jpg"
                        },
                        {
                            id: 4,
                            type: "img",
                            titulo: "Titulo 4",
                            content: "http://moravitali.com.ar/photo/asimplelovestori_04.jpg",
                            thumbnail: "http://moravitali.com.ar/photo/asimplelovestori_04_thumb.jpg"
                        },
                        {
                            id: 5,
                            type: "img",
                            titulo: "Titulo 5",
                            content: "http://moravitali.com.ar/photo/asimplelovestori_05.jpg",
                            thumbnail: "http://moravitali.com.ar/photo/asimplelovestori_05_thumb.jpg"
                        },
                        {
                            id: 6,
                            type: "img",
                            titulo: "Titulo 6",
                            content: "http://moravitali.com.ar/photo/asimplelovestori_06.jpg",
                            thumbnail: "http://moravitali.com.ar/photo/asimplelovestori_06_thumb.jpg"
                        },
                        {
                            id: 7,
                            type: "img",
                            titulo: "Titulo 7",
                            content: "http://moravitali.com.ar/photo/asimplelovestori_07.jpg",
                            thumbnail: "http://moravitali.com.ar/photo/asimplelovestori_07_thumb.jpg"
                        },
                        {
                            id: 8,
                            type: "img",
                            titulo: "Titulo 8",
                            content: "http://moravitali.com.ar/photo/asimplelovestori_08.jpg",
                            thumbnail: "http://moravitali.com.ar/photo/asimplelovestori_08_thumb.jpg"
                        },
                        {
                            id: 9,
                            type: "img",
                            titulo: "Titulo 9",
                            content: "http://moravitali.com.ar/photo/asimplelovestori_09.jpg",
                            thumbnail: "http://moravitali.com.ar/photo/asimplelovestori_09_thumb.jpg"
                        },
                        {
                            id: 10,
                            type: "img",
                            titulo: "Titulo 10",
                            content: "http://moravitali.com.ar/photo/asimplelovestori_10.jpg",
                            thumbnail: "http://moravitali.com.ar/photo/asimplelovestori_10_thumb.jpg"
                        },
                        {
                            id: 11,
                            type: "img",
                            titulo: "Titulo 11",
                            content: "http://moravitali.com.ar/photo/asimplelovestori_11.jpg",
                            thumbnail: "http://moravitali.com.ar/photo/asimplelovestori_11_thumb.jpg"
                        },
                        {
                            id: 12,
                            type: "img",
                            titulo: "Titulo 12",
                            content: "http://moravitali.com.ar/photo/asimplelovestori_12.jpg",
                            thumbnail: "http://moravitali.com.ar/photo/asimplelovestori_12_thumb.jpg"
                        },
                        {
                            id: 13,
                            type: "img",
                            titulo: "Titulo 13",
                            content: "http://moravitali.com.ar/photo/asimplelovestori_13.jpg",
                            thumbnail: "http://moravitali.com.ar/photo/asimplelovestori_13_thumb.jpg"
                        },
                        {
                            id: 14,
                            type: "img",
                            titulo: "Titulo 14",
                            content: "http://moravitali.com.ar/photo/asimplelovestori_14.jpg",
                            thumbnail: "http://moravitali.com.ar/photo/asimplelovestori_14_thumb.jpg"
                        },
                        {
                            id: 15,
                            type: "img",
                            titulo: "Titulo 15",
                            content: "http://moravitali.com.ar/photo/asimplelovestori_15.jpg",
                            thumbnail: "http://moravitali.com.ar/photo/asimplelovestori_15_thumb.jpg"
                        }]
                    },
                    {
                        name: "novia en rojo",
                        ref: "noviaenrojo"
                    },
                    {
                        name: "toy cams",
                        ref: "toycams"
                    },
                    {
                        name: "las mo(i)ras",
                        ref: "lasmoiras"
                    },
                    {
                        name: "arte contra la trata",
                        ref: "artecontralatrata"
                    }
                ]
            },
            {
                name: "bio",
                ref: "bio",
                subItems: []
            },
            {
                name: "cv",
                ref: "cv",
                subItems: []
            },
            {
                name: "contacto",
                ref: "contacto",
                subItems: []
            }
            ];
    }
]);

moravitaliApp.controller('main', ['$scope', '$location',
    function ($scope, $location) {
        function centerPlease(element,margin){
            element.load(function(){
                var windowHeight = $(window).height();
                var windowWidth = $(window).width();
                if(windowWidth<1600){
                    margin = margin*2;
                }
                var maxHeight = windowHeight-(margin*2);
                element.height(maxHeight+'px');
                var imageHeight = $(this).height();
                var imageWidth = $(this).width();
                var marginAlto = (windowHeight - imageHeight)/2;
                var marginAncho = (windowWidth - imageWidth)/2;
                element.offset({ top: marginAlto, left: marginAncho})
            });
        }
        var margin = "50";
        centerPlease($("#mainImg"),margin);
    }
]);

moravitaliApp.controller('portfolio', ['$scope', '$location', '$stateParams',
    function ($scope, $location, $stateParams) {
        function centerPlease(element,margin){
            var windowHeight = $(window).height();
            var windowWidth = $(window).width();
            if(windowWidth<1600){
                margin = margin*2;
            }
            var maxHeight = windowHeight-(margin*2);
            element.height(maxHeight+'px');
            var imageHeight = element.height();
            var imageWidth = element.width();
            var marginAlto = (windowHeight - imageHeight)/2;
            var marginAncho = (windowWidth - imageWidth)/2;
                element.offset({ top: marginAlto, left: marginAncho})
        }
        var margin = "50";
        centerPlease($("#gallery"),margin);
        var i;

        //Creo el contenedor de las slides
        $scope.slides = [];

        //TODO: poder deshabilitar una galeria
        //Reviso que la galeria seleccionada tenga contenido

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
