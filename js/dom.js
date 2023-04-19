/* 
Aqui van todas las funciones o variables relacionadas 
con la manipulación del DOM en la aplicación
*/
const $=(selec)=>document.querySelector(selec);

const newcard= (obj)=>{
const section =document.createElement('section')

section.innerHTML=`
<img src=${obj.photo} class="rounded-4 w-100" alt="${obj.title}">
<p>
  <span  class="rounded-pill border border-black ps-2 pe-2 super-host">SUPER HOST</span>
  <span class="caracteristicas">Entire apartment . 2 beds</span>
  <span class="material-symbols-outlined estrella">
    star
    </span>
  <span class="numeros">4.40</span>
</p>
<p class="fw-bold estilo"> Stylist apartment in center of the city
</p>`

section.className= "col "

return section;
}




//Función para mostrar las locaciones Ciudad, País disponibles//
const ciudadesdisponibles = (ciudades, ubicasionendom) => {

  const listapadre = $('#ubicasionendom');
  console.log(listapadre)

  ciudades.forEach(element => {
    //console.log(ciudades)
      const li = document.createElement('li');
      li.innerHTML = `<span class="material-symbols-outlined fw-bolder">
      location_on
      </span><span class="my-1">${element}<span>`;
      li.className += `text-start list-group-item ms-3  ps-1  my-1 `;
      listapadre.appendChild(li);
      return li;
  });

}

export default { 
  newcard, $, ciudadesdisponibles
  }