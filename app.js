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
      actualizarListaAmigos(); // llamar a la función para actualizar la lista
   }
   // se limpia el campo de texto
   document.getElementById('amigo').value = '';
}

// función para actualizar la lista de amigos
function actualizarListaAmigos() {
   let lista = document.getElementById('listaAmigos');
   lista.innerHTML = '';
   for (let i = 0; i < amigos.length; i++) {
      let li = document.createElement('li');
      li.textContent = amigos[i];
      lista.appendChild(li);
   }
}
