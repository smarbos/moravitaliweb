'use strict';

moravitaliApp.controller('body', ['$scope', '$location',
    function ($scope, $location) {

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
        console.log(element.height());



            $scope.mainTitle = "Mora Vitali Fotografa.";

            $scope.showChilds = function(item){
            if(item.subMenu){
            item.active = !item.active;
            }

            };

            $scope.items = [
            {
                name: "portfolio",
                subMenu: true,
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
                        ref: "noviaenrojo",
                        items: [{
                            id: 1,
                            type: "img",
                            titulo: "Titulo 1",
                            content: "http://moravitali.com.ar/photo/noviaenrojo_1.jpg",
                            thumbnail: "http://moravitali.com.ar/photo/noviaenrojo_1_thumb.jpg"
                        },
                        {
                            id: 2,
                            type: "img",
                            titulo: "Titulo 2",
                            content: "http://moravitali.com.ar/photo/noviaenrojo_2.jpg",
                            thumbnail: "http://moravitali.com.ar/photo/noviaenrojo_2_thumb.jpg"
                        },
                        {
                            id: 3,
                            type: "img",
                            titulo: "Titulo 3",
                            content: "http://moravitali.com.ar/photo/noviaenrojo_3.jpg",
                            thumbnail: "http://moravitali.com.ar/photo/noviaenrojo_3_thumb.jpg"
                        },
                        {
                            id: 4,
                            type: "img",
                            titulo: "Titulo 4",
                            content: "http://moravitali.com.ar/photo/noviaenrojo_4.jpg",
                            thumbnail: "http://moravitali.com.ar/photo/noviaenrojo_4_thumb.jpg"
                        },
                        {
                            id: 5,
                            type: "img",
                            titulo: "Titulo 5",
                            content: "http://moravitali.com.ar/photo/noviaenrojo_5.jpg",
                            thumbnail: "http://moravitali.com.ar/photo/noviaenrojo_5_thumb.jpg"
                        },
                        {
                            id: 6,
                            type: "img",
                            titulo: "Titulo 6",
                            content: "http://moravitali.com.ar/photo/noviaenrojo_6.jpg",
                            thumbnail: "http://moravitali.com.ar/photo/noviaenrojo_6_thumb.jpg"
                        }]
                    },
                    {
                        name: "toy cams",
                        ref: "toycams",
                        items: [{
                            id: 1,
                            type: "img",
                            titulo: "Titulo 1",
                            content: "http://moravitali.com.ar/photo/toycams_1.JPG",
                            thumbnail: "http://moravitali.com.ar/photo/toycams_1_thumb.jpg"
                        },
                        {
                            id: 2,
                            type: "img",
                            titulo: "Titulo 2",
                            content: "http://moravitali.com.ar/photo/toycams_2.JPG",
                            thumbnail: "http://moravitali.com.ar/photo/toycams_2_thumb.jpg"
                        },
                        {
                            id: 3,
                            type: "img",
                            titulo: "Titulo 3",
                            content: "http://moravitali.com.ar/photo/toycams_3.JPG",
                            thumbnail: "http://moravitali.com.ar/photo/toycams_3_thumb.jpg"
                        },
                        {
                            id: 4,
                            type: "img",
                            titulo: "Titulo 4",
                            content: "http://moravitali.com.ar/photo/toycams_4.JPG",
                            thumbnail: "http://moravitali.com.ar/photo/toycams_4_thumb.jpg"
                        },
                        {
                            id: 5,
                            type: "img",
                            titulo: "Titulo 5",
                            content: "http://moravitali.com.ar/photo/toycams_5.JPG",
                            thumbnail: "http://moravitali.com.ar/photo/toycams_5_thumb.jpg"
                        }]
                    },
                    {
                        name: "las mo(i)ras",
                        ref: "lasmoiras",
                        items: [{
                            id: 1,
                            type: "img",
                            titulo: "Titulo 1",
                            content: "http://moravitali.com.ar/photo/las_moiras_1.jpg",
                            thumbnail: "http://moravitali.com.ar/photo/las_moiras_1_thumb.jpg"
                        },
                        {
                            id: 2,
                            type: "img",
                            titulo: "Titulo 2",
                            content: "http://moravitali.com.ar/photo/las_moiras_2.jpg",
                            thumbnail: "http://moravitali.com.ar/photo/las_moiras_2_thumb.jpg"
                        },
                        {
                            id: 3,
                            type: "img",
                            titulo: "Titulo 3",
                            content: "http://moravitali.com.ar/photo/las_moiras_3.jpg",
                            thumbnail: "http://moravitali.com.ar/photo/las_moiras_3_thumb.jpg"
                        },
                        {
                            id: 4,
                            type: "img",
                            titulo: "Titulo 4",
                            content: "http://moravitali.com.ar/photo/las_moiras_4.jpg",
                            thumbnail: "http://moravitali.com.ar/photo/las_moiras_4_thumb.jpg"
                        },
                        {
                            id: 5,
                            type: "img",
                            titulo: "Titulo 5",
                            content: "http://moravitali.com.ar/photo/las_moiras_5.jpg",
                            thumbnail: "http://moravitali.com.ar/photo/las_moiras_5_thumb.jpg"
                        },
                        {
                            id: 6,
                            type: "img",
                            titulo: "Titulo 6",
                            content: "http://moravitali.com.ar/photo/las_moiras_6.jpg",
                            thumbnail: "http://moravitali.com.ar/photo/las_moiras_6_thumb.jpg"
                        },
                        {
                            id: 7,
                            type: "img",
                            titulo: "Titulo 7",
                            content: "http://moravitali.com.ar/photo/las_moiras_7.jpg",
                            thumbnail: "http://moravitali.com.ar/photo/las_moiras_7_thumb.jpg"
                        },
                        {
                            id: 8,
                            type: "img",
                            titulo: "Titulo 8",
                            content: "http://moravitali.com.ar/photo/las_moiras_8.jpg",
                            thumbnail: "http://moravitali.com.ar/photo/las_moiras_8_thumb.jpg"
                        }]
                    },
                    {
                        name: "arte contra la trata",
                        ref: "artecontralatrata",
                        items: [{
                            id: 1,
                            type: "img",
                            titulo: "Titulo 1",
                            content: "http://moravitali.com.ar/photo/alameda_1.jpg",
                            thumbnail: "http://moravitali.com.ar/photo/alameda_1_thumb.jpg"
                        },
                        {
                            id: 2,
                            type: "img",
                            titulo: "Titulo 2",
                            content: "http://moravitali.com.ar/photo/alameda_2.jpg",
                            thumbnail: "http://moravitali.com.ar/photo/alameda_2_thumb.jpg"
                        },
                        {
                            id: 3,
                            type: "img",
                            titulo: "Titulo 3",
                            content: "http://moravitali.com.ar/photo/alameda_3.jpg",
                            thumbnail: "http://moravitali.com.ar/photo/alameda_3_thumb.jpg"
                        }]
                    }
                ]
            },
            {
                name: "bio",
                ref: "bio",
                subMenu: false,
                subItems: [{
                    id: 1,
                    aniomuestra: "Titulo 1",
                    textomuestra: "texto-muestra 1 texto-muestra 1 texto-muestra 1",
                    linkmuestra: "http://moravitali.com.ar/photo/asimplelovestori_01_thumb.jpg"
                },
                {
                    id: 2,
                    aniomuestra: "Titulo 2",
                    textomuestra: "texto-muestra 2 texto-muestra 2 texto-muestra 2",
                    linkmuestra: "http://moravitali.com.ar/photo/asimplelovestori_01_thumb.jpg"
                },
                {
                    id: 3,
                    aniomuestra: "Titulo 1",
                    textomuestra: "texto-muestra 3 texto-muestra 3 texto-muestra 3",
                    linkmuestra: "http://moravitali.com.ar/photo/asimplelovestori_01_thumb.jpg"
                }]
            },
            {
                name: "cv",
                subMenu: false,
                ref: "cv",
                subItems: []
            },
            {
                name: "contacto",
                subMenu: false,
                ref: "contacto",
                subItems: []
            }
            ];
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
        //Reviso que la galeria seleccionada tenga contenido
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
