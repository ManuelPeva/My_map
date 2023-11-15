document.addEventListener("DOMContentLoaded", function () {
    var logoContainers = document.querySelectorAll('.logo-container');

    logoContainers.forEach(function (container) {
        container.addEventListener('click', function () {
            var targetId = container.getAttribute('data-target');
            //Ejecución del codigo en consola para verificar su funcionamiento
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
function changeLanguage(language){
    var audioElement = document.getElementById('audioPlayer');
    var sourceElement = ducument.getElementById('audioSource');

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
