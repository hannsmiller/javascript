

function carregar () {
    var msg = window.document.querySelector('div#msg')
    var img = window.document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora > 0 && hora < 12) {
        img.src='imagens/manhã.png'
        window.document.body.style.background='#8FF2F2'
    } else if (hora >= 12 && hora < 18) {
        img.src='imagens/tarde.png'
        window.document.body.style.background='#F5AF12'
    } else {
        img.src='imagens/noite.png'
        window.document.body.style.background='#152840'
    }
}

