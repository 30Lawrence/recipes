//loader
window.addEventListener("load",  () =>{
  document.querySelector(".loader").classList.add("loader--hidden")
})
//carousel buttons//
const elementToHide = document.querySelector(".carousel-indicators");

// Add an event listener to detect when the viewport width changes
window.addEventListener("resize", () => {
  // Check the width of the viewport using window.matchMedia()
  const isViewportSmall = window.matchMedia("(max-width: 750px)").matches;

  // Toggle the CSS class on the element to show/hide it
  if (isViewportSmall) {
    elementToHide.classList.add("indicator--hidden");
  } else {
    elementToHide.classList.remove("indicator--hidden");
  }
});

//food carousel//
//PORK ADOBO, MENUDO, SINIGANG
//querySelector carousel-item
//see if the carousel change
//if the carousel change change also the name under the carousle 
//else if the prev or next if click 
function adobo() {
  document.getElementById("name").innerHTML = "PORK ADOBO";
}
function menudo() {
  document.getElementById("name").innerHTML = "MENUDO";
}

function sinigang() {
  document.getElementById("name").innerHTML = "SINIGANG";
}


