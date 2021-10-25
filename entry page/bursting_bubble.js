window.addEventListener("load", function() {

    const mainBubble = document.querySelector("img");
    mainBubble.addEventListener("click", bubbleBurst);

    function bubbleBurst() {
        mainBubble.style.display = "none";

        setTimeout(function() {
            window.alert("It worked!");
        }, 250);
    };



});