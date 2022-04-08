

// Navbar Fixed
window.onscroll = function() {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;

  if(window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
};



// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
});

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}

// Whenever the user explicitly chooses light mode
localStorage.theme = 'light'

// Whenever the user explicitly chooses dark mode
localStorage.theme = 'dark'

// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem('theme')

// Alert box

function JSalert(){
 
  swal("Congrats!", "Your message sent successfully!", "success");
   
  }

function sendEmail(){
  Email.send({
    Host : "smtp.gmail.com",
    Username : "danielkristioutomo@gmail.com",
    Password : "tfnnymzxxjxksfdt",
    To : 'danielkristioutomo@gmail.com',
    From : document.getElementById("email").value,
    Subject : document.getElementById('name').value + " sent you a message",
    Body : "Name: " + document.getElementById('name').value +"<br> Email: " + document.getElementById('email').value +"<br> Message: " + document.getElementById('message').value
}).then((message) => JSalert())
}