
let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')
let num3 = document.getElementById('num3')
let num4 = document.getElementById('num4')
let num5 = document.getElementById('num5')
let num6 = document.getElementById('num6')
let num7 = document.getElementById('num7')
let num8 = document.getElementById('num8')
let num9 = document.getElementById('num9')
let num10 = document.getElementById('num10')
let botonOrdenar = document.getElementById('ordenarNum')
//let botonLimpiar = document.getElementById('limpiar')

function resetForm() {
    document.getElementById('formulario').reset()
}

num1.addEventListener('keypress', (event) => {
    event.preventDefault()
    let codigoKey = event.keyCode
    let valorKey = String.fromCharCode(codigoKey)
    let valor = parseInt(valorKey)
    if (valor) {
        num1.value += valor
    }
})
num2.addEventListener('keypress', (event) => {
    event.preventDefault()
    let codigoKey = event.keyCode
    let valorKey = String.fromCharCode(codigoKey)
    let valor = parseInt(valorKey)
    if (valor) {
        num2.value += valor
    }
})
num3.addEventListener('keypress', (event) => {
    event.preventDefault()
    let codigoKey = event.keyCode
    let valorKey = String.fromCharCode(codigoKey)
    let valor = parseInt(valorKey)
    if (valor) {
        num3.value += valor
    }
})
num4.addEventListener('keypress', (event) => {
    event.preventDefault()
    let codigoKey = event.keyCode
    let valorKey = String.fromCharCode(codigoKey)
    let valor = parseInt(valorKey)
    if (valor) {
        num4.value += valor
    }
})
num5.addEventListener('keypress', (event) => {
    event.preventDefault()
    let codigoKey = event.keyCode
    let valorKey = String.fromCharCode(codigoKey)
    let valor = parseInt(valorKey)
    if (valor) {
        num5.value += valor
    }
})
num6.addEventListener('keypress', (event) => {
    event.preventDefault()
    let codigoKey = event.keyCode
    let valorKey = String.fromCharCode(codigoKey)
    let valor = parseInt(valorKey)
    if (valor) {
        num6.value += valor
    }
})
num7.addEventListener('keypress', (event) => {
    event.preventDefault()
    let codigoKey = event.keyCode
    let valorKey = String.fromCharCode(codigoKey)
    let valor = parseInt(valorKey)
    if (valor) {
        num7.value += valor
    }
})
num8.addEventListener('keypress', (event) => {
    event.preventDefault()
    let codigoKey = event.keyCode
    let valorKey = String.fromCharCode(codigoKey)
    let valor = parseInt(valorKey)
    if (valor) {
        num8.value += valor
    }
})
num9.addEventListener('keypress', (event) => {
    event.preventDefault()
    let codigoKey = event.keyCode
    let valorKey = String.fromCharCode(codigoKey)
    let valor = parseInt(valorKey)
    if (valor) {
        num9.value += valor
    }
})
num10.addEventListener('keypress', (event) => {
    event.preventDefault()
    let codigoKey = event.keyCode
    let valorKey = String.fromCharCode(codigoKey)
    let valor = parseInt(valorKey)
    if (valor) {
        num10.value += valor
    }
})


function ordenar(datos) {
    for (let i = 1; i < datos.length; i++){
        let j = i - 1;
        let auxiliar = datos[i];
        while (j >= 0 && datos[j] > auxiliar) {
            datos[j + 1] = datos[j];
            --j;
        }
        datos[j + 1] = auxiliar;
    }
    return datos;
}

botonOrdenar.addEventListener('click',mostrarDatos)

function mostrarDatos() {
    let valores=[]
    for (let i = 0; i < 10; i++) {
        inputN = 'num'+String(i+1)
        valores[i]=parseInt(document.getElementById(inputN).value)
    }

    let resultado = ordenar(valores)

    num1.value = resultado[0]
    num2.value = resultado[1]
    num3.value = resultado[2]
    num4.value = resultado[3]
    num5.value = resultado[4]
    num6.value = resultado[5]
    num7.value = resultado[6]
    num8.value = resultado[7]
    //num9.value = resultado[8]
    num10.value = resultado[9]

    console.log(valores)
}
