//FIC: enviar a la consola "Hola Mundo".
console.log('¡Hola Mundo!');
//FIC: funcion que recibe un nuemero y le suma uno.
//FIC: funcion que recibe un nuemero y le suma uno.
function fcnSumarUno( numero ){
    var promesa = new Promise(function(resolve, reject){
        if (numero >= 7 ){
            reject('El numero ya es muy alto');
        }
        setTimeout(function(){
            resolve( numero + 1 );
            }, 800);
    });
  return promesa;
}

//FIC: llamado de la funcion y promesa
//de forma recursiva y optimizada y con
//validacion de error.
fcnSumarUno(5)
    .then( fcnSumarUno)
    .then( fcnSumarUno)
    .then( nuevoNumero=>{
    console.log("Resultado:",nuevoNumero);
})
.catch(error =>{
    console.log('Error en la Promesa', error);
});