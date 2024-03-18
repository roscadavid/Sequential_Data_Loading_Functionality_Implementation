document.addEventListener("DOMContentLoaded", function () {
    const puncteDeProgres = document.querySelectorAll(".cntDiv");
    const titluCard = document.getElementById("title");
    const continutCard = document.getElementById("content");
    let indexDate = 0;
    let indexPunctActiva = 0;
  
    function preiaDate() {
      fetch("https://jsonplaceholder.typicode.com/posts/")
        .then((response) => response.json())
        .then((date) => {
          // Verifică dacă există date și resetează la zero dacă ești la sfârșitul listei
          if (indexDate >= date.length) {
            indexDate = 0;
          }
  
          // Updatează cardul cu datele corespunzătoare
          titluCard.innerText = date[indexDate].title;
          continutCard.innerText = date[indexDate].body;
  
          // Incrementarea indexului pentru următoarea iterație
          indexDate++;
        })
        .catch((eroare) => console.error("Eroare la preluarea datelor:", eroare));
    }
  
    function reseteazaPuncteleDeProgres() {
      // Resetarea tuturor punctelor de progres la starea alba
      puncteDeProgres.forEach((punct) => {
        punct.style.backgroundColor = "#fff";
      });
    }
  
    function actualizeazaProgres() {
      // Verifică dacă există puncte de progres neumplute
      if (indexPunctActiva < puncteDeProgres.length) {
        // Aprinde următorul punct de progres
        puncteDeProgres[indexPunctActiva].style.backgroundColor = "orange";
        indexPunctActiva++;
      } else {
        // Dacă toate punctele de progres sunt aprinse, încarcă noi date și resetează punctele
        preiaDate();
        reseteazaPuncteleDeProgres();
        indexPunctActiva = 0;
      }
    }
  
    // Inițializarea intervalului pentru actualizarea progresului la fiecare secundă
    setInterval(actualizeazaProgres, 1000);
  
    // Inițializarea datelor și setarea inițială a punctelor de progres
    preiaDate();
  });
  