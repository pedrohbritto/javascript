function contar(){
    var inicio = document.getElementById('inicio') 
    var fim = document.getElementById('fim')
    var passo =  document.getElementById('passo')
    var res =  document.getElementById('res')
    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML =' Impossível Contar!'
        window.alert('[ERRO] Faltam Dados!')
    }else{
        res.innerHTML =' Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p<=0){
            window.alert('Passo Inválido!')
        }
        if( i < f){
            for(var c = i; c<=f; c += p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }else{
            for( c = i; c >=f; c -= p ){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        
        res.innerHTML += `\u{1F3C1}`
    }
}