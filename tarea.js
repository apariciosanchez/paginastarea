/*let contador = 0;
contador = contador +1;
contador = contador +1;

console.log(contador);*/

/*const contador =1;

console.log(contador);

if(true){
  const contador =5;
  console.log(contador);
}
*/

/*const persona = {
  nombre:"oscar",
  apellido:"sanchez"
}

 persona.nombre = "mauricio";

console.log(persona.nombre);*/

/*odjetos literales opcionales chaining operator  

const frutas = ["uvas", "mangos", "banano"];

console.log(frutas[1]); */

/*odjetos literales ,no indexados*/
/*const animal ={
  color: "verde",
  nombre: "lolita",
  cantando: true 
}
console.log("mi lorita es de color " + animal.color);
console.log(" y su nombre es " + animal.nombre);
console.log(animal["cantando"]);*/

/*const tareas = {
  "2024-1028": {
    title: "tarea #01"
  }
}
console.log(tareas["2024-1028"].title);*/

/*const animal ={
  color: "verde",
  nombre: "lolita",
  cantando: true,
  favorito: {
    dia:{
      ok:true,
    },
    noche:{
      ok:false
    }
  }
  
}
console.log(animal.favorito.dia.ok)
console.log(animal.favorito?.luna?.ok);*/

/* destructuring */

/*const animal ={
  color: "verde",
  nombre: "lolita",
  cantando: true,
  favorito: {
    dia:{
      ok:true,
    },
    noche:{
      ok:false
    }
  }
  
}*/
/*guardar el valor dela propiedad color en una constante */

/*const color = animal.color;
const nombre = animal.nombre;

console.log("color:"+ color +  ",animal:" + nombre); */

/*const animal ={
  color: "gris rallado",
  nombre: "gato",
  corriendo: true,
  
}
/* destructuring , odjetos laterales */
 /*const {color,nombre,corriendo} = animal;
  
   console.log("el es my," + nombre + ", y es de color:" + color);*/
   
   /* destructuring arrays indexados */

   const frutas = ["manzana", "peras", "sandia"];

   /* destructuring */
  
  const [manzana, peras, sandia] = frutas;
  console.log("ami me gusta mucho la," + sandia);
  
