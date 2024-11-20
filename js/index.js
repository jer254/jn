document.addEventListener('DOMContentLoaded', function () {
  AOS.init();
})

const words = ["Software Developer", "Graphic Designer", "IT trainer"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function type() {
  currentWord = words[i];
  if (isDeleting) {
    document.getElementById("typewriter").textContent = currentWord.substring(0, j-1);
    j--;
    if (j == 0) {
      isDeleting = false;
      i++;
      if (i == words.length) {
        i = 0;
      }
    }
  } else {
    document.getElementById("typewriter").textContent = currentWord.substring(0, j+1);
    j++;
    if (j == currentWord.length) {
      isDeleting = true;
    }
  }
  setTimeout(type, 100);
}

type();



document.getElementById('view-cv').addEventListener('click', function () {
  const url = './assets/Jeremiah-Ndegwa-CV.pdf'; // Replace with your CV's file path
  window.open(url, '_blank'); // Opens the PDF in a new tab
});


 // Initialize EmailJS
 

 // Handle form submission
 document.getElementById('contact-form').addEventListener('submit', function(event) {
     event.preventDefault();

     // Collect form data
     const formData = {
         fname: document.getElementById('fname').value,
         lname: document.getElementById('lname').value,
         email: document.getElementById('email').value,
         message: document.getElementById('message').value,
     };

     // Send email
     emailjs.send('service_72uwfvp', 'template_s2h9r4r', formData)
         .then(() => {
             alert('Message sent successfully!');
             document.getElementById('contact-form').reset();
         }, (error) => {
             alert('Failed to send message: ' + JSON.stringify(error));
         });
 });