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