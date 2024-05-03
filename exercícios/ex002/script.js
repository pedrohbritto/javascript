function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('ano')
    var res = window.document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade>=0 && idade < 10){
                //Criança
                img.setAttribute('src','bebe-h.jpg')
            }else if(idade >=10 && idade < 21){
                //Jovem
                img.setAttribute('src','jovem-h.jpg')
            }else if(idade >= 21 && idade < 50){
                //Adulto
                img.setAttribute('src','adulto-h.jpg')
            }else{
                //Idoso
                img.setAttribute('src','idoso-h.jpg')
            }
        }else{
            genero = 'Mulher'
            if(idade>=0 && idade < 10){
                //Criança
                img.setAttribute('src','bebe-m.jpg')
            }else if(idade >=10 && idade < 21){
                //Jovem
                img.setAttribute('src','jovem-m.jpg')
            }else if(idade >= 21 && idade < 50){
                //Adulto
                img.setAttribute('src','adulto-m.jpg')
            }else{
                //Idoso
                img.setAttribute('src','idosa-m.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}