// var id = document.getElementById("playerrank")

function returnChar() {
    document.getElementById("playerName").textContent = ""
    //var id = parseInt(document.getElementById("playerId").value) - 1;
    for(let i = 0; i < 5; i++) {
        id = Math.floor(Math.random() * 590);
        console.log(id);
        document.getElementById("playerName").append(players[id].Player + "\n")
    }
    // document.getElementById("playerName").textContent = players[id].Player
}

function goCollection() {
    var current = document.getElementsByClassName("active")
    current[0].className = current[0].className.replace(" active", "");
    document.getElementsByClassName("collection")[0].className += " active";
}
function goGacha() {
    var current = document.getElementsByClassName("active")
    current[0].className = current[0].className.replace(" active", "");
    document.getElementsByClassName("gacha")[0].className += " active";
}
function goSocial() {
    var current = document.getElementsByClassName("active")
    current[0].className = current[0].className.replace(" active", "");
    document.getElementsByClassName("social")[0].className += " active";
}
