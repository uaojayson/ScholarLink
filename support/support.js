function setActiveLink(link) {
    // Remove the "active" class from all links
    var links = document.querySelectorAll('.nav-link');
    for (var i = 0; i < links.length; i++) {
      links[i].classList.remove('active');
    }
  
    // Add the "active" class to the clicked link
    link.classList.add('active');
  }


  const question = document.querySelectorAll('.faq');

  question.forEach(faq => {
      faq.addEventListener("click", () => {
          faq.classList.toggle("active");
      })
  })

  const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


var tab_lists = document.querySelectorAll(".tabs_list ul li");
var tab_items = document.querySelectorAll(".tab_item"); 

tab_lists.forEach(function(list){
  list.addEventListener("click", function(){
    var tab_data = list.getAttribute("data-tc");
    
    tab_lists.forEach(function(list){
      list.classList.remove("active");
    });
    list.classList.add("active");
    
    tab_items.forEach(function(item){
      var tab_class = item.getAttribute("class").split(" ");
      if(tab_class.includes(tab_data)){
        item.style.display = "block";
      }
      else{
        item.style.display = "none";
      }
      
    })
    
  })
})

// Get the login and signup buttons
const loginBtn = document.querySelector('.btn-login');

// Add click event listeners to the buttons
loginBtn.addEventListener('click', () => {
  // Redirect to the login page
  window.location.href = 'http://127.0.0.1:5500/login-signup/login.html?login-type=student#';
});


document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // prevent the form from submitting normally
  // your code to send the form data to PHP
});

var form = document.getElementById("contact-form");
var formData = new FormData(form);
fetch("send-email.php", {
  method: "POST",
  body: formData
})
.then(function(response) {
  if (response.ok) {
    alert("Your message has been sent!");
    form.reset();
  } else {
    alert("There was an error sending your message.");
  }
})
.catch(function(error) {
  alert("There was a network error.");
});

