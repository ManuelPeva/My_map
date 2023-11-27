document.addEventListener("DOMContentLoaded", function () {
    var logoContainers = document.querySelectorAll('.logo-container');

    logoContainers.forEach(function (container) {
        container.addEventListener('click', function () {
            var targetId = container.getAttribute('data-target');
            //Ejecución del código en consola para verificar su funcionamiento
            console.log('Target ID: ',targetId)
            var cardContainer = document.getElementById(targetId);
            //Ejecución de la escritura del elemento del ID
            console.log('Card Container: ',cardContainer);

            // Oculta todas las tarjetas
            document.querySelectorAll('.card-container').forEach(function (card) {
                card.style.display = 'none';  // Corregir aquí
            });

            // Muestra la tarjeta específica
            cardContainer.style.display = 'block';
        });
    });
});

//Creación de la función de audio en el card Baluarte
function changeLanguageBaluarte(language){
    var audioElement = document.getElementById('audioPlayerBaluarte');
    var sourceElement = document.getElementById('audioSourceBaluarte');

    switch (language) {
        case 'english':
            sourceElement.src = './Assets/audio/english.mp3';
            break;
        case 'maya':
            sourceElement.src = './Assets/audio/maya.mp3';
            break;
        case 'german':
            sourceElement.src = './Assets/audio/german.mp3';
            break;
        default:
            //acción predeterminada en ingles si el idioma no se reconoce
            sourceElement.src = './Assets/audio/english.mp3';
}
    audioElement.load(); //Recarga el elemento de audio con la nueva fuente
}

//Creación de la segundo audio

//Creación de la función de audio en el card
function changeLanguageLetras(language){
    var audioElement = document.getElementById('audioPlayerLetras');
    var sourceElement = document.getElementById('audioSourceLetras');

    switch (language) {
        case 'english':
            sourceElement.src = './Assets/audio/luaHotel_spanish.wav';
            break;
        case 'maya':
            sourceElement.src = './Assets/audio/maya.mp3';
            break;
        case 'german':
            sourceElement.src = './Assets/audio/german.mp3';
            break;
        default:
            //acción predeterminada en ingles si el idioma no se reconoce
            sourceElement.src = './Assets/audio/english.mp3';
}

    audioElement.load(); //Recarga el elemento de audio con la nueva fuente
}

//Creación de la función de audio en el card Museo de Champoton
function changeLanguageChampoton(language){
    var audioElement = document.getElementById('audioPlayerChampoton');
    var sourceElement = document.getElementById('audioSourceChampoton');

    switch (language) {
        case 'english':
            sourceElement.src = './Assets/audio/luaHotel_spanish.wav';
            break;
        case 'maya':
            sourceElement.src = './Assets/audio/maya.mp3';
            break;
        case 'german':
            sourceElement.src = './Assets/audio/german.mp3';
            break;
        default:
            //acción predeterminada en ingles si el idioma no se reconoce
            sourceElement.src = './Assets/audio/english.mp3';
}

    audioElement.load(); //Recarga el elemento de audio con la nueva fuente
}

// ---------------

//Creación de la función de audio en el card Palacio Municipal
function changeLanguagePalacio(language){
    var audioElement = document.getElementById('audioPlayerPalacio');
    var sourceElement = document.getElementById('audioSourcePalacio');

    switch (language) {
        case 'english':
            sourceElement.src = './Assets/audio/luaHotel_spanish.wav';
            break;
        case 'maya':
            sourceElement.src = './Assets/audio/maya.mp3';
            break;
        case 'german':
            sourceElement.src = './Assets/audio/german.mp3';
            break;
        default:
            //acción predeterminada en ingles si el idioma no se reconoce
            sourceElement.src = './Assets/audio/english.mp3';
}

    audioElement.load(); //Recarga el elemento de audio con la nueva fuente
}

//---------------------------FUNCIÓN AUDIO RESTAURANTES-------------------------


//Costero
function changeLanguageCostero(language){
    var audioElement = document.getElementById('audioPlayerCostero');
    var sourceElement = document.getElementById('audioSourceCostero');

    switch (language) {
        case 'english':
            sourceElement.src = './Assets/audio/luaHotel_spanish.wav';
            break;
        case 'maya':
            sourceElement.src = './Assets/audio/maya.mp3';
            break;
        case 'german':
            sourceElement.src = './Assets/audio/german.mp3';
            break;
        default:
            //acción predeterminada en ingles si el idioma no se reconoce
            sourceElement.src = './Assets/audio/english.mp3';
}

    audioElement.load(); //Recarga el elemento de audio con la nueva fuente
}


/*
function changeLanguageFlamingos(language){
    var audioElement = document.getElementById('audioPlayerFlamingos');
    var sourceElement = document.getElementById('audioSourceFlamingos');

    switch (language) {
        case 'english':
            sourceElement.src = './Assets/audio/luaHotel_spanish.wav';
            break;
        case 'maya':
            sourceElement.src = './Assets/audio/maya.mp3';
            break;
        case 'german':
            sourceElement.src = './Assets/audio/german.mp3';
            break;
        default:
            //acción predeterminada en ingles si el idioma no se reconoce
            sourceElement.src = './Assets/audio/english.mp3';
}

    audioElement.load(); //Recarga el elemento de audio con la nueva fuente
}

*/

// función para que al presionar categoria salga icono de empresa
/* Ya no es necesario su uso
document.addEventListener('DOMContentLoaded', function (){
    var restaurante1 = document.getElementById('restaurante1');
    var triggerHotel1 = document.getElementById('triggerRestaurante1');
    //variable para ocultar los hoteles
    var cuadre = document.querySelector('.cuadre');


    triggerRestaurante1.addEventListener('click', function (event){
        event.preventDefault(); //Evita que el enlace siga el href

        //Oculta todos los elementos dentro del contenedor hoteles llamado cuadre
        hideElementsInCuadre();

        //llama la función para mostrar/ocultar el elemento restaurante1
        toggleElementVisibility(restaurante1);
    });
    function hideElementsInCuadre(){
        var logoContainers = cuadre.querySelectorAll('.logo-container');
        logoContainers.forEach(function (container){
            var targetId = container.getAttribute('data-target');
            var targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.style.display = "none";
            }
        })
    }
});

//función para mostrar/ocultar elementos
function toggleElementVisibility(element){
    if (element.style.display == "none"){
        element.style.display = "block"; //o la visualización deseado
    }else{
        element.style.display = "none"; //o la visualización deseado
    }
}*/