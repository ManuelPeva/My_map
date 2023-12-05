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

//Reproducción de video automatico
document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('miVideo');
    video.play();
});

document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('miVideo');
    video.play();
});

//Creación de la función de audio en el card
function changeLanguage(language){
    var audioElement = document.getElementById('audioPlayer');
    var sourceElement = document.getElementById('audioSource');

    switch (language) {
        case 'english':
            sourceElement.src = './Assets/audio/english.mp3';
            break;
        case 'maya':
            sourceElement.src = '../Assets/audio/hotel_español/lacasonadelpueblo.mp3';
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
function changeLanguageAbel(language){
    var audioElement = document.getElementById('audioPlayer_Abel');
    var sourceElement = document.getElementById('audioSource_Abel');

    switch (language) {
        case 'english':
            sourceElement.src = './Assets/audio/luaHotel_spanish.wav';
            break;
        case 'maya':
            sourceElement.src = './Assets/audio/maya.mp3';
            break;
        case 'german':
            sourceElement.src = '../Assets/audio/hotel_español/don_abel_es.mp3';
            break;
        default:
            //acción predeterminada en ingles si el idioma no se reconoce
            sourceElement.src = './Assets/audio/english.mp3';
}

    audioElement.load(); //Recarga el elemento de audio con la nueva fuente
}

//Creación de la función de audio en el card Lua Hotel
function changeLanguageLua(language){
    var audioElement = document.getElementById('audioPlayer_lua');
    var sourceElement = document.getElementById('audioSource_lua');

    switch (language) {
        case 'english':
            sourceElement.src = './Assets/audio/luaHotel_spanish.wav';
            break;
        case 'maya':
            sourceElement.src = './Assets/audio/maya.mp3';
            break;
        case 'german':
            sourceElement.src = '../Assets/audio/hotel_español/lua_hotel_es.mp3';
            break;
        default:
            //acción predeterminada en ingles si el idioma no se reconoce
            sourceElement.src = './Assets/audio/english.mp3';
}

    audioElement.load(); //Recarga el elemento de audio con la nueva fuente
}

// ---------------

//Creación de la función de audio en el card Lua Hotel
function changeLanguagePerla(language){
    var audioElement = document.getElementById('audioPlayer_Perla');
    var sourceElement = document.getElementById('audioSource_Perla');

    switch (language) {
        case 'english':
            sourceElement.src = './Assets/audio/luaHotel_spanish.wav';
            break;
        case 'maya':
            sourceElement.src = './Assets/audio/maya.mp3';
            break;
        case 'german':
            sourceElement.src = '../Assets/audio/hotel_español/perla_hotel_es.mp3';
            break;
        default:
            //acción predeterminada en ingles si el idioma no se reconoce
            sourceElement.src = './Assets/audio/english.mp3';
}

    audioElement.load(); //Recarga el elemento de audio con la nueva fuente
}


// ---------------

//Creación de la función de audio en el card Lua Hotel
function changeLanguageAak(language){
    var audioElement = document.getElementById('audioPlayerAak');
    var sourceElement = document.getElementById('audioSourceAak');

    switch (language) {
        case 'english':
            sourceElement.src = './Assets/audio/luaHotel_spanish.wav';
            break;
        case 'maya':
            sourceElement.src = './Assets/audio/maya.mp3';
            break;
        case 'german':
            sourceElement.src = '../Assets/audio/hotel_español/aaktun_hotel_es.mp3';
            break;
        default:
            //acción predeterminada en ingles si el idioma no se reconoce
            sourceElement.src = './Assets/audio/english.mp3';
}

    audioElement.load(); //Recarga el elemento de audio con la nueva fuente
}

//---------------------------FUNCIÓN AUDIO RESTAURANTES-------------------------

/*
//pelícanos
function changeLanguagePelicanos(language){
    var audioElement = document.getElementById('audioPlayerPelicanos');
    var sourceElement = document.getElementById('audioSourcePelicanos');

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
/*
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

//Función para ir a tarjeta rápidamente
//función para que espere la carga completa de la card
document.addEventListener("DOMContentLoaded", function () {
    var currentCard = 1; // Indica la tarjeta actual

    // Agrega un controlador de eventos al contenedor de la tarjeta actual
    document.getElementById("hotel1").addEventListener("click", function () {
        // Oculta la tarjeta actual
        document.getElementById("hotel" + currentCard).classList.add("initial-hidden");

        // Incrementa al siguiente número de tarjeta
        currentCard++;

        // Muestra la siguiente tarjeta (puedes ajustar esto según tu estructura HTML)
        document.getElementById("hotel" + currentCard).classList.remove("initial-hidden");
    });
});
