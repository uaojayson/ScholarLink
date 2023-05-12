var selectedRow = null;

//show alerts
function showalert(message, classname){
  const div = document.createElement("div");
  div.className = `alert alert-${classname}`;

  div.appendChild(document.createTextNode(message));
  const container = document.querySelector(".container");
  const main = document.querySelector(".main");
  container.insertBefore(div, main);

  setTimeout(() => document.querySelector(".alert").remove(), 3000);
}

//clear all fields
function clearFields(){
  document.querySelector("#First name").value = "";
  document.querySelector("#Last").value = "";
  document.querySelector("#Mentor").value = "";
}

//add data
document.querySelector("#mentors").addEventListener("submit", (e) => {
  e.preventDefault();
  //Get form values
  const firstname = document.querySelector("#Firstname").value;
  const lastname = document.querySelector("#Last").value;
  const mentor = document.querySelector("#Mentor").value;

  //validate
  if(firstname == "" || lastname == "" || mentor == ""){
    showalert("Please fill in all fields", "danger");
  } 
  else {
    if(selectedRow == null) {
      const list = document.querySelector("#mentors-list");
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${firstname}</td>
        <td>${lastname}</td>
        <td>${mentor}</td>
        <td>
          <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
          <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
        </td>
      `;
      list.appendChild(row);
      selectedRow = null;
      showalert("Mentor added", "success");
    }
    else
    selectedRow.children[0].textContent =firstname;
    selectedRow.children[1].textContent =lastname;
    selectedRow.children[2].textContent =mentor;

  }
});

//delete data
document.querySelector("#mentors").addEventListener("click", (e) => {
  console.log("Clicked element:", e.target);
  target = e.target;
  if (target.classList.contains("delete")) {
    target.parentElement.parentElement.remove();
    showalert("Mentor data deleted", "danger");
  }
});



