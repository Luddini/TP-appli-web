window.onload = function () {
    document.querySelector("#Nom").addEventListener("keyup", function (event) {
      document.getElementById("nameCounter").textContent = `${event.target.value.length} char.`; 
    });


    document.querySelector("#Prénom").addEventListener("keyup", function (event) {
        document.getElementById("surnameCounter").textContent = `${event.target.value.length} char.`; 
    });

    document.querySelector("#Date").addEventListener("keyup", function (event) {
        document.getElementById("dateCounter").textContent = `${event.target.value.length} char.`; 
    });

    document.querySelector("#Adresse").addEventListener("keyup", function (event) {
        document.getElementById("addCounter").textContent = `${event.target.value.length} char.`; 
    });

    document.querySelector("#mail").addEventListener("keyup", function (event) {
        document.getElementById("mailCounter").textContent = `${event.target.value.length} char.`; 
    });

    document.querySelector("#gps").addEventListener("click", function (event) {
      event.preventDefault();
      getLocation();
    });
  
    document.querySelector("form").addEventListener("submit", function (event) {
      event.preventDefault();
      contactStore.add(
        document.querySelector("#Nom").value,
        document.querySelector("#Prénom").value,
        document.querySelector("#Sexe").value,
        document.querySelector("#Date").value,
        document.querySelector("#Adresse").value,
        document.querySelector("#mail").value,
        
      );
  
      const contactList = contactStore.getList();
  
      document.querySelector("table tbody").innerHTML = "";
  
      for (var contact of contactList) {
        document.querySelector("table tbody").innerHTML += `
          <tr>
              <td> ${contact.Nom}</td>
              <td> ${contact.Prénom}</td>
              <td> ${contact.Sexe}</td>
              <td> ${contact.Date}</td>
              <td> <a href="https://maps.google.com/?q=${contact.Adresse}">${contact.Adresse}</a></td>
              <td> <a href="mailto:${contact.mail}">${contact.mail}</a></td>
          <tr>`;
      }
    });
  };
  