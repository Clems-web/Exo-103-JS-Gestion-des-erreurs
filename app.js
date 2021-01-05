let result = document.getElementById("results");

try {
    let a = 5;
    let b = 8;
    result.innerHTML = a + b;
}

catch (error) {
    alert("l'élément " + result + " n'existe pas");
}