```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let unico = 0
  for(let i=0; i<arrayDeNumeros.length; i++){
    if(arrayDeNumeros[i] === numeroEscolhido){
      unico = unico + 1
    }  
  }
  if(unico === 0){
        return 'Número não encontrado'
    }
   return `O número ${numeroEscolhido} aparece ${unico}x`
}
```

