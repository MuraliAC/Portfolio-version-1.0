
window.addEventListener('scroll', function () {

    var arr = document.querySelectorAll('.rev');
    var wh = window.innerHeight;

    arr.forEach(element => {

        var top = element.getBoundingClientRect().top;

        if (wh - 150 > top) {
            element.classList.add('active')
        } else {
            element.classList.remove('active')
        }

    });
});

document.getElementById("hidden-icons").style.display = "none";

function footer() {
    document.getElementById("hidden-footer").style.display = document.getElementById("hidden-footer").style.display === "none" ? "block" : "none";
    document.getElementById("hidden-icons").style.display = document.getElementById("hidden-icons").style.display === "block" ? "none" : "block";
}