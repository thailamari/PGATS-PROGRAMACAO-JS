function geradorDeTagsDeIdentificacao (nome){
    return nome.toUpperCase()
}

export{geradorDeTagsDeIdentificacao}

function verificarSePodeSerAdotado(idade, porte){
   if(idade === 1 && porte === 'M') {
    return true;
   }else{
    return false
   }
}

export{verificarSePodeSerAdotado}

function calcularConsumoDeRacao(nome, idade, pesoDog){

  const consumo = 300
  return pesoDog * consumo
  

}

export{calcularConsumoDeRacao}


function decidirTipoDeAtividadePorPorte(porte) {
    if (porte === 'pequeno'){
        return 'brincar dentro de casa'
    }else{
        return 'brincar fora de casa'
    }
}

export{decidirTipoDeAtividadePorPorte}

async function buscarDadoAsync() {
    return new Promise((resolve) =>{
        setTimeout(()=>{
            resolve('Pipoca')
        },100)
    })
}

export{buscarDadoAsync}