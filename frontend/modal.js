

// Get the modal
var createForm = document.getElementById("addLocationForm");
// var modal = document.getElementById("createForm");
// var modal = document.getElementById("createForm");
// var modal = document.getElementById("createForm");

// Get the button that opens the modal
var btnCreate = document.getElementById("btnCreate");
// var btnRead = document.getElementById("btnRead");
// var btnUpdate = document.getElementById("btnUpdate");
// var btnDelete = document.getElementById("btnDelete");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btnCreate.onclick = function() {
    createForm.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    createForm.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}