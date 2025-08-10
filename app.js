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
   // se obtiene el elemento de la lista en el HTML
   let lista = document.getElementById('listaAmigos');
   // se limpia el contenido de la lista
   lista.innerHTML = '';
   //se recorre el array de amigos
   for (let i = 0; i < amigos.length; i++) {
      //se crea un elemento li para cada amigo
      let li = document.createElement('li');
      // se asigna el nombre del amigo al contenido del elemento li
      li.textContent = amigos[i];
      // se agrega el elemento li y su contenido a la lista
      lista.appendChild(li);
   }
}
