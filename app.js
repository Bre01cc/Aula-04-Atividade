const main = document.getElementById('main')
const button = document.getElementById('calcular')

function calcular() {
    const numero = document.getElementById('numero').value


    let i = 0;
    let limite = 10;
    while (i <= limite) {
        let p = document.createElement('p')
        let valor1 = Number(numero)
        let produto = valor1 * i
        p.textContent = valor1 +" X "+i+" = "+produto
        main.appendChild(p)
        // console.log(`${valor1} X ${i} = `+valor1 * i)
        i++;
    }
}
button.addEventListener('click', calcular)

