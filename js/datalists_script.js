// yearMonth_FR
const yearMonth_FR = [
    "janvier 2025",
    "février 2025",
    "mars 2025",
    "avril 2025",
    "mai 2025",
    "juin 2025",
    "juillet 2025",
    "août 2025",
    "septembre 2025",
    "octobre 2025",
    "novembre 2025",
    "décembre"
];

// yearMonth_FR
const yearMonth_NL = [
    "januari 2025",
    "februari 2025",
    "maart 2025",
    "april 2025",
    "mei 2025",
    "juni 2025",
    "juli 2025",
    "augustus 2025",
    "september 2025",
    "oktober 2025",
    "november 2025",
    "december 2025"
];


// Función para poblar el datalist
function populateDatalist(listId, dataArray) {
    const datalist = document.getElementById(listId);

    // Asegúrate de que el datalist exista
    if (datalist) {
        // Itera sobre el array de datos
        dataArray.forEach(item => {
            // Crea un nuevo elemento <option>
            const option = document.createElement('option');

            // Asigna el valor del array al atributo 'value' de la opción
            option.value = item;

            // Agrega la opción al datalist
            datalist.appendChild(option);
        });
    } else {
        console.error(`Datalist con ID "${listId}" no encontrado.`);
    }
}

// Evento que se dispara cuando el DOM está completamente cargado
document.addEventListener('DOMContentLoaded', (event) => {
    // Llama a la función para poblar el datalist 
    // usando el array 'yearMonth_FR'
    populateDatalist('datalist_yearMonth_FR', yearMonth_FR);
});

document.addEventListener('DOMContentLoaded', (event) => {
    // Llama a la función para poblar el datalist 
    // usando el array 'yearMonth_FR'
    populateDatalist('datalist_yearMonth_NL', yearMonth_NL);
});