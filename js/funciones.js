const seniales = [100, 200, 50, 330, 250, 180, 190, 200, 150, 90, 165, 240, 20, 340]
let letras = "";

function getSeniales(){
    return seniales;
}

function mostrarLetras(){
    seniales.forEach(normalizarSenial)
    return letras;
}

function normalizarSenial(senial){
    if(senial<45 || senial>315){
        letras += 'E';
    }
    else if(senial<135 && senial>=45){
        letras += 'N';
    }
    else if(senial<225 && senial>=135){
        letras += 'O';
    }
    else if(senial<315 && senial>=225){
        letras += 'S';
    }
}

function contarCiclos() {
    let ciclos = 0;
    let secuencia = ['N', 'E', 'S', 'O'];
    let secuenciaInversa = ['N', 'O', 'S', 'E'];
    let indice = 0;
    let indiceInverso = 0;

    for (let i = 0; i < letras.length; i++) {
        if (letras[i] === secuencia[indice]) {
            indice++;
        } else if (letras[i] === secuenciaInversa[indiceInverso]) {
            indiceInverso++;
        } else {
            indice = 0;
            indiceInverso = 0;
        }

        if (indice === 4) {
            ciclos++;
            indice = 0;
        } else if (indiceInverso === 4) {
            ciclos++;
            indiceInverso = 0;
        }
    }

    return ciclos;
}

function calcularPorcentaje() {
    let conteo = {N: 0, E: 0, S: 0, O: 0};
    let total = letras.length;

    for (let letra of letras) {
        if (conteo.hasOwnProperty(letra)) {
            conteo[letra]++;
        }
    }

    let porcentajes = {};
    for (let cuadrante in conteo) {
        porcentajes[cuadrante] = (conteo[cuadrante] / total) * 100;
    }

    return porcentajes;
}

console.log(getSeniales());
console.log(mostrarLetras());
console.log(contarCiclos());
console.log(calcularPorcentaje());
