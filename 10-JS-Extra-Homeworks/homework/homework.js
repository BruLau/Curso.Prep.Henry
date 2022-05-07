// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let array = []; i=0
  for(var key in objeto)
  {
    array[i] = [key, objeto[key]];
    i++;
  }
  return array;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
obj={};
for(var i=0; i<string.length; i++)
{ 
    if(obj[string[i]]=== undefined)
    {
    obj[string[i]] = 1;
    }
    else
    {
      obj[string[i]] = obj[string[i]] + 1;
    }
}
return obj;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let may=[], array =[], array2=[], resultado="";
  array = s.split("");
  for(var i = 0; i<array.length ; i++)
  {
     if((array[i].toUpperCase())===array[i])
     {
        may.unshift(array[i]);
     }
     else
     {
        may.push(array[i]);
     }
  }
  
  for(var j = (may.length-1); j>=0 ; j--)
  {
    if(may[j] === (may[j].toUpperCase())) 
    {
      array2.push(may[j]);
    }
  }
  for(k=0 ; k<may.length; k++)
  {
    if(may[k] !== (may[k].toUpperCase())) 
    {
      array2.push(may[k]);
    }
  }
  resultado = array2.join("");
  return resultado;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let cadena="", cant =0, izq="", der="", val="" ;
  cadena= numero.toString();
  cant = cadena.length;
// si es par
  if(cant%2===0)
  {
    for(var i=0 ; i<=cant/2 ; i++)
    {
      if(cadena[i]===cadena[0])
      {
        izq= cadena[0];
      }
      else
      {
        izq = izq + cadena[i];
      }
    }
    for(var j=cant-1; j>cant/2; j--)
    {
      if(cadena[j]===cadena[cant])
      {
        der= cadena[cant-1];
      }
      else
      {
        der = der + cadena[j];
      }
    }
 
    if(izq===der)
    {
      return "Es capicua";
    }
    else
    {
      return "No es capicua";
    }
  }
  // si es impar
  
  else
  {
    let cad = Math.floor(cant/2);
    for(var i=0 ; i<cad ; i++)
    {
      if(cadena[i]===cadena[0])
      {
        izq= cadena[0];
      }
      else
      {
        izq = izq + cadena[i];
      }
    }
    for(var j=cant-1; j>cad; j--)
    {
      if(cadena[i]===cadena[cant-1])
      {
        der= cadena[cant-1];
      }
      else
      {
        der = der + cadena[j];
      }
    }

    if(izq===der)
    {
      return "Es capicua";
    }
    else
    {
      return "No es capicua";
    }
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let array = [] , cont = 0, modif= "";
  for(var i=0; i<cadena.length ; i++)
  {
    if(cadena[i]!=="a" && cadena[i]!=="c" && cadena[i]!=="b")
    {
      array[cont] = cadena[i];
      cont++;
    }
  }
  modif = array.join("")
  return modif;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  let array= [];
  for(var i=0; i<arr.length; i++)
  {
    if(i===0)
    {
      array[0]=arr[i];
    }
    else
    {
      while(arr.length!==array.length)
      {
          for(var j=0; j<arr.length; j++)  
            {
              let cond=0, cont=0;
              while(cond===0 && arr[j]!==array[cont])
                {
                  if(array[cont] === undefined || arr[j].length < array[cont].length )
                  {
                      array[cont]= arr[j];
                      cond=5;
                  }
                  else
                  {
                    cont++;
                  }
                }
            }
      }
    return array;
    }
  }
  
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

