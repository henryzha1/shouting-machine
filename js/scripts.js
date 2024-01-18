function getAndSetResponse(count) {
    const input = document.getElementById("input").value;

    document.querySelector("#response>p").innerText = input + " Font size: " + count*12 + "px";
    document.querySelector("#response>p").style.fontSize = count*12+"px";
}

function formSubmissionEventHandler() {
    let form = document.querySelector("form");
    let count = 0;
    form.onsubmit = function(e) {
        e.preventDefault();
        count += 1;
        getAndSetResponse(count);
        document.querySelector("#response").removeAttribute("class");
    }
}




window.onload = function() {
    formSubmissionEventHandler();


}