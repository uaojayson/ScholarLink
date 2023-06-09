function setActiveLink(link) {
    // Remove the "active" class from all links
    var links = document.querySelectorAll('.nav-link');
    for (var i = 0; i < links.length; i++) {
      links[i].classList.remove('active');
    }
  
    // Add the "active" class to the clicked link
    link.classList.add('active');
  }

  const categoryTitle = document.querySelectorAll('.category-title');
const allCategoryPosts = document.querySelectorAll('.all');

for(let i = 0; i < categoryTitle.length; i++){
    categoryTitle[i].addEventListener('click', filterPosts.bind(this, categoryTitle[i]));
}

function filterPosts(item){
    changeActivePosition(item);
    for(let i = 0; i < allCategoryPosts.length; i++){
        if(allCategoryPosts[i].classList.contains(item.attributes.id.value)){
            allCategoryPosts[i].style.display = "block";
        } else {
            allCategoryPosts[i].style.display = "none";
        }
    }
}

function changeActivePosition(activeItem){
    for(let i = 0; i < categoryTitle.length; i++){
        categoryTitle[i].classList.remove('actives');
    }
    activeItem.classList.add('actives');
};

// Get the login and signup buttons
const loginBtn = document.querySelector('.btn-login');

// Add click event listeners to the buttons
loginBtn.addEventListener('click', () => {
  // Redirect to the login page
  window.location.href = 'http://127.0.0.1:5500/login-signup/login.html?login-type=student#';
});

