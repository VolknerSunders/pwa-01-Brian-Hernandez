//FIC: funcion normal que regresa una promesa
//pero el resultado se obtiene mas lento.
function fcnSumarLento( numero ){
    /* var promesa = new Promise(function(resolve, reject){
    });
    return promesa; */
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve( numero + 1 );
            }, 800);
    });
}
//FIC: esta es la manera mas optimizada de definir
//una funcion pero de tipo arrow (flecha) que
//tambien regresa una promesa pero el resultado
//se obtiene mas rapido.
let fcnSumarRapido = (numero)=>{
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve( numero + 1 );
            }, 300);
    });
}

let arregloVarios = [fcnSumarLento(5), fcnSumarRapido(10), true, '¡Hola Mundo!'];
//FIC: llamado de las 2 funciones y sus respectivas promesas al mismo tiempo.
Promise.all(arregloVarios)
.then(respuestas =>{
    console.log('Respuestas:', respuestas);
})
.catch(error=>{
    console.log("Error en todas las promesas: ", error);
});