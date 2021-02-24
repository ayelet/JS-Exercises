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
    let user_info = document.querySelector('.user-info');
    let name = document.querySelector('#name').value;
    let age = document.querySelector('#age').value;
    let email = document.querySelector('#email').value;

    user_info.innerHTML = `name: ${name}, age: ${age}, email: ${email}`;
    modal.style.display = "block";
})

let span = document.querySelector('span');
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
  }

  function cleanInputFields() {
     let name = document.querySelector('#name');
     let age = document.querySelector('#age');
     let email = document.querySelector('#email');

     name.value = ""
     age.value = "";
     email.value = "";
    }
  let cancel = document.querySelector('.cancel');
  
  cancel.addEventListener('click', ()=> {
      console.log(cancel);
      modal.style.display = "none";
      cleanInputFields();
  })
  
  let confirm = document.querySelector('.confirm');
  confirm.addEventListener('click', ()=>{
      modal.style.display = "none";
      let form = document.querySelector('.myForm');
      let p1 = document.createElement('p');
      p1.innerHTML = "Congratulation! You have successfully sent this form!";
      form.appendChild(p1);
  })
