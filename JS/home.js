document.addEventListener("DOMContentLoaded", function (){
    var logoContainers = document.querySelectorAll('.logo-container');

    logoContainers.forEach(function (container){
        container.addEventListener('click', function () {
            var targetId = container.getAttribute('data-target');
            var cardContainer = document.getElementById(targetId);

            //Oculta todas las tarjetas
            document.querySelectorAll('.card-container').forEach(function (card){
                card.computedStyleMap.display = 'none';
            });

            //Muestra la tarjeta específica
            cardContainer.style.display = 'block';
        });
    });
});