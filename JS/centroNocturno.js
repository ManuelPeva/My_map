//aparición de tarjetas
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

//Creación de la función de audio en el card
function changeLanguageCats(language){
    var audioElement = document.getElementById('audioPlayerCats');
    var sourceElement = document.getElementById('audioSourceCats');

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
function changeLanguageKapital(language){
    var audioElement = document.getElementById('audioPlayerKapital');
    var sourceElement = document.getElementById('audioSourceKapital');

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
//Creación de la función de audio en el card Lua Hotel
function changeLanguageHicas(language){
    var audioElement = document.getElementById('audioPlayerHicas');
    var sourceElement = document.getElementById('audioSourceHicas');

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

//Creación de la función de audio en el card Lua Hotel
function changeLanguageCocos(language){
    var audioElement = document.getElementById('audioPlayerCocos');
    var sourceElement = document.getElementById('audioSourceCocos');

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


//pelícanos
function changeLanguageDonCanelo(language){
    var audioElement = document.getElementById('audioPlayerDonCanelo');
    var sourceElement = document.getElementById('audioSourceDonCanelo');

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
}*/