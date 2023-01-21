var moveCount = 1;
const gameState = [ [ 0,0,0 ],
                    [ 0,0,0 ],
                    [ 0,0,0 ]]
setup();

function setup() {
    for (var i = 0; i < 3;i ++){
        const row = document.createElement("div");
        row.className = "row";
        row.style.display = "flex";
        for (var j = 0; j < 3; j++){ const panel = document.createElement("div");
            const root = document.getElementById("root");
            panel.className = "panel"
            panel.id = `panel ${i} ${j}`;
            panel.onclick = function () {
                panel_click(panel.id);
            }
            row.appendChild(panel);
        }
        root.appendChild(row);
    }
}
function panel_click(id) {
    const panel = document.getElementById(id);
    if (panel.hasChildNodes()){
        return;
    }
    const piece = document.createElement("p");
    const row = id.split(" ")[1];
    const col = id.split(" ")[2];
    if (moveCount % 2 == 0) {
        piece.innerHTML = "X";
        gameState[row][col] = 2;
        piece.id = "pieceX"
        piece.className = "piece"
    } else {
        piece.innerHTML = "O";
        piece.id = "pieceO"
        piece.className = "piece"
        gameState[row][col] = 1;
    }
    panel.appendChild(piece);
    console.log(gameState);
    check()
    moveCount++;
}
function check() {
    var player = (moveCount % 2 == 1) ? "O" : "X";
    // horizontal check
    for (let i = 0; i < 3; i++) {
        if (gameState[i][0] & gameState[i][1] & gameState[i][2]) {
            console.log("h" + gameState[i][0] & gameState[i][1] & gameState[i][2])
            winAlert(player)
        }
    }

    // vertical check
    for (let i = 0; i < 3; i++) {
        if (gameState[0][i] & gameState[1][i] & gameState[2][i]) {
            console.log("v" + gameState[0][i] & gameState[1][i] & gameState[2][i])
            winAlert(player)
        }
    }

    // diagonal check
    if (gameState[0][0] & gameState[1][1] & gameState[2][2]) {
        console.log("d" + gameState[0][0] & gameState[1][1] & gameState[2][2])
        winAlert(player)
    }
    for (let i = 0; i < 3; i++) {
        if(gameState[i].includes(0)) {
            return;
        }
    }
    if (confirm(`Tie, want to play again ?`))
        location.reload();
}
function winAlert(player) {
    if (confirm(`Player ${player} has won the game\nPlay again ?`))
        location.reload();
        return
}
