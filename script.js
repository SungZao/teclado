const btn = document.querySelector("#send");
var pontos = 0;
const tent = document.querySelector("#resposta");
const nota = document.getElementById('nota');
var resp = "do";



btn.addEventListener("click", function(e){

    e.preventDefault();






    if (tent.value == resp) {
        alert("Parabéns")

        switch(Math.floor(Math.random() * 7)){
            case 0:
                document.getElementById("nota").innerHTML = `<i>${'C'}</i>`;
                resp = "do";
                break;
        
            case 1:
                document.getElementById("nota").innerHTML = `<i>${'D'}</i>`;
                resp = "re";
                break;
        
            case 2:
                document.getElementById("nota").innerHTML = `<i>${'E'}</i>`;
                resp = "mi";
                break;
        
            case 3:
                document.getElementById("nota").innerHTML = `<i>${'F'}</i>`;
                resp = "fa";
                break;
        
            case 4:
                document.getElementById("nota").innerHTML = `<i>${'G'}</i>`;
                resp = "sol";
                break;
        
            case 5:
                document.getElementById("nota").innerHTML = `<i>${'A'}</i>`;
                resp = "la";
                break;
        
            case 6:
                document.getElementById("nota").innerHTML = `<i>${'B'}</i>`;
                resp = "si";
                break;
        
        }
    } else {
        alert("Fracasso")
    }





})