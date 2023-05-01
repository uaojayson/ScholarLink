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