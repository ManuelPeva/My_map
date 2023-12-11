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
function changeLanguagePelicano(language){
    var audioElement = document.getElementById('audioPlayerPelicano');
    var sourceElement = document.getElementById('audioSourcePelicano');

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

//Creación de la función de audio en el card Brisas
function changeLanguageBrisas(language){
    var audioElement = document.getElementById('audioPlayerBrisas');
    var sourceElement = document.getElementById('audioSourceBrisas');

    switch (language) {
        case 'english':
            sourceElement.src = './Assets/audio/luaHotel_spanish.wav';
            break;
        case 'maya':
            sourceElement.src = './Assets/audio/maya.mp3';
            break;
        case 'german':
            sourceElement.src = '../Assets/audio/restaurantes_español/es-brisas.mp3';
            break;
        default:
            //acción predeterminada en ingles si el idioma no se reconoce
            sourceElement.src = './Assets/audio/english.mp3';
}

    audioElement.load(); //Recarga el elemento de audio con la nueva fuente
}

//Creación de la función de audio en el card Cachimbazo
function changeLanguageChimbazo(language){
    var audioElement = document.getElementById('audioPlayerChimbazo');
    var sourceElement = document.getElementById('audioSourceChimbazo');

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

//Creación de la función de audio en el card RINCON DEL BAJIO
function changeLanguageBajio(language){
    var audioElement = document.getElementById('audioPlayerBajio');
    var sourceElement = document.getElementById('audioSourceBajio');

    switch (language) {
        case 'english':
            sourceElement.src = './Assets/audio/luaHotel_spanish.wav';
            break;
        case 'maya':
            sourceElement.src = './Assets/audio/maya.mp3';
            break;
        case 'german':
            sourceElement.src = '../Assets/audio/restaurantes_español/es_bajio.mp3';
            break;
        default:
            //acción predeterminada en ingles si el idioma no se reconoce
            sourceElement.src = './Assets/audio/english.mp3';
}

    audioElement.load(); //Recarga el elemento de audio con la nueva fuente
}


//Creación de la función de audio en el card Timon
function changeLanguageTimon(language){
    var audioElement = document.getElementById('audioPlayerTimon');
    var sourceElement = document.getElementById('audioSourceTimon');

    switch (language) {
        case 'english':
            sourceElement.src = './Assets/audio/luaHotel_spanish.wav';
            break;
        case 'maya':
            sourceElement.src = '../Assets/audio/restaurantes_español/es-timon.mp3';
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

//Creación de la función de audio en el card Taco fish
function changeLanguageFish(language){
    var audioElement = document.getElementById('audioPlayerFish');
    var sourceElement = document.getElementById('audioSourceFish');

    switch (language) {
        case 'english':
            sourceElement.src = '../Assets/audio/restaurantes_español/es-tacofish.mp3';
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



//Creación de la función de audio en el card La palapa
function changeLanguagePalapa(language){
    var audioElement = document.getElementById('audioPlayerPalapa');
    var sourceElement = document.getElementById('audioSourcePalapa');

    switch (language) {
        case 'english':
            sourceElement.src = '#';
            break;
        case 'maya':
            sourceElement.src = './Assets/audio/maya.mp3';
            break;
        case 'german':
            sourceElement.src = '../Assets/audio/restaurantes_español/es-lapalapa.mp3';
            break;
        default:
            //acción predeterminada en ingles si el idioma no se reconoce
            sourceElement.src = './Assets/audio/english.mp3';
}

    audioElement.load(); //Recarga el elemento de audio con la nueva fuente
}


//Creación de la función de audio en el card El Pulpo Maya
function changeLanguageMaya(language){
    var audioElement = document.getElementById('audioPlayerMaya');
    var sourceElement = document.getElementById('audioSourceMaya');

    switch (language) {
        case 'english':
            sourceElement.src = './Assets/audio/luaHotel_spanish.wav';
            break;
        case 'maya':
            sourceElement.src = './Assets/audio/maya.mp3';
            break;
        case 'german':
            sourceElement.src = '../Assets/audio/restaurantes_español/es-pulpomaya .mp3';
            break;
        default:
            //acción predeterminada en ingles si el idioma no se reconoce
            sourceElement.src = './Assets/audio/english.mp3';
}

    audioElement.load(); //Recarga el elemento de audio con la nueva fuente
}



//Creación de la función de audio en el card Cintya
function changeLanguageCintya(language){
    var audioElement = document.getElementById('audioPlayerCintya');
    var sourceElement = document.getElementById('audioSourceCintya');

    switch (language) {
        case 'english':
            sourceElement.src = './Assets/audio/luaHotel_spanish.wav';
            break;
        case 'maya':
            sourceElement.src = './Assets/audio/maya.mp3';
            break;
        case 'german':
            sourceElement.src = '../Assets/audio/restaurantes_español/es-cinthyarestaurante.mp3';
            break;
        default:
            //acción predeterminada en ingles si el idioma no se reconoce
            sourceElement.src = './Assets/audio/english.mp3';
}

    audioElement.load(); //Recarga el elemento de audio con la nueva fuente
}

//Creación de la función de audio en el card Chakán
function changeLanguageChakan(language){
    var audioElement = document.getElementById('audioPlayerChakan');
    var sourceElement = document.getElementById('audioSourceChakan');

    switch (language) {
        case 'english':
            sourceElement.src = './Assets/audio/luaHotel_spanish.wav';
            break;
        case 'maya':
            sourceElement.src = '../Assets/audio/restaurantes_español/es-chakas.mp3';
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

//Creación de la función de audio en el card Cayo arcas
function changeLanguageCayo(language){
    var audioElement = document.getElementById('audioPlayerCayo');
    var sourceElement = document.getElementById('audioSourceCayo');

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


//Creación de la función de audio en el card Don Canelo
function changeLanguageCanelo(language){
    var audioElement = document.getElementById('audioPlayerCanelo');
    var sourceElement = document.getElementById('audioSourceCanelo');

    switch (language) {
        case 'english':
            sourceElement.src = './Assets/audio/luaHotel_spanish.wav';
            break;
        case 'maya':
            sourceElement.src = '../Assets/audio/tapas_español/es-doncanelo.mp3';
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


//Creación de la función de audio en el card Don Canelo
function changeLanguageAntigua(language){
    var audioElement = document.getElementById('audioPlayerAntigua');
    var sourceElement = document.getElementById('audioSourceAntigua');

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
