function show() {
    let put = document.getElementById("move");
    let im = document.getElementById("seen");
    if (put.getAttribute("type") === "password") {
       put.setAttribute("type", "text");
       im.setAttribute("src", "seen.png");
    } else {
       put.setAttribute("type", "password");
       im.setAttribute("src", "not.png");
    }
 }