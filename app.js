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

function sortearAmigo() {
   // se verifica que haya al menos 2 amigos para sortear
   if (amigos.length < 2) {
      alert('Agrega al menos 2 amigos para sortear.');
      return;
   }
   // se genera un índice aleatorio entre 0 y la longitud del array de amigos menos 1
   let indiceAleatorio = Math.floor(Math.random() * amigos.length);
   console.log(amigos[indiceAleatorio]);
   // se muestra el nombre del amigo sorteado dentro de un elemento li
   nombreSorteado = document.getElementById('resultado');
   nombreSorteado.innerHTML = `<li>${amigos[indiceAleatorio]}</li>`;
}
