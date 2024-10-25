document.getElementById("form").addEventListener("submit", function(event){
    event.preventDefault(); // Prevents the form from submitting the default way
    alert("Your query has been submitted!");
});
let navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.style.top = '0';
}
function hideMenu(){
    navLinks.style.top = '-800px'
}