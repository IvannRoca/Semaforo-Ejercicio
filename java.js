//-------------1.-Ejercicio 5 : Funciones. Deberas realizar un semáforo utilizando JS.
//El semáforo deberá cambiar de luz de Verde a Amarilla y de Amarilla a Roja y luego de nuevo a Verde.
//Puedes mostrar la imagen del semáforo cambiando, hacer el cambio con console.log o con alert.
//Se debe respetar el orden de los colores:
//-De rojo pasa a Verde.
//-De amarillo puede pasar a Rojo.
//-De Verde pasa a Amarillo.

const redLight = document.getElementById('red');
const yellowLight = document.getElementById('yellow');
const greenLight = document.getElementById('green');

function changeLights(){

    if (redLight.style.backgroundColor === 'red') {
        redLight.style.backgroundColor = 'grey';
        greenLight.style.backgroundColor = 'green';
        console.log('Verde');
     } else if (greenLight.style.backgroundColor === 'green') {
        greenLight.style.backgroundColor = 'grey';
        yellowLight.style.backgroundColor = 'yellow';
        console.log('Amarillo');
    } else if (yellowLight.style.backgroundColor === 'yellow') {
        yellowLight.style.backgroundColor = 'grey';
        redLight.style.backgroundColor = 'red';
        console.log('Rojo');
    } else {
        redLight.style.backgroundColor = 'red';
        console.log('rojo');
    }  
}

redLight.style.backgroundColor = 'red';
console.log('rojo');

setInterval(changeLights, 1000);
