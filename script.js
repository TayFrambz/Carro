var carro = document.getElementById("carro");
var idoso = document.getElementById("idoso");
var counter=0;
function jump(){
    if(carro.classList == "animate"){return}
    carro.classList.add("animate");
    setTimeout(function(){
        carro.classList.remove("animate");
    },300);
}
var checkDead = setInterval(function() {
    let carroTop = parseInt(window.getComputedStyle(carro).getPropertyValue("top"));
    let idosoLeft = parseInt(window.getComputedStyle(idoso).getPropertyValue("left"));
    if(idosoLeft<80 && idosoLeft>-80 && carroTop>=140){
        idoso.style.animation = "none";
        confirm(`Você perdeu, sua pontuação foi ${+Math.floor(counter/100)}. Clique em Ok para tentar novamente`);
        counter=0;
        idoso.style.animation = "idoso 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);

function normal() {
    window.location.href = "https://tayframbz.github.io/Mario/";
};

function dificil() {
    window.location.href = "https://tayframbz.github.io/foguete/";
};