/* 
Aqui van todas las funciones o variables relacionadas
con la manipulación de los datos de la aplicacion
*/

const getData = async () => {
  // Obytener los datos del archivo 'stays.json'
  const data = fetch('./stays.json')
    .then(response => response.json())
    .then( json => json)

  return data;
}

 const filtrarciudad=(arreglo,filtro)=>{
  let filtered=arreglo.filter(stay=>`${stay.city}`===filtro)
  return filtered
 }


const encontrarciudades= (data) => {
  let ciudades = data.map ((element) => `${element.city}`);
  ciudades = new Set(ciudades);
  console.log(ciudades);
  
  ciudades = ['All', ...ciudades]
  console.log(ciudades);
  return ciudades; 
}
 


export default {
  getData, 
  encontrarciudades,
  filtrarciudad

}