$( document ).ready(function() {
    
     console.log( "DOM ready!" );
     
     $("#valider").click(function (event) {

        event.preventDefault();

    
        if (($("#Nom").val() && $("#Prénom").val() && $("#Date").val() && $("#Adresse").val() && $("#E-mail").val()) != "") {


            $("#myModal").modal("show");
            $(".modal-title").text("Bienvenue " + $("#Prénom").val());

            var city = $("#Adresse").val();
            var Date = $("#Date").val();

            $(".modal-body").html(`Vous êtes nés ${Date} et vous habitez :
            <a class="link"  href="http://maps.google.com/maps?" ><img src="https://maps.googleapis.com/maps/api/staticmap?markers=${city}&zoom=14&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"/> Lien Google Maps </a>`);
            

        } else {

            $('#myModal').modal("show")
            $(".modal-body").html('Veuillez renseigner tous les champs s\'il vous plait');
            

        }
    });

 });
 