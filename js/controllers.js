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
                ref: "portfolio",
                subItems: [
                    {
                        name: "a simple love story",
                        ref: "lovestory",
                        photos: [{
                            id: 1,
                            titulo: "Titulo 1",
                            imagen: "http://moravitali.com.ar/photo/asimplelovestori_01.jpg",
                            thumbnail: "http://moravitali.com.ar/photo/asimplelovestori_01_thumb.jpg"
                        },
                        {
                            id: 2,
                            titulo: "Titulo 2",
                            imagen: "http://moravitali.com.ar/photo/asimplelovestori_02.jpg",
                            thumbnail: "http://moravitali.com.ar/photo/asimplelovestori_02_thumb.jpg"
                        },
                        {
                            id: 3,
                            titulo: "Titulo 3",
                            imagen: "http://moravitali.com.ar/photo/asimplelovestori_03.jpg",
                            thumbnail: "http://moravitali.com.ar/photo/asimplelovestori_03_thumb.jpg"
                        },
                        {
                            id: 4,
                            titulo: "Titulo 4",
                            imagen: "http://moravitali.com.ar/photo/asimplelovestori_04.jpg",
                            thumbnail: "http://moravitali.com.ar/photo/asimplelovestori_04_thumb.jpg"
                        },
                        {
                            id: 5,
                            titulo: "Titulo 5",
                            imagen: "http://moravitali.com.ar/photo/asimplelovestori_05.jpg",
                            thumbnail: "http://moravitali.com.ar/photo/asimplelovestori_05_thumb.jpg"
                        },
                        {
                            id: 6,
                            titulo: "Titulo 6",
                            imagen: "http://moravitali.com.ar/photo/asimplelovestori_06.jpg",
                            thumbnail: "http://moravitali.com.ar/photo/asimplelovestori_06_thumb.jpg"
                        },
                        {
                            id: 7,
                            titulo: "Titulo 7",
                            imagen: "http://moravitali.com.ar/photo/asimplelovestori_07.jpg",
                            thumbnail: "http://moravitali.com.ar/photo/asimplelovestori_07_thumb.jpg"
                        },
                        {
                            id: 8,
                            titulo: "Titulo 8",
                            imagen: "http://moravitali.com.ar/photo/asimplelovestori_08.jpg",
                            thumbnail: "http://moravitali.com.ar/photo/asimplelovestori_08_thumb.jpg"
                        },
                        {
                            id: 9,
                            titulo: "Titulo 9",
                            imagen: "http://moravitali.com.ar/photo/asimplelovestori_09.jpg",
                            thumbnail: "http://moravitali.com.ar/photo/asimplelovestori_09_thumb.jpg"
                        },
                        {
                            id: 10,
                            titulo: "Titulo 10",
                            imagen: "http://moravitali.com.ar/photo/asimplelovestori_10.jpg",
                            thumbnail: "http://moravitali.com.ar/photo/asimplelovestori_10_thumb.jpg"
                        },
                        {
                            id: 11,
                            titulo: "Titulo 11",
                            imagen: "http://moravitali.com.ar/photo/asimplelovestori_11.jpg",
                            thumbnail: "http://moravitali.com.ar/photo/asimplelovestori_11_thumb.jpg"
                        },
                        {
                            id: 12,
                            titulo: "Titulo 12",
                            imagen: "http://moravitali.com.ar/photo/asimplelovestori_12.jpg",
                            thumbnail: "http://moravitali.com.ar/photo/asimplelovestori_12_thumb.jpg"
                        },
                        {
                            id: 13,
                            titulo: "Titulo 13",
                            imagen: "http://moravitali.com.ar/photo/asimplelovestori_13.jpg",
                            thumbnail: "http://moravitali.com.ar/photo/asimplelovestori_13_thumb.jpg"
                        },
                        {
                            id: 14,
                            titulo: "Titulo 14",
                            imagen: "http://moravitali.com.ar/photo/asimplelovestori_14.jpg",
                            thumbnail: "http://moravitali.com.ar/photo/asimplelovestori_14_thumb.jpg"
                        },
                        {
                            id: 15,
                            titulo: "Titulo 15",
                            imagen: "http://moravitali.com.ar/photo/asimplelovestori_15.jpg",
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
        $("#sideMenu").css({
        position: "relative",
        top: margin + "px",
        left: (margin) + "px"
        }).show();


    }
]);

moravitaliApp.controller('portfolio', ['$scope', '$location', '$stateParams',
    function ($scope, $location, $stateParams) {
        console.log($stateParams);
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
            $scope.slides = [];
            for(i=0; i<$scope.items[0].subItems.length; i++){
                if($scope.items[0].subItems[i].ref === $location.$$path.split("/").pop()){
                    var e;
                    for(e=0; e<$scope.items[0].subItems[i].photos.length; e++){
                        var slide;
                        slide = $scope.items[0].subItems[i].photos[e];
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
