
function carregar(){
  var msg  = window.document.getElementById('msg')
  var img  = window.document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours() 

  msg.innerHTML = `Agora são ${hora} horas`

  if( (hora >= 0) && (hora < 12) ){
    //BOM DIA
    img.src = "assets/manha.jpg"
    document.body.style.background  = '#515B79'
  }
  else if ( (hora >= 12) && (hora < 18) ){
    //BOA TARDE
    img.src = "assets/tarde.jpg"
    document.body.style.background  = '#87CEDA'
  }
  else{
    //BOA NOITE
    img.src = "assets/noite.jpg"    
    document.body.style.background  = '#07254B'
  }


}