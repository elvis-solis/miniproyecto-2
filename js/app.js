
import data from './data.js'
import dom from './dom.js'

  
const datos = await data.getData()
const ciudades = data.encontrarciudades(datos);
dom.ciudadesdisponibles(ciudades,'#ubicasionendom')


datos.forEach(element => {
    const card=dom.newcard(element)
    contenedor.appendChild(card);
    
});

let filtradociudades = '';
let listado = document.getElementById('ubicasionendom');
listado = [...listado.children];

let ciudadelegida = -1;

listado.forEach((lugar, index) => {
  lugar.addEventListener('click', () => {
    if (lugar.classList.contains('ciudadelegida')) return;

    if (ciudadelegida >= 0) { 
      listado[ciudadelegida].classList.remove('ciudadelegida');
    }

    lugar.classList.add('ciudadelegida');
    console.log(listado);

    ciudadelegida = index;

    let filtro = lugar.children[1].textContent;

    filtradociudades = filtro === 'All' ? datos : data.filtrarciudad(datos, filtro);
    console.log(filtradociudades)
    dom.ciudadesdisponibles(filtradociudades);
    console.log(filtradociudades)
    mostrarcards(filtradociudades)
  });
});



const mostrarcards = (arr) => {
    let contenedor = dom.$('#contenedor');
    contenedor.innerHTML = '';

    arr.forEach(element => {
        const card = dom.newcard(element);
        contenedor.appendChild(card);
    });
}

let filtroCantidad =[];

let totaladultos=dom.$('#totalcero')
let contadortotal=0
let contadoradultos=0

const restaradultos=dom.$('#restadeadultos')
console.log(restaradultos)
restaradultos.addEventListener('click',()=>{
  contadortotal=contadortotal-1
  contadoradultos=contadoradultos-1
  console.log(contadoradultos)
  totaladultos.innerHTML=contadoradultos
  datos.forEach((card) => {
    if(card.maxGuests > contadortotal) {
      filtroCantidad.push(card)
    };
    mostrarcards(filtroCantidad)
  })
})

const sumadeadultos=dom.$('#sumadeadultos')
console.log(sumadeadultos)
sumadeadultos.addEventListener('click',()=>{
  contadortotal=contadortotal+1
  contadoradultos=contadoradultos+1
  console.log(contadoradultos)
  totaladultos.innerHTML=contadoradultos
  datos.forEach((card) => {
    if(card.maxGuests > contadortotal) {
      filtroCantidad.push(card)
    };
    mostrarcards(filtroCantidad)
  })
})
let totalmenores=dom.$('#total')
let contadorniños=0
const restademenores=dom.$('#restademenores')
console.log(restademenores)
restademenores.addEventListener('click',()=>{
  contadortotal=contadortotal-1
  contadorniños=contadorniños-1
  console.log(contadorniños)
  totalmenores.innerHTML=contadorniños
  datos.forEach((card) => {
    if(card.maxGuests > contadortotal) {
      filtroCantidad.push(card)
    };
    mostrarcards(filtroCantidad)
  })
})


const sumademenores=dom.$('#sumademenores')
console.log(sumademenores)
sumademenores.addEventListener('click',()=>{
  contadortotal=contadortotal+1
  contadorniños=contadorniños+1
  console.log(contadorniños)
  totalmenores.innerHTML=contadorniños
  datos.forEach((card) => {
    if(card.maxGuests > contadortotal) {
      filtroCantidad.push(card)
    };
    mostrarcards(filtroCantidad)
  })
})