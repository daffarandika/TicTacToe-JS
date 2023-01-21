        setup();
        // TODO :make create x and create o function

        function setup(){
            for (var i = 0; i < 3;i ++){
                const row = document.createElement("div");
                row.className = "row";
                row.style.display = "flex";
                for (var j = 0; j < 3; j++){
                    const panel = document.createElement("div");
                    const root = document.getElementById("root");
                    const x = document.createElement("p");
                    x.innerHTML = "X";
                    panel.className = "panel"
                    panel.id = "panel" + i + j;
                    panel.onclick = function () {
                        panel.appendChild(x);
                    }
                    row.appendChild(panel);
                }
                root.appendChild(row);
            }
        }
        function panel_click() {
            alert('woij');
        }
