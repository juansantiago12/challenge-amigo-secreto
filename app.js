// se crea un array para almacenar los nombres de los amigos
let amigos = [];

//se crea la funcion para agregar amigos
function agregarAmigo() {
   // se obtiene el valor del campo de texto
   let nombre = document.getElementById('amigo').value;
   // se valida que el nombre no esté vacío
   if (!nombre.trim()) {
      alert('Por favor ingresa un nombre válido.');
   } else {
      // se agrega el nombre al array de amigos
      amigos.push(nombre);
      console.log(amigos);
   }
   // se limpia el campo de texto
   document.getElementById('amigo').value = '';
}
