function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')

    var data = new Date()
    var hora = data.toLocaleTimeString()
    // faz o tempo atualizar automático
    const tempo = setInterval(carregar, 1000)
    // var hora = data.getHours()

    msg.innerHTML =`Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = './assets/manhã.jpg'
        document.body.style.background = '#FBA77A'
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = './assets/tarde.jpg'
        document.body.style.background = '#B49581'
    } else {
        // BOA NOITE!
        img.src = './assets/noite.jpg'
        document.body.style.background = '#0C1F2E'
    }
        

}