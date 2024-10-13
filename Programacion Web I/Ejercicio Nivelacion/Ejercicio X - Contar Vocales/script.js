/*CONTAR VOCALES. 
Desarrolla una función que cuente el número de vocales en una cadena de texto.  Muestra el resultado en un elemento HTML.  
*/
let texto = 'Hoy puede ser un gran dia';
let vocalesContador = {'a':0, 'e':0, 'i':0, 'o':0 , 'u':0};

function contarVocales (cadena) {
    let array = cadena.toLowerCase().split('');  
    for (let clave in vocalesContador) {//itera sobre el objeto
        for (let i = 0; i<array.length; i++){
            if(clave === array[i]){
                vocalesContador[clave]++
                }
        }
    }
    return vocalesContador;
}
resultado = contarVocales(texto);
document.getElementById('resultado').innerHTML = `En el texto hay ${vocalesContador['a']} letras a, 
${vocalesContador['e']} letras e,
${vocalesContador['i']} letras i,
${vocalesContador['o']} letras o,
${vocalesContador['u']} letras u,
`
