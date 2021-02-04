// o primeiro numero representa coluna o segundo linha

//          coluna1 | coluna2 | coluna3
// linha 1 | L1C1[0]   | L1C2[1]    | L1C3[2]
// ------------------------------------
// linha 2 | L2C1[3]   | L2C2[4]    | L2C3[5]
// ------------------------------------
// linha 3 | L3C1[6]   | L3C2[7]    | L3C3[8]

var tabuleiro = ['L1C1', 'L1C2', 'L1C3', 'L2C1', 'L2C2', 'L2C3', 'L3C1', 'L3C2', 'L3C3']
var ran = Math.floor(Math.random() * (8 - 0 + 1)) + 0
var ran2 = Math.floor(Math.random() * (8 - 0 + 1)) + 0
var cels = document.querySelectorAll('.cels')

var xis = "imagens/xis.png"
var bola = "imagens/bola.png"

var img

function adicionaXO(celula, xo) {
    img = document.createElement("img")
    img.setAttribute("src", xo)
    celula.appendChild(img)
    // img.value = ''
    celula.setAttribute('class', 'naoclik')
    // if (c0 == 1) {
    // }
}

function x0() {
    adicionaXO(cels[0], xis)
}
function x1() {
    adicionaXO(cels[1], xis)
}
function x2() {
    adicionaXO(cels[2], xis)
}
function x3() {
    adicionaXO(cels[3], xis)
}
function x4() {
    adicionaXO(cels[4], xis)
}
function x5() {
    adicionaXO(cels[5], xis)
}
function x6() {
    adicionaXO(cels[6], xis)
}
function x7() {
    adicionaXO(cels[7], xis)
}
function x8() {
    adicionaXO(cels[8], xis)
}

// cels[0].addEventListener('click',adicionaXO(cels[0], "imagens/bola.png"))

function jogadaMaquina() {
    console.log(ran)
    if(tabuleiro[ran] == 'o'){
        jogadaMaquina()
    }else if (tabuleiro[ran] == 'x'){
        jogadaMaquina()
    }else{
        tabuleiro[ran] = 'o'
        // jogadaMaquina2()
    }
    // conferirGanhador()
}

// function jogadaMaquina2() {
//     console.log(ran2)
//     if(tabuleiro[ran2] == 'o'){
//         jogadaMaquina2()
//     }else if (tabuleiro[ran2] == 'x'){
//         jogadaMaquina2()
//     }else{
//         tabuleiro[ran2] = 'x'
//         conferirGanhador()
//         // jogadaMaquina()
//     }
// }

// tabuleiro[4] = 'x'
// tabuleiro[1] = 'o'
// tabuleiro[3] = 'x'
// tabuleiro[8] = 'o'
// tabuleiro[5] = 'x'
// tabuleiro[6] = 'o'
// tabuleiro[0] = 'x'
// tabuleiro[2] = 'o'
// tabuleiro[7] = 'x'


function conferirGanhador() {
    if (tabuleiro[0] == tabuleiro[1] && tabuleiro[0] == tabuleiro[2] && tabuleiro[1] == tabuleiro[2]) {
        if (tabuleiro[0] && tabuleiro[1] && tabuleiro[2] == 'x') {
            console.log('x GANHOU LINHA 1')
        }else{
            console.log('o GANHOU LINHA 1')
        }
    } else if (tabuleiro[3] == tabuleiro[4] && tabuleiro[3] == tabuleiro[5] && tabuleiro[4] == tabuleiro[5]) {
        if (tabuleiro[3] && tabuleiro[4] && tabuleiro[5] == 'x') {
            console.log('x GANHOU LINHA 2')
        }else{
            console.log('o GANHOU LINHA 2')
        }
    } else if (tabuleiro[6] == tabuleiro[7] && tabuleiro[6] == tabuleiro[8] && tabuleiro[7] == tabuleiro[8]) {
        if (tabuleiro[6] && tabuleiro[7] && tabuleiro[8] == 'x') {
            console.log('x GANHOU LINHA 3')
        }else{
            console.log('o GANHOU LINHA 3')
        }
    } else if (tabuleiro[0] == tabuleiro[3] && tabuleiro[0] == tabuleiro[6] && tabuleiro[3] == tabuleiro[6]) {
        if (tabuleiro[0] && tabuleiro[3] && tabuleiro[6] == 'x') {
            console.log('x GANHOU coluna 1')
        }else{
            console.log('o GANHOU coluna 1')
        }
    } else if (tabuleiro[1] == tabuleiro[4] && tabuleiro[1] == tabuleiro[7] && tabuleiro[4] == tabuleiro[7]) {
        if (tabuleiro[1] && tabuleiro[4] && tabuleiro[7] == 'x') {
            console.log('x GANHOU coluna 2')
        }else{
            console.log('o GANHOU coluna 2')
        }
    } else if (tabuleiro[2] == tabuleiro[5] && tabuleiro[2] == tabuleiro[8] && tabuleiro[5] == tabuleiro[8]) {
        if (tabuleiro[2] && tabuleiro[5] && tabuleiro[8] == 'x') {
            console.log('x GANHOU coluna 3')
        }else{
            console.log('o GANHOU coluna 3')
        }
    } else if (tabuleiro[0] == tabuleiro[4] && tabuleiro[0] == tabuleiro[8] && tabuleiro[4] == tabuleiro[8]) {
        if (tabuleiro[0] && tabuleiro[4] && tabuleiro[8] == 'x') {
            console.log('x GANHOU diagonal superior esquerda')
        }else{
            console.log('o GANHOU diagonal superior esquerda')
        }
    } else if (tabuleiro[6] == tabuleiro[4] && tabuleiro[6] == tabuleiro[2] && tabuleiro[4] == tabuleiro[2]) {
        if (tabuleiro[6] && tabuleiro[4] && tabuleiro[2] == 'x') {
            console.log('x GANHOU diagonal superior direita')
        }else{
            console.log('o GANHOU diagonal superior direita')
        }
    }else{
        jogadaMaquina()
    }
    
}

console.log(conferirGanhador())

console.table(tabuleiro)
console.log(tabuleiro[0], tabuleiro[1], tabuleiro[2])
console.log(tabuleiro[3], tabuleiro[4], tabuleiro[5])
console.log(tabuleiro[6], tabuleiro[7], tabuleiro[8])


