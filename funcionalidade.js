var setadireita = window.document.getElementById("setadireita")
var leonardo = window.document.getElementById("leonardo")
var bruna = window.document.getElementById("bruna")
var samanta = window.document.getElementById("samanta")
var setaesquerda = window.document.getElementById("setaesquerda")

function RolarParaDireita() {
leonardo.style ="display:none"
bruna.style ="display:flex"
setadireita.style ="display:none"
setaesquerda.style ="display:flex; margin-top:55px"

}

function RolarParaEsquerda() {
    leonardo.style ="display:flex"
    bruna.style ="display:none"
    setadireita.style ="display:flex; margin-top:55px"
    setaesquerda.style ="display:none"
}

