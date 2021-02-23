// ex22.1 - Ayelet Danieli - Forms 

// Create a webpage that has a form (asks the user for its name, age and email
//     address) and when the user clicks submit, open a text window that writes all
//     the information and ask for his confirmation. If he clicks on the confirm
//     button, tell him “congratulations you successfully sent this form” if he clicks on
//     change information, give him the possibility to change the information and ask
//     again for his confirmation.

let btn = document.querySelector('.btn');
let modal = document.querySelector('.modal')
btn.addEventListener('click', () => {
    // add event here
    modal.style.display = "block";
})

let span = document.querySelector('span');
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }