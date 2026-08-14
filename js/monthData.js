/**
 * monthData.js
 * Handles the loading of monthly data for "Actions de propreté publique".
 */

// Mapping of month names to filenames (French)
const monthFilesFR = {
    "janvier 2025": "Bilan202501.js",
    "février 2025": "Bilan202502.js",
    "mars 2025": "Bilan202503.js",
    "avril 2025": "Bilan202504.js",
    "mai 2025": "Bilan202505.js",
    "juin 2025": "Bilan202506.js",
    "juillet 2025": "Bilan202507.js",
    "août 2025": "Bilan202508.js",
    "septembre 2025": "Bilan202509.js",
    "octobre 2025": "Bilan202510.js",
    "novembre 2025": "Bilan202511.js",
    "décembre 2025": "Bilan202512.js",
    "janvier 2026": "Bilan202601.js",
    "février 2026": "Bilan202602.js",
    "mars 2026": "Bilan202603.js",
    "avril 2026": "Bilan202604.js",
    "mai 2026": "Bilan202605.js",
    "juin 2026": "Bilan202606.js",
	"juillet 2026": "Bilan202607.js",
};

// Mapping of month names to filenames (Dutch)
const monthFilesNL = {
    "januari 2025": "Bilan202501.js",
    "februari 2025": "Bilan202502.js",
    "maart 2025": "Bilan202503.js",
    "april 2025": "Bilan202504.js",
    "mei 2025": "Bilan202505.js",
    "juni 2025": "Bilan202506.js",
    "juli 2025": "Bilan202507.js",
    "augustus 2025": "Bilan202508.js",
    "september 2025": "Bilan202509.js",
    "oktober 2025": "Bilan202510.js",
    "november 2025": "Bilan202511.js",
    "december 2025": "Bilan202512.js",
    "januari 2026": "Bilan202601.js",
    "februari 2026": "Bilan202602.js",
    "maart 2026": "Bilan202603.js",
    "april 2026": "Bilan202604.js",
    "mei 2026": "Bilan202605.js",
    "juni 2026": "Bilan202606.js",
    "juli 2026": "Bilan202607.js",
};

/**
 * Initializes the dropdown menu and event listeners.
 */
function initMonthSelection() {
    const lang = document.documentElement.lang;
    let monthFiles = monthFilesFR; // Default to French
    let selectId = 'yearMonth_FR_0';
    let placeholderText = "Choisir un mois...";

    if (lang === 'nl') {
        monthFiles = monthFilesNL;
        selectId = 'yearMonth_NL_0';
        placeholderText = "Kies een maand...";
    }

    const select = document.getElementById(selectId);

    if (!select) {
        console.error(`Month selection element (${selectId}) not found.`);
        return;
    }

    // Create default placeholder option
    const defaultOption = document.createElement('option');
    defaultOption.text = placeholderText;
    defaultOption.value = "";
    defaultOption.selected = true;
    defaultOption.disabled = true;
    select.appendChild(defaultOption);

    // Populate select options
    Object.keys(monthFiles).forEach(month => {
        const option = document.createElement('option');
        option.value = month;
        option.text = month; // Display text (Key already includes year)
        select.appendChild(option);
    });

    // Add event listener for change
    select.addEventListener('change', (e) => {
        const selectedMonth = e.target.value.toLowerCase();
        if (monthFiles[selectedMonth]) {
            loadMonthData(monthFiles[selectedMonth]);
        }
    });
}

/**
 * Loads the JS file for the specific month and updates the map layers.
 * @param {string} filename The filename to load (e.g., "Bilan202501.js").
 */
function loadMonthData(filename) {
    const scriptPath = `data/Data2025/${filename}`;

    // Create a new script element
    const script = document.createElement('script');
    script.src = scriptPath;

    script.onload = () => {
        console.log(`Loaded ${filename}`);
        updateMapLayers();

        // Update Title
        const lang = document.documentElement.lang;
        const monthFiles = (lang === 'nl') ? monthFilesNL : monthFilesFR;

        const monthName = Object.keys(monthFiles).find(key => monthFiles[key] === filename);
        if (monthName && typeof title !== 'undefined' && typeof title.update === 'function') {
            const capitalizedMonth = monthName.charAt(0).toUpperCase() + monthName.slice(1);
            title.update(capitalizedMonth);
        }
    };

    script.onerror = () => {
        console.error(`Failed to load script: ${scriptPath}`);
        const lang = document.documentElement.lang;
        const errorMsg = (lang === 'nl')
            ? `Fout bij het laden van gegevens voor deze maand.`
            : `Erreur lors du chargement des données pour ce mois.`;
        alert(errorMsg);
    };

    // Append to body to execute
    document.body.appendChild(script);
}

/**
 * Updates the Leaflet layers with the new data from json_SPEVBilan2025.
 * Assumes json_SPEVBilan2025 is updated by the new script and
 * layer_Intervention_12 and layer_Pointsdintervention_14 are global variables.
 */
/**
 * Updates the Leaflet layers with the new data from json_SPEVBilan2025.
 * Assumes json_SPEVBilan2025 is updated by the new script and
 * layer variables are global.
 */
function updateMapLayers() {
    if (typeof json_SPEVBilan2025 === 'undefined') {
        console.error("json_SPEVBilan2025 is undefined.");
        return;
    }

    // Helper function to update a layer if it exists
    function updateLayer(layer) {
        if (layer) {
            layer.clearLayers();
            layer.addData(json_SPEVBilan2025);
        }
    }

    // Update Intervention Layer
    // FR: layer_Intervention_12, NL: layer_Interventies_12
    if (typeof layer_Intervention_12 !== 'undefined') updateLayer(layer_Intervention_12);
    if (typeof layer_Interventies_12 !== 'undefined') updateLayer(layer_Interventies_12);

    // Update Points Layer
    // FR: layer_Pointsdintervention_14, NL: layer_Interventiepunten_14
    if (typeof layer_Pointsdintervention_14 !== 'undefined') {
        updateLayer(layer_Pointsdintervention_14);
        if (typeof resetLabels === 'function') resetLabels([layer_Pointsdintervention_14]);
    }
    if (typeof layer_Interventiepunten_14 !== 'undefined') {
        updateLayer(layer_Interventiepunten_14);
        if (typeof resetLabels === 'function') resetLabels([layer_Interventiepunten_14]);
    }

    // Update Taxe Layer (Shared name)
    if (typeof layer_Taxe_9 !== 'undefined') updateLayer(layer_Taxe_9);

    // Update Mediation Layer
    // FR: layer_Mediation_11, NL: layer_Bemiddeling_11
    if (typeof layer_Mediation_11 !== 'undefined') updateLayer(layer_Mediation_11);
    if (typeof layer_Bemiddeling_11 !== 'undefined') updateLayer(layer_Bemiddeling_11);

    // Update Balayage / Scan Layer
    // FR: layer_MoyenneBalayage_10, NL: layer_GemiddeldeScan_10
    if (typeof layer_MoyenneBalayage_10 !== 'undefined') updateLayer(layer_MoyenneBalayage_10);
    if (typeof layer_GemiddeldeScan_10 !== 'undefined') updateLayer(layer_GemiddeldeScan_10);

    // Update Decheterie Mobile / Mobiel Recycling Layer
    // FR: layer_DecheterieMobile_8, NL: layer_MobielRecycling_8
    if (typeof layer_DecheterieMobile_8 !== 'undefined') updateLayer(layer_DecheterieMobile_8);
    if (typeof layer_MobielRecycling_8 !== 'undefined') updateLayer(layer_MobielRecycling_8);
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initMonthSelection);
