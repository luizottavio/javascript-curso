function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('img');
    var data = new Date();
    var horas = data.getHours();
    var min = data.getMinutes();
    msg.innerHTML = `Agora são ${horas}:${min} horas`

    if (horas >= 00 && horas < 12) {
        // Bom dia!
        document.body.style.background = '#026873'
        img.scr = 'manha.400px.png'
    } else if (horas >= 12 && horas <= 18) {
        //Boa tarde!
        document.body.style.background = '#595736'
        img.src = 'tarde.400px.png'
    } else {
        //Boa noite
        document.body.style.background = '#295073'
        img.src = 'noite.400px.png'
    }

}