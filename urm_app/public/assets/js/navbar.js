let subMenu = document.getElementById("subMenu");

function toggleMenu(){
    subMenu.classList.toggle("open-menu");
}

let dashboardMenu = document.getElementById("dashboardMenu");
let dropdownMenu = document.getElementById("dropdownMenu");

dashboardMenu.addEventListener('click', function(e) {
    e.preventDefault();
    // Toggle "open-menu" class
    dropdownMenu.classList.toggle("open-menu");
});

let inbox = document.getElementById("inbox");
let notificationsDropdown = document.getElementById("notificationsDropdown");

inbox.addEventListener('click', function(e) {
    e.preventDefault();
    notificationsDropdown.classList.toggle("open-menu");
});

let removeButtons = document.querySelectorAll('.remove-notification');
removeButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.stopPropagation();
        this.parentElement.remove();  // Removes the notification item
    });
});
