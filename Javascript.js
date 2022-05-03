function Converttaa() {
    var k = Number(document.getElementById("k").value);
    var d = Number(document.getElementById("d").value);
    var a = Number(document.getElementById("a").value);
    var KDA = (k += a) / d;
    console.log(k, d, a, KDA);
    document.getElementById("KDA").innerHTML = "You'r KDA is: " + KDA;
}