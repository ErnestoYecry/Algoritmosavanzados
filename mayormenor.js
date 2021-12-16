/*Write a program to sort a list of numbers in descending order (from highest to lowest).*/    /* Se acomodan del mayot al menor */


    var valores = [-23,15,7,1,-16];
    valor = valores.sort(function(x,y){
        return y-x
});

console.log(valor);  
