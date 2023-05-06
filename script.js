function carregar() {
var msg = window.document.getElementById('msg');
var img = window.document.getElementById('imagem');
var data = new Date();
var hora = data.getHours();
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
    // Bom Dia
    img.src = '/img/foto_manha.jpg'
    document.body.style.background = '#E78C22';
} else if (hora >= 12 && hora < 18) {
    // Boa Tarde!
    img.src = '/img/pexels-tarde.jpg'
    document.body.style.background = '#BA9B81';
} else {
    // Boa Noite!
    img.src = '/img/foto_noite.jpg'
    document.body.style.background = '#000';
}

}

