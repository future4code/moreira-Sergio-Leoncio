 ```
 function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 // Escreva seu código aqui
  let salarioInicial
  let comissao
  let salarioFixo = 2000
  comissao = qtdeCarrosVendidos * 100 
  salarioInicial = valorTotalVendas * 0.05 + comissao + salarioFixo
  return salarioInicial
}
```
