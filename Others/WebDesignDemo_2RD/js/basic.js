function openNav() {
    if ((document.body.clientWidth >= 120) && (document.body.clientWidth <= 700)) {
        document.getElementById("sidenav").style.display = "block";
        document.getElementById("sidenav_icon").style.display = "none";
    }
}

function closeNav() {
    if ((document.body.clientWidth >= 120) && (document.body.clientWidth <= 700)) {
        document.getElementById("sidenav").style.display = "none";
        document.getElementById("sidenav_icon").style.display = "block";
    }
}