

//let url ='https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=e04f21b46550997b95978490d15fa69d&hash=0d46a73632e8bf79637a194aadda4ce4';

let url ='http://gateway.marvel.com/v1/public/creators?ts=1&apikey=e04f21b46550997b95978490d15fa69d&hash=0d46a73632e8bf79637a194aadda4ce4';
//fetch(url);
fetch(url)
.then(respuesta => respuesta.json())
.then((datos) =>{
//   console.log(datos,'RES.JSON');
console.log(datos.data.results);
console.log(datos.data.results[0]);
});