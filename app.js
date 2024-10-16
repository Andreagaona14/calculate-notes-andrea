const nameInput = document.getElementById('name');
const note1 = document.getElementById('note1');
const note2 = document.getElementById('note2');
const note3 = document.getElementById('note3');
const btnCalculate = document.getElementById('btn-calculate');
const btnPredict = document.getElementById('btn-predict');
const result = document.getElementById('result');

btnCalculate.addEventListener('click', calculateNote);

function calculateNote(event) {
    event.preventDefault();
    let userName = nameInput.value;
    let data1 = Number(note1.value);
    let data2 = Number(note2.value);
    let data3 = Number(note3.value);

    let result1 = ((data1 * 0.3) + (data2 * 0.3) + (data3 * 0.4)).toFixed(1);

    if (result1 < 3.5) {
        result.style.color = 'black';
        result.textContent = `${userName}, perdiste la materia. Nota final: ${result1}`;
    } else if (result1 >= 3.5 && result1 <=4.5) {
        result.style.color = 'orange';
        result.textContent = `${userName}, ganaste la materia. Nota final: ${result1}`;
    } else if (result1 > 4.5) {
        result.style.color = 'green';
        result.textContent = `${userName}, su  nota es sobresaliente. Nota final ${result1}`;
    }else {
        result.style.color = 'red';
        result.textContent = `${userName}, la nota ingresada es invÃ¡lida.`;
    }
}

btnPredict.addEventListener('click', noteFinal);

function noteFinal(event) {
    event.preventDefault();
    let userName = nameInput.value;
    let data1 = Number(note1.value);
    let data2 = Number(note2.value);
    let notaMinima = 3.5;

    // Calcular la nota necesaria para pasar
    let result2 = (notaMinima - (data1 * 0.3) - (data2 * 0.3)) / 0.4;

    if (result2 > 5.0) {
        result.style.color = 'red';
        result.textContent = `${userName}, te falta mucho para pasar la materia. Necesitas: ${result2.toFixed(2)}`;
    } else if (result2 < 0) {
        result.style.color = 'green';
        result.textContent = `${userName}, ya tienes suficiente para pasar la materia.`;
    } else {
        result.style.color = 'blue';
        result.textContent = `${userName}, necesitas sacar al menos: ${result2.toFixed(2)} para pasar la materia.`;
    }
}