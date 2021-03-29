// jQuery

 $(document).ready(function() {
   alert('jquery on');
 });

// Vanilla JS

window.onload = function() {
  document.getElementById("menu-button").onclick = function() {
    menu()
  };

  function menu() {
    var x = document.getElementById("menu");
    if (x.className === "menu") {
      x.className += " -active";
    } else {
      x.className = "menu";
    }
  }

  document.getElementById("video-player").onplay = function() {
    document.getElementById("video-cover").classList.add("-inactive");
  };

  document.getElementById("video-player").onpause = function() {
    document.getElementById("video-cover").classList.remove("-inactive");
  };
 

  


  var xmlhttp = new XMLHttpRequest();
    var url = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Alber%20Einstein&origin=*";

    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myFunction(myArr);
      }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    function myFunction(arr) {      
      document.getElementById("wiki").firstElementChild.innerHTML = arr.query.pages[736].extract;      
    }



  const accordions = document.querySelectorAll(".accordion");
  for (const accordion of accordions) {
    const panels = accordion.querySelectorAll(".item");
    for (const panel of panels) {
      const head = panel.querySelector(".title");
      head.addEventListener('click', () => {
        for (const otherPanel of panels) {
          if (otherPanel !== panel) {
            otherPanel.classList.remove('-active');
          }
        }
        panel.classList.toggle('-active');
      });
    }
  }

  document.getElementById("button-modal").onclick = function() {
    modalWikiOpen()
  };

  function modalWikiOpen() {
    var body = document.body;
    body.classList.add("-overlay"); 
    document.getElementsByClassName("modal-wiki")[0].classList.add("-active");    
  };


  document.getElementById("close-modal").onclick = function() {
    document.body.classList.remove("-overlay");
    document.getElementsByClassName("modal-wiki")[0].classList.remove("-active");

  };

};