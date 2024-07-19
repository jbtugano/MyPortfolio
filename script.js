// Function to close offcanvas
function closeOffcanvas() {
    var offcanvasElement = document.getElementById('offcanvasNavbar2');
    var offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement); // Get the Bootstrap offcanvas instance
    offcanvas.hide();
    }

    // Add event listener to all nav links except dropdown-toggle
    document.querySelectorAll('.navbar-nav .nav-link:not(.dropdown-toggle)').forEach(function(navLink) {
    navLink.addEventListener('click', closeOffcanvas);
    });

    // Add event listener to all dropdown items
    document.querySelectorAll('.dropdown-item').forEach(function(dropdownItem) {
    dropdownItem.addEventListener('click', closeOffcanvas);
    });