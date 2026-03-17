// var id = document.getElementById("playerrank")

function returnChar() {
    //var id = parseInt(document.getElementById("playerId").value) - 1;
    for(let i = 0; i < 5; i++) {
        id = Math.floor(Math.random() * 200);
        console.log(id);
        document.getElementById("playerName").append(players[id].Player + " ")
    }
    // document.getElementById("playerName").textContent = players[id].Player
}

