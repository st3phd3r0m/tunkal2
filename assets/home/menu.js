$(function () {
    // Sur le burger, on met un ecouteur, pour derouler/enrouler le menus principal
    $("#navMenu").on("click", openMenu);
});

/**
 * Fonction qui déroule/enroule l'élément html suivant
 */
function openMenu() {
    $(this).next().slideDown(200, listenDocument);
}

/**
 * Fonction qui ajoute un event "click" sur le document pour fermer le menu
 */
function listenDocument() {
    $(document).one("click", closeMenu);
}

/**
 * Fonction qui enroule les menus secondaire et principal
 */
function closeMenu() {
    $(".menuPrincipal").slideUp(200);
}