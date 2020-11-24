// demande de la localisation à l'utilisateur
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        $("#map").html("Geolocation is not supported by this browser.");
    }
}

// Si l"utilisateur l'autorise, on récupère les coordonnées dans l'objet "position"
function showPosition(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;
    var img_url = `https://maps.googleapis.com/maps/api/staticmap?markers=${latlon}&zoom=14&size=400x300&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg`;
    
    $("#map").html(`<img src='${img_url}'>`);
    $("#Adresse").val(latlon);
}

// Au cas ou l'utilisateur refuse
// Ou si une erreur arrive
function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            $("#map").html("L'utilisateur a refusé la demande de géolocalisation.");
            break;
        case error.POSITION_UNAVAILABLE:
            $("#map").html("Les informations de localisation ne sont pas disponibles.");
            break;
        case error.TIMEOUT:
            $("#map").html("La demande d’obtention de l’emplacement de l’utilisateur a expiré.");
            break;
        case error.UNKNOWN_ERROR:
            $("#map").html("Une erreur inconnue est survenue.");
            break;
    }
}