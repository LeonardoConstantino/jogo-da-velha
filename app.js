// o primeiro numero representa coluna o segundo linha

//          coluna1 | coluna2 | coluna3
// linha 1 | L1C1[0]   | L1C2[1]    | L1C3[2]
// ------------------------------------
// linha 2 | L2C1[3]   | L2C2[4]    | L2C3[5]
// ------------------------------------
// linha 3 | L3C1[6]   | L3C2[7]    | L3C3[8]

var tabuleiro = [
    'L1C1', 'L1C2', 'L1C3', 
    'L2C1', 'L2C2', 'L2C3', 
    'L3C1', 'L3C2', 'L3C3'
]

var cels = document.querySelectorAll('.cels')

var resultadoJogo = 0

var xis = "imagens/xis.png"
var bola = "imagens/bola.png"

function addouRemoverEventoClik(event) {
    cels[0].setAttribute('class', event)
    cels[1].setAttribute('class', event)
    cels[2].setAttribute('class', event)
    cels[3].setAttribute('class', event)
    cels[4].setAttribute('class', event)
    cels[5].setAttribute('class', event)
    cels[6].setAttribute('class', event)
    cels[7].setAttribute('class', event)
    cels[8].setAttribute('class', event)
}


function adicionaXO(celula, xo) {
    img = document.createElement("img")
    img.setAttribute("src", xo)
    celula.appendChild(img)
    celula.setAttribute('class', 'naoclik')

}

function ganhador() {
    conferirGanhador()
    // if (resultadoJogo == 0) {
    //     tempomaq()
    // }else{
    // }
}

function atualizaTabuleiroX(pos, xo) {
    tabuleiro[pos] = xo
    console.log(tabuleiro)
}

function x0(cel = '0') {
    atualizaTabuleiroX(cel, 'x')
    adicionaXO(cels[cel], xis)
    ganhador()
}

function x1(cel = '1') {
    atualizaTabuleiroX(cel, 'x')
    adicionaXO(cels[cel], xis)
    ganhador()
}

function x2(cel = '2') {
    atualizaTabuleiroX(cel, 'x')
    adicionaXO(cels[cel], xis)
    ganhador()
}

function x3(cel = '3') {
    atualizaTabuleiroX(cel, 'x')
    adicionaXO(cels[cel], xis)
    ganhador()
}

function x4(cel = '4') {
    atualizaTabuleiroX(cel, 'x')
    adicionaXO(cels[cel], xis)
    ganhador()
}

function x5(cel = '5') {
    atualizaTabuleiroX(cel, 'x')
    adicionaXO(cels[cel], xis)
    ganhador()
}

function x6(cel = '6') {
    atualizaTabuleiroX(cel, 'x')
    adicionaXO(cels[cel], xis)
    ganhador()
}

function x7(cel = '7') {
    atualizaTabuleiroX(cel, 'x')
    adicionaXO(cels[cel], xis)
    ganhador()
}

function x8(cel = '8') {
    atualizaTabuleiroX(cel, 'x')
    adicionaXO(cels[cel], xis)
    ganhador()
}



function tempomaq() {
    addouRemoverEventoClik('naoclik')
    setTimeout(jogadaMaquina, 500)
}

function jogadaMaquina(ran = Math.floor(Math.random() * 9)) {
    addouRemoverEventoClik('clik')
    console.log(ran)
    if (tabuleiro[ran] === 'o') {
        jogadaMaquina()
    } else if (tabuleiro[ran] === 'x') {
        jogadaMaquina()
    } else {
        adicionaXO(cels[ran], bola)
        tabuleiro[ran] = 'o'
        atualizaTabuleiroX(ran, 'o')
    }

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

// function conferirGanhador(){
//     if (tabuleiro[0] && tabuleiro[1] && tabuleiro[2] === 'x') {
//         console.log('x GANHOU LINHA 1')
//     }else if (tabuleiro[0] && tabuleiro[1] && tabuleiro[3] === 'o') {
//         console.log('o GANHOU LINHA 1')
//     }else{
//         tempomaq()
//     }
// }


function conferirGanhador() {
    if (tabuleiro[0] == tabuleiro[1] && tabuleiro[0] ==
        tabuleiro[2] && tabuleiro[1] == tabuleiro[2]) {
        if (tabuleiro[0] && tabuleiro[1] && tabuleiro[2] == 'o') {
            console.log('o GANHOU LINHA 1')
            resultadoJogo = 1
        } else {
            console.log('x GANHOU LINHA 1')
            resultadoJogo = 2
        }
    } else if (tabuleiro[3] == tabuleiro[4] && tabuleiro[3] ==
        tabuleiro[5] && tabuleiro[4] == tabuleiro[5]) {
        if (tabuleiro[3] && tabuleiro[4] && tabuleiro[5] == 'o') {
            console.log('o GANHOU LINHA 2')
            resultadoJogo = 1
        } else {
            console.log('x GANHOU LINHA 2')
            resultadoJogo = 2
        }
    } else if (tabuleiro[6] == tabuleiro[7] && tabuleiro[6] ==
        tabuleiro[8] && tabuleiro[7] == tabuleiro[8]) {
        if (tabuleiro[6] && tabuleiro[7] && tabuleiro[8] == 'o') {
            console.log('o GANHOU LINHA 3')
            resultadoJogo = 1
        } else {
            console.log('x GANHOU LINHA 3')
            resultadoJogo = 2
        }
    } else if (tabuleiro[0] == tabuleiro[3] && tabuleiro[0] ==
        tabuleiro[6] && tabuleiro[3] == tabuleiro[6]) {
        if (tabuleiro[0] && tabuleiro[3] && tabuleiro[6] == 'o') {
            console.log('o GANHOU coluna 1')
            resultadoJogo = 1
        } else {
            console.log('x GANHOU coluna 1')
            resultadoJogo = 2
        }
    } else if (tabuleiro[1] == tabuleiro[4] && tabuleiro[1] ==
        tabuleiro[7] && tabuleiro[4] == tabuleiro[7]) {
        if (tabuleiro[1] && tabuleiro[4] && tabuleiro[7] == 'o') {
            console.log('o GANHOU coluna 2')
            resultadoJogo = 1
        } else {
            console.log('x GANHOU coluna 2')
            resultadoJogo = 2
        }
    } else if (tabuleiro[2] == tabuleiro[5] && tabuleiro[2] ==
        tabuleiro[8] && tabuleiro[5] == tabuleiro[8]) {
        if (tabuleiro[2] && tabuleiro[5] && tabuleiro[8] == 'o') {
            console.log('o GANHOU coluna 3')
            resultadoJogo = 1
        } else {
            console.log('x GANHOU coluna 3')
            resultadoJogo = 2
        }
    } else if (tabuleiro[0] == tabuleiro[4] && tabuleiro[0] ==
        tabuleiro[8] && tabuleiro[4] == tabuleiro[8]) {
        if (tabuleiro[0] && tabuleiro[4] && tabuleiro[8] == 'o') {
            console.log('o GANHOU diagonal superior esquerda')
            resultadoJogo = 1
        } else {
            console.log('x GANHOU diagonal superior esquerda')
            resultadoJogo = 2
        }
    } else if (tabuleiro[6] == tabuleiro[4] && tabuleiro[6] ==
        tabuleiro[2] && tabuleiro[4] == tabuleiro[2]) {
        if (tabuleiro[6] && tabuleiro[4] && tabuleiro[2] == 'o') {
            console.log('o GANHOU diagonal superior direita')
            resultadoJogo = 1
        } else {
            console.log('x GANHOU diagonal superior direita')
            resultadoJogo = 2
        }
    } else {
       tempomaq()
        // jogadaMaquina()
    }
}

// console.log(conferirGanhador())

// console.table(tabuleiro)
// console.log(tabuleiro[0], tabuleiro[1], tabuleiro[2])
// console.log(tabuleiro[3], tabuleiro[4], tabuleiro[5])
// console.log(tabuleiro[6], tabuleiro[7], tabuleiro[8])