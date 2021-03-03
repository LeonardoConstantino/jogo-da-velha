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
var maxJogMaq = 0
var resultadoJogo = 0
var xis = "imagens/xis.png"
var bola = "imagens/bola.png"

function animaGanhador(n1, n2, n3) {
    document.querySelectorAll(`#cel${n1} img`)[0].setAttribute('class', 'animaGanhador')
    document.querySelectorAll(`#cel${n2} img`)[0].setAttribute('class', 'animaGanhador')
    document.querySelectorAll(`#cel${n3} img`)[0].setAttribute('class', 'animaGanhador')
}


function mudarClass(novaclass) {
    cels[0].setAttribute('class', novaclass)
    cels[1].setAttribute('class', novaclass)
    cels[2].setAttribute('class', novaclass)
    cels[3].setAttribute('class', novaclass)
    cels[4].setAttribute('class', novaclass)
    cels[5].setAttribute('class', novaclass)
    cels[6].setAttribute('class', novaclass)
    cels[7].setAttribute('class', novaclass)
    cels[8].setAttribute('class', novaclass)
}


function adicionaXO(celula, xo) {
    img = document.createElement("img")
    img.setAttribute("src", xo)
    celula.appendChild(img)
    celula.setAttribute('class', 'naoclik')
    img.setAttribute('class', 'animaimg')

}

function ganhador() {
    conferirGanhador()
    if (resultadoJogo == 1) {
        console.log('perdeuuuuuu')
    } else if (resultadoJogo == 2){
        console.log('ganhouuuuu')
    }else{
        setTimeout(jogadaMaquina, 500)
    }
}

function atualizaTabuleiroX(pos, xo) {
    tabuleiro[pos] = xo
    console.log(tabuleiro)
}

function x0(cel = '0') {
    mudarClass('naoclik')
    cels[cel].setAttribute("onclick", '')
    atualizaTabuleiroX(cel, 'x')
    adicionaXO(cels[cel], xis)
    ganhador()
}

function x1(cel = '1') {
    mudarClass('naoclik')
    cels[cel].setAttribute("onclick", '')
    atualizaTabuleiroX(cel, 'x')
    adicionaXO(cels[cel], xis)
    ganhador()
}

function x2(cel = '2') {
    mudarClass('naoclik')
    cels[cel].setAttribute("onclick", '')
    atualizaTabuleiroX(cel, 'x')
    adicionaXO(cels[cel], xis)
    ganhador()
}

function x3(cel = '3') {
    mudarClass('naoclik')
    cels[cel].setAttribute("onclick", '')
    atualizaTabuleiroX(cel, 'x')
    adicionaXO(cels[cel], xis)
    ganhador()
}

function x4(cel = '4') {
    mudarClass('naoclik')
    cels[cel].setAttribute("onclick", '')
    atualizaTabuleiroX(cel, 'x')
    adicionaXO(cels[cel], xis)
    ganhador()
}

function x5(cel = '5') {
    mudarClass('naoclik')
    cels[cel].setAttribute("onclick", '')
    atualizaTabuleiroX(cel, 'x')
    adicionaXO(cels[cel], xis)
    ganhador()
}

function x6(cel = '6') {
    mudarClass('naoclik')
    cels[cel].setAttribute("onclick", '')
    atualizaTabuleiroX(cel, 'x')
    adicionaXO(cels[cel], xis)
    ganhador()
}

function x7(cel = '7') {
    mudarClass('naoclik')
    cels[cel].setAttribute("onclick", '')
    atualizaTabuleiroX(cel, 'x')
    adicionaXO(cels[cel], xis)
    ganhador()
}

function x8(cel = '8') {
    mudarClass('naoclik')
    cels[cel].setAttribute("onclick", '')
    atualizaTabuleiroX(cel, 'x')
    adicionaXO(cels[cel], xis)
    ganhador()
}






function jogadaMaquina(ran = Math.floor(Math.random() * 9)) {
    console.log(ran)
    if (maxJogMaq < 4) {
        if (tabuleiro[ran] === 'o') {
            jogadaMaquina()
        } else if (tabuleiro[ran] === 'x') {
            jogadaMaquina()
        } else {
            adicionaXO(cels[ran], bola)
            tabuleiro[ran] = 'o'
            atualizaTabuleiroX(ran, 'o')
            conferirGanhador()
            cels[ran].setAttribute("onclick", '')
            maxJogMaq++
        }
    }
    mudarClass('clik')
}

function removeImagens() {
    var imagens = document.querySelectorAll('img')
    for (let i = 0; i < imagens.length; i++) {
        imagens[i].remove()
    }
}

function addOnClik() {
    for (let i = 0; i < cels.length; i++) {
        cels[i].setAttribute("onclick", `x${i}()`)
    }
}

function reiniciaJogo() {
    tabuleiro = ['L1C1', 'L1C2', 'L1C3', 'L2C1', 'L2C2', 'L2C3', 'L3C1', 'L3C2', 'L3C3']
    setTimeout(() => {
        resultadoJogo = 0
        maxJogMaq = 0
        // conferirGanhador()
        removeImagens()
        mudarClass('cels')
        addOnClik()
    }, 5000);
}






function conferirGanhador() {
    if (tabuleiro[0] == tabuleiro[1] && tabuleiro[0] ==
        tabuleiro[2] && tabuleiro[1] == tabuleiro[2]) {
            if (tabuleiro[0] && tabuleiro[1] && tabuleiro[2] == 'o') {
                resultadoJogo = 1
                console.log('o GANHOU LINHA 1')
            } else {
                resultadoJogo = 2
                console.log('x GANHOU LINHA 1')
            }
            animaGanhador(0, 1, 2,)
            reiniciaJogo()
            return
    } else if (tabuleiro[3] == tabuleiro[4] && tabuleiro[3] ==
        tabuleiro[5] && tabuleiro[4] == tabuleiro[5]) {
            if (tabuleiro[3] && tabuleiro[4] && tabuleiro[5] == 'o') {
                resultadoJogo = 1
                console.log('o GANHOU LINHA 2')
            } else {
                resultadoJogo = 2
                console.log('x GANHOU LINHA 2')
            }
            animaGanhador(3, 4, 5,)
            reiniciaJogo()
    } else if (tabuleiro[6] == tabuleiro[7] && tabuleiro[6] ==
        tabuleiro[8] && tabuleiro[7] == tabuleiro[8]) {
            if (tabuleiro[6] && tabuleiro[7] && tabuleiro[8] == 'o') {
                resultadoJogo = 1
                console.log('o GANHOU LINHA 3')
            } else {
                resultadoJogo = 2
                console.log('x GANHOU LINHA 3')
            }
            animaGanhador(6, 7, 8,)
            reiniciaJogo()
    } else if (tabuleiro[0] == tabuleiro[3] && tabuleiro[0] ==
        tabuleiro[6] && tabuleiro[3] == tabuleiro[6]) {
            if (tabuleiro[0] && tabuleiro[3] && tabuleiro[6] == 'o') {
                resultadoJogo = 1
                console.log('o GANHOU coluna 1')
            } else {
                resultadoJogo = 2
                console.log('x GANHOU coluna 1')
            }
            animaGanhador(0, 3, 6,)
            reiniciaJogo()
    } else if (tabuleiro[1] == tabuleiro[4] && tabuleiro[1] ==
        tabuleiro[7] && tabuleiro[4] == tabuleiro[7]) {
            if (tabuleiro[1] && tabuleiro[4] && tabuleiro[7] == 'o') {
                resultadoJogo = 1
                console.log('o GANHOU coluna 2')
            } else {
                resultadoJogo = 2
                console.log('x GANHOU coluna 2')
            }
            animaGanhador(1, 4, 7,)
            reiniciaJogo()
    } else if (tabuleiro[2] == tabuleiro[5] && tabuleiro[2] ==
        tabuleiro[8] && tabuleiro[5] == tabuleiro[8]) {
            if (tabuleiro[2] && tabuleiro[5] && tabuleiro[8] == 'o') {
                resultadoJogo = 1
                console.log('o GANHOU coluna 3')
            } else {
                resultadoJogo = 2
                console.log('x GANHOU coluna 3')
            }
            animaGanhador(2, 5, 8,)
            reiniciaJogo()
    } else if (tabuleiro[0] == tabuleiro[4] && tabuleiro[0] ==
        tabuleiro[8] && tabuleiro[4] == tabuleiro[8]) {
            if (tabuleiro[0] && tabuleiro[4] && tabuleiro[8] == 'o') {
                resultadoJogo = 1
                console.log('o GANHOU diagonal superior esquerda')
            } else {
                resultadoJogo = 2
                console.log('x GANHOU diagonal superior esquerda')
            }
            animaGanhador(0, 4, 8,)
            reiniciaJogo()
    } else if (tabuleiro[6] == tabuleiro[4] && tabuleiro[6] ==
        tabuleiro[2] && tabuleiro[4] == tabuleiro[2]) {
            if (tabuleiro[6] && tabuleiro[4] && tabuleiro[2] == 'o') {
                resultadoJogo = 1
                console.log('o GANHOU diagonal superior direita')
            } else {
                resultadoJogo = 2
                console.log('x GANHOU diagonal superior direita')
            }
            animaGanhador(2, 4, 6,)
            reiniciaJogo()
    }
}

// console.log(conferirGanhador())

// console.table(tabuleiro)
// console.log(tabuleiro[0], tabuleiro[1], tabuleiro[2])
// console.log(tabuleiro[3], tabuleiro[4], tabuleiro[5])
// console.log(tabuleiro[6], tabuleiro[7], tabuleiro[8])