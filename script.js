function carregar(){
var msg = window.document.getElementById ('msg');
var img = window.document.getElementById ('imagem');
var data = new Date();
var horas = data.getHours();
msg.innerHTML = 'Agora são ' + horas +' horas' ;
if (horas >= 0 && horas <= 12){
    //BOM DIA !
    img.src = 'MANHÃ.png';
    document.body.style.background = '#ffdb58'
} else if(horas >=12 && horas <= 18){
    //BOA TARDE !
    img.src = 'TARDE.png';
    document.body.style.background = '#ffa500'
    } else {
    //BOA NOITE!
    img.src = 'NOITE.png';
    document.body.style.background = '#2c2c2c'
}
}