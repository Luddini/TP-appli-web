function validation(){
  
    var nom = document.getElementById("Nom").value;
    
    if(nom.length == 0){
      
        document.getElementById("error").innerHTML = "La saisie du nom est obligatoire";
      
    }
    document.getElementById("error").innerHTML = "";
  
    for(let item of document.querySelectorAll('.inputAW')){
      if(item.value.length < 5){
        // recuperation du label
        var label =   document.querySelector("label[for="+item.id+"]").textContent;
        // ajout du message d'erreur
        document.getElementById("error").innerHTML += `Minimum 5 caractères pour : ${label} <br/>`;
        
        // ajout de la classe CSS "display"
        document.getElementById("error").classList.add("display");
        document.getElementById("Resultat").classList.remove("display")
    
      }
        
    }
      if(document.getElementById("error").innerHTML == ""){
        var nom = document.querySelector("#Nom").value;
        document.getElementById("Resultat").innerHTML = `Bienvenue à ${nom}`;
        document.getElementById("error").classList.remove("display")
        document.getElementById("Resultat").classList.add("display")
      }

    
}