var SetaDireita = window.document.getElementById("setadireita")
var SetaEsquerda = window.document.getElementById("setaesquerda")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")

function RolarParaDireita() {
    leonardo.style ="display:none"
   bruna.style ="display:flex"
   SetaDireita.style ="display:none"
   SetaEsquerda.style ="display:flex; margin-top:55px" 

}

function RolarParaesquerda(){
    leonardo.style ="display:flex"
    bruna.style ="display:none"
    SetaDireita.style ="display:flex; margin top:55px"
    SetaEsquerda.style ="display:none"
}


