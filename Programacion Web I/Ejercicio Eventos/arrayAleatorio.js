

export function arrayAleatorio (longitud){
    let array =[];
    for (let i=0; i<longitud; i++){
        let numeroAleatorio = Math.floor(Math.random() * 100);
        array.push(numeroAleatorio);
   } 
   return array;
}
