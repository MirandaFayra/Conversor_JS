// Escreva uma função com o nome coinConverter que converte o valor de dólares para reais, pesos mexicanos e pesos chilenos.

// Use as seguintes taxas de câmbio:

// reais = dólares * 3.25
// pesosMexicanos = dólares * 18
// pesosChilenos = dólares * 660

module.exports = function coinConvert(usDollars) {
    var arr = [];
    var reais= usDollars * 3.25;
    var mexicanPesos = usDollars* 18;
    var chileanPesos= usDollars* 660;
  
    // ADICIONAR O VALOR EM REAIS
    arr.push(reais);
  
//    ADICIONAR VALOR EM PESOS MEXICANOS
    arr.push(mexicanPesos);
  
//    ADICIONAR O VALOR EM PESOS CHILENOS
    arr.push(chileanPesos);
    
    
  
    return arr;
  };
  