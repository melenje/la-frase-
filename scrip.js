function juegoPalabras(num, frase, caracter) {
  var num = document.getElementById("num").value;
  var frase = document.getElementById("frase").value;
  var caracter = document.getElementById("caracter").value;
  var salida = document.getElementById("salida");
  
    if(esPar(num)==true){
        salida.innerHTML= eliminarCaracter(frase, caracter);
        
    }else{
        salida.innerHTML= reverso(frase);
    }
}
    function esPar(num){
      return ((parseInt(num)%2)==0);
     }

    function eliminarCaracter(frase, caracter){
    var res="";
    for(i=0; i<frase.length; i++){
    if(frase [i]!=caracter){
      res+=frase[i];
    }
   }
   return res;
   }
    
   function reverso(frase){
      var reversa=frase.split("").reverse().join("");
      return reversa;
  }
    